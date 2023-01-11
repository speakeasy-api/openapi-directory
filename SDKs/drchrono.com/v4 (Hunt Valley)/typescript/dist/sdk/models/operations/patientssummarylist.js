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
exports.PatientsSummaryListResponse = exports.PatientsSummaryListRequest = exports.PatientsSummaryList200ApplicationJson = exports.PatientsSummaryListSecurity = exports.PatientsSummaryListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientsSummaryListQueryParams = /** @class */ (function (_super) {
    __extends(PatientsSummaryListQueryParams, _super);
    function PatientsSummaryListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_of_birth" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientsSummaryListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=first_name" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gender" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_name" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PatientsSummaryListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientsSummaryListQueryParams.prototype, "since", void 0);
    return PatientsSummaryListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientsSummaryListQueryParams = PatientsSummaryListQueryParams;
var PatientsSummaryListSecurity = /** @class */ (function (_super) {
    __extends(PatientsSummaryListSecurity, _super);
    function PatientsSummaryListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientsSummaryListSecurity.prototype, "drchronoOauth2", void 0);
    return PatientsSummaryListSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientsSummaryListSecurity = PatientsSummaryListSecurity;
// PatientsSummaryList200ApplicationJson
/**
 * Paginated Result
**/
var PatientsSummaryList200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatientsSummaryList200ApplicationJson, _super);
    function PatientsSummaryList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Patient }),
        __metadata("design:type", Array)
    ], PatientsSummaryList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PatientsSummaryList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PatientsSummaryList200ApplicationJson.prototype, "previous", void 0);
    return PatientsSummaryList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatientsSummaryList200ApplicationJson = PatientsSummaryList200ApplicationJson;
var PatientsSummaryListRequest = /** @class */ (function (_super) {
    __extends(PatientsSummaryListRequest, _super);
    function PatientsSummaryListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsSummaryListQueryParams)
    ], PatientsSummaryListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsSummaryListSecurity)
    ], PatientsSummaryListRequest.prototype, "security", void 0);
    return PatientsSummaryListRequest;
}(utils_1.SpeakeasyBase));
exports.PatientsSummaryListRequest = PatientsSummaryListRequest;
var PatientsSummaryListResponse = /** @class */ (function (_super) {
    __extends(PatientsSummaryListResponse, _super);
    function PatientsSummaryListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientsSummaryListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientsSummaryListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsSummaryList200ApplicationJson)
    ], PatientsSummaryListResponse.prototype, "patientsSummaryList200ApplicationJSONObject", void 0);
    return PatientsSummaryListResponse;
}(utils_1.SpeakeasyBase));
exports.PatientsSummaryListResponse = PatientsSummaryListResponse;
