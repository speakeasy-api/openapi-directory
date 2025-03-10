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
exports.PatientLabResultsDeleteResponse = exports.PatientLabResultsDeleteRequest = exports.PatientLabResultsDeleteSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var PatientLabResultsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PatientLabResultsDeleteSecurity, _super);
    function PatientLabResultsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], PatientLabResultsDeleteSecurity.prototype, "drchronoOauth2", void 0);
    return PatientLabResultsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsDeleteSecurity = PatientLabResultsDeleteSecurity;
var PatientLabResultsDeleteRequest = /** @class */ (function (_super) {
    __extends(PatientLabResultsDeleteRequest, _super);
    function PatientLabResultsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=doctor",
        }),
        __metadata("design:type", Number)
    ], PatientLabResultsDeleteRequest.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientLabResultsDeleteRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=ordering_doctor",
        }),
        __metadata("design:type", Number)
    ], PatientLabResultsDeleteRequest.prototype, "orderingDoctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=patient",
        }),
        __metadata("design:type", Number)
    ], PatientLabResultsDeleteRequest.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientLabResultsDeleteRequest.prototype, "since", void 0);
    return PatientLabResultsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsDeleteRequest = PatientLabResultsDeleteRequest;
var PatientLabResultsDeleteResponse = /** @class */ (function (_super) {
    __extends(PatientLabResultsDeleteResponse, _super);
    function PatientLabResultsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientLabResultsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientLabResultsDeleteResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatientLabResultsDeleteResponse.prototype, "rawResponse", void 0);
    return PatientLabResultsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsDeleteResponse = PatientLabResultsDeleteResponse;
