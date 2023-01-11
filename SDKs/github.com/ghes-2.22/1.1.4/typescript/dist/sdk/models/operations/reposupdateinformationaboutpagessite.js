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
exports.ReposUpdateInformationAboutPagesSiteResponse = exports.ReposUpdateInformationAboutPagesSiteRequest = exports.ReposUpdateInformationAboutPagesSiteRequestBody = exports.ReposUpdateInformationAboutPagesSiteRequestBodySource2 = exports.ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = exports.ReposUpdateInformationAboutPagesSitePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposUpdateInformationAboutPagesSitePathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSitePathParams, _super);
    function ReposUpdateInformationAboutPagesSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSitePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSitePathParams.prototype, "repo", void 0);
    return ReposUpdateInformationAboutPagesSitePathParams;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSitePathParams = ReposUpdateInformationAboutPagesSitePathParams;
var ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = exports.ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum || (exports.ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = {}));
var ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = exports.ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum || (exports.ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = {}));
// ReposUpdateInformationAboutPagesSiteRequestBodySource2
/**
 * Update the source for the repository. Must include the branch name and path.
**/
var ReposUpdateInformationAboutPagesSiteRequestBodySource2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBodySource2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBodySource2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBodySource2.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBodySource2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBodySource2;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBodySource2 = ReposUpdateInformationAboutPagesSiteRequestBodySource2;
var ReposUpdateInformationAboutPagesSiteRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "cname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "httpsEnforced", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "public", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequestBody = ReposUpdateInformationAboutPagesSiteRequestBody;
var ReposUpdateInformationAboutPagesSiteRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequest, _super);
    function ReposUpdateInformationAboutPagesSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposUpdateInformationAboutPagesSitePathParams)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateInformationAboutPagesSiteRequestBody)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "request", void 0);
    return ReposUpdateInformationAboutPagesSiteRequest;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteRequest = ReposUpdateInformationAboutPagesSiteRequest;
var ReposUpdateInformationAboutPagesSiteResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteResponse, _super);
    function ReposUpdateInformationAboutPagesSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "scimError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "validationError", void 0);
    return ReposUpdateInformationAboutPagesSiteResponse;
}(utils_1.SpeakeasyBase));
exports.ReposUpdateInformationAboutPagesSiteResponse = ReposUpdateInformationAboutPagesSiteResponse;
