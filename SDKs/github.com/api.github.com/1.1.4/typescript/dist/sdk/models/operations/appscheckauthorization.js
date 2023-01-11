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
exports.AppsCheckAuthorizationResponse = exports.AppsCheckAuthorizationRequest = exports.AppsCheckAuthorizationAuthorization = exports.AppsCheckAuthorizationAuthorizationSimpleUser = exports.AppsCheckAuthorizationAuthorizationScopedInstallation = exports.AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = exports.AppsCheckAuthorizationAuthorizationApp = exports.AppsCheckAuthorizationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppsCheckAuthorizationPathParams = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationPathParams, _super);
    function AppsCheckAuthorizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=access_token" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationPathParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=client_id" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationPathParams.prototype, "clientId", void 0);
    return AppsCheckAuthorizationPathParams;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationPathParams = AppsCheckAuthorizationPathParams;
var AppsCheckAuthorizationAuthorizationApp = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationAuthorizationApp, _super);
    function AppsCheckAuthorizationAuthorizationApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationApp.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationApp.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationApp.prototype, "url", void 0);
    return AppsCheckAuthorizationAuthorizationApp;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationAuthorizationApp = AppsCheckAuthorizationAuthorizationApp;
var AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum;
(function (AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum) {
    AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum["All"] = "all";
    AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum["Selected"] = "selected";
})(AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = exports.AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum || (exports.AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = {}));
var AppsCheckAuthorizationAuthorizationScopedInstallation = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationAuthorizationScopedInstallation, _super);
    function AppsCheckAuthorizationAuthorizationScopedInstallation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", shared.SimpleUser)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_multiple_single_files" }),
        __metadata("design:type", Boolean)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "hasMultipleSingleFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions" }),
        __metadata("design:type", shared.AppPermissions)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositories_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "repositoriesUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository_selection" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "repositorySelection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=single_file_name" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "singleFileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=single_file_paths" }),
        __metadata("design:type", Array)
    ], AppsCheckAuthorizationAuthorizationScopedInstallation.prototype, "singleFilePaths", void 0);
    return AppsCheckAuthorizationAuthorizationScopedInstallation;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationAuthorizationScopedInstallation = AppsCheckAuthorizationAuthorizationScopedInstallation;
// AppsCheckAuthorizationAuthorizationSimpleUser
/**
 * Simple User
**/
var AppsCheckAuthorizationAuthorizationSimpleUser = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationAuthorizationSimpleUser, _super);
    function AppsCheckAuthorizationAuthorizationSimpleUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "avatarUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "eventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=followers_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "followersUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=following_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "followingUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gists_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "gistsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gravatar_id" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "gravatarId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "login", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "nodeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizations_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "organizationsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=received_events_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "receivedEventsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repos_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "reposUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "siteAdmin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=starred_at" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "starredAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=starred_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "starredUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptions_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "subscriptionsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorizationSimpleUser.prototype, "url", void 0);
    return AppsCheckAuthorizationAuthorizationSimpleUser;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationAuthorizationSimpleUser = AppsCheckAuthorizationAuthorizationSimpleUser;
// AppsCheckAuthorizationAuthorization
/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
var AppsCheckAuthorizationAuthorization = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationAuthorization, _super);
    function AppsCheckAuthorizationAuthorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app" }),
        __metadata("design:type", AppsCheckAuthorizationAuthorizationApp)
    ], AppsCheckAuthorizationAuthorization.prototype, "app", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AppsCheckAuthorizationAuthorization.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "fingerprint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hashed_token" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "hashedToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], AppsCheckAuthorizationAuthorization.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=installation" }),
        __metadata("design:type", AppsCheckAuthorizationAuthorizationScopedInstallation)
    ], AppsCheckAuthorizationAuthorization.prototype, "installation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note_url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "noteUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], AppsCheckAuthorizationAuthorization.prototype, "scopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token_last_eight" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "tokenLastEight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], AppsCheckAuthorizationAuthorization.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationAuthorization.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", AppsCheckAuthorizationAuthorizationSimpleUser)
    ], AppsCheckAuthorizationAuthorization.prototype, "user", void 0);
    return AppsCheckAuthorizationAuthorization;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationAuthorization = AppsCheckAuthorizationAuthorization;
var AppsCheckAuthorizationRequest = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationRequest, _super);
    function AppsCheckAuthorizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppsCheckAuthorizationPathParams)
    ], AppsCheckAuthorizationRequest.prototype, "pathParams", void 0);
    return AppsCheckAuthorizationRequest;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationRequest = AppsCheckAuthorizationRequest;
var AppsCheckAuthorizationResponse = /** @class */ (function (_super) {
    __extends(AppsCheckAuthorizationResponse, _super);
    function AppsCheckAuthorizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppsCheckAuthorizationAuthorization)
    ], AppsCheckAuthorizationResponse.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppsCheckAuthorizationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppsCheckAuthorizationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], AppsCheckAuthorizationResponse.prototype, "basicError", void 0);
    return AppsCheckAuthorizationResponse;
}(utils_1.SpeakeasyBase));
exports.AppsCheckAuthorizationResponse = AppsCheckAuthorizationResponse;
