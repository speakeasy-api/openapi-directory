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
exports.UpdateSecurityProfileResponse = void 0;
var utils_1 = require("../../../internal/utils");
var alerttarget_1 = require("./alerttarget");
var behavior_1 = require("./behavior");
var metrictoretain_1 = require("./metrictoretain");
var class_transformer_1 = require("class-transformer");
/**
 * Success
 */
var UpdateSecurityProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateSecurityProfileResponse, _super);
    function UpdateSecurityProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "additionalMetricsToRetain" }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileResponse.prototype, "additionalMetricsToRetain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: metrictoretain_1.MetricToRetain }),
        (0, class_transformer_1.Expose)({ name: "additionalMetricsToRetainV2" }),
        (0, class_transformer_1.Type)(function () { return metrictoretain_1.MetricToRetain; }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileResponse.prototype, "additionalMetricsToRetainV2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: alerttarget_1.AlertTarget }),
        (0, class_transformer_1.Expose)({ name: "alertTargets" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            var obj = {};
            for (var key in value) {
                obj[key] = (0, utils_1.objectToClass)(value[key], alerttarget_1.AlertTarget);
            }
            return obj;
        }, { toClassOnly: true }),
        __metadata("design:type", Object)
    ], UpdateSecurityProfileResponse.prototype, "alertTargets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: behavior_1.Behavior }),
        (0, class_transformer_1.Expose)({ name: "behaviors" }),
        (0, class_transformer_1.Type)(function () { return behavior_1.Behavior; }),
        __metadata("design:type", Array)
    ], UpdateSecurityProfileResponse.prototype, "behaviors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creationDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], UpdateSecurityProfileResponse.prototype, "creationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "lastModifiedDate" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], UpdateSecurityProfileResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "securityProfileArn" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileResponse.prototype, "securityProfileArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "securityProfileDescription" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileResponse.prototype, "securityProfileDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "securityProfileName" }),
        __metadata("design:type", String)
    ], UpdateSecurityProfileResponse.prototype, "securityProfileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "version" }),
        __metadata("design:type", Number)
    ], UpdateSecurityProfileResponse.prototype, "version", void 0);
    return UpdateSecurityProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSecurityProfileResponse = UpdateSecurityProfileResponse;
