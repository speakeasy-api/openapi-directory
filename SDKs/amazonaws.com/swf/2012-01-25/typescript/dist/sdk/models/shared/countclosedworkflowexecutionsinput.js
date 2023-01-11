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
exports.CountClosedWorkflowExecutionsInput = void 0;
var utils_1 = require("../../../internal/utils");
var closestatusfilter_1 = require("./closestatusfilter");
var executiontimefilter_1 = require("./executiontimefilter");
var workflowexecutionfilter_1 = require("./workflowexecutionfilter");
var tagfilter_1 = require("./tagfilter");
var workflowtypefilter_1 = require("./workflowtypefilter");
var CountClosedWorkflowExecutionsInput = /** @class */ (function (_super) {
    __extends(CountClosedWorkflowExecutionsInput, _super);
    function CountClosedWorkflowExecutionsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closeStatusFilter" }),
        __metadata("design:type", closestatusfilter_1.CloseStatusFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "closeStatusFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=closeTimeFilter" }),
        __metadata("design:type", executiontimefilter_1.ExecutionTimeFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "closeTimeFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], CountClosedWorkflowExecutionsInput.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionFilter" }),
        __metadata("design:type", workflowexecutionfilter_1.WorkflowExecutionFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "executionFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTimeFilter" }),
        __metadata("design:type", executiontimefilter_1.ExecutionTimeFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "startTimeFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tagFilter" }),
        __metadata("design:type", tagfilter_1.TagFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "tagFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=typeFilter" }),
        __metadata("design:type", workflowtypefilter_1.WorkflowTypeFilter)
    ], CountClosedWorkflowExecutionsInput.prototype, "typeFilter", void 0);
    return CountClosedWorkflowExecutionsInput;
}(utils_1.SpeakeasyBase));
exports.CountClosedWorkflowExecutionsInput = CountClosedWorkflowExecutionsInput;
