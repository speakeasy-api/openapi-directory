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
exports.DomainValidation = void 0;
var utils_1 = require("../../../internal/utils");
var domainstatusenum_1 = require("./domainstatusenum");
var resourcerecord_1 = require("./resourcerecord");
var validationmethodenum_1 = require("./validationmethodenum");
var class_transformer_1 = require("class-transformer");
/**
 * Contains information about the validation of each domain name in the certificate.
 */
var DomainValidation = /** @class */ (function (_super) {
    __extends(DomainValidation, _super);
    function DomainValidation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DomainName" }),
        __metadata("design:type", String)
    ], DomainValidation.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ResourceRecord" }),
        (0, class_transformer_1.Type)(function () { return resourcerecord_1.ResourceRecord; }),
        __metadata("design:type", resourcerecord_1.ResourceRecord)
    ], DomainValidation.prototype, "resourceRecord", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ValidationDomain" }),
        __metadata("design:type", String)
    ], DomainValidation.prototype, "validationDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ValidationEmails" }),
        __metadata("design:type", Array)
    ], DomainValidation.prototype, "validationEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ValidationMethod" }),
        __metadata("design:type", String)
    ], DomainValidation.prototype, "validationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ValidationStatus" }),
        __metadata("design:type", String)
    ], DomainValidation.prototype, "validationStatus", void 0);
    return DomainValidation;
}(utils_1.SpeakeasyBase));
exports.DomainValidation = DomainValidation;
