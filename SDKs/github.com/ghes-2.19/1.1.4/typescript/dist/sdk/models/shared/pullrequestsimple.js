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
exports.PullRequestSimple = exports.PullRequestSimpleLabels = exports.PullRequestSimpleHead = exports.PullRequestSimpleBase = exports.PullRequestSimpleLinks = void 0;
var utils_1 = require("../../../internal/utils");
var authorassociationenum_1 = require("./authorassociationenum");
var link_1 = require("./link");
var nullablemilestone_1 = require("./nullablemilestone");
var nullablesimpleuser_1 = require("./nullablesimpleuser");
var repository_1 = require("./repository");
var simpleuser_1 = require("./simpleuser");
var team_1 = require("./team");
var class_transformer_1 = require("class-transformer");
var PullRequestSimpleLinks = /** @class */ (function (_super) {
    __extends(PullRequestSimpleLinks, _super);
    function PullRequestSimpleLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "comments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commits" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "commits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "issue" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "issue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "review_comment" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "reviewComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "review_comments" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "reviewComments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "self" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "statuses" }),
        (0, class_transformer_1.Type)(function () { return link_1.Link; }),
        __metadata("design:type", link_1.Link)
    ], PullRequestSimpleLinks.prototype, "statuses", void 0);
    return PullRequestSimpleLinks;
}(utils_1.SpeakeasyBase));
exports.PullRequestSimpleLinks = PullRequestSimpleLinks;
var PullRequestSimpleBase = /** @class */ (function (_super) {
    __extends(PullRequestSimpleBase, _super);
    function PullRequestSimpleBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "label" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ref" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repo" }),
        (0, class_transformer_1.Type)(function () { return repository_1.Repository; }),
        __metadata("design:type", repository_1.Repository)
    ], PullRequestSimpleBase.prototype, "repo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], PullRequestSimpleBase.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], PullRequestSimpleBase.prototype, "user", void 0);
    return PullRequestSimpleBase;
}(utils_1.SpeakeasyBase));
exports.PullRequestSimpleBase = PullRequestSimpleBase;
var PullRequestSimpleHead = /** @class */ (function (_super) {
    __extends(PullRequestSimpleHead, _super);
    function PullRequestSimpleHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "label" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ref" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "ref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repo" }),
        (0, class_transformer_1.Type)(function () { return repository_1.Repository; }),
        __metadata("design:type", repository_1.Repository)
    ], PullRequestSimpleHead.prototype, "repo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], PullRequestSimpleHead.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], PullRequestSimpleHead.prototype, "user", void 0);
    return PullRequestSimpleHead;
}(utils_1.SpeakeasyBase));
exports.PullRequestSimpleHead = PullRequestSimpleHead;
var PullRequestSimpleLabels = /** @class */ (function (_super) {
    __extends(PullRequestSimpleLabels, _super);
    function PullRequestSimpleLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "color" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "default" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimpleLabels.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], PullRequestSimpleLabels.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], PullRequestSimpleLabels.prototype, "url", void 0);
    return PullRequestSimpleLabels;
}(utils_1.SpeakeasyBase));
exports.PullRequestSimpleLabels = PullRequestSimpleLabels;
/**
 * Pull Request Simple
 */
var PullRequestSimple = /** @class */ (function (_super) {
    __extends(PullRequestSimple, _super);
    function PullRequestSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "_links" }),
        (0, class_transformer_1.Type)(function () { return PullRequestSimpleLinks; }),
        __metadata("design:type", PullRequestSimpleLinks)
    ], PullRequestSimple.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "active_lock_reason" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "activeLockReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "assignee" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], PullRequestSimple.prototype, "assignee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: simpleuser_1.SimpleUser }),
        (0, class_transformer_1.Expose)({ name: "assignees" }),
        (0, class_transformer_1.Type)(function () { return simpleuser_1.SimpleUser; }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "assignees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "author_association" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "authorAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "base" }),
        (0, class_transformer_1.Type)(function () { return PullRequestSimpleBase; }),
        __metadata("design:type", PullRequestSimpleBase)
    ], PullRequestSimple.prototype, "base", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "closed_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "closedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "commentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commits_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "commitsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "diff_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "diffUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "draft" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimple.prototype, "draft", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "head" }),
        (0, class_transformer_1.Type)(function () { return PullRequestSimpleHead; }),
        __metadata("design:type", PullRequestSimpleHead)
    ], PullRequestSimple.prototype, "head", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], PullRequestSimple.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "issue_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "issueUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: PullRequestSimpleLabels }),
        (0, class_transformer_1.Expose)({ name: "labels" }),
        (0, class_transformer_1.Type)(function () { return PullRequestSimpleLabels; }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "locked" }),
        __metadata("design:type", Boolean)
    ], PullRequestSimple.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merge_commit_sha" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "mergeCommitSha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merged_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "mergedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "milestone" }),
        (0, class_transformer_1.Type)(function () { return nullablemilestone_1.NullableMilestone; }),
        __metadata("design:type", nullablemilestone_1.NullableMilestone)
    ], PullRequestSimple.prototype, "milestone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "number" }),
        __metadata("design:type", Number)
    ], PullRequestSimple.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "patch_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "patchUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: simpleuser_1.SimpleUser }),
        (0, class_transformer_1.Expose)({ name: "requested_reviewers" }),
        (0, class_transformer_1.Type)(function () { return simpleuser_1.SimpleUser; }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "requestedReviewers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: team_1.Team }),
        (0, class_transformer_1.Expose)({ name: "requested_teams" }),
        (0, class_transformer_1.Type)(function () { return team_1.Team; }),
        __metadata("design:type", Array)
    ], PullRequestSimple.prototype, "requestedTeams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "review_comment_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "reviewCommentUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "review_comments_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "reviewCommentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "statuses_url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "statusesUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], PullRequestSimple.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], PullRequestSimple.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "user" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], PullRequestSimple.prototype, "user", void 0);
    return PullRequestSimple;
}(utils_1.SpeakeasyBase));
exports.PullRequestSimple = PullRequestSimple;
