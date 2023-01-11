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
exports.SecretScanningUpdateAlertResponse = exports.SecretScanningUpdateAlertRequest = exports.SecretScanningUpdateAlert503ApplicationJson = exports.SecretScanningUpdateAlertRequestBody = exports.SecretScanningUpdateAlertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SecretScanningUpdateAlertPathParams = /** @class */ (function (_super) {
    __extends(SecretScanningUpdateAlertPathParams, _super);
    function SecretScanningUpdateAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], SecretScanningUpdateAlertPathParams.prototype, "alertNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlertPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlertPathParams.prototype, "repo", void 0);
    return SecretScanningUpdateAlertPathParams;
}(utils_1.SpeakeasyBase));
exports.SecretScanningUpdateAlertPathParams = SecretScanningUpdateAlertPathParams;
var SecretScanningUpdateAlertRequestBody = /** @class */ (function (_super) {
    __extends(SecretScanningUpdateAlertRequestBody, _super);
    function SecretScanningUpdateAlertRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlertRequestBody.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlertRequestBody.prototype, "state", void 0);
    return SecretScanningUpdateAlertRequestBody;
}(utils_1.SpeakeasyBase));
exports.SecretScanningUpdateAlertRequestBody = SecretScanningUpdateAlertRequestBody;
var SecretScanningUpdateAlert503ApplicationJson = /** @class */ (function (_super) {
    __extends(SecretScanningUpdateAlert503ApplicationJson, _super);
    function SecretScanningUpdateAlert503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlert503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlert503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlert503ApplicationJson.prototype, "message", void 0);
    return SecretScanningUpdateAlert503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SecretScanningUpdateAlert503ApplicationJson = SecretScanningUpdateAlert503ApplicationJson;
var SecretScanningUpdateAlertRequest = /** @class */ (function (_super) {
    __extends(SecretScanningUpdateAlertRequest, _super);
    function SecretScanningUpdateAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SecretScanningUpdateAlertPathParams)
    ], SecretScanningUpdateAlertRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SecretScanningUpdateAlertRequestBody)
    ], SecretScanningUpdateAlertRequest.prototype, "request", void 0);
    return SecretScanningUpdateAlertRequest;
}(utils_1.SpeakeasyBase));
exports.SecretScanningUpdateAlertRequest = SecretScanningUpdateAlertRequest;
var SecretScanningUpdateAlertResponse = /** @class */ (function (_super) {
    __extends(SecretScanningUpdateAlertResponse, _super);
    function SecretScanningUpdateAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SecretScanningUpdateAlertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SecretScanningUpdateAlertResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SecretScanningAlert)
    ], SecretScanningUpdateAlertResponse.prototype, "secretScanningAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SecretScanningUpdateAlert503ApplicationJson)
    ], SecretScanningUpdateAlertResponse.prototype, "secretScanningUpdateAlert503ApplicationJSONObject", void 0);
    return SecretScanningUpdateAlertResponse;
}(utils_1.SpeakeasyBase));
exports.SecretScanningUpdateAlertResponse = SecretScanningUpdateAlertResponse;
