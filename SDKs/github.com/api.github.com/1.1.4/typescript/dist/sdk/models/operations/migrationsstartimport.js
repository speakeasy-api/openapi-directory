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
exports.MigrationsStartImportResponse = exports.MigrationsStartImportRequest = exports.MigrationsStartImportRequestBody = exports.MigrationsStartImportRequestBodyVcsEnum = exports.MigrationsStartImportPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MigrationsStartImportPathParams = /** @class */ (function (_super) {
    __extends(MigrationsStartImportPathParams, _super);
    function MigrationsStartImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], MigrationsStartImportPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], MigrationsStartImportPathParams.prototype, "repo", void 0);
    return MigrationsStartImportPathParams;
}(utils_1.SpeakeasyBase));
exports.MigrationsStartImportPathParams = MigrationsStartImportPathParams;
var MigrationsStartImportRequestBodyVcsEnum;
(function (MigrationsStartImportRequestBodyVcsEnum) {
    MigrationsStartImportRequestBodyVcsEnum["Subversion"] = "subversion";
    MigrationsStartImportRequestBodyVcsEnum["Git"] = "git";
    MigrationsStartImportRequestBodyVcsEnum["Mercurial"] = "mercurial";
    MigrationsStartImportRequestBodyVcsEnum["Tfvc"] = "tfvc";
})(MigrationsStartImportRequestBodyVcsEnum = exports.MigrationsStartImportRequestBodyVcsEnum || (exports.MigrationsStartImportRequestBodyVcsEnum = {}));
var MigrationsStartImportRequestBody = /** @class */ (function (_super) {
    __extends(MigrationsStartImportRequestBody, _super);
    function MigrationsStartImportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tfvc_project" }),
        __metadata("design:type", String)
    ], MigrationsStartImportRequestBody.prototype, "tfvcProject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcs" }),
        __metadata("design:type", String)
    ], MigrationsStartImportRequestBody.prototype, "vcs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcs_password" }),
        __metadata("design:type", String)
    ], MigrationsStartImportRequestBody.prototype, "vcsPassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcs_url" }),
        __metadata("design:type", String)
    ], MigrationsStartImportRequestBody.prototype, "vcsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcs_username" }),
        __metadata("design:type", String)
    ], MigrationsStartImportRequestBody.prototype, "vcsUsername", void 0);
    return MigrationsStartImportRequestBody;
}(utils_1.SpeakeasyBase));
exports.MigrationsStartImportRequestBody = MigrationsStartImportRequestBody;
var MigrationsStartImportRequest = /** @class */ (function (_super) {
    __extends(MigrationsStartImportRequest, _super);
    function MigrationsStartImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MigrationsStartImportPathParams)
    ], MigrationsStartImportRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", MigrationsStartImportRequestBody)
    ], MigrationsStartImportRequest.prototype, "request", void 0);
    return MigrationsStartImportRequest;
}(utils_1.SpeakeasyBase));
exports.MigrationsStartImportRequest = MigrationsStartImportRequest;
var MigrationsStartImportResponse = /** @class */ (function (_super) {
    __extends(MigrationsStartImportResponse, _super);
    function MigrationsStartImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MigrationsStartImportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MigrationsStartImportResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MigrationsStartImportResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], MigrationsStartImportResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Import)
    ], MigrationsStartImportResponse.prototype, "import", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], MigrationsStartImportResponse.prototype, "validationError", void 0);
    return MigrationsStartImportResponse;
}(utils_1.SpeakeasyBase));
exports.MigrationsStartImportResponse = MigrationsStartImportResponse;
