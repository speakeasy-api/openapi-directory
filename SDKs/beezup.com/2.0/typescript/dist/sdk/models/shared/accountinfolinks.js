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
exports.AccountInfoLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksactivateuseraccountlink_1 = require("./linksactivateuseraccountlink");
var linkschangeemaillink_1 = require("./linkschangeemaillink");
var linkschangepasswordlink_1 = require("./linkschangepasswordlink");
var linksgetcreditcardinfolink_1 = require("./linksgetcreditcardinfolink");
var linksgetprofilepictureinfolink_1 = require("./linksgetprofilepictureinfolink");
var linkssavecompanyinfolink_1 = require("./linkssavecompanyinfolink");
var linkssavecreditcardinfolink_1 = require("./linkssavecreditcardinfolink");
var linkssavepersonalinfolink_1 = require("./linkssavepersonalinfolink");
var linkssaveprofilepictureinfolink_1 = require("./linkssaveprofilepictureinfolink");
var linksgetuseraccountinfolink_1 = require("./linksgetuseraccountinfolink");
// AccountInfoLinks
/**
 * The different actions you can make on this account
**/
var AccountInfoLinks = /** @class */ (function (_super) {
    __extends(AccountInfoLinks, _super);
    function AccountInfoLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activateUserAccount" }),
        __metadata("design:type", linksactivateuseraccountlink_1.LinksActivateUserAccountLink)
    ], AccountInfoLinks.prototype, "activateUserAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changeEmail" }),
        __metadata("design:type", linkschangeemaillink_1.LinksChangeEmailLink)
    ], AccountInfoLinks.prototype, "changeEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changePassword" }),
        __metadata("design:type", linkschangepasswordlink_1.LinksChangePasswordLink)
    ], AccountInfoLinks.prototype, "changePassword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=getCreditCardInfo" }),
        __metadata("design:type", linksgetcreditcardinfolink_1.LinksGetCreditCardInfoLink)
    ], AccountInfoLinks.prototype, "getCreditCardInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=getProfilePictureInfo" }),
        __metadata("design:type", linksgetprofilepictureinfolink_1.LinksGetProfilePictureInfoLink)
    ], AccountInfoLinks.prototype, "getProfilePictureInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saveCompanyInfo" }),
        __metadata("design:type", linkssavecompanyinfolink_1.LinksSaveCompanyInfoLink)
    ], AccountInfoLinks.prototype, "saveCompanyInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saveCreditCardInfo" }),
        __metadata("design:type", linkssavecreditcardinfolink_1.LinksSaveCreditCardInfoLink)
    ], AccountInfoLinks.prototype, "saveCreditCardInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=savePersonalInfo" }),
        __metadata("design:type", linkssavepersonalinfolink_1.LinksSavePersonalInfoLink)
    ], AccountInfoLinks.prototype, "savePersonalInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saveProfilePictureInfo" }),
        __metadata("design:type", linkssaveprofilepictureinfolink_1.LinksSaveProfilePictureInfoLink)
    ], AccountInfoLinks.prototype, "saveProfilePictureInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetuseraccountinfolink_1.LinksGetUserAccountInfoLink)
    ], AccountInfoLinks.prototype, "self", void 0);
    return AccountInfoLinks;
}(utils_1.SpeakeasyBase));
exports.AccountInfoLinks = AccountInfoLinks;
