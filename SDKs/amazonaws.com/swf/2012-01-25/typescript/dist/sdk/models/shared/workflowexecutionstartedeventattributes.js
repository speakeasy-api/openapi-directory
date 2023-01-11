"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowExecutionStartedEventAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var childpolicyenum_1 = require("./childpolicyenum");
var workflowexecution_1 = require("./workflowexecution");
var tasklist_1 = require("./tasklist");
var workflowtype_1 = require("./workflowtype");
// WorkflowExecutionStartedEventAttributes
/**
 * Provides details of <code>WorkflowExecutionStarted</code> event.
**/
var WorkflowExecutionStartedEventAttributes = /** @class */ (function (_super) {
    __extends(WorkflowExecutionStartedEventAttributes, _super);
    function WorkflowExecutionStartedEventAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childPolicy" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "childPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuedExecutionRunId" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "continuedExecutionRunId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "executionStartToCloseTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "input", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaRole" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "lambdaRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentInitiatedEventId" }),
        __metadata("design:type", Number)
    ], WorkflowExecutionStartedEventAttributes.prototype, "parentInitiatedEventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentWorkflowExecution" }),
        __metadata("design:type", workflowexecution_1.WorkflowExecution)
    ], WorkflowExecutionStartedEventAttributes.prototype, "parentWorkflowExecution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tagList" }),
        __metadata("design:type", Array)
    ], WorkflowExecutionStartedEventAttributes.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskList" }),
        __metadata("design:type", tasklist_1.TaskList)
    ], WorkflowExecutionStartedEventAttributes.prototype, "taskList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskPriority" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "taskPriority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], WorkflowExecutionStartedEventAttributes.prototype, "taskStartToCloseTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowType" }),
        __metadata("design:type", workflowtype_1.WorkflowType)
    ], WorkflowExecutionStartedEventAttributes.prototype, "workflowType", void 0);
    return WorkflowExecutionStartedEventAttributes;
}(utils_1.SpeakeasyBase));
exports.WorkflowExecutionStartedEventAttributes = WorkflowExecutionStartedEventAttributes;
