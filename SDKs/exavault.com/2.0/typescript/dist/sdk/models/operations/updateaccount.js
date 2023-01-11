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
exports.UpdateAccountResponse = exports.UpdateAccountRequest = exports.UpdateAccountUpdateAccountRequestBody = exports.UpdateAccountUpdateAccountRequestBodyAccountQuotaValues = exports.UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues = exports.UpdateAccountUpdateAccountRequestBodyAllowedIpRanges = exports.UpdateAccountHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateAccountHeaders = /** @class */ (function (_super) {
    __extends(UpdateAccountHeaders, _super);
    function UpdateAccountHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], UpdateAccountHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], UpdateAccountHeaders.prototype, "evApiKey", void 0);
    return UpdateAccountHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountHeaders = UpdateAccountHeaders;
var UpdateAccountUpdateAccountRequestBodyAllowedIpRanges = /** @class */ (function (_super) {
    __extends(UpdateAccountUpdateAccountRequestBodyAllowedIpRanges, _super);
    function UpdateAccountUpdateAccountRequestBodyAllowedIpRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipEnd" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBodyAllowedIpRanges.prototype, "ipEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipStart" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBodyAllowedIpRanges.prototype, "ipStart", void 0);
    return UpdateAccountUpdateAccountRequestBodyAllowedIpRanges;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountUpdateAccountRequestBodyAllowedIpRanges = UpdateAccountUpdateAccountRequestBodyAllowedIpRanges;
var UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues = /** @class */ (function (_super) {
    __extends(UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues, _super);
    function UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyName" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customEmail" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues.prototype, "customEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=theme" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues.prototype, "theme", void 0);
    return UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues = UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues;
var UpdateAccountUpdateAccountRequestBodyAccountQuotaValues = /** @class */ (function (_super) {
    __extends(UpdateAccountUpdateAccountRequestBodyAccountQuotaValues, _super);
    function UpdateAccountUpdateAccountRequestBodyAccountQuotaValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noticeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBodyAccountQuotaValues.prototype, "noticeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noticeThreshold" }),
        __metadata("design:type", Number)
    ], UpdateAccountUpdateAccountRequestBodyAccountQuotaValues.prototype, "noticeThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionsNoticeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBodyAccountQuotaValues.prototype, "transactionsNoticeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionsNoticeThreshold" }),
        __metadata("design:type", Number)
    ], UpdateAccountUpdateAccountRequestBodyAccountQuotaValues.prototype, "transactionsNoticeThreshold", void 0);
    return UpdateAccountUpdateAccountRequestBodyAccountQuotaValues;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountUpdateAccountRequestBodyAccountQuotaValues = UpdateAccountUpdateAccountRequestBodyAccountQuotaValues;
var UpdateAccountUpdateAccountRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAccountUpdateAccountRequestBody, _super);
    function UpdateAccountUpdateAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountOnboarding" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "accountOnboarding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedIpRanges", elemType: UpdateAccountUpdateAccountRequestBodyAllowedIpRanges }),
        __metadata("design:type", Array)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "allowedIpRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brandingSettings" }),
        __metadata("design:type", UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "brandingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complexPasswords" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "complexPasswords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customSignature" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "customSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailContent" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "emailContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailSubject" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "emailSubject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalDomain" }),
        __metadata("design:type", String)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "externalDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quota" }),
        __metadata("design:type", UpdateAccountUpdateAccountRequestBodyAccountQuotaValues)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secureOnly" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "secureOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showReferralLinks" }),
        __metadata("design:type", Boolean)
    ], UpdateAccountUpdateAccountRequestBody.prototype, "showReferralLinks", void 0);
    return UpdateAccountUpdateAccountRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountUpdateAccountRequestBody = UpdateAccountUpdateAccountRequestBody;
var UpdateAccountRequest = /** @class */ (function (_super) {
    __extends(UpdateAccountRequest, _super);
    function UpdateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateAccountHeaders)
    ], UpdateAccountRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAccountUpdateAccountRequestBody)
    ], UpdateAccountRequest.prototype, "request", void 0);
    return UpdateAccountRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountRequest = UpdateAccountRequest;
var UpdateAccountResponse = /** @class */ (function (_super) {
    __extends(UpdateAccountResponse, _super);
    function UpdateAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccountResponse)
    ], UpdateAccountResponse.prototype, "accountResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateAccountResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateAccountResponse.prototype, "statusCode", void 0);
    return UpdateAccountResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateAccountResponse = UpdateAccountResponse;
