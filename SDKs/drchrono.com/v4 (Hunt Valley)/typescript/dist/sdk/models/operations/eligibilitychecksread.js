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
exports.EligibilityChecksReadResponse = exports.EligibilityChecksReadRequest = exports.EligibilityChecksReadSecurity = exports.EligibilityChecksReadQueryParams = exports.EligibilityChecksReadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EligibilityChecksReadPathParams = /** @class */ (function (_super) {
    __extends(EligibilityChecksReadPathParams, _super);
    function EligibilityChecksReadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EligibilityChecksReadPathParams.prototype, "id", void 0);
    return EligibilityChecksReadPathParams;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksReadPathParams = EligibilityChecksReadPathParams;
var EligibilityChecksReadQueryParams = /** @class */ (function (_super) {
    __extends(EligibilityChecksReadQueryParams, _super);
    function EligibilityChecksReadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment" }),
        __metadata("design:type", Number)
    ], EligibilityChecksReadQueryParams.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment_date" }),
        __metadata("design:type", String)
    ], EligibilityChecksReadQueryParams.prototype, "appointmentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment_date_range" }),
        __metadata("design:type", String)
    ], EligibilityChecksReadQueryParams.prototype, "appointmentDateRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], EligibilityChecksReadQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], EligibilityChecksReadQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_date" }),
        __metadata("design:type", String)
    ], EligibilityChecksReadQueryParams.prototype, "queryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_date_range" }),
        __metadata("design:type", String)
    ], EligibilityChecksReadQueryParams.prototype, "queryDateRange", void 0);
    return EligibilityChecksReadQueryParams;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksReadQueryParams = EligibilityChecksReadQueryParams;
var EligibilityChecksReadSecurity = /** @class */ (function (_super) {
    __extends(EligibilityChecksReadSecurity, _super);
    function EligibilityChecksReadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], EligibilityChecksReadSecurity.prototype, "drchronoOauth2", void 0);
    return EligibilityChecksReadSecurity;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksReadSecurity = EligibilityChecksReadSecurity;
var EligibilityChecksReadRequest = /** @class */ (function (_super) {
    __extends(EligibilityChecksReadRequest, _super);
    function EligibilityChecksReadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksReadPathParams)
    ], EligibilityChecksReadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksReadQueryParams)
    ], EligibilityChecksReadRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksReadSecurity)
    ], EligibilityChecksReadRequest.prototype, "security", void 0);
    return EligibilityChecksReadRequest;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksReadRequest = EligibilityChecksReadRequest;
var EligibilityChecksReadResponse = /** @class */ (function (_super) {
    __extends(EligibilityChecksReadResponse, _super);
    function EligibilityChecksReadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EligibilityChecksReadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Coverage)
    ], EligibilityChecksReadResponse.prototype, "coverage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EligibilityChecksReadResponse.prototype, "statusCode", void 0);
    return EligibilityChecksReadResponse;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksReadResponse = EligibilityChecksReadResponse;
