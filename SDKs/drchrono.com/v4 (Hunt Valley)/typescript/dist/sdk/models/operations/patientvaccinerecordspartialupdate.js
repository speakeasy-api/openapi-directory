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
exports.PatientVaccineRecordsPartialUpdateResponse = exports.PatientVaccineRecordsPartialUpdateRequest = exports.PatientVaccineRecordsPartialUpdateSecurity = exports.PatientVaccineRecordsPartialUpdateQueryParams = exports.PatientVaccineRecordsPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientVaccineRecordsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatientVaccineRecordsPartialUpdatePathParams, _super);
    function PatientVaccineRecordsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientVaccineRecordsPartialUpdatePathParams.prototype, "id", void 0);
    return PatientVaccineRecordsPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.PatientVaccineRecordsPartialUpdatePathParams = PatientVaccineRecordsPartialUpdatePathParams;
var PatientVaccineRecordsPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PatientVaccineRecordsPartialUpdateQueryParams, _super);
    function PatientVaccineRecordsPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cvx_code" }),
        __metadata("design:type", String)
    ], PatientVaccineRecordsPartialUpdateQueryParams.prototype, "cvxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientVaccineRecordsPartialUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], PatientVaccineRecordsPartialUpdateQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientVaccineRecordsPartialUpdateQueryParams.prototype, "since", void 0);
    return PatientVaccineRecordsPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientVaccineRecordsPartialUpdateQueryParams = PatientVaccineRecordsPartialUpdateQueryParams;
var PatientVaccineRecordsPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatientVaccineRecordsPartialUpdateSecurity, _super);
    function PatientVaccineRecordsPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientVaccineRecordsPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return PatientVaccineRecordsPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientVaccineRecordsPartialUpdateSecurity = PatientVaccineRecordsPartialUpdateSecurity;
var PatientVaccineRecordsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(PatientVaccineRecordsPartialUpdateRequest, _super);
    function PatientVaccineRecordsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientVaccineRecordsPartialUpdatePathParams)
    ], PatientVaccineRecordsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientVaccineRecordsPartialUpdateQueryParams)
    ], PatientVaccineRecordsPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientVaccineRecordsPartialUpdateSecurity)
    ], PatientVaccineRecordsPartialUpdateRequest.prototype, "security", void 0);
    return PatientVaccineRecordsPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.PatientVaccineRecordsPartialUpdateRequest = PatientVaccineRecordsPartialUpdateRequest;
var PatientVaccineRecordsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(PatientVaccineRecordsPartialUpdateResponse, _super);
    function PatientVaccineRecordsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientVaccineRecordsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientVaccineRecordsPartialUpdateResponse.prototype, "statusCode", void 0);
    return PatientVaccineRecordsPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.PatientVaccineRecordsPartialUpdateResponse = PatientVaccineRecordsPartialUpdateResponse;
