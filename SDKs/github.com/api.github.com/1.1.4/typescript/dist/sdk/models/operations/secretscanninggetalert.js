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
exports.SecretScanningGetAlertResponse = exports.SecretScanningGetAlertRequest = exports.SecretScanningGetAlert503ApplicationJson = exports.SecretScanningGetAlertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var SecretScanningGetAlertPathParams = /** @class */ (function (_super) {
    __extends(SecretScanningGetAlertPathParams, _super);
    function SecretScanningGetAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], SecretScanningGetAlertPathParams.prototype, "alertNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], SecretScanningGetAlertPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], SecretScanningGetAlertPathParams.prototype, "repo", void 0);
    return SecretScanningGetAlertPathParams;
}(utils_1.SpeakeasyBase));
exports.SecretScanningGetAlertPathParams = SecretScanningGetAlertPathParams;
var SecretScanningGetAlert503ApplicationJson = /** @class */ (function (_super) {
    __extends(SecretScanningGetAlert503ApplicationJson, _super);
    function SecretScanningGetAlert503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SecretScanningGetAlert503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], SecretScanningGetAlert503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], SecretScanningGetAlert503ApplicationJson.prototype, "message", void 0);
    return SecretScanningGetAlert503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.SecretScanningGetAlert503ApplicationJson = SecretScanningGetAlert503ApplicationJson;
var SecretScanningGetAlertRequest = /** @class */ (function (_super) {
    __extends(SecretScanningGetAlertRequest, _super);
    function SecretScanningGetAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SecretScanningGetAlertPathParams)
    ], SecretScanningGetAlertRequest.prototype, "pathParams", void 0);
    return SecretScanningGetAlertRequest;
}(utils_1.SpeakeasyBase));
exports.SecretScanningGetAlertRequest = SecretScanningGetAlertRequest;
var SecretScanningGetAlertResponse = /** @class */ (function (_super) {
    __extends(SecretScanningGetAlertResponse, _super);
    function SecretScanningGetAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SecretScanningGetAlertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SecretScanningGetAlertResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SecretScanningAlert)
    ], SecretScanningGetAlertResponse.prototype, "secretScanningAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SecretScanningGetAlert503ApplicationJson)
    ], SecretScanningGetAlertResponse.prototype, "secretScanningGetAlert503ApplicationJSONObject", void 0);
    return SecretScanningGetAlertResponse;
}(utils_1.SpeakeasyBase));
exports.SecretScanningGetAlertResponse = SecretScanningGetAlertResponse;
