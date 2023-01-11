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
exports.PatientsDeleteResponse = exports.PatientsDeleteRequest = exports.PatientsDeleteSecurity = exports.PatientsDeleteQueryParams = exports.PatientsDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PatientsDeletePathParams = /** @class */ (function (_super) {
    __extends(PatientsDeletePathParams, _super);
    function PatientsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatientsDeletePathParams.prototype, "id", void 0);
    return PatientsDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.PatientsDeletePathParams = PatientsDeletePathParams;
var PatientsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PatientsDeleteQueryParams, _super);
    function PatientsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chart_id" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "chartId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_of_birth" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], PatientsDeleteQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ethnicity" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "ethnicity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=first_name" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=gender" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_name" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=preferred_language" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=race" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "race", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], PatientsDeleteQueryParams.prototype, "since", void 0);
    return PatientsDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PatientsDeleteQueryParams = PatientsDeleteQueryParams;
var PatientsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PatientsDeleteSecurity, _super);
    function PatientsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], PatientsDeleteSecurity.prototype, "drchronoOauth2", void 0);
    return PatientsDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.PatientsDeleteSecurity = PatientsDeleteSecurity;
var PatientsDeleteRequest = /** @class */ (function (_super) {
    __extends(PatientsDeleteRequest, _super);
    function PatientsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsDeletePathParams)
    ], PatientsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsDeleteQueryParams)
    ], PatientsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatientsDeleteSecurity)
    ], PatientsDeleteRequest.prototype, "security", void 0);
    return PatientsDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.PatientsDeleteRequest = PatientsDeleteRequest;
var PatientsDeleteResponse = /** @class */ (function (_super) {
    __extends(PatientsDeleteResponse, _super);
    function PatientsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatientsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatientsDeleteResponse.prototype, "statusCode", void 0);
    return PatientsDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.PatientsDeleteResponse = PatientsDeleteResponse;
