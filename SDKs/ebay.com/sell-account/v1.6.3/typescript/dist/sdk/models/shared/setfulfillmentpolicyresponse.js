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
exports.SetFulfillmentPolicyResponse = void 0;
var utils_1 = require("../../../internal/utils");
var categorytype_1 = require("./categorytype");
var timeduration_1 = require("./timeduration");
var regionset_1 = require("./regionset");
var shippingoption_1 = require("./shippingoption");
var error_1 = require("./error");
// SetFulfillmentPolicyResponse
/**
 * Complex type that that gets populated with a response containing a fulfillment policy.
**/
var SetFulfillmentPolicyResponse = /** @class */ (function (_super) {
    __extends(SetFulfillmentPolicyResponse, _super);
    function SetFulfillmentPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryTypes", elemType: categorytype_1.CategoryType }),
        __metadata("design:type", Array)
    ], SetFulfillmentPolicyResponse.prototype, "categoryTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SetFulfillmentPolicyResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=freightShipping" }),
        __metadata("design:type", Boolean)
    ], SetFulfillmentPolicyResponse.prototype, "freightShipping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fulfillmentPolicyId" }),
        __metadata("design:type", String)
    ], SetFulfillmentPolicyResponse.prototype, "fulfillmentPolicyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=globalShipping" }),
        __metadata("design:type", Boolean)
    ], SetFulfillmentPolicyResponse.prototype, "globalShipping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handlingTime" }),
        __metadata("design:type", timeduration_1.TimeDuration)
    ], SetFulfillmentPolicyResponse.prototype, "handlingTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localPickup" }),
        __metadata("design:type", Boolean)
    ], SetFulfillmentPolicyResponse.prototype, "localPickup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], SetFulfillmentPolicyResponse.prototype, "marketplaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SetFulfillmentPolicyResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pickupDropOff" }),
        __metadata("design:type", Boolean)
    ], SetFulfillmentPolicyResponse.prototype, "pickupDropOff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipToLocations" }),
        __metadata("design:type", regionset_1.RegionSet)
    ], SetFulfillmentPolicyResponse.prototype, "shipToLocations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingOptions", elemType: shippingoption_1.ShippingOption }),
        __metadata("design:type", Array)
    ], SetFulfillmentPolicyResponse.prototype, "shippingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], SetFulfillmentPolicyResponse.prototype, "warnings", void 0);
    return SetFulfillmentPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.SetFulfillmentPolicyResponse = SetFulfillmentPolicyResponse;
