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
exports.RegisterDomainRequest = void 0;
var utils_1 = require("../../../internal/utils");
var contactdetail_1 = require("./contactdetail");
// RegisterDomainRequest
/**
 * The RegisterDomain request includes the following elements.
**/
var RegisterDomainRequest = /** @class */ (function (_super) {
    __extends(RegisterDomainRequest, _super);
    function RegisterDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdminContact" }),
        __metadata("design:type", contactdetail_1.ContactDetail)
    ], RegisterDomainRequest.prototype, "adminContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoRenew" }),
        __metadata("design:type", Boolean)
    ], RegisterDomainRequest.prototype, "autoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], RegisterDomainRequest.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DurationInYears" }),
        __metadata("design:type", Number)
    ], RegisterDomainRequest.prototype, "durationInYears", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdnLangCode" }),
        __metadata("design:type", String)
    ], RegisterDomainRequest.prototype, "idnLangCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PrivacyProtectAdminContact" }),
        __metadata("design:type", Boolean)
    ], RegisterDomainRequest.prototype, "privacyProtectAdminContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PrivacyProtectRegistrantContact" }),
        __metadata("design:type", Boolean)
    ], RegisterDomainRequest.prototype, "privacyProtectRegistrantContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PrivacyProtectTechContact" }),
        __metadata("design:type", Boolean)
    ], RegisterDomainRequest.prototype, "privacyProtectTechContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RegistrantContact" }),
        __metadata("design:type", contactdetail_1.ContactDetail)
    ], RegisterDomainRequest.prototype, "registrantContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TechContact" }),
        __metadata("design:type", contactdetail_1.ContactDetail)
    ], RegisterDomainRequest.prototype, "techContact", void 0);
    return RegisterDomainRequest;
}(utils_1.SpeakeasyBase));
exports.RegisterDomainRequest = RegisterDomainRequest;
