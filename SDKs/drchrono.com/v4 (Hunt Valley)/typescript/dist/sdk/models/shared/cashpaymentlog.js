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
exports.CashPaymentLog = exports.CashPaymentLogPaymentMethodEnum = exports.CashPaymentLogActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CashPaymentLogActionEnum;
(function (CashPaymentLogActionEnum) {
    CashPaymentLogActionEnum["C"] = "C";
    CashPaymentLogActionEnum["U"] = "U";
    CashPaymentLogActionEnum["D"] = "D";
    CashPaymentLogActionEnum["F"] = "F";
    CashPaymentLogActionEnum["A"] = "A";
})(CashPaymentLogActionEnum = exports.CashPaymentLogActionEnum || (exports.CashPaymentLogActionEnum = {}));
var CashPaymentLogPaymentMethodEnum;
(function (CashPaymentLogPaymentMethodEnum) {
    CashPaymentLogPaymentMethodEnum["Cash"] = "CASH";
    CashPaymentLogPaymentMethodEnum["Chck"] = "CHCK";
    CashPaymentLogPaymentMethodEnum["Dbit"] = "DBIT";
    CashPaymentLogPaymentMethodEnum["Crdt"] = "CRDT";
    CashPaymentLogPaymentMethodEnum["Amex"] = "AMEX";
    CashPaymentLogPaymentMethodEnum["Visa"] = "VISA";
    CashPaymentLogPaymentMethodEnum["Mstr"] = "MSTR";
    CashPaymentLogPaymentMethodEnum["Disc"] = "DISC";
    CashPaymentLogPaymentMethodEnum["Sqr1"] = "SQR1";
    CashPaymentLogPaymentMethodEnum["Sqre"] = "SQRE";
    CashPaymentLogPaymentMethodEnum["Ptpa"] = "PTPA";
    CashPaymentLogPaymentMethodEnum["Onpt"] = "ONPT";
    CashPaymentLogPaymentMethodEnum["Othr"] = "OTHR";
})(CashPaymentLogPaymentMethodEnum = exports.CashPaymentLogPaymentMethodEnum || (exports.CashPaymentLogPaymentMethodEnum = {}));
var CashPaymentLog = /** @class */ (function (_super) {
    __extends(CashPaymentLog, _super);
    function CashPaymentLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], CashPaymentLog.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appointment" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CashPaymentLog.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment_method" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], CashPaymentLog.prototype, "updatedAt", void 0);
    return CashPaymentLog;
}(utils_1.SpeakeasyBase));
exports.CashPaymentLog = CashPaymentLog;
