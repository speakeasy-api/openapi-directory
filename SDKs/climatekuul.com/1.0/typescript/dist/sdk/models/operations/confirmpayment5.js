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
exports.ConfirmPayment5Response = exports.ConfirmPayment5Request = exports.ConfirmPayment5RequestBody = exports.ConfirmPayment5ServerList = void 0;
var utils_1 = require("../../../internal/utils");
exports.ConfirmPayment5ServerList = [
    "http://api.climatekuul.com:8000/footprint",
];
var ConfirmPayment5RequestBody = /** @class */ (function (_super) {
    __extends(ConfirmPayment5RequestBody, _super);
    function ConfirmPayment5RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l1;" }),
        __metadata("design:type", String)
    ], ConfirmPayment5RequestBody.prototype, "apiKeyL1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=apiKey_l2;" }),
        __metadata("design:type", String)
    ], ConfirmPayment5RequestBody.prototype, "apiKeyL2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=confirmPayment;" }),
        __metadata("design:type", String)
    ], ConfirmPayment5RequestBody.prototype, "confirmPayment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=paymentID;" }),
        __metadata("design:type", Number)
    ], ConfirmPayment5RequestBody.prototype, "paymentID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=transaction_id;" }),
        __metadata("design:type", String)
    ], ConfirmPayment5RequestBody.prototype, "transactionId", void 0);
    return ConfirmPayment5RequestBody;
}(utils_1.SpeakeasyBase));
exports.ConfirmPayment5RequestBody = ConfirmPayment5RequestBody;
var ConfirmPayment5Request = /** @class */ (function (_super) {
    __extends(ConfirmPayment5Request, _super);
    function ConfirmPayment5Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConfirmPayment5Request.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", ConfirmPayment5RequestBody)
    ], ConfirmPayment5Request.prototype, "request", void 0);
    return ConfirmPayment5Request;
}(utils_1.SpeakeasyBase));
exports.ConfirmPayment5Request = ConfirmPayment5Request;
var ConfirmPayment5Response = /** @class */ (function (_super) {
    __extends(ConfirmPayment5Response, _super);
    function ConfirmPayment5Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ConfirmPayment5Response.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ConfirmPayment5Response.prototype, "statusCode", void 0);
    return ConfirmPayment5Response;
}(utils_1.SpeakeasyBase));
exports.ConfirmPayment5Response = ConfirmPayment5Response;
