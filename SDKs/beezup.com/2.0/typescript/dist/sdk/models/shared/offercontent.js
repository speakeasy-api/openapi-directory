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
exports.OfferContent = void 0;
var utils_1 = require("../../../internal/utils");
var contractbillingperiodinfo_1 = require("./contractbillingperiodinfo");
var contractbonusinfo_1 = require("./contractbonusinfo");
var contractclickinfo_1 = require("./contractclickinfo");
var contractcommitmentinfo_1 = require("./contractcommitmentinfo");
var contractdiscountinfo_1 = require("./contractdiscountinfo");
var contractmoneyinfo_1 = require("./contractmoneyinfo");
var contractstoreinfo_1 = require("./contractstoreinfo");
var previousfixperiodinvoiceproratainfo_1 = require("./previousfixperiodinvoiceproratainfo");
var OfferContent = /** @class */ (function (_super) {
    __extends(OfferContent, _super);
    function OfferContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractBillingPeriodInfo" }),
        __metadata("design:type", contractbillingperiodinfo_1.ContractBillingPeriodInfo)
    ], OfferContent.prototype, "contractBillingPeriodInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractBonusInfo" }),
        __metadata("design:type", contractbonusinfo_1.ContractBonusInfo)
    ], OfferContent.prototype, "contractBonusInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractClickInfo" }),
        __metadata("design:type", contractclickinfo_1.ContractClickInfo)
    ], OfferContent.prototype, "contractClickInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractCommitmentInfo" }),
        __metadata("design:type", contractcommitmentinfo_1.ContractCommitmentInfo)
    ], OfferContent.prototype, "contractCommitmentInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractDiscountInfo" }),
        __metadata("design:type", contractdiscountinfo_1.ContractDiscountInfo)
    ], OfferContent.prototype, "contractDiscountInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractMoneyInfo" }),
        __metadata("design:type", contractmoneyinfo_1.ContractMoneyInfo)
    ], OfferContent.prototype, "contractMoneyInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractStoreInfo" }),
        __metadata("design:type", contractstoreinfo_1.ContractStoreInfo)
    ], OfferContent.prototype, "contractStoreInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractTerminationReason" }),
        __metadata("design:type", String)
    ], OfferContent.prototype, "contractTerminationReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractTerminationReasonType" }),
        __metadata("design:type", Number)
    ], OfferContent.prototype, "contractTerminationReasonType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifyVatExemption" }),
        __metadata("design:type", Boolean)
    ], OfferContent.prototype, "notifyVatExemption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previousFixPeriodInvoiceProrataInfo" }),
        __metadata("design:type", previousfixperiodinvoiceproratainfo_1.PreviousFixPeriodInvoiceProrataInfo)
    ], OfferContent.prototype, "previousFixPeriodInvoiceProrataInfo", void 0);
    return OfferContent;
}(utils_1.SpeakeasyBase));
exports.OfferContent = OfferContent;
