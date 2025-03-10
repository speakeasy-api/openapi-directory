"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.NullableIssue = exports.NullableIssueStateReasonEnum = exports.NullableIssuePullRequest = exports.NullableIssueLabels2 = void 0;
var utils_1 = require("../../../internal/utils");
var authorassociationenum_1 = require("./authorassociationenum");
var nullableintegration_1 = require("./nullableintegration");
var nullablemilestone_1 = require("./nullablemilestone");
var nullablesimpleuser_1 = require("./nullablesimpleuser");
var reactionrollup_1 = require("./reactionrollup");
var repository_1 = require("./repository");
var simpleuser_1 = require("./simpleuser");
var class_transformer_1 = require("class-transformer");
var NullableIssueLabels2 = /** @class */ (function (_super) {
    __extends(NullableIssueLabels2, _super);
    function NullableIssueLabels2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "color" }),
        __metadata("design:type", String)
    ], NullableIssueLabels2.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "default" }),
        __metadata("design:type", Boolean)
    ], NullableIssueLabels2.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], NullableIssueLabels2.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], NullableIssueLabels2.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], NullableIssueLabels2.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], NullableIssueLabels2.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], NullableIssueLabels2.prototype, "url", void 0);
    return NullableIssueLabels2;
}(utils_1.SpeakeasyBase));
exports.NullableIssueLabels2 = NullableIssueLabels2;
var NullableIssuePullRequest = /** @class */ (function (_super) {
    __extends(NullableIssuePullRequest, _super);
    function NullableIssuePullRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "diff_url" }),
        __metadata("design:type", String)
    ], NullableIssuePullRequest.prototype, "diffUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], NullableIssuePullRequest.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merged_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], NullableIssuePullRequest.prototype, "mergedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "patch_url" }),
        __metadata("design:type", String)
    ], NullableIssuePullRequest.prototype, "patchUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], NullableIssuePullRequest.prototype, "url", void 0);
    return NullableIssuePullRequest;
}(utils_1.SpeakeasyBase));
exports.NullableIssuePullRequest = NullableIssuePullRequest;
/**
 * The reason for the current state
 */
var NullableIssueStateReasonEnum;
(function (NullableIssueStateReasonEnum) {
    NullableIssueStateReasonEnum["Completed"] = "completed";
    NullableIssueStateReasonEnum["Reopened"] = "reopened";
    NullableIssueStateReasonEnum["NotPlanned"] = "not_planned";
})(NullableIssueStateReasonEnum = exports.NullableIssueStateReasonEnum || (exports.NullableIssueStateReasonEnum = {}));
/**
 * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
 */
var NullableIssue = /** @class */ (function (_super) {
    __extends(NullableIssue, _super);
    function NullableIssue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "active_lock_reason" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "activeLockReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "assignee" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], NullableIssue.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: simpleuser_1.SimpleUser }),
        (0, class_transformer_1.Expose)({ name: "assignees" }),
        (0, class_transformer_1.Type)(function () { return simpleuser_1.SimpleUser; }),
        __metadata("design:type", Array)
    ], NullableIssue.prototype, "assignees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "author_association" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "authorAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body_html" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "bodyHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body_text" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "bodyText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "closed_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], NullableIssue.prototype, "closedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "closed_by" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], NullableIssue.prototype, "closedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments" }),
        __metadata("design:type", Number)
    ], NullableIssue.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "commentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], NullableIssue.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "draft" }),
        __metadata("design:type", Boolean)
    ], NullableIssue.prototype, "draft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "events_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "eventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], NullableIssue.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labels" }),
        __metadata("design:type", Array)
    ], NullableIssue.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labels_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "labelsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "locked" }),
        __metadata("design:type", Boolean)
    ], NullableIssue.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "milestone" }),
        (0, class_transformer_1.Type)(function () { return nullablemilestone_1.NullableMilestone; }),
        __metadata("design:type", nullablemilestone_1.NullableMilestone)
    ], NullableIssue.prototype, "milestone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "number" }),
        __metadata("design:type", Number)
    ], NullableIssue.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "performed_via_github_app" }),
        (0, class_transformer_1.Type)(function () { return nullableintegration_1.NullableIntegration; }),
        __metadata("design:type", nullableintegration_1.NullableIntegration)
    ], NullableIssue.prototype, "performedViaGithubApp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pull_request" }),
        (0, class_transformer_1.Type)(function () { return NullableIssuePullRequest; }),
        __metadata("design:type", NullableIssuePullRequest)
    ], NullableIssue.prototype, "pullRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reactions" }),
        (0, class_transformer_1.Type)(function () { return reactionrollup_1.ReactionRollup; }),
        __metadata("design:type", reactionrollup_1.ReactionRollup)
    ], NullableIssue.prototype, "reactions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository" }),
        (0, class_transformer_1.Type)(function () { return repository_1.Repository; }),
        __metadata("design:type", repository_1.Repository)
    ], NullableIssue.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "repositoryUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state_reason" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "stateReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "timeline_url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "timelineUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], NullableIssue.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], NullableIssue.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], NullableIssue.prototype, "user", void 0);
    return NullableIssue;
}(utils_1.SpeakeasyBase));
exports.NullableIssue = NullableIssue;
