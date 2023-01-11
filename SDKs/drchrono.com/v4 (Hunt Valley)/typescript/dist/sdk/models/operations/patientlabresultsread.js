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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientLabResultsReadResponse = exports.PatientLabResultsReadRequest = exports.PatientLabResultsReadSecurity = exports.PatientLabResultsReadQueryParams = exports.PatientLabResultsReadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientLabResultsReadPathParams = /** @class */ (function (_super) {
    __extends(PatientLabResultsReadPathParams, _super);
    function PatientLabResultsReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientLabResultsReadPathParams.prototype, "id", void 0);
    return PatientLabResultsReadPathParams;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsReadPathParams = PatientLabResultsReadPathParams;
var PatientLabResultsReadQueryParams = /** @class */ (function (_super) {
    __extends(PatientLabResultsReadQueryParams, _super);
    function PatientLabResultsReadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientLabResultsReadQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering_doctor" }),
        __metadata("design:type", Number)
    ], PatientLabResultsReadQueryParams.prototype, "orderingDoctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], PatientLabResultsReadQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientLabResultsReadQueryParams.prototype, "since", void 0);
    return PatientLabResultsReadQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsReadQueryParams = PatientLabResultsReadQueryParams;
var PatientLabResultsReadSecurity = /** @class */ (function (_super) {
    __extends(PatientLabResultsReadSecurity, _super);
    function PatientLabResultsReadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientLabResultsReadSecurity.prototype, "drchronoOauth2", void 0);
    return PatientLabResultsReadSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsReadSecurity = PatientLabResultsReadSecurity;
var PatientLabResultsReadRequest = /** @class */ (function (_super) {
    __extends(PatientLabResultsReadRequest, _super);
    function PatientLabResultsReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsReadPathParams)
    ], PatientLabResultsReadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsReadQueryParams)
    ], PatientLabResultsReadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsReadSecurity)
    ], PatientLabResultsReadRequest.prototype, "security", void 0);
    return PatientLabResultsReadRequest;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsReadRequest = PatientLabResultsReadRequest;
var PatientLabResultsReadResponse = /** @class */ (function (_super) {
    __extends(PatientLabResultsReadResponse, _super);
    function PatientLabResultsReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientLabResultsReadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PatientLabResultSet)
    ], PatientLabResultsReadResponse.prototype, "patientLabResultSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientLabResultsReadResponse.prototype, "statusCode", void 0);
    return PatientLabResultsReadResponse;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsReadResponse = PatientLabResultsReadResponse;
