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
exports.AccountAttributes = exports.AccountAttributesAllowedIp = void 0;
var utils_1 = require("../../../internal/utils");
var brandingsettings_1 = require("./brandingsettings");
var plandetails_1 = require("./plandetails");
var quota_1 = require("./quota");
var AccountAttributesAllowedIp = /** @class */ (function (_super) {
    __extends(AccountAttributesAllowedIp, _super);
    function AccountAttributesAllowedIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipEnd" }),
        __metadata("design:type", String)
    ], AccountAttributesAllowedIp.prototype, "ipEnd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipStart" }),
        __metadata("design:type", String)
    ], AccountAttributesAllowedIp.prototype, "ipStart", void 0);
    return AccountAttributesAllowedIp;
}(utils_1.SpeakeasyBase));
exports.AccountAttributesAllowedIp = AccountAttributesAllowedIp;
var AccountAttributes = /** @class */ (function (_super) {
    __extends(AccountAttributes, _super);
    function AccountAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], AccountAttributes.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountOnboarding" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "accountOnboarding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedIp", elemType: AccountAttributesAllowedIp }),
        __metadata("design:type", Array)
    ], AccountAttributes.prototype, "allowedIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branding" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "branding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brandingSettings" }),
        __metadata("design:type", brandingsettings_1.BrandingSettings)
    ], AccountAttributes.prototype, "brandingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId" }),
        __metadata("design:type", Number)
    ], AccountAttributes.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complexPasswords" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "complexPasswords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], AccountAttributes.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customDomain" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "customDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customSignature" }),
        __metadata("design:type", String)
    ], AccountAttributes.prototype, "customSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalDomains" }),
        __metadata("design:type", Array)
    ], AccountAttributes.prototype, "externalDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxUsers" }),
        __metadata("design:type", Number)
    ], AccountAttributes.prototype, "maxUsers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], AccountAttributes.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=planDetails" }),
        __metadata("design:type", plandetails_1.PlanDetails)
    ], AccountAttributes.prototype, "planDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quota" }),
        __metadata("design:type", quota_1.Quota)
    ], AccountAttributes.prototype, "quota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secureOnly" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "secureOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=showReferralLinks" }),
        __metadata("design:type", Boolean)
    ], AccountAttributes.prototype, "showReferralLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AccountAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userCount" }),
        __metadata("design:type", Number)
    ], AccountAttributes.prototype, "userCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=welcomeEmailContent" }),
        __metadata("design:type", String)
    ], AccountAttributes.prototype, "welcomeEmailContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=welcomeEmailSubject" }),
        __metadata("design:type", String)
    ], AccountAttributes.prototype, "welcomeEmailSubject", void 0);
    return AccountAttributes;
}(utils_1.SpeakeasyBase));
exports.AccountAttributes = AccountAttributes;
