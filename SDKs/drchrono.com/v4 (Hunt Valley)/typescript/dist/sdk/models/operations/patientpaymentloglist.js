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
exports.PatientPaymentLogListResponse = exports.PatientPaymentLogListRequest = exports.PatientPaymentLogList200ApplicationJson = exports.PatientPaymentLogListSecurity = exports.PatientPaymentLogListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientPaymentLogListQueryParams = /** @class */ (function (_super) {
    __extends(PatientPaymentLogListQueryParams, _super);
    function PatientPaymentLogListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], PatientPaymentLogListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientPaymentLogListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Number)
    ], PatientPaymentLogListQueryParams.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], PatientPaymentLogListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientPaymentLogListQueryParams.prototype, "since", void 0);
    return PatientPaymentLogListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientPaymentLogListQueryParams = PatientPaymentLogListQueryParams;
var PatientPaymentLogListSecurity = /** @class */ (function (_super) {
    __extends(PatientPaymentLogListSecurity, _super);
    function PatientPaymentLogListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientPaymentLogListSecurity.prototype, "drchronoOauth2", void 0);
    return PatientPaymentLogListSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientPaymentLogListSecurity = PatientPaymentLogListSecurity;
// PatientPaymentLogList200ApplicationJson
/**
 * Paginated Result
**/
var PatientPaymentLogList200ApplicationJson = /** @class */ (function (_super) {
    __extends(PatientPaymentLogList200ApplicationJson, _super);
    function PatientPaymentLogList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.CashPaymentLog }),
        __metadata("design:type", Array)
    ], PatientPaymentLogList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], PatientPaymentLogList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], PatientPaymentLogList200ApplicationJson.prototype, "previous", void 0);
    return PatientPaymentLogList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatientPaymentLogList200ApplicationJson = PatientPaymentLogList200ApplicationJson;
var PatientPaymentLogListRequest = /** @class */ (function (_super) {
    __extends(PatientPaymentLogListRequest, _super);
    function PatientPaymentLogListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientPaymentLogListQueryParams)
    ], PatientPaymentLogListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientPaymentLogListSecurity)
    ], PatientPaymentLogListRequest.prototype, "security", void 0);
    return PatientPaymentLogListRequest;
}(utils_1.SpeakeasyBase));
exports.PatientPaymentLogListRequest = PatientPaymentLogListRequest;
var PatientPaymentLogListResponse = /** @class */ (function (_super) {
    __extends(PatientPaymentLogListResponse, _super);
    function PatientPaymentLogListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientPaymentLogListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientPaymentLogListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientPaymentLogList200ApplicationJson)
    ], PatientPaymentLogListResponse.prototype, "patientPaymentLogList200ApplicationJSONObject", void 0);
    return PatientPaymentLogListResponse;
}(utils_1.SpeakeasyBase));
exports.PatientPaymentLogListResponse = PatientPaymentLogListResponse;
