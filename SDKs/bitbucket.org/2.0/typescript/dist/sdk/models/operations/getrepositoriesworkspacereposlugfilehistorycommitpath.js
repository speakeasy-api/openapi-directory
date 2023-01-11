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
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse = exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest = exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity = exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams = exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams, _super);
    function GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=commit" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams.prototype, "commit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo_slug" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams.prototype, "repoSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams.prototype, "workspace", void 0);
    return GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams = GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams;
var GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams, _super);
    function GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=renames" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams.prototype, "renames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams.prototype, "sort", void 0);
    return GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams = GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams;
var GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity, _super);
    function GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity.prototype, "oauth2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity.prototype, "apiKey", void 0);
    return GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity = GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity;
var GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest, _super);
    function GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest.prototype, "security", void 0);
    return GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest = GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest;
var GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse = /** @class */ (function (_super) {
    __extends(GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse, _super);
    function GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PaginatedFiles)
    ], GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse.prototype, "paginatedFiles", void 0);
    return GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse;
}(utils_1.SpeakeasyBase));
exports.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse = GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse;
