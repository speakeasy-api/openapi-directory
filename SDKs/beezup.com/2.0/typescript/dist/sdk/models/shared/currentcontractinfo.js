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
exports.CurrentContractInfo = void 0;
var utils_1 = require("../../../internal/utils");
var fixedandvariableclickmodelinfo_1 = require("./fixedandvariableclickmodelinfo");
var currentcontractinfolinks_1 = require("./currentcontractinfolinks");
var variablemodelinfo_1 = require("./variablemodelinfo");
// CurrentContractInfo
/**
 * Get the conditions of your current contract
**/
var CurrentContractInfo = /** @class */ (function (_super) {
    __extends(CurrentContractInfo, _super);
    function CurrentContractInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalClickPrice" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "additionalClickPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodInMonth" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "billingPeriodInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billingPeriodPercentDiscount" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "billingPeriodPercentDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clickIncluded" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "clickIncluded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitmentCalculatedFinishUtcDate" }),
        __metadata("design:type", Date)
    ], CurrentContractInfo.prototype, "commitmentCalculatedFinishUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitmentPeriodInMonth" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "commitmentPeriodInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractId" }),
        __metadata("design:type", String)
    ], CurrentContractInfo.prototype, "contractId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], CurrentContractInfo.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountDurationInMonth" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "discountDurationInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountEndUtcDate" }),
        __metadata("design:type", Date)
    ], CurrentContractInfo.prototype, "discountEndUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fixedAndVariableClickInfo" }),
        __metadata("design:type", fixedandvariableclickmodelinfo_1.FixedAndVariableClickModelInfo)
    ], CurrentContractInfo.prototype, "fixedAndVariableClickInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fixedPrice" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "fixedPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipUserCreation" }),
        __metadata("design:type", String)
    ], CurrentContractInfo.prototype, "ipUserCreation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipUserModification" }),
        __metadata("design:type", String)
    ], CurrentContractInfo.prototype, "ipUserModification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCommitmentRenewalAutomatically" }),
        __metadata("design:type", Boolean)
    ], CurrentContractInfo.prototype, "isCommitmentRenewalAutomatically", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isModifiableContract" }),
        __metadata("design:type", Boolean)
    ], CurrentContractInfo.prototype, "isModifiableContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", currentcontractinfolinks_1.CurrentContractInfoLinks)
    ], CurrentContractInfo.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerId" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "offerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerName" }),
        __metadata("design:type", String)
    ], CurrentContractInfo.prototype, "offerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=percentDiscount" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "percentDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startUtcDate" }),
        __metadata("design:type", Date)
    ], CurrentContractInfo.prototype, "startUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeCount" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "storeCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trialPeriodInMonth" }),
        __metadata("design:type", Number)
    ], CurrentContractInfo.prototype, "trialPeriodInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=variableModelInfo" }),
        __metadata("design:type", variablemodelinfo_1.VariableModelInfo)
    ], CurrentContractInfo.prototype, "variableModelInfo", void 0);
    return CurrentContractInfo;
}(utils_1.SpeakeasyBase));
exports.CurrentContractInfo = CurrentContractInfo;
