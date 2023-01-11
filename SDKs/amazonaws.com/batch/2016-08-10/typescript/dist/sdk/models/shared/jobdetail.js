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
exports.JobDetail = void 0;
var utils_1 = require("../../../internal/utils");
var arraypropertiesdetail_1 = require("./arraypropertiesdetail");
var attemptdetail_1 = require("./attemptdetail");
var containerdetail_1 = require("./containerdetail");
var jobdependency_1 = require("./jobdependency");
var nodedetails_1 = require("./nodedetails");
var nodeproperties_1 = require("./nodeproperties");
var retrystrategy_1 = require("./retrystrategy");
var jobstatusenum_1 = require("./jobstatusenum");
var jobtimeout_1 = require("./jobtimeout");
// JobDetail
/**
 * An object representing an Batch job.
**/
var JobDetail = /** @class */ (function (_super) {
    __extends(JobDetail, _super);
    function JobDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arrayProperties" }),
        __metadata("design:type", arraypropertiesdetail_1.ArrayPropertiesDetail)
    ], JobDetail.prototype, "arrayProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attempts", elemType: attemptdetail_1.AttemptDetail }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "attempts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=container" }),
        __metadata("design:type", containerdetail_1.ContainerDetail)
    ], JobDetail.prototype, "container", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dependsOn", elemType: jobdependency_1.JobDependency }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "dependsOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobArn" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobDefinition" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobDefinition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobName" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobQueue" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "jobQueue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeDetails" }),
        __metadata("design:type", nodedetails_1.NodeDetails)
    ], JobDetail.prototype, "nodeDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeProperties" }),
        __metadata("design:type", nodeproperties_1.NodeProperties)
    ], JobDetail.prototype, "nodeProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters" }),
        __metadata("design:type", Object)
    ], JobDetail.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platformCapabilities" }),
        __metadata("design:type", Array)
    ], JobDetail.prototype, "platformCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=propagateTags" }),
        __metadata("design:type", Boolean)
    ], JobDetail.prototype, "propagateTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retryStrategy" }),
        __metadata("design:type", retrystrategy_1.RetryStrategy)
    ], JobDetail.prototype, "retryStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startedAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "startedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusReason" }),
        __metadata("design:type", String)
    ], JobDetail.prototype, "statusReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stoppedAt" }),
        __metadata("design:type", Number)
    ], JobDetail.prototype, "stoppedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], JobDetail.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout" }),
        __metadata("design:type", jobtimeout_1.JobTimeout)
    ], JobDetail.prototype, "timeout", void 0);
    return JobDetail;
}(utils_1.SpeakeasyBase));
exports.JobDetail = JobDetail;
