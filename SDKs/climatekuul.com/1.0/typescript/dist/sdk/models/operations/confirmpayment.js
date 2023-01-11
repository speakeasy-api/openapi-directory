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
exports.ConfirmPaymentResponse = exports.ConfirmPaymentRequest = exports.ConfirmPaymentRequestBody = exports.ConfirmPaymentServerList = void 0;
var utils_1 = require("../../../internal/utils");
exports.ConfirmPaymentServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmPaymentRequestBody = /** @class */ (function (_super) {
    __extends(ConfirmPaymentRequestBody, _super);
    function ConfirmPaymentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], ConfirmPaymentRequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], ConfirmPaymentRequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=confirmPayment;" }),
        __metadata("design:type", String)
    ], ConfirmPaymentRequestBody.prototype, "confirmPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=paymentID;" }),
        __metadata("design:type", Number)
    ], ConfirmPaymentRequestBody.prototype, "paymentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmPaymentRequestBody.prototype, "transactionId", void 0);
    return ConfirmPaymentRequestBody;
}(utils_1.SpeakeasyBase));
exports.ConfirmPaymentRequestBody = ConfirmPaymentRequestBody;
var ConfirmPaymentRequest = /** @class */ (function (_super) {
    __extends(ConfirmPaymentRequest, _super);
    function ConfirmPaymentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConfirmPaymentRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmPaymentRequestBody)
    ], ConfirmPaymentRequest.prototype, "request", void 0);
    return ConfirmPaymentRequest;
}(utils_1.SpeakeasyBase));
exports.ConfirmPaymentRequest = ConfirmPaymentRequest;
var ConfirmPaymentResponse = /** @class */ (function (_super) {
    __extends(ConfirmPaymentResponse, _super);
    function ConfirmPaymentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConfirmPaymentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ConfirmPaymentResponse.prototype, "statusCode", void 0);
    return ConfirmPaymentResponse;
}(utils_1.SpeakeasyBase));
exports.ConfirmPaymentResponse = ConfirmPaymentResponse;
