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
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse = exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest = exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity = exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams = exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=pull_request_id" }),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "pullRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "repoSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams.prototype, "workspace", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams;
}(utils_1.SpeakeasyBase));
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams = PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams;
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=async" }),
        __metadata("design:type", Boolean)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams.prototype, "async", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams = PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams;
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity.prototype, "apiKey", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
}(utils_1.SpeakeasyBase));
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity = PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePathParams)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeQueryParams)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest.prototype, "security", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest;
}(utils_1.SpeakeasyBase));
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest = PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest;
var PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse = /** @class */ (function (_super) {
    __extends(PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse, _super);
    function PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse.prototype, "pullrequest", void 0);
    return PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse;
}(utils_1.SpeakeasyBase));
exports.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse = PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse;
