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
exports.CodeScanningUpdateAlertResponse = exports.CodeScanningUpdateAlertRequest = exports.CodeScanningUpdateAlert503ApplicationJson = exports.CodeScanningUpdateAlertRequestBody = exports.CodeScanningUpdateAlertPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CodeScanningUpdateAlertPathParams = /** @class */ (function (_super) {
    __extends(CodeScanningUpdateAlertPathParams, _super);
    function CodeScanningUpdateAlertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=alert_number" }),
        __metadata("design:type", Number)
    ], CodeScanningUpdateAlertPathParams.prototype, "alertNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlertPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlertPathParams.prototype, "repo", void 0);
    return CodeScanningUpdateAlertPathParams;
}(utils_1.SpeakeasyBase));
exports.CodeScanningUpdateAlertPathParams = CodeScanningUpdateAlertPathParams;
var CodeScanningUpdateAlertRequestBody = /** @class */ (function (_super) {
    __extends(CodeScanningUpdateAlertRequestBody, _super);
    function CodeScanningUpdateAlertRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dismissed_reason" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlertRequestBody.prototype, "dismissedReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlertRequestBody.prototype, "state", void 0);
    return CodeScanningUpdateAlertRequestBody;
}(utils_1.SpeakeasyBase));
exports.CodeScanningUpdateAlertRequestBody = CodeScanningUpdateAlertRequestBody;
var CodeScanningUpdateAlert503ApplicationJson = /** @class */ (function (_super) {
    __extends(CodeScanningUpdateAlert503ApplicationJson, _super);
    function CodeScanningUpdateAlert503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlert503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlert503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlert503ApplicationJson.prototype, "message", void 0);
    return CodeScanningUpdateAlert503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CodeScanningUpdateAlert503ApplicationJson = CodeScanningUpdateAlert503ApplicationJson;
var CodeScanningUpdateAlertRequest = /** @class */ (function (_super) {
    __extends(CodeScanningUpdateAlertRequest, _super);
    function CodeScanningUpdateAlertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CodeScanningUpdateAlertPathParams)
    ], CodeScanningUpdateAlertRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CodeScanningUpdateAlertRequestBody)
    ], CodeScanningUpdateAlertRequest.prototype, "request", void 0);
    return CodeScanningUpdateAlertRequest;
}(utils_1.SpeakeasyBase));
exports.CodeScanningUpdateAlertRequest = CodeScanningUpdateAlertRequest;
var CodeScanningUpdateAlertResponse = /** @class */ (function (_super) {
    __extends(CodeScanningUpdateAlertResponse, _super);
    function CodeScanningUpdateAlertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CodeScanningUpdateAlertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CodeScanningUpdateAlertResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], CodeScanningUpdateAlertResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CodeScanningAlert)
    ], CodeScanningUpdateAlertResponse.prototype, "codeScanningAlert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CodeScanningUpdateAlert503ApplicationJson)
    ], CodeScanningUpdateAlertResponse.prototype, "codeScanningUpdateAlert503ApplicationJSONObject", void 0);
    return CodeScanningUpdateAlertResponse;
}(utils_1.SpeakeasyBase));
exports.CodeScanningUpdateAlertResponse = CodeScanningUpdateAlertResponse;
