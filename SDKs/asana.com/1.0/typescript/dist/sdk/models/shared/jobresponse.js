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
exports.JobResponse = exports.JobResponseStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var projectcompact_1 = require("./projectcompact");
var taskcompact_1 = require("./taskcompact");
var JobResponseStatusEnum;
(function (JobResponseStatusEnum) {
    JobResponseStatusEnum["NotStarted"] = "not_started";
    JobResponseStatusEnum["InProgress"] = "in_progress";
    JobResponseStatusEnum["Completed"] = "completed";
    JobResponseStatusEnum["Failed"] = "failed";
})(JobResponseStatusEnum = exports.JobResponseStatusEnum || (exports.JobResponseStatusEnum = {}));
// JobResponse
/**
 * A *job* is an object representing a process that handles asynchronous work.
**/
var JobResponse = /** @class */ (function (_super) {
    __extends(JobResponse, _super);
    function JobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], JobResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=new_project" }),
        __metadata("design:type", projectcompact_1.ProjectCompact)
    ], JobResponse.prototype, "newProject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=new_task" }),
        __metadata("design:type", taskcompact_1.TaskCompact)
    ], JobResponse.prototype, "newTask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], JobResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], JobResponse.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], JobResponse.prototype, "status", void 0);
    return JobResponse;
}(utils_1.SpeakeasyBase));
exports.JobResponse = JobResponse;
