"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.NewPaymentRequestResponse = exports.NewPaymentRequestNewPaymentRequestResponse = exports.NewPaymentRequestNewPaymentRequestResponseTypeEnum = exports.NewPaymentRequestNewPaymentRequest = exports.NewPaymentRequestNewPaymentRequestTypeEnum = exports.NewPaymentRequestNewPaymentRequestOrderDetails = exports.NewPaymentRequestNewPaymentRequestCurrencyEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.
 */
var NewPaymentRequestNewPaymentRequestCurrencyEnum;
(function (NewPaymentRequestNewPaymentRequestCurrencyEnum) {
    NewPaymentRequestNewPaymentRequestCurrencyEnum["Eur"] = "EUR";
    NewPaymentRequestNewPaymentRequestCurrencyEnum["Gbp"] = "GBP";
})(NewPaymentRequestNewPaymentRequestCurrencyEnum = exports.NewPaymentRequestNewPaymentRequestCurrencyEnum || (exports.NewPaymentRequestNewPaymentRequestCurrencyEnum = {}));
var NewPaymentRequestNewPaymentRequestOrderDetails = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequestOrderDetails, _super);
    function NewPaymentRequestNewPaymentRequestOrderDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment1" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "comment1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment2" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "comment2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customerNumber" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "customerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryAddressLine1" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryAddressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryAddressLine2" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryAddressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryCity" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryCountry" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryPostCode" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "deliveryPostCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merchantCustomerIdentification" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "merchantCustomerIdentification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merchantNumber" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "merchantNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderId" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "orderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "productId" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "variableReference" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestOrderDetails.prototype, "variableReference", void 0);
    return NewPaymentRequestNewPaymentRequestOrderDetails;
}(utils_1.SpeakeasyBase));
exports.NewPaymentRequestNewPaymentRequestOrderDetails = NewPaymentRequestNewPaymentRequestOrderDetails;
/**
 * The type of Fire Open Payment that was created
 */
var NewPaymentRequestNewPaymentRequestTypeEnum;
(function (NewPaymentRequestNewPaymentRequestTypeEnum) {
    NewPaymentRequestNewPaymentRequestTypeEnum["Other"] = "OTHER";
})(NewPaymentRequestNewPaymentRequestTypeEnum = exports.NewPaymentRequestNewPaymentRequestTypeEnum || (exports.NewPaymentRequestNewPaymentRequestTypeEnum = {}));
/**
 * Details of the new payment request
 */
var NewPaymentRequestNewPaymentRequest = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequest, _super);
    function NewPaymentRequestNewPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "additionalFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "additionalFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "amount" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "collectFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "collectFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "currency" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "expiry" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], NewPaymentRequestNewPaymentRequest.prototype, "expiry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "icanTo" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "icanTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mandatoryFields" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "mandatoryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "maxNumberPayments" }),
        __metadata("design:type", Number)
    ], NewPaymentRequestNewPaymentRequest.prototype, "maxNumberPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "myRef" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "myRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderDetails" }),
        (0, class_transformer_1.Type)(function () { return NewPaymentRequestNewPaymentRequestOrderDetails; }),
        __metadata("design:type", NewPaymentRequestNewPaymentRequestOrderDetails)
    ], NewPaymentRequestNewPaymentRequest.prototype, "orderDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "returnUrl" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "returnUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequest.prototype, "type", void 0);
    return NewPaymentRequestNewPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.NewPaymentRequestNewPaymentRequest = NewPaymentRequestNewPaymentRequest;
/**
 * The type of Fire Open Payment that was created.
 */
var NewPaymentRequestNewPaymentRequestResponseTypeEnum;
(function (NewPaymentRequestNewPaymentRequestResponseTypeEnum) {
    NewPaymentRequestNewPaymentRequestResponseTypeEnum["Other"] = "OTHER";
})(NewPaymentRequestNewPaymentRequestResponseTypeEnum = exports.NewPaymentRequestNewPaymentRequestResponseTypeEnum || (exports.NewPaymentRequestNewPaymentRequestResponseTypeEnum = {}));
/**
 * Payment Request created successfully
 */
var NewPaymentRequestNewPaymentRequestResponse = /** @class */ (function (_super) {
    __extends(NewPaymentRequestNewPaymentRequestResponse, _super);
    function NewPaymentRequestNewPaymentRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestResponse.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], NewPaymentRequestNewPaymentRequestResponse.prototype, "type", void 0);
    return NewPaymentRequestNewPaymentRequestResponse;
}(utils_1.SpeakeasyBase));
exports.NewPaymentRequestNewPaymentRequestResponse = NewPaymentRequestNewPaymentRequestResponse;
var NewPaymentRequestResponse = /** @class */ (function (_super) {
    __extends(NewPaymentRequestResponse, _super);
    function NewPaymentRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NewPaymentRequestResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NewPaymentRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], NewPaymentRequestResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NewPaymentRequestNewPaymentRequestResponse)
    ], NewPaymentRequestResponse.prototype, "newPaymentRequestResponse", void 0);
    return NewPaymentRequestResponse;
}(utils_1.SpeakeasyBase));
exports.NewPaymentRequestResponse = NewPaymentRequestResponse;
