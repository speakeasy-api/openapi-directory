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
exports.GetInvoiceItemsResponse = void 0;
var utils_1 = require("../../../internal/utils");
var invoiceitem_1 = require("./invoiceitem");
var links_1 = require("./links");
var meta_1 = require("./meta");
var class_transformer_1 = require("class-transformer");
/**
 * InvoiceItems
 */
var GetInvoiceItemsResponse = /** @class */ (function (_super) {
    __extends(GetInvoiceItemsResponse, _super);
    function GetInvoiceItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: invoiceitem_1.InvoiceItem }),
        (0, class_transformer_1.Expose)({ name: "data" }),
        (0, class_transformer_1.Type)(function () { return invoiceitem_1.InvoiceItem; }),
        __metadata("design:type", Array)
    ], GetInvoiceItemsResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "links" }),
        (0, class_transformer_1.Type)(function () { return links_1.Links; }),
        __metadata("design:type", links_1.Links)
    ], GetInvoiceItemsResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "meta" }),
        (0, class_transformer_1.Type)(function () { return meta_1.Meta; }),
        __metadata("design:type", meta_1.Meta)
    ], GetInvoiceItemsResponse.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "operation" }),
        __metadata("design:type", String)
    ], GetInvoiceItemsResponse.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "resource" }),
        __metadata("design:type", String)
    ], GetInvoiceItemsResponse.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "service" }),
        __metadata("design:type", String)
    ], GetInvoiceItemsResponse.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], GetInvoiceItemsResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status_code" }),
        __metadata("design:type", Number)
    ], GetInvoiceItemsResponse.prototype, "statusCode", void 0);
    return GetInvoiceItemsResponse;
}(utils_1.SpeakeasyBase));
exports.GetInvoiceItemsResponse = GetInvoiceItemsResponse;
