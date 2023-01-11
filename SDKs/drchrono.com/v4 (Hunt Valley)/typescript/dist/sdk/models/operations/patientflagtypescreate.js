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
exports.PatientFlagTypesCreateResponse = exports.PatientFlagTypesCreateRequest = exports.PatientFlagTypesCreateSecurity = exports.PatientFlagTypesCreateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientFlagTypesCreateQueryParams = /** @class */ (function (_super) {
    __extends(PatientFlagTypesCreateQueryParams, _super);
    function PatientFlagTypesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientFlagTypesCreateQueryParams.prototype, "doctor", void 0);
    return PatientFlagTypesCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientFlagTypesCreateQueryParams = PatientFlagTypesCreateQueryParams;
var PatientFlagTypesCreateSecurity = /** @class */ (function (_super) {
    __extends(PatientFlagTypesCreateSecurity, _super);
    function PatientFlagTypesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientFlagTypesCreateSecurity.prototype, "drchronoOauth2", void 0);
    return PatientFlagTypesCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientFlagTypesCreateSecurity = PatientFlagTypesCreateSecurity;
var PatientFlagTypesCreateRequest = /** @class */ (function (_super) {
    __extends(PatientFlagTypesCreateRequest, _super);
    function PatientFlagTypesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientFlagTypesCreateQueryParams)
    ], PatientFlagTypesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientFlagTypesCreateSecurity)
    ], PatientFlagTypesCreateRequest.prototype, "security", void 0);
    return PatientFlagTypesCreateRequest;
}(utils_1.SpeakeasyBase));
exports.PatientFlagTypesCreateRequest = PatientFlagTypesCreateRequest;
var PatientFlagTypesCreateResponse = /** @class */ (function (_super) {
    __extends(PatientFlagTypesCreateResponse, _super);
    function PatientFlagTypesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientFlagTypesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PatientFlagType)
    ], PatientFlagTypesCreateResponse.prototype, "patientFlagType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientFlagTypesCreateResponse.prototype, "statusCode", void 0);
    return PatientFlagTypesCreateResponse;
}(utils_1.SpeakeasyBase));
exports.PatientFlagTypesCreateResponse = PatientFlagTypesCreateResponse;
