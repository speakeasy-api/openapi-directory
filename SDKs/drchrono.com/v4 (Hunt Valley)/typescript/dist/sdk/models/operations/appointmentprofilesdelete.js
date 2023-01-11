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
exports.AppointmentProfilesDeleteResponse = exports.AppointmentProfilesDeleteRequest = exports.AppointmentProfilesDeleteSecurity = exports.AppointmentProfilesDeleteQueryParams = exports.AppointmentProfilesDeletePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AppointmentProfilesDeletePathParams = /** @class */ (function (_super) {
    __extends(AppointmentProfilesDeletePathParams, _super);
    function AppointmentProfilesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AppointmentProfilesDeletePathParams.prototype, "id", void 0);
    return AppointmentProfilesDeletePathParams;
}(utils_1.SpeakeasyBase));
exports.AppointmentProfilesDeletePathParams = AppointmentProfilesDeletePathParams;
var AppointmentProfilesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AppointmentProfilesDeleteQueryParams, _super);
    function AppointmentProfilesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], AppointmentProfilesDeleteQueryParams.prototype, "doctor", void 0);
    return AppointmentProfilesDeleteQueryParams;
}(utils_1.SpeakeasyBase));
exports.AppointmentProfilesDeleteQueryParams = AppointmentProfilesDeleteQueryParams;
var AppointmentProfilesDeleteSecurity = /** @class */ (function (_super) {
    __extends(AppointmentProfilesDeleteSecurity, _super);
    function AppointmentProfilesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], AppointmentProfilesDeleteSecurity.prototype, "drchronoOauth2", void 0);
    return AppointmentProfilesDeleteSecurity;
}(utils_1.SpeakeasyBase));
exports.AppointmentProfilesDeleteSecurity = AppointmentProfilesDeleteSecurity;
var AppointmentProfilesDeleteRequest = /** @class */ (function (_super) {
    __extends(AppointmentProfilesDeleteRequest, _super);
    function AppointmentProfilesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentProfilesDeletePathParams)
    ], AppointmentProfilesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentProfilesDeleteQueryParams)
    ], AppointmentProfilesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AppointmentProfilesDeleteSecurity)
    ], AppointmentProfilesDeleteRequest.prototype, "security", void 0);
    return AppointmentProfilesDeleteRequest;
}(utils_1.SpeakeasyBase));
exports.AppointmentProfilesDeleteRequest = AppointmentProfilesDeleteRequest;
var AppointmentProfilesDeleteResponse = /** @class */ (function (_super) {
    __extends(AppointmentProfilesDeleteResponse, _super);
    function AppointmentProfilesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AppointmentProfilesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AppointmentProfilesDeleteResponse.prototype, "statusCode", void 0);
    return AppointmentProfilesDeleteResponse;
}(utils_1.SpeakeasyBase));
exports.AppointmentProfilesDeleteResponse = AppointmentProfilesDeleteResponse;
