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
exports.DecisionTask = void 0;
var utils_1 = require("../../../internal/utils");
var historyevent_1 = require("./historyevent");
var workflowexecution_1 = require("./workflowexecution");
var workflowtype_1 = require("./workflowtype");
// DecisionTask
/**
 * A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions.
**/
var DecisionTask = /** @class */ (function (_super) {
    __extends(DecisionTask, _super);
    function DecisionTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: historyevent_1.HistoryEvent }),
        __metadata("design:type", Array)
    ], DecisionTask.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], DecisionTask.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previousStartedEventId" }),
        __metadata("design:type", Number)
    ], DecisionTask.prototype, "previousStartedEventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startedEventId" }),
        __metadata("design:type", Number)
    ], DecisionTask.prototype, "startedEventId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskToken" }),
        __metadata("design:type", String)
    ], DecisionTask.prototype, "taskToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowExecution" }),
        __metadata("design:type", workflowexecution_1.WorkflowExecution)
    ], DecisionTask.prototype, "workflowExecution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workflowType" }),
        __metadata("design:type", workflowtype_1.WorkflowType)
    ], DecisionTask.prototype, "workflowType", void 0);
    return DecisionTask;
}(utils_1.SpeakeasyBase));
exports.DecisionTask = DecisionTask;
