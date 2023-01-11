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
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails = exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=enterprise" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams.prototype, "enterprise", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=scim_user_id" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams.prototype, "scimUserId", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails.prototype, "value", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails = EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups.prototype, "value", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups = EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName.prototype, "givenName", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emails", elemType: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails }),
        __metadata("design:type", Array)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody.prototype, "emails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups", elemType: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups }),
        __metadata("design:type", Array)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemas" }),
        __metadata("design:type", Array)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody.prototype, "schemas", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userName" }),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody.prototype, "userName", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody = EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest.prototype, "request", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest = EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest;
var EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse, _super);
    function EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScimEnterpriseUser)
    ], EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse.prototype, "scimEnterpriseUser", void 0);
    return EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse;
}(utils_1.SpeakeasyBase));
exports.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse = EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse;
