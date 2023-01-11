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
exports.ContractCommitmentInfo = void 0;
var utils_1 = require("../../../internal/utils");
var paymentmethodenum_1 = require("./paymentmethodenum");
var fixedandvariableclickmodelinfo_1 = require("./fixedandvariableclickmodelinfo");
var variablemodelinfo_1 = require("./variablemodelinfo");
// ContractCommitmentInfo
/**
 * Describe the commitment information related to the offer.
**/
var ContractCommitmentInfo = /** @class */ (function (_super) {
    __extends(ContractCommitmentInfo, _super);
    function ContractCommitmentInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commercialCreatorUserId" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "commercialCreatorUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commercialUserId" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "commercialUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitmentCalculatedFinishDate" }),
        __metadata("design:type", Date)
    ], ContractCommitmentInfo.prototype, "commitmentCalculatedFinishDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitmentPeriodInMonth" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "commitmentPeriodInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractType" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "contractType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=couponOfferCode" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "couponOfferCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentContractId" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "currentContractId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentContractTerminationDate" }),
        __metadata("design:type", Date)
    ], ContractCommitmentInfo.prototype, "currentContractTerminationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentCustomerPaymentMethod" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "currentCustomerPaymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fixedAndVariableClickInfo" }),
        __metadata("design:type", fixedandvariableclickmodelinfo_1.FixedAndVariableClickModelInfo)
    ], ContractCommitmentInfo.prototype, "fixedAndVariableClickInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCustomerWantsToTerminateHisContract" }),
        __metadata("design:type", Boolean)
    ], ContractCommitmentInfo.prototype, "isCustomerWantsToTerminateHisContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isModelMustBeTransmittedInNewContract" }),
        __metadata("design:type", Boolean)
    ], ContractCommitmentInfo.prototype, "isModelMustBeTransmittedInNewContract", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minBillingPeriodInMonths" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "minBillingPeriodInMonths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newContractStartDate" }),
        __metadata("design:type", Date)
    ], ContractCommitmentInfo.prototype, "newContractStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerId" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "offerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerName" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "offerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentDelayInDays" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "paymentDelayInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethodAuthorized" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "paymentMethodAuthorized", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedPaymentMethod" }),
        __metadata("design:type", String)
    ], ContractCommitmentInfo.prototype, "requestedPaymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trialPeriodFinishDate" }),
        __metadata("design:type", Date)
    ], ContractCommitmentInfo.prototype, "trialPeriodFinishDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trialPeriodInMonth" }),
        __metadata("design:type", Number)
    ], ContractCommitmentInfo.prototype, "trialPeriodInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=variableModelInfo" }),
        __metadata("design:type", variablemodelinfo_1.VariableModelInfo)
    ], ContractCommitmentInfo.prototype, "variableModelInfo", void 0);
    return ContractCommitmentInfo;
}(utils_1.SpeakeasyBase));
exports.ContractCommitmentInfo = ContractCommitmentInfo;
