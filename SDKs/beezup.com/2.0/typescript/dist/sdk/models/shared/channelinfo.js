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
exports.ChannelInfo = exports.ChannelInfoTechnicalContact = exports.ChannelInfoSalesContact = exports.ChannelInfoKeyNumbers = exports.ChannelInfoDetails = void 0;
var utils_1 = require("../../../internal/utils");
var ChannelInfoDetails = /** @class */ (function (_super) {
    __extends(ChannelInfoDetails, _super);
    function ChannelInfoDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=businessModel" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "businessModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelType" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costs" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "costs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeUrl" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "homeUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionLink" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "subscriptionLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingType" }),
        __metadata("design:type", String)
    ], ChannelInfoDetails.prototype, "trackingType", void 0);
    return ChannelInfoDetails;
}(utils_1.SpeakeasyBase));
exports.ChannelInfoDetails = ChannelInfoDetails;
var ChannelInfoKeyNumbers = /** @class */ (function (_super) {
    __extends(ChannelInfoKeyNumbers, _super);
    function ChannelInfoKeyNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", String)
    ], ChannelInfoKeyNumbers.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products" }),
        __metadata("design:type", String)
    ], ChannelInfoKeyNumbers.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stores" }),
        __metadata("design:type", String)
    ], ChannelInfoKeyNumbers.prototype, "stores", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=viewsPerMonth" }),
        __metadata("design:type", String)
    ], ChannelInfoKeyNumbers.prototype, "viewsPerMonth", void 0);
    return ChannelInfoKeyNumbers;
}(utils_1.SpeakeasyBase));
exports.ChannelInfoKeyNumbers = ChannelInfoKeyNumbers;
var ChannelInfoSalesContact = /** @class */ (function (_super) {
    __extends(ChannelInfoSalesContact, _super);
    function ChannelInfoSalesContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ChannelInfoSalesContact.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChannelInfoSalesContact.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], ChannelInfoSalesContact.prototype, "phoneNumber", void 0);
    return ChannelInfoSalesContact;
}(utils_1.SpeakeasyBase));
exports.ChannelInfoSalesContact = ChannelInfoSalesContact;
var ChannelInfoTechnicalContact = /** @class */ (function (_super) {
    __extends(ChannelInfoTechnicalContact, _super);
    function ChannelInfoTechnicalContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ChannelInfoTechnicalContact.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ChannelInfoTechnicalContact.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], ChannelInfoTechnicalContact.prototype, "phoneNumber", void 0);
    return ChannelInfoTechnicalContact;
}(utils_1.SpeakeasyBase));
exports.ChannelInfoTechnicalContact = ChannelInfoTechnicalContact;
var ChannelInfo = /** @class */ (function (_super) {
    __extends(ChannelInfo, _super);
    function ChannelInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPOffer" }),
        __metadata("design:type", String)
    ], ChannelInfo.prototype, "beezUPOffer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelDescription" }),
        __metadata("design:type", String)
    ], ChannelInfo.prototype, "channelDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], ChannelInfo.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelLogoUrl" }),
        __metadata("design:type", String)
    ], ChannelInfo.prototype, "channelLogoUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelName" }),
        __metadata("design:type", String)
    ], ChannelInfo.prototype, "channelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", ChannelInfoDetails)
    ], ChannelInfo.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keyNumbers" }),
        __metadata("design:type", ChannelInfoKeyNumbers)
    ], ChannelInfo.prototype, "keyNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salesContact" }),
        __metadata("design:type", ChannelInfoSalesContact)
    ], ChannelInfo.prototype, "salesContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=technicalContact" }),
        __metadata("design:type", ChannelInfoTechnicalContact)
    ], ChannelInfo.prototype, "technicalContact", void 0);
    return ChannelInfo;
}(utils_1.SpeakeasyBase));
exports.ChannelInfo = ChannelInfo;
