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
exports.BankAccountInput = exports.BankAccount = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number_iban" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "accountNumberIban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BankAccount.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=need_qr" }),
        __metadata("design:type", Boolean)
    ], BankAccount.prototype, "needQr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=swift" }),
        __metadata("design:type", String)
    ], BankAccount.prototype, "swift", void 0);
    return BankAccount;
}(utils_1.SpeakeasyBase));
exports.BankAccount = BankAccount;
var BankAccountInput = /** @class */ (function (_super) {
    __extends(BankAccountInput, _super);
    function BankAccountInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number" }),
        __metadata("design:type", String)
    ], BankAccountInput.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_number_iban" }),
        __metadata("design:type", String)
    ], BankAccountInput.prototype, "accountNumberIban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], BankAccountInput.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BankAccountInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=need_qr" }),
        __metadata("design:type", Boolean)
    ], BankAccountInput.prototype, "needQr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=swift" }),
        __metadata("design:type", String)
    ], BankAccountInput.prototype, "swift", void 0);
    return BankAccountInput;
}(utils_1.SpeakeasyBase));
exports.BankAccountInput = BankAccountInput;
