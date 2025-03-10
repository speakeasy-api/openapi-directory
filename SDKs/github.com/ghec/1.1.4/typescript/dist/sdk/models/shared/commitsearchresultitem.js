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
exports.CommitSearchResultItem = exports.CommitSearchResultItemParents = exports.CommitSearchResultItemCommit = exports.CommitSearchResultItemCommitTree = exports.CommitSearchResultItemCommitAuthor = void 0;
var utils_1 = require("../../../internal/utils");
var minimalrepository_1 = require("./minimalrepository");
var nullablegituser_1 = require("./nullablegituser");
var nullablesimpleuser_1 = require("./nullablesimpleuser");
var searchresulttextmatches_1 = require("./searchresulttextmatches");
var verification_1 = require("./verification");
var class_transformer_1 = require("class-transformer");
var CommitSearchResultItemCommitAuthor = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommitAuthor, _super);
    function CommitSearchResultItemCommitAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], CommitSearchResultItemCommitAuthor.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "email" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitAuthor.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitAuthor.prototype, "name", void 0);
    return CommitSearchResultItemCommitAuthor;
}(utils_1.SpeakeasyBase));
exports.CommitSearchResultItemCommitAuthor = CommitSearchResultItemCommitAuthor;
var CommitSearchResultItemCommitTree = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommitTree, _super);
    function CommitSearchResultItemCommitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitTree.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommitTree.prototype, "url", void 0);
    return CommitSearchResultItemCommitTree;
}(utils_1.SpeakeasyBase));
exports.CommitSearchResultItemCommitTree = CommitSearchResultItemCommitTree;
var CommitSearchResultItemCommit = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemCommit, _super);
    function CommitSearchResultItemCommit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "author" }),
        (0, class_transformer_1.Type)(function () { return CommitSearchResultItemCommitAuthor; }),
        __metadata("design:type", CommitSearchResultItemCommitAuthor)
    ], CommitSearchResultItemCommit.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment_count" }),
        __metadata("design:type", Number)
    ], CommitSearchResultItemCommit.prototype, "commentCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "committer" }),
        (0, class_transformer_1.Type)(function () { return nullablegituser_1.NullableGitUser; }),
        __metadata("design:type", nullablegituser_1.NullableGitUser)
    ], CommitSearchResultItemCommit.prototype, "committer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "message" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommit.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tree" }),
        (0, class_transformer_1.Type)(function () { return CommitSearchResultItemCommitTree; }),
        __metadata("design:type", CommitSearchResultItemCommitTree)
    ], CommitSearchResultItemCommit.prototype, "tree", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemCommit.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "verification" }),
        (0, class_transformer_1.Type)(function () { return verification_1.Verification; }),
        __metadata("design:type", verification_1.Verification)
    ], CommitSearchResultItemCommit.prototype, "verification", void 0);
    return CommitSearchResultItemCommit;
}(utils_1.SpeakeasyBase));
exports.CommitSearchResultItemCommit = CommitSearchResultItemCommit;
var CommitSearchResultItemParents = /** @class */ (function (_super) {
    __extends(CommitSearchResultItemParents, _super);
    function CommitSearchResultItemParents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItemParents.prototype, "url", void 0);
    return CommitSearchResultItemParents;
}(utils_1.SpeakeasyBase));
exports.CommitSearchResultItemParents = CommitSearchResultItemParents;
/**
 * Commit Search Result Item
 */
var CommitSearchResultItem = /** @class */ (function (_super) {
    __extends(CommitSearchResultItem, _super);
    function CommitSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "author" }),
        (0, class_transformer_1.Type)(function () { return nullablesimpleuser_1.NullableSimpleUser; }),
        __metadata("design:type", nullablesimpleuser_1.NullableSimpleUser)
    ], CommitSearchResultItem.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comments_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "commentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commit" }),
        (0, class_transformer_1.Type)(function () { return CommitSearchResultItemCommit; }),
        __metadata("design:type", CommitSearchResultItemCommit)
    ], CommitSearchResultItem.prototype, "commit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "committer" }),
        (0, class_transformer_1.Type)(function () { return nullablegituser_1.NullableGitUser; }),
        __metadata("design:type", nullablegituser_1.NullableGitUser)
    ], CommitSearchResultItem.prototype, "committer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "html_url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "node_id" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: CommitSearchResultItemParents }),
        (0, class_transformer_1.Expose)({ name: "parents" }),
        (0, class_transformer_1.Type)(function () { return CommitSearchResultItemParents; }),
        __metadata("design:type", Array)
    ], CommitSearchResultItem.prototype, "parents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository" }),
        (0, class_transformer_1.Type)(function () { return minimalrepository_1.MinimalRepository; }),
        __metadata("design:type", minimalrepository_1.MinimalRepository)
    ], CommitSearchResultItem.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "score" }),
        __metadata("design:type", Number)
    ], CommitSearchResultItem.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: searchresulttextmatches_1.SearchResultTextMatches }),
        (0, class_transformer_1.Expose)({ name: "text_matches" }),
        (0, class_transformer_1.Type)(function () { return searchresulttextmatches_1.SearchResultTextMatches; }),
        __metadata("design:type", Array)
    ], CommitSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], CommitSearchResultItem.prototype, "url", void 0);
    return CommitSearchResultItem;
}(utils_1.SpeakeasyBase));
exports.CommitSearchResultItem = CommitSearchResultItem;
