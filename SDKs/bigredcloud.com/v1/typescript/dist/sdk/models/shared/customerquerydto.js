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
exports.CustomerQueryDto = void 0;
var utils_1 = require("../../../internal/utils");
var eftbankdto_1 = require("./eftbankdto");
var class_transformer_1 = require("class-transformer");
var CustomerQueryDto = /** @class */ (function (_super) {
    __extends(CustomerQueryDto, _super);
    function CustomerQueryDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountName" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountNumber" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "accountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "additionalEmails" }),
        __metadata("design:type", Array)
    ], CustomerQueryDto.prototype, "additionalEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address" }),
        __metadata("design:type", Array)
    ], CustomerQueryDto.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "authCode" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "authCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bank" }),
        (0, class_transformer_1.Type)(function () { return eftbankdto_1.EFTBankDto; }),
        __metadata("design:type", eftbankdto_1.EFTBankDto)
    ], CustomerQueryDto.prototype, "bank", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "businessIdentifierCode" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "businessIdentifierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "code" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "contact" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "delivery" }),
        __metadata("design:type", Array)
    ], CustomerQueryDto.prototype, "delivery", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "eFTReference" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "eFTReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "email" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fax" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "fax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], CustomerQueryDto.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "internationalBankAccountNumber" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "internationalBankAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mobile" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "mobile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ourCode" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "ourCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ownerTypeId" }),
        __metadata("design:type", Number)
    ], CustomerQueryDto.prototype, "ownerTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "phone" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "timestamp" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vatAnalysisTypeId" }),
        __metadata("design:type", Number)
    ], CustomerQueryDto.prototype, "vatAnalysisTypeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vatReg" }),
        __metadata("design:type", String)
    ], CustomerQueryDto.prototype, "vatReg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "vatType" }),
        __metadata("design:type", Number)
    ], CustomerQueryDto.prototype, "vatType", void 0);
    return CustomerQueryDto;
}(utils_1.SpeakeasyBase));
exports.CustomerQueryDto = CustomerQueryDto;
