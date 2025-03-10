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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReposUpdateResponse = exports.ReposUpdateRequest = exports.ReposUpdateRequestBody = exports.ReposUpdateRequestBodyVisibilityEnum = exports.ReposUpdateRequestBodySquashMergeCommitTitleEnum = exports.ReposUpdateRequestBodySquashMergeCommitMessageEnum = exports.ReposUpdateRequestBodyMergeCommitTitleEnum = exports.ReposUpdateRequestBodyMergeCommitMessageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
var ReposUpdateRequestBodyMergeCommitMessageEnum;
(function (ReposUpdateRequestBodyMergeCommitMessageEnum) {
    ReposUpdateRequestBodyMergeCommitMessageEnum["PrBody"] = "PR_BODY";
    ReposUpdateRequestBodyMergeCommitMessageEnum["PrTitle"] = "PR_TITLE";
    ReposUpdateRequestBodyMergeCommitMessageEnum["Blank"] = "BLANK";
})(ReposUpdateRequestBodyMergeCommitMessageEnum = exports.ReposUpdateRequestBodyMergeCommitMessageEnum || (exports.ReposUpdateRequestBodyMergeCommitMessageEnum = {}));
/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
var ReposUpdateRequestBodyMergeCommitTitleEnum;
(function (ReposUpdateRequestBodyMergeCommitTitleEnum) {
    ReposUpdateRequestBodyMergeCommitTitleEnum["PrTitle"] = "PR_TITLE";
    ReposUpdateRequestBodyMergeCommitTitleEnum["MergeMessage"] = "MERGE_MESSAGE";
})(ReposUpdateRequestBodyMergeCommitTitleEnum = exports.ReposUpdateRequestBodyMergeCommitTitleEnum || (exports.ReposUpdateRequestBodyMergeCommitTitleEnum = {}));
/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
var ReposUpdateRequestBodySquashMergeCommitMessageEnum;
(function (ReposUpdateRequestBodySquashMergeCommitMessageEnum) {
    ReposUpdateRequestBodySquashMergeCommitMessageEnum["PrBody"] = "PR_BODY";
    ReposUpdateRequestBodySquashMergeCommitMessageEnum["CommitMessages"] = "COMMIT_MESSAGES";
    ReposUpdateRequestBodySquashMergeCommitMessageEnum["Blank"] = "BLANK";
})(ReposUpdateRequestBodySquashMergeCommitMessageEnum = exports.ReposUpdateRequestBodySquashMergeCommitMessageEnum || (exports.ReposUpdateRequestBodySquashMergeCommitMessageEnum = {}));
/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
var ReposUpdateRequestBodySquashMergeCommitTitleEnum;
(function (ReposUpdateRequestBodySquashMergeCommitTitleEnum) {
    ReposUpdateRequestBodySquashMergeCommitTitleEnum["PrTitle"] = "PR_TITLE";
    ReposUpdateRequestBodySquashMergeCommitTitleEnum["CommitOrPrTitle"] = "COMMIT_OR_PR_TITLE";
})(ReposUpdateRequestBodySquashMergeCommitTitleEnum = exports.ReposUpdateRequestBodySquashMergeCommitTitleEnum || (exports.ReposUpdateRequestBodySquashMergeCommitTitleEnum = {}));
/**
 * The visibility of the repository.
 */
var ReposUpdateRequestBodyVisibilityEnum;
(function (ReposUpdateRequestBodyVisibilityEnum) {
    ReposUpdateRequestBodyVisibilityEnum["Public"] = "public";
    ReposUpdateRequestBodyVisibilityEnum["Private"] = "private";
    ReposUpdateRequestBodyVisibilityEnum["Internal"] = "internal";
})(ReposUpdateRequestBodyVisibilityEnum = exports.ReposUpdateRequestBodyVisibilityEnum || (exports.ReposUpdateRequestBodyVisibilityEnum = {}));
var ReposUpdateRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateRequestBody, _super);
    function ReposUpdateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_auto_merge" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowAutoMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_forking" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowForking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_merge_commit" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowMergeCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_rebase_merge" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowRebaseMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_squash_merge" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowSquashMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "allow_update_branch" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "allowUpdateBranch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "archived" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "default_branch" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "defaultBranch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "delete_branch_on_merge" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "deleteBranchOnMerge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_issues" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "hasIssues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_projects" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "hasProjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_wiki" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "hasWiki", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "homepage" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_template" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "isTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merge_commit_message" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "mergeCommitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merge_commit_title" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "mergeCommitTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "private" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "private", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "squash_merge_commit_message" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "squashMergeCommitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "squash_merge_commit_title" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "squashMergeCommitTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "use_squash_pr_title_as_default" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "useSquashPrTitleAsDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "visibility" }),
        __metadata("design:type", String)
    ], ReposUpdateRequestBody.prototype, "visibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "web_commit_signoff_required" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateRequestBody.prototype, "webCommitSignoffRequired", void 0);
    return ReposUpdateRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateRequestBody = ReposUpdateRequestBody;
var ReposUpdateRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateRequest, _super);
    function ReposUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateRequestBody)
    ], ReposUpdateRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner",
        }),
        __metadata("design:type", String)
    ], ReposUpdateRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repo",
        }),
        __metadata("design:type", String)
    ], ReposUpdateRequest.prototype, "repo", void 0);
    return ReposUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateRequest = ReposUpdateRequest;
var ReposUpdateResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateResponse, _super);
    function ReposUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ReposUpdateResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FullRepository)
    ], ReposUpdateResponse.prototype, "fullRepository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateResponse.prototype, "validationError", void 0);
    return ReposUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateResponse = ReposUpdateResponse;
