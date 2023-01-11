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
exports.ContractDiscountInfo = void 0;
var utils_1 = require("../../../internal/utils");
var promotionalcodevalidityenum_1 = require("./promotionalcodevalidityenum");
// ContractDiscountInfo
/**
 * Describe the discount information related to the offer.
**/
var ContractDiscountInfo = /** @class */ (function (_super) {
    __extends(ContractDiscountInfo, _super);
    function ContractDiscountInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountCodePromoDiscount" }),
        __metadata("design:type", Number)
    ], ContractDiscountInfo.prototype, "amountCodePromoDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amountCodePromoDiscountPerMonth" }),
        __metadata("design:type", Number)
    ], ContractDiscountInfo.prototype, "amountCodePromoDiscountPerMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=couponDiscountCode" }),
        __metadata("design:type", String)
    ], ContractDiscountInfo.prototype, "couponDiscountCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=couponDiscountId" }),
        __metadata("design:type", Number)
    ], ContractDiscountInfo.prototype, "couponDiscountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerHasActualDiscount" }),
        __metadata("design:type", Boolean)
    ], ContractDiscountInfo.prototype, "customerHasActualDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=discountDurationInMonth" }),
        __metadata("design:type", Number)
    ], ContractDiscountInfo.prototype, "discountDurationInMonth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCouponDiscountLinkedToCouponOffer" }),
        __metadata("design:type", Boolean)
    ], ContractDiscountInfo.prototype, "isCouponDiscountLinkedToCouponOffer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=percentDiscount" }),
        __metadata("design:type", Number)
    ], ContractDiscountInfo.prototype, "percentDiscount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=promotionalCodeValidity" }),
        __metadata("design:type", String)
    ], ContractDiscountInfo.prototype, "promotionalCodeValidity", void 0);
    return ContractDiscountInfo;
}(utils_1.SpeakeasyBase));
exports.ContractDiscountInfo = ContractDiscountInfo;
