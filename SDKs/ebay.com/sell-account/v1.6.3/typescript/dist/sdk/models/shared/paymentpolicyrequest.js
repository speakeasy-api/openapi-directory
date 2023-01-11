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
exports.PaymentPolicyRequest = void 0;
var utils_1 = require("../../../internal/utils");
var categorytype_1 = require("./categorytype");
var deposit_1 = require("./deposit");
var timeduration_1 = require("./timeduration");
var paymentmethod_1 = require("./paymentmethod");
// PaymentPolicyRequest
/**
 * This root container defines a seller's payment policy for a specific marketplace and category type. Used when creating or updating a payment policy, paymentPolicyRequest encapsulates a seller's terms for how buyers can pay for the items they buy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies. A successful call returns a paymentPolicyId, plus the Location response header contains the URI to the resource. Policy instructions can be localized by providing a locale in the Content-Language HTTP request header. For example: Content-Language: de-DE. Tip: For more on using business policies, see eBay business policies.
**/
var PaymentPolicyRequest = /** @class */ (function (_super) {
    __extends(PaymentPolicyRequest, _super);
    function PaymentPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryTypes", elemType: categorytype_1.CategoryType }),
        __metadata("design:type", Array)
    ], PaymentPolicyRequest.prototype, "categoryTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deposit" }),
        __metadata("design:type", deposit_1.Deposit)
    ], PaymentPolicyRequest.prototype, "deposit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PaymentPolicyRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullPaymentDueIn" }),
        __metadata("design:type", timeduration_1.TimeDuration)
    ], PaymentPolicyRequest.prototype, "fullPaymentDueIn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=immediatePay" }),
        __metadata("design:type", Boolean)
    ], PaymentPolicyRequest.prototype, "immediatePay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], PaymentPolicyRequest.prototype, "marketplaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PaymentPolicyRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentInstructions" }),
        __metadata("design:type", String)
    ], PaymentPolicyRequest.prototype, "paymentInstructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentMethods", elemType: paymentmethod_1.PaymentMethod }),
        __metadata("design:type", Array)
    ], PaymentPolicyRequest.prototype, "paymentMethods", void 0);
    return PaymentPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PaymentPolicyRequest = PaymentPolicyRequest;
