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
exports.NetworkProfile = void 0;
var utils_1 = require("../../../internal/utils");
var networkprofiletypeenum_1 = require("./networkprofiletypeenum");
// NetworkProfile
/**
 * An array of settings that describes characteristics of a network profile.
**/
var NetworkProfile = /** @class */ (function (_super) {
    __extends(NetworkProfile, _super);
    function NetworkProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], NetworkProfile.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NetworkProfile.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downlinkBandwidthBits" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "downlinkBandwidthBits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downlinkDelayMs" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "downlinkDelayMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downlinkJitterMs" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "downlinkJitterMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downlinkLossPercent" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "downlinkLossPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NetworkProfile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NetworkProfile.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uplinkBandwidthBits" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "uplinkBandwidthBits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uplinkDelayMs" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "uplinkDelayMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uplinkJitterMs" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "uplinkJitterMs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uplinkLossPercent" }),
        __metadata("design:type", Number)
    ], NetworkProfile.prototype, "uplinkLossPercent", void 0);
    return NetworkProfile;
}(utils_1.SpeakeasyBase));
exports.NetworkProfile = NetworkProfile;
