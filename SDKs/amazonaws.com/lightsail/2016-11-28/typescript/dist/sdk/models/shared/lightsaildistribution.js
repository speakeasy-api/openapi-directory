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
exports.LightsailDistribution = void 0;
var utils_1 = require("../../../internal/utils");
var cachesettings_1 = require("./cachesettings");
var cachebehaviorperpath_1 = require("./cachebehaviorperpath");
var cachebehavior_1 = require("./cachebehavior");
var ipaddresstypeenum_1 = require("./ipaddresstypeenum");
var resourcelocation_1 = require("./resourcelocation");
var origin_1 = require("./origin");
var resourcetypeenum_1 = require("./resourcetypeenum");
var tag_1 = require("./tag");
// LightsailDistribution
/**
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
**/
var LightsailDistribution = /** @class */ (function (_super) {
    __extends(LightsailDistribution, _super);
    function LightsailDistribution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ableToUpdateBundle" }),
        __metadata("design:type", Boolean)
    ], LightsailDistribution.prototype, "ableToUpdateBundle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternativeDomainNames" }),
        __metadata("design:type", Array)
    ], LightsailDistribution.prototype, "alternativeDomainNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "bundleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cacheBehaviorSettings" }),
        __metadata("design:type", cachesettings_1.CacheSettings)
    ], LightsailDistribution.prototype, "cacheBehaviorSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cacheBehaviors", elemType: cachebehaviorperpath_1.CacheBehaviorPerPath }),
        __metadata("design:type", Array)
    ], LightsailDistribution.prototype, "cacheBehaviors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateName" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "certificateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], LightsailDistribution.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultCacheBehavior" }),
        __metadata("design:type", cachebehavior_1.CacheBehavior)
    ], LightsailDistribution.prototype, "defaultCacheBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddressType" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "ipAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isEnabled" }),
        __metadata("design:type", Boolean)
    ], LightsailDistribution.prototype, "isEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", resourcelocation_1.ResourceLocation)
    ], LightsailDistribution.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=origin" }),
        __metadata("design:type", origin_1.Origin)
    ], LightsailDistribution.prototype, "origin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originPublicDNS" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "originPublicDNS", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], LightsailDistribution.prototype, "supportCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], LightsailDistribution.prototype, "tags", void 0);
    return LightsailDistribution;
}(utils_1.SpeakeasyBase));
exports.LightsailDistribution = LightsailDistribution;
