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
exports.HrisCompanyInput = exports.HrisCompany = exports.HrisCompanyStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var address_1 = require("./address");
var email_1 = require("./email");
var phonenumber_1 = require("./phonenumber");
var website_1 = require("./website");
var HrisCompanyStatusEnum;
(function (HrisCompanyStatusEnum) {
    HrisCompanyStatusEnum["Active"] = "active";
    HrisCompanyStatusEnum["Inactive"] = "inactive";
    HrisCompanyStatusEnum["Trial"] = "trial";
    HrisCompanyStatusEnum["Other"] = "other";
})(HrisCompanyStatusEnum = exports.HrisCompanyStatusEnum || (exports.HrisCompanyStatusEnum = {}));
var HrisCompany = /** @class */ (function (_super) {
    __extends(HrisCompany, _super);
    function HrisCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses", elemType: address_1.Address }),
        __metadata("design:type", Array)
    ], HrisCompany.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_number" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "companyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], HrisCompany.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtor_id" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "debtorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], HrisCompany.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emails", elemType: email_1.Email }),
        __metadata("design:type", Array)
    ], HrisCompany.prototype, "emails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=legal_name" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "legalName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: phonenumber_1.PhoneNumber }),
        __metadata("design:type", Array)
    ], HrisCompany.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "subdomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], HrisCompany.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], HrisCompany.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websites", elemType: website_1.Website }),
        __metadata("design:type", Array)
    ], HrisCompany.prototype, "websites", void 0);
    return HrisCompany;
}(utils_1.SpeakeasyBase));
exports.HrisCompany = HrisCompany;
var HrisCompanyInput = /** @class */ (function (_super) {
    __extends(HrisCompanyInput, _super);
    function HrisCompanyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses", elemType: address_1.Address }),
        __metadata("design:type", Array)
    ], HrisCompanyInput.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_number" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "companyNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debtor_id" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "debtorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emails", elemType: email_1.Email }),
        __metadata("design:type", Array)
    ], HrisCompanyInput.prototype, "emails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=legal_name" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "legalName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: phonenumber_1.PhoneNumber }),
        __metadata("design:type", Array)
    ], HrisCompanyInput.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], HrisCompanyInput.prototype, "subdomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=websites", elemType: website_1.Website }),
        __metadata("design:type", Array)
    ], HrisCompanyInput.prototype, "websites", void 0);
    return HrisCompanyInput;
}(utils_1.SpeakeasyBase));
exports.HrisCompanyInput = HrisCompanyInput;
