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
exports.EobObject = exports.EobObjectPaymentMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var EobObjectPaymentMethodEnum;
(function (EobObjectPaymentMethodEnum) {
    EobObjectPaymentMethodEnum["Unknown"] = "";
    EobObjectPaymentMethodEnum["Ach"] = "ACH";
    EobObjectPaymentMethodEnum["Bopccp"] = "BOPCCP";
    EobObjectPaymentMethodEnum["Bopctx"] = "BOPCTX";
    EobObjectPaymentMethodEnum["Chk"] = "CHK";
    EobObjectPaymentMethodEnum["Fwt"] = "FWT";
    EobObjectPaymentMethodEnum["Vpay"] = "VPAY";
    EobObjectPaymentMethodEnum["Non"] = "NON";
})(EobObjectPaymentMethodEnum = exports.EobObjectPaymentMethodEnum || (exports.EobObjectPaymentMethodEnum = {}));
var EobObject = /** @class */ (function (_super) {
    __extends(EobObject, _super);
    function EobObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=check_date" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "checkDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deposit_date" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "depositDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doctor" }),
        __metadata("design:type", Number)
    ], EobObject.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], EobObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_id" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "insurancePayerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_name" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "insurancePayerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_payer_trace_number" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "insurancePayerTraceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment_method" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=posted_date" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "postedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scanned_eob" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "scannedEob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_paid" }),
        __metadata("design:type", Number)
    ], EobObject.prototype, "totalPaid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], EobObject.prototype, "updatedAt", void 0);
    return EobObject;
}(utils_1.SpeakeasyBase));
exports.EobObject = EobObject;
