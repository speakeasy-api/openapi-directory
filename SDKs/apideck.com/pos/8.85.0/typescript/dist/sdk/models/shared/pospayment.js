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
exports.PosPaymentInput = exports.PosPayment = exports.PosPaymentCardDetailsInput = exports.PosPaymentWalletDetails = exports.PosPaymentWalletDetailsStatusEnum = exports.PosPaymentStatusEnum = exports.PosPaymentSourceEnum = exports.PosPaymentExternalDetails = exports.PosPaymentExternalDetailsTypeEnum = exports.PosPaymentCashDetails = exports.PosPaymentCardDetails = void 0;
var utils_1 = require("../../../internal/utils");
var paymentcard_1 = require("./paymentcard");
var paymentcard_2 = require("./paymentcard");
var posbankaccount_1 = require("./posbankaccount");
var currencyenum_1 = require("./currencyenum");
var servicecharge_1 = require("./servicecharge");
var servicecharge_2 = require("./servicecharge");
var PosPaymentCardDetails = /** @class */ (function (_super) {
    __extends(PosPaymentCardDetails, _super);
    function PosPaymentCardDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=card" }),
        __metadata("design:type", paymentcard_1.PaymentCard)
    ], PosPaymentCardDetails.prototype, "card", void 0);
    return PosPaymentCardDetails;
}(utils_1.SpeakeasyBase));
exports.PosPaymentCardDetails = PosPaymentCardDetails;
// PosPaymentCashDetails
/**
 * Cash details for this payment
**/
var PosPaymentCashDetails = /** @class */ (function (_super) {
    __extends(PosPaymentCashDetails, _super);
    function PosPaymentCashDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Object)
    ], PosPaymentCashDetails.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=charge_back_amount" }),
        __metadata("design:type", Object)
    ], PosPaymentCashDetails.prototype, "chargeBackAmount", void 0);
    return PosPaymentCashDetails;
}(utils_1.SpeakeasyBase));
exports.PosPaymentCashDetails = PosPaymentCashDetails;
var PosPaymentExternalDetailsTypeEnum;
(function (PosPaymentExternalDetailsTypeEnum) {
    PosPaymentExternalDetailsTypeEnum["Check"] = "check";
    PosPaymentExternalDetailsTypeEnum["BankTransfer"] = "bank_transfer";
    PosPaymentExternalDetailsTypeEnum["OtherGiftCard"] = "other_gift_card";
    PosPaymentExternalDetailsTypeEnum["Crypto"] = "crypto";
    PosPaymentExternalDetailsTypeEnum["SquareCash"] = "square_cash";
    PosPaymentExternalDetailsTypeEnum["Social"] = "social";
    PosPaymentExternalDetailsTypeEnum["External"] = "external";
    PosPaymentExternalDetailsTypeEnum["Emoney"] = "emoney";
    PosPaymentExternalDetailsTypeEnum["Card"] = "card";
    PosPaymentExternalDetailsTypeEnum["StoredBalance"] = "stored_balance";
    PosPaymentExternalDetailsTypeEnum["FoodVoucher"] = "food_voucher";
    PosPaymentExternalDetailsTypeEnum["Other"] = "other";
})(PosPaymentExternalDetailsTypeEnum = exports.PosPaymentExternalDetailsTypeEnum || (exports.PosPaymentExternalDetailsTypeEnum = {}));
// PosPaymentExternalDetails
/**
 * Details about an external payment.
**/
var PosPaymentExternalDetails = /** @class */ (function (_super) {
    __extends(PosPaymentExternalDetails, _super);
    function PosPaymentExternalDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PosPaymentExternalDetails.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_fee_amount" }),
        __metadata("design:type", Number)
    ], PosPaymentExternalDetails.prototype, "sourceFeeAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], PosPaymentExternalDetails.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PosPaymentExternalDetails.prototype, "type", void 0);
    return PosPaymentExternalDetails;
}(utils_1.SpeakeasyBase));
exports.PosPaymentExternalDetails = PosPaymentExternalDetails;
var PosPaymentSourceEnum;
(function (PosPaymentSourceEnum) {
    PosPaymentSourceEnum["Card"] = "card";
    PosPaymentSourceEnum["BankAccount"] = "bank_account";
    PosPaymentSourceEnum["Wallet"] = "wallet";
    PosPaymentSourceEnum["Bnpl"] = "bnpl";
    PosPaymentSourceEnum["Cash"] = "cash";
    PosPaymentSourceEnum["External"] = "external";
    PosPaymentSourceEnum["Other"] = "other";
})(PosPaymentSourceEnum = exports.PosPaymentSourceEnum || (exports.PosPaymentSourceEnum = {}));
var PosPaymentStatusEnum;
(function (PosPaymentStatusEnum) {
    PosPaymentStatusEnum["Approved"] = "approved";
    PosPaymentStatusEnum["Pending"] = "pending";
    PosPaymentStatusEnum["Completed"] = "completed";
    PosPaymentStatusEnum["Canceled"] = "canceled";
    PosPaymentStatusEnum["Failed"] = "failed";
    PosPaymentStatusEnum["Other"] = "other";
})(PosPaymentStatusEnum = exports.PosPaymentStatusEnum || (exports.PosPaymentStatusEnum = {}));
var PosPaymentWalletDetailsStatusEnum;
(function (PosPaymentWalletDetailsStatusEnum) {
    PosPaymentWalletDetailsStatusEnum["Authorized"] = "authorized";
    PosPaymentWalletDetailsStatusEnum["Captured"] = "captured";
    PosPaymentWalletDetailsStatusEnum["Voided"] = "voided";
    PosPaymentWalletDetailsStatusEnum["Failed"] = "failed";
    PosPaymentWalletDetailsStatusEnum["Other"] = "other";
})(PosPaymentWalletDetailsStatusEnum = exports.PosPaymentWalletDetailsStatusEnum || (exports.PosPaymentWalletDetailsStatusEnum = {}));
// PosPaymentWalletDetails
/**
 * Wallet details for this payment. This field is currently not available. Reach out to our team for more info.
**/
var PosPaymentWalletDetails = /** @class */ (function (_super) {
    __extends(PosPaymentWalletDetails, _super);
    function PosPaymentWalletDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PosPaymentWalletDetails.prototype, "status", void 0);
    return PosPaymentWalletDetails;
}(utils_1.SpeakeasyBase));
exports.PosPaymentWalletDetails = PosPaymentWalletDetails;
var PosPaymentCardDetailsInput = /** @class */ (function (_super) {
    __extends(PosPaymentCardDetailsInput, _super);
    function PosPaymentCardDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=card" }),
        __metadata("design:type", paymentcard_2.PaymentCardInput)
    ], PosPaymentCardDetailsInput.prototype, "card", void 0);
    return PosPaymentCardDetailsInput;
}(utils_1.SpeakeasyBase));
exports.PosPaymentCardDetailsInput = PosPaymentCardDetailsInput;
var PosPayment = /** @class */ (function (_super) {
    __extends(PosPayment, _super);
    function PosPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_fee" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "appFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "approved", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bank_account" }),
        __metadata("design:type", posbankaccount_1.PosBankAccount)
    ], PosPayment.prototype, "bankAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=card_details" }),
        __metadata("design:type", PosPaymentCardDetails)
    ], PosPayment.prototype, "cardDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cash" }),
        __metadata("design:type", PosPaymentCashDetails)
    ], PosPayment.prototype, "cash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=change_back_cash_amount" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "changeBackCashAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PosPayment.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "employeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_details" }),
        __metadata("design:type", PosPaymentExternalDetails)
    ], PosPayment.prototype, "externalDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_payment_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "externalPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "idempotencyKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "merchantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "orderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processing_fees" }),
        __metadata("design:type", Array)
    ], PosPayment.prototype, "processingFees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refunded" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "refunded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_charges", elemType: servicecharge_1.ServiceCharge }),
        __metadata("design:type", Array)
    ], PosPayment.prototype, "serviceCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "tax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tender_id" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "tenderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tip" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "tip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PosPayment.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], PosPayment.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], PosPayment.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wallet" }),
        __metadata("design:type", PosPaymentWalletDetails)
    ], PosPayment.prototype, "wallet", void 0);
    return PosPayment;
}(utils_1.SpeakeasyBase));
exports.PosPayment = PosPayment;
var PosPaymentInput = /** @class */ (function (_super) {
    __extends(PosPaymentInput, _super);
    function PosPaymentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=app_fee" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "appFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=approved" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "approved", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bank_account" }),
        __metadata("design:type", posbankaccount_1.PosBankAccount)
    ], PosPaymentInput.prototype, "bankAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=card_details" }),
        __metadata("design:type", PosPaymentCardDetailsInput)
    ], PosPaymentInput.prototype, "cardDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cash" }),
        __metadata("design:type", PosPaymentCashDetails)
    ], PosPaymentInput.prototype, "cash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=change_back_cash_amount" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "changeBackCashAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "customerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "employeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_details" }),
        __metadata("design:type", PosPaymentExternalDetails)
    ], PosPaymentInput.prototype, "externalDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_payment_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "externalPaymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=idempotency_key" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "idempotencyKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "locationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchant_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "merchantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "orderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processing_fees" }),
        __metadata("design:type", Array)
    ], PosPaymentInput.prototype, "processingFees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refunded" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "refunded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_charges", elemType: servicecharge_2.ServiceChargeInput }),
        __metadata("design:type", Array)
    ], PosPaymentInput.prototype, "serviceCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "sourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tax" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "tax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tender_id" }),
        __metadata("design:type", String)
    ], PosPaymentInput.prototype, "tenderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tip" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "tip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], PosPaymentInput.prototype, "total", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wallet" }),
        __metadata("design:type", PosPaymentWalletDetails)
    ], PosPaymentInput.prototype, "wallet", void 0);
    return PosPaymentInput;
}(utils_1.SpeakeasyBase));
exports.PosPaymentInput = PosPaymentInput;
