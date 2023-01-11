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
exports.PatientCommunicationsUpdateResponse = exports.PatientCommunicationsUpdateRequest = exports.PatientCommunicationsUpdateSecurity = exports.PatientCommunicationsUpdateQueryParams = exports.PatientCommunicationsUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientCommunicationsUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatientCommunicationsUpdatePathParams, _super);
    function PatientCommunicationsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientCommunicationsUpdatePathParams.prototype, "id", void 0);
    return PatientCommunicationsUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.PatientCommunicationsUpdatePathParams = PatientCommunicationsUpdatePathParams;
var PatientCommunicationsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PatientCommunicationsUpdateQueryParams, _super);
    function PatientCommunicationsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientCommunicationsUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], PatientCommunicationsUpdateQueryParams.prototype, "patient", void 0);
    return PatientCommunicationsUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientCommunicationsUpdateQueryParams = PatientCommunicationsUpdateQueryParams;
var PatientCommunicationsUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatientCommunicationsUpdateSecurity, _super);
    function PatientCommunicationsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientCommunicationsUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return PatientCommunicationsUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientCommunicationsUpdateSecurity = PatientCommunicationsUpdateSecurity;
var PatientCommunicationsUpdateRequest = /** @class */ (function (_super) {
    __extends(PatientCommunicationsUpdateRequest, _super);
    function PatientCommunicationsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientCommunicationsUpdatePathParams)
    ], PatientCommunicationsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientCommunicationsUpdateQueryParams)
    ], PatientCommunicationsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientCommunicationsUpdateSecurity)
    ], PatientCommunicationsUpdateRequest.prototype, "security", void 0);
    return PatientCommunicationsUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.PatientCommunicationsUpdateRequest = PatientCommunicationsUpdateRequest;
var PatientCommunicationsUpdateResponse = /** @class */ (function (_super) {
    __extends(PatientCommunicationsUpdateResponse, _super);
    function PatientCommunicationsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientCommunicationsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientCommunicationsUpdateResponse.prototype, "statusCode", void 0);
    return PatientCommunicationsUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.PatientCommunicationsUpdateResponse = PatientCommunicationsUpdateResponse;
