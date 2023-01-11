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
exports.PatientsCcdaResponse = exports.PatientsCcdaRequest = exports.PatientsCcdaSecurity = exports.PatientsCcdaQueryParams = exports.PatientsCcdaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientsCcdaPathParams = /** @class */ (function (_super) {
    __extends(PatientsCcdaPathParams, _super);
    function PatientsCcdaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientsCcdaPathParams.prototype, "id", void 0);
    return PatientsCcdaPathParams;
}(utils_1.SpeakeasyBase));
exports.PatientsCcdaPathParams = PatientsCcdaPathParams;
var PatientsCcdaQueryParams = /** @class */ (function (_super) {
    __extends(PatientsCcdaQueryParams, _super);
    function PatientsCcdaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chart_id" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "chartId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_of_birth" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientsCcdaQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ethnicity" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "ethnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=first_name" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gender" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_name" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preferred_language" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=race" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "race", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientsCcdaQueryParams.prototype, "since", void 0);
    return PatientsCcdaQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientsCcdaQueryParams = PatientsCcdaQueryParams;
var PatientsCcdaSecurity = /** @class */ (function (_super) {
    __extends(PatientsCcdaSecurity, _super);
    function PatientsCcdaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientsCcdaSecurity.prototype, "drchronoOauth2", void 0);
    return PatientsCcdaSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientsCcdaSecurity = PatientsCcdaSecurity;
var PatientsCcdaRequest = /** @class */ (function (_super) {
    __extends(PatientsCcdaRequest, _super);
    function PatientsCcdaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsCcdaPathParams)
    ], PatientsCcdaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsCcdaQueryParams)
    ], PatientsCcdaRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsCcdaSecurity)
    ], PatientsCcdaRequest.prototype, "security", void 0);
    return PatientsCcdaRequest;
}(utils_1.SpeakeasyBase));
exports.PatientsCcdaRequest = PatientsCcdaRequest;
var PatientsCcdaResponse = /** @class */ (function (_super) {
    __extends(PatientsCcdaResponse, _super);
    function PatientsCcdaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PatientsCcdaResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientsCcdaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientsCcdaResponse.prototype, "statusCode", void 0);
    return PatientsCcdaResponse;
}(utils_1.SpeakeasyBase));
exports.PatientsCcdaResponse = PatientsCcdaResponse;
