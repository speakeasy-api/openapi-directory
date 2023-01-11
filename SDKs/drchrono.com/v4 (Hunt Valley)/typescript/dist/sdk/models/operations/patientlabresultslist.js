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
exports.PatientLabResultsListResponse = exports.PatientLabResultsListRequest = exports.PatientLabResultsList200ApplicationJson = exports.PatientLabResultsListSecurity = exports.PatientLabResultsListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientLabResultsListQueryParams = /** @class */ (function (_super) {
    __extends(PatientLabResultsListQueryParams, _super);
    function PatientLabResultsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], PatientLabResultsListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientLabResultsListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ordering_doctor" }),
        __metadata("design:type", Number)
    ], PatientLabResultsListQueryParams.prototype, "orderingDoctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PatientLabResultsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], PatientLabResultsListQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientLabResultsListQueryParams.prototype, "since", void 0);
    return PatientLabResultsListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsListQueryParams = PatientLabResultsListQueryParams;
var PatientLabResultsListSecurity = /** @class */ (function (_super) {
    __extends(PatientLabResultsListSecurity, _super);
    function PatientLabResultsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientLabResultsListSecurity.prototype, "drchronoOauth2", void 0);
    return PatientLabResultsListSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsListSecurity = PatientLabResultsListSecurity;
// PatientLabResultsList200ApplicationJson
/**
 * Paginated Result
**/
var PatientLabResultsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatientLabResultsList200ApplicationJson, _super);
    function PatientLabResultsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.PatientLabResultSet }),
        __metadata("design:type", Array)
    ], PatientLabResultsList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PatientLabResultsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PatientLabResultsList200ApplicationJson.prototype, "previous", void 0);
    return PatientLabResultsList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsList200ApplicationJson = PatientLabResultsList200ApplicationJson;
var PatientLabResultsListRequest = /** @class */ (function (_super) {
    __extends(PatientLabResultsListRequest, _super);
    function PatientLabResultsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsListQueryParams)
    ], PatientLabResultsListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsListSecurity)
    ], PatientLabResultsListRequest.prototype, "security", void 0);
    return PatientLabResultsListRequest;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsListRequest = PatientLabResultsListRequest;
var PatientLabResultsListResponse = /** @class */ (function (_super) {
    __extends(PatientLabResultsListResponse, _super);
    function PatientLabResultsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientLabResultsListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientLabResultsListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientLabResultsList200ApplicationJson)
    ], PatientLabResultsListResponse.prototype, "patientLabResultsList200ApplicationJSONObject", void 0);
    return PatientLabResultsListResponse;
}(utils_1.SpeakeasyBase));
exports.PatientLabResultsListResponse = PatientLabResultsListResponse;
