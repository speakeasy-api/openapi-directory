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
exports.AssessmentFrameworkShareRequest = void 0;
var utils_1 = require("../../../internal/utils");
var sharerequeststatusenum_1 = require("./sharerequeststatusenum");
var class_transformer_1 = require("class-transformer");
/**
 *  Represents a share request for a custom framework in Audit Manager.
 */
var AssessmentFrameworkShareRequest = /** @class */ (function (_super) {
    __extends(AssessmentFrameworkShareRequest, _super);
    function AssessmentFrameworkShareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "complianceType" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "complianceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creationTime" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], AssessmentFrameworkShareRequest.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customControlsCount" }),
        __metadata("design:type", Number)
    ], AssessmentFrameworkShareRequest.prototype, "customControlsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "destinationAccount" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "destinationAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "destinationRegion" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "destinationRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "expirationTime" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], AssessmentFrameworkShareRequest.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "frameworkDescription" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "frameworkDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "frameworkId" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "frameworkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "frameworkName" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "frameworkName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "lastUpdated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], AssessmentFrameworkShareRequest.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sourceAccount" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "sourceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "standardControlsCount" }),
        __metadata("design:type", Number)
    ], AssessmentFrameworkShareRequest.prototype, "standardControlsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], AssessmentFrameworkShareRequest.prototype, "status", void 0);
    return AssessmentFrameworkShareRequest;
}(utils_1.SpeakeasyBase));
exports.AssessmentFrameworkShareRequest = AssessmentFrameworkShareRequest;
