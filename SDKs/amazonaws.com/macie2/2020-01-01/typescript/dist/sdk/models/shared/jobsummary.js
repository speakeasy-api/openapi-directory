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
exports.JobSummary = void 0;
var utils_1 = require("../../../internal/utils");
var s3bucketcriteriaforjob_1 = require("./s3bucketcriteriaforjob");
var s3bucketdefinitionforjob_1 = require("./s3bucketdefinitionforjob");
var jobstatusenum_1 = require("./jobstatusenum");
var jobtypeenum_1 = require("./jobtypeenum");
var lastrunerrorstatus_1 = require("./lastrunerrorstatus");
var userpauseddetails_1 = require("./userpauseddetails");
// JobSummary
/**
 * Provides information about a classification job, including the current status of the job.
**/
var JobSummary = /** @class */ (function (_super) {
    __extends(JobSummary, _super);
    function JobSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketCriteria" }),
        __metadata("design:type", s3bucketcriteriaforjob_1.S3BucketCriteriaForJob)
    ], JobSummary.prototype, "bucketCriteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketDefinitions", elemType: s3bucketdefinitionforjob_1.S3BucketDefinitionForJob }),
        __metadata("design:type", Array)
    ], JobSummary.prototype, "bucketDefinitions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], JobSummary.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobId" }),
        __metadata("design:type", String)
    ], JobSummary.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobStatus" }),
        __metadata("design:type", String)
    ], JobSummary.prototype, "jobStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobType" }),
        __metadata("design:type", String)
    ], JobSummary.prototype, "jobType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastRunErrorStatus" }),
        __metadata("design:type", lastrunerrorstatus_1.LastRunErrorStatus)
    ], JobSummary.prototype, "lastRunErrorStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobSummary.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userPausedDetails" }),
        __metadata("design:type", userpauseddetails_1.UserPausedDetails)
    ], JobSummary.prototype, "userPausedDetails", void 0);
    return JobSummary;
}(utils_1.SpeakeasyBase));
exports.JobSummary = JobSummary;
