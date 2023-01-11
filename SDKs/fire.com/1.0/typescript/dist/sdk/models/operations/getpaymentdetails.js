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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentDetailsResponse = exports.GetPaymentDetailsRequest = exports.GetPaymentDetailsPaymentRequest = exports.GetPaymentDetailsPaymentRequestTypeEnum = exports.GetPaymentDetailsPaymentRequestTransactionTypeEnum = exports.GetPaymentDetailsPaymentRequestStatusEnum = exports.GetPaymentDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPaymentDetailsPathParams = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsPathParams, _super);
    function GetPaymentDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=paymentUuid" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPathParams.prototype, "paymentUuid", void 0);
    return GetPaymentDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPaymentDetailsPathParams = GetPaymentDetailsPathParams;
var GetPaymentDetailsPaymentRequestStatusEnum;
(function (GetPaymentDetailsPaymentRequestStatusEnum) {
    GetPaymentDetailsPaymentRequestStatusEnum["AwaitingAuthorisation"] = "AWAITING_AUTHORISATION";
    GetPaymentDetailsPaymentRequestStatusEnum["Authorised"] = "AUTHORISED";
    GetPaymentDetailsPaymentRequestStatusEnum["AwaitingMultiAuthorisation"] = "AWAITING_MULTI_AUTHORISATION";
    GetPaymentDetailsPaymentRequestStatusEnum["NotAuthorised"] = "NOT_AUTHORISED";
    GetPaymentDetailsPaymentRequestStatusEnum["Paid"] = "PAID";
    GetPaymentDetailsPaymentRequestStatusEnum["Rejected"] = "REJECTED";
    GetPaymentDetailsPaymentRequestStatusEnum["Accepted"] = "ACCEPTED";
    GetPaymentDetailsPaymentRequestStatusEnum["Received"] = "RECEIVED";
})(GetPaymentDetailsPaymentRequestStatusEnum = exports.GetPaymentDetailsPaymentRequestStatusEnum || (exports.GetPaymentDetailsPaymentRequestStatusEnum = {}));
var GetPaymentDetailsPaymentRequestTransactionTypeEnum;
(function (GetPaymentDetailsPaymentRequestTransactionTypeEnum) {
    GetPaymentDetailsPaymentRequestTransactionTypeEnum["RefundRequest"] = "REFUND_REQUEST";
    GetPaymentDetailsPaymentRequestTransactionTypeEnum["Payment"] = "PAYMENT";
})(GetPaymentDetailsPaymentRequestTransactionTypeEnum = exports.GetPaymentDetailsPaymentRequestTransactionTypeEnum || (exports.GetPaymentDetailsPaymentRequestTransactionTypeEnum = {}));
var GetPaymentDetailsPaymentRequestTypeEnum;
(function (GetPaymentDetailsPaymentRequestTypeEnum) {
    GetPaymentDetailsPaymentRequestTypeEnum["Other"] = "OTHER";
})(GetPaymentDetailsPaymentRequestTypeEnum = exports.GetPaymentDetailsPaymentRequestTypeEnum || (exports.GetPaymentDetailsPaymentRequestTypeEnum = {}));
var GetPaymentDetailsPaymentRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsPaymentRequest, _super);
    function GetPaymentDetailsPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "additionalFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collectFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "collectFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency)
    ], GetPaymentDetailsPaymentRequest.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiry" }),
        __metadata("design:type", Date)
    ], GetPaymentDetailsPaymentRequest.prototype, "expiry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=icanTo" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "icanTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mandatoryFields" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "mandatoryFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxNumberPayments" }),
        __metadata("design:type", Number)
    ], GetPaymentDetailsPaymentRequest.prototype, "maxNumberPayments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=myRef" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "myRef", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderDetails" }),
        __metadata("design:type", shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails)
    ], GetPaymentDetailsPaymentRequest.prototype, "orderDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentRequestCode" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "paymentRequestCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentUuid" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "paymentUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnUrl" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "returnUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionType" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "transactionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhookUrl" }),
        __metadata("design:type", String)
    ], GetPaymentDetailsPaymentRequest.prototype, "webhookUrl", void 0);
    return GetPaymentDetailsPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentDetailsPaymentRequest = GetPaymentDetailsPaymentRequest;
var GetPaymentDetailsRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsRequest, _super);
    function GetPaymentDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentDetailsPathParams)
    ], GetPaymentDetailsRequest.prototype, "pathParams", void 0);
    return GetPaymentDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPaymentDetailsRequest = GetPaymentDetailsRequest;
var GetPaymentDetailsResponse = /** @class */ (function (_super) {
    __extends(GetPaymentDetailsResponse, _super);
    function GetPaymentDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPaymentDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPaymentDetailsPaymentRequest)
    ], GetPaymentDetailsResponse.prototype, "paymentRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPaymentDetailsResponse.prototype, "statusCode", void 0);
    return GetPaymentDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPaymentDetailsResponse = GetPaymentDetailsResponse;
