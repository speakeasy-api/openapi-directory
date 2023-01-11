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
exports.DescribeSimulationJobBatchResponse = void 0;
var utils_1 = require("../../../internal/utils");
var batchpolicy_1 = require("./batchpolicy");
var simulationjobsummary_1 = require("./simulationjobsummary");
var failedcreatesimulationjobrequest_1 = require("./failedcreatesimulationjobrequest");
var simulationjobbatcherrorcodeenum_1 = require("./simulationjobbatcherrorcodeenum");
var simulationjobrequest_1 = require("./simulationjobrequest");
var simulationjobbatchstatusenum_1 = require("./simulationjobbatchstatusenum");
var DescribeSimulationJobBatchResponse = /** @class */ (function (_super) {
    __extends(DescribeSimulationJobBatchResponse, _super);
    function DescribeSimulationJobBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobBatchResponse.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batchPolicy" }),
        __metadata("design:type", batchpolicy_1.BatchPolicy)
    ], DescribeSimulationJobBatchResponse.prototype, "batchPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobBatchResponse.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], DescribeSimulationJobBatchResponse.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdRequests", elemType: simulationjobsummary_1.SimulationJobSummary }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobBatchResponse.prototype, "createdRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failedRequests", elemType: failedcreatesimulationjobrequest_1.FailedCreateSimulationJobRequest }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobBatchResponse.prototype, "failedRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureCode" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobBatchResponse.prototype, "failureCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobBatchResponse.prototype, "failureReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], DescribeSimulationJobBatchResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pendingRequests", elemType: simulationjobrequest_1.SimulationJobRequest }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobBatchResponse.prototype, "pendingRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobBatchResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], DescribeSimulationJobBatchResponse.prototype, "tags", void 0);
    return DescribeSimulationJobBatchResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeSimulationJobBatchResponse = DescribeSimulationJobBatchResponse;
