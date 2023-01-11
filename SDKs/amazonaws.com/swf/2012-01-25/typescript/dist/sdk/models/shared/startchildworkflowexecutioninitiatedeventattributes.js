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
exports.StartChildWorkflowExecutionInitiatedEventAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var childpolicyenum_1 = require("./childpolicyenum");
var tasklist_1 = require("./tasklist");
var workflowtype_1 = require("./workflowtype");
// StartChildWorkflowExecutionInitiatedEventAttributes
/**
 * Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
**/
var StartChildWorkflowExecutionInitiatedEventAttributes = /** @class */ (function (_super) {
    __extends(StartChildWorkflowExecutionInitiatedEventAttributes, _super);
    function StartChildWorkflowExecutionInitiatedEventAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=childPolicy" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "childPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=control" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "control", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=decisionTaskCompletedEventId" }),
        __metadata("design:type", Number)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "decisionTaskCompletedEventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "executionStartToCloseTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=input" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "input", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lambdaRole" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "lambdaRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tagList" }),
        __metadata("design:type", Array)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskList" }),
        __metadata("design:type", tasklist_1.TaskList)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskPriority" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskPriority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskStartToCloseTimeout" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "taskStartToCloseTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowId" }),
        __metadata("design:type", String)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "workflowId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowType" }),
        __metadata("design:type", workflowtype_1.WorkflowType)
    ], StartChildWorkflowExecutionInitiatedEventAttributes.prototype, "workflowType", void 0);
    return StartChildWorkflowExecutionInitiatedEventAttributes;
}(utils_1.SpeakeasyBase));
exports.StartChildWorkflowExecutionInitiatedEventAttributes = StartChildWorkflowExecutionInitiatedEventAttributes;
