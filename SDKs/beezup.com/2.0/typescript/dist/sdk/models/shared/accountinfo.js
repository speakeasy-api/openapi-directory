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
exports.AccountInfo = void 0;
var utils_1 = require("../../../internal/utils");
var companyinfo_1 = require("./companyinfo");
var beezupcommoninfosummaries_1 = require("./beezupcommoninfosummaries");
var accountinfolinks_1 = require("./accountinfolinks");
var personalinfo_1 = require("./personalinfo");
var accountstatusenum_1 = require("./accountstatusenum");
var AccountInfo = /** @class */ (function (_super) {
    __extends(AccountInfo, _super);
    function AccountInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=companyInfo" }),
        __metadata("design:type", companyinfo_1.CompanyInfo)
    ], AccountInfo.prototype, "companyInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountInfo.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", beezupcommoninfosummaries_1.BeezUpCommonInfoSummaries)
    ], AccountInfo.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", accountinfolinks_1.AccountInfoLinks)
    ], AccountInfo.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personalInfo" }),
        __metadata("design:type", personalinfo_1.PersonalInfo)
    ], AccountInfo.prototype, "personalInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profilePictureUrl" }),
        __metadata("design:type", String)
    ], AccountInfo.prototype, "profilePictureUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountInfo.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], AccountInfo.prototype, "userId", void 0);
    return AccountInfo;
}(utils_1.SpeakeasyBase));
exports.AccountInfo = AccountInfo;
