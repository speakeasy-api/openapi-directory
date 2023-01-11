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
exports.AppointmentsPartialUpdateResponse = exports.AppointmentsPartialUpdateRequest = exports.AppointmentsPartialUpdateSecurity = exports.AppointmentsPartialUpdateQueryParams = exports.AppointmentsPartialUpdatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppointmentsPartialUpdatePathParams = /** @class */ (function (_super) {
    __extends(AppointmentsPartialUpdatePathParams, _super);
    function AppointmentsPartialUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdatePathParams.prototype, "id", void 0);
    return AppointmentsPartialUpdatePathParams;
}(utils_1.SpeakeasyBase));
exports.AppointmentsPartialUpdatePathParams = AppointmentsPartialUpdatePathParams;
var AppointmentsPartialUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AppointmentsPartialUpdateQueryParams, _super);
    function AppointmentsPartialUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdateQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date_range" }),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdateQueryParams.prototype, "dateRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], AppointmentsPartialUpdateQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Number)
    ], AppointmentsPartialUpdateQueryParams.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], AppointmentsPartialUpdateQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdateQueryParams.prototype, "since", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdateQueryParams.prototype, "status", void 0);
    return AppointmentsPartialUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppointmentsPartialUpdateQueryParams = AppointmentsPartialUpdateQueryParams;
var AppointmentsPartialUpdateSecurity = /** @class */ (function (_super) {
    __extends(AppointmentsPartialUpdateSecurity, _super);
    function AppointmentsPartialUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], AppointmentsPartialUpdateSecurity.prototype, "drchronoOauth2", void 0);
    return AppointmentsPartialUpdateSecurity;
}(utils_1.SpeakeasyBase));
exports.AppointmentsPartialUpdateSecurity = AppointmentsPartialUpdateSecurity;
var AppointmentsPartialUpdateRequest = /** @class */ (function (_super) {
    __extends(AppointmentsPartialUpdateRequest, _super);
    function AppointmentsPartialUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentsPartialUpdatePathParams)
    ], AppointmentsPartialUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentsPartialUpdateQueryParams)
    ], AppointmentsPartialUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentsPartialUpdateSecurity)
    ], AppointmentsPartialUpdateRequest.prototype, "security", void 0);
    return AppointmentsPartialUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.AppointmentsPartialUpdateRequest = AppointmentsPartialUpdateRequest;
var AppointmentsPartialUpdateResponse = /** @class */ (function (_super) {
    __extends(AppointmentsPartialUpdateResponse, _super);
    function AppointmentsPartialUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppointmentsPartialUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppointmentsPartialUpdateResponse.prototype, "statusCode", void 0);
    return AppointmentsPartialUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.AppointmentsPartialUpdateResponse = AppointmentsPartialUpdateResponse;
