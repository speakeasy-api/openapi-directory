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
exports.BuildDetail = void 0;
var utils_1 = require("../../../internal/utils");
var commitdetail_1 = require("./commitdetail");
var previousbuild_1 = require("./previousbuild");
var user_1 = require("./user");
// BuildDetail
/**
 * previous build
**/
var BuildDetail = /** @class */ (function (_super) {
    __extends(BuildDetail, _super);
    function BuildDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=all_commit_details", elemType: commitdetail_1.CommitDetail }),
        __metadata("design:type", Array)
    ], BuildDetail.prototype, "allCommitDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compare" }),
        __metadata("design:type", String)
    ], BuildDetail.prototype, "compare", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=job_name" }),
        __metadata("design:type", String)
    ], BuildDetail.prototype, "jobName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node" }),
        __metadata("design:type", Object)
    ], BuildDetail.prototype, "node", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous_successful_build" }),
        __metadata("design:type", previousbuild_1.PreviousBuild)
    ], BuildDetail.prototype, "previousSuccessfulBuild", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retries" }),
        __metadata("design:type", Boolean)
    ], BuildDetail.prototype, "retries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssh_enabled" }),
        __metadata("design:type", Boolean)
    ], BuildDetail.prototype, "sshEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timedout" }),
        __metadata("design:type", Boolean)
    ], BuildDetail.prototype, "timedout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage_queued_at" }),
        __metadata("design:type", Date)
    ], BuildDetail.prototype, "usageQueuedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", user_1.User)
    ], BuildDetail.prototype, "user", void 0);
    return BuildDetail;
}(utils_1.SpeakeasyBase));
exports.BuildDetail = BuildDetail;
