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
exports.CustomerIndexLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksgetuseraccountinfolink_1 = require("./linksgetuseraccountinfolink");
var linksgetbillingperiodslink_1 = require("./linksgetbillingperiodslink");
var linksgetcontractslink_1 = require("./linksgetcontractslink");
var linksgetfriendinfolink_1 = require("./linksgetfriendinfolink");
var linksgetofferlink_1 = require("./linksgetofferlink");
var linksgetinvoiceslink_1 = require("./linksgetinvoiceslink");
var linkslogoutlink_1 = require("./linkslogoutlink");
var linksgetcustomerindexlink_1 = require("./linksgetcustomerindexlink");
var linksgetstandardofferslink_1 = require("./linksgetstandardofferslink");
var linksgetstoreslink_1 = require("./linksgetstoreslink");
// CustomerIndexLinks
/**
 * Gives you want you can do on this API
**/
var CustomerIndexLinks = /** @class */ (function (_super) {
    __extends(CustomerIndexLinks, _super);
    function CustomerIndexLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountInfo" }),
        __metadata("design:type", linksgetuseraccountinfolink_1.LinksGetUserAccountInfoLink)
    ], CustomerIndexLinks.prototype, "accountInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriods" }),
        __metadata("design:type", linksgetbillingperiodslink_1.LinksGetBillingPeriodsLink)
    ], CustomerIndexLinks.prototype, "billingPeriods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contracts" }),
        __metadata("design:type", linksgetcontractslink_1.LinksGetContractsLink)
    ], CustomerIndexLinks.prototype, "contracts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendInfo" }),
        __metadata("design:type", linksgetfriendinfolink_1.LinksGetFriendInfoLink)
    ], CustomerIndexLinks.prototype, "friendInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=getOffer" }),
        __metadata("design:type", linksgetofferlink_1.LinksGetOfferLink)
    ], CustomerIndexLinks.prototype, "getOffer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoices" }),
        __metadata("design:type", linksgetinvoiceslink_1.LinksGetInvoicesLink)
    ], CustomerIndexLinks.prototype, "invoices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logout" }),
        __metadata("design:type", linkslogoutlink_1.LinksLogoutLink)
    ], CustomerIndexLinks.prototype, "logout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetcustomerindexlink_1.LinksGetCustomerIndexLink)
    ], CustomerIndexLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=standardOffers" }),
        __metadata("design:type", linksgetstandardofferslink_1.LinksGetStandardOffersLink)
    ], CustomerIndexLinks.prototype, "standardOffers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stores" }),
        __metadata("design:type", linksgetstoreslink_1.LinksGetStoresLink)
    ], CustomerIndexLinks.prototype, "stores", void 0);
    return CustomerIndexLinks;
}(utils_1.SpeakeasyBase));
exports.CustomerIndexLinks = CustomerIndexLinks;
