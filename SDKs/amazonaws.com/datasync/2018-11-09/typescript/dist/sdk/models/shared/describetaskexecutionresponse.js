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
exports.DescribeTaskExecutionResponse = void 0;
var utils_1 = require("../../../internal/utils");
var filterrule_1 = require("./filterrule");
var options_1 = require("./options");
var taskexecutionresultdetail_1 = require("./taskexecutionresultdetail");
var taskexecutionstatusenum_1 = require("./taskexecutionstatusenum");
// DescribeTaskExecutionResponse
/**
 * DescribeTaskExecutionResponse
**/
var DescribeTaskExecutionResponse = /** @class */ (function (_super) {
    __extends(DescribeTaskExecutionResponse, _super);
    function DescribeTaskExecutionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BytesTransferred" }),
        __metadata("design:type", Number)
    ], DescribeTaskExecutionResponse.prototype, "bytesTransferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BytesWritten" }),
        __metadata("design:type", Number)
    ], DescribeTaskExecutionResponse.prototype, "bytesWritten", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EstimatedBytesToTransfer" }),
        __metadata("design:type", Number)
    ], DescribeTaskExecutionResponse.prototype, "estimatedBytesToTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EstimatedFilesToTransfer" }),
        __metadata("design:type", Number)
    ], DescribeTaskExecutionResponse.prototype, "estimatedFilesToTransfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Excludes", elemType: filterrule_1.FilterRule }),
        __metadata("design:type", Array)
    ], DescribeTaskExecutionResponse.prototype, "excludes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FilesTransferred" }),
        __metadata("design:type", Number)
    ], DescribeTaskExecutionResponse.prototype, "filesTransferred", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Includes", elemType: filterrule_1.FilterRule }),
        __metadata("design:type", Array)
    ], DescribeTaskExecutionResponse.prototype, "includes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Options" }),
        __metadata("design:type", options_1.Options)
    ], DescribeTaskExecutionResponse.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Result" }),
        __metadata("design:type", taskexecutionresultdetail_1.TaskExecutionResultDetail)
    ], DescribeTaskExecutionResponse.prototype, "result", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], DescribeTaskExecutionResponse.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DescribeTaskExecutionResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TaskExecutionArn" }),
        __metadata("design:type", String)
    ], DescribeTaskExecutionResponse.prototype, "taskExecutionArn", void 0);
    return DescribeTaskExecutionResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeTaskExecutionResponse = DescribeTaskExecutionResponse;
