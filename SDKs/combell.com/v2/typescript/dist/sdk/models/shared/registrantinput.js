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
exports.RegistrantInput = void 0;
var utils_1 = require("../../../internal/utils");
var extrafield_1 = require("./extrafield");
var class_transformer_1 = require("class-transformer");
var RegistrantInput = /** @class */ (function (_super) {
    __extends(RegistrantInput, _super);
    function RegistrantInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "address" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "city" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "company_name" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "country_code" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "email" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enterprise_number" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "enterpriseNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: extrafield_1.ExtraField }),
        (0, class_transformer_1.Expose)({ name: "extra_fields" }),
        (0, class_transformer_1.Type)(function () { return extrafield_1.ExtraField; }),
        __metadata("design:type", Array)
    ], RegistrantInput.prototype, "extraFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fax" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "fax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "first_name" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "language_code" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "last_name" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "phone" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "phone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "postal_code" }),
        __metadata("design:type", String)
    ], RegistrantInput.prototype, "postalCode", void 0);
    return RegistrantInput;
}(utils_1.SpeakeasyBase));
exports.RegistrantInput = RegistrantInput;
