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
exports.ProductInput = exports.Product = void 0;
var utils_1 = require("../../../internal/utils");
var currencyenum_1 = require("./currencyenum");
var vatenum_1 = require("./vatenum");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], Product.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Product.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=general_ledger_number" }),
        __metadata("design:type", String)
    ], Product.prototype, "generalLedgerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=general_ledger_taxcode" }),
        __metadata("design:type", String)
    ], Product.prototype, "generalLedgerTaxcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net_unit_price" }),
        __metadata("design:type", Number)
    ], Product.prototype, "netUnitPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], Product.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vat" }),
        __metadata("design:type", String)
    ], Product.prototype, "vat", void 0);
    return Product;
}(utils_1.SpeakeasyBase));
exports.Product = Product;
var ProductInput = /** @class */ (function (_super) {
    __extends(ProductInput, _super);
    function ProductInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=general_ledger_number" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "generalLedgerNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=general_ledger_taxcode" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "generalLedgerTaxcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net_unit_price" }),
        __metadata("design:type", Number)
    ], ProductInput.prototype, "netUnitPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vat" }),
        __metadata("design:type", String)
    ], ProductInput.prototype, "vat", void 0);
    return ProductInput;
}(utils_1.SpeakeasyBase));
exports.ProductInput = ProductInput;
