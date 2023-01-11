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
exports.Offer = void 0;
var utils_1 = require("../../../internal/utils");
var user_1 = require("./user");
var timeduration_1 = require("./timeduration");
var offereditem_1 = require("./offereditem");
// Offer
/**
 * A complex type that defines an offer that a seller makes to eligible buyers.
**/
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowCounterOffer" }),
        __metadata("design:type", Boolean)
    ], Offer.prototype, "allowCounterOffer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyer" }),
        __metadata("design:type", user_1.User)
    ], Offer.prototype, "buyer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDate" }),
        __metadata("design:type", String)
    ], Offer.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initiatedBy" }),
        __metadata("design:type", String)
    ], Offer.prototype, "initiatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastModifiedDate" }),
        __metadata("design:type", String)
    ], Offer.prototype, "lastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Offer.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerDuration" }),
        __metadata("design:type", timeduration_1.TimeDuration)
    ], Offer.prototype, "offerDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], Offer.prototype, "offerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerStatus" }),
        __metadata("design:type", String)
    ], Offer.prototype, "offerStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerType" }),
        __metadata("design:type", String)
    ], Offer.prototype, "offerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offeredItems", elemType: offereditem_1.OfferedItem }),
        __metadata("design:type", Array)
    ], Offer.prototype, "offeredItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], Offer.prototype, "revision", void 0);
    return Offer;
}(utils_1.SpeakeasyBase));
exports.Offer = Offer;
