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
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams.prototype, "commit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams.prototype, "repoSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams;
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum;
(function (GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum) {
    GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum["Meta"] = "meta";
    GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum["Rendered"] = "rendered";
})(GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum = exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum || (exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum = {}));
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_depth" }),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams.prototype, "maxDepth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams;
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity;
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest = GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest;
var GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaginatedTreeentries)
    ], GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse.prototype, "paginatedTreeentries", void 0);
    return GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse = GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse;
