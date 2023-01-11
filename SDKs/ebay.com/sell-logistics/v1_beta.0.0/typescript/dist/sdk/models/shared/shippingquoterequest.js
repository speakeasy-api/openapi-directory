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
exports.ShippingQuoteRequest = void 0;
var utils_1 = require("../../../internal/utils");
var order_1 = require("./order");
var packagespecification_1 = require("./packagespecification");
var contact_1 = require("./contact");
// ShippingQuoteRequest
/**
 * This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
**/
var ShippingQuoteRequest = /** @class */ (function (_super) {
    __extends(ShippingQuoteRequest, _super);
    function ShippingQuoteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orders", elemType: order_1.Order }),
        __metadata("design:type", Array)
    ], ShippingQuoteRequest.prototype, "orders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packageSpecification" }),
        __metadata("design:type", packagespecification_1.PackageSpecification)
    ], ShippingQuoteRequest.prototype, "packageSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipFrom" }),
        __metadata("design:type", contact_1.Contact)
    ], ShippingQuoteRequest.prototype, "shipFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipTo" }),
        __metadata("design:type", contact_1.Contact)
    ], ShippingQuoteRequest.prototype, "shipTo", void 0);
    return ShippingQuoteRequest;
}(utils_1.SpeakeasyBase));
exports.ShippingQuoteRequest = ShippingQuoteRequest;
