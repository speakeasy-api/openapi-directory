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
exports.Studio = void 0;
var utils_1 = require("../../../internal/utils");
var studiostateenum_1 = require("./studiostateenum");
var studiostatuscodeenum_1 = require("./studiostatuscodeenum");
var studioencryptionconfiguration_1 = require("./studioencryptionconfiguration");
var Studio = /** @class */ (function (_super) {
    __extends(Studio, _super);
    function Studio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adminRoleArn" }),
        __metadata("design:type", String)
    ], Studio.prototype, "adminRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Studio.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Studio.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Studio.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homeRegion" }),
        __metadata("design:type", String)
    ], Studio.prototype, "homeRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssoClientId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "ssoClientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Studio.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], Studio.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], Studio.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=studioEncryptionConfiguration" }),
        __metadata("design:type", studioencryptionconfiguration_1.StudioEncryptionConfiguration)
    ], Studio.prototype, "studioEncryptionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=studioId" }),
        __metadata("design:type", String)
    ], Studio.prototype, "studioId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=studioName" }),
        __metadata("design:type", String)
    ], Studio.prototype, "studioName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=studioUrl" }),
        __metadata("design:type", String)
    ], Studio.prototype, "studioUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], Studio.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], Studio.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userRoleArn" }),
        __metadata("design:type", String)
    ], Studio.prototype, "userRoleArn", void 0);
    return Studio;
}(utils_1.SpeakeasyBase));
exports.Studio = Studio;
