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
exports.UploadFileToLockerIdResponse = exports.UploadFileToLockerIdRequest = exports.UploadFileToLockerId500ApplicationJson = exports.UploadFileToLockerId401ApplicationJson = exports.UploadFileToLockerId400ApplicationJson = exports.UploadFileToLockerIdSecurity = exports.UploadFileToLockerIdRequests = exports.UploadFileToLockerIdHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UploadFileToLockerIdHeaders = /** @class */ (function (_super) {
    __extends(UploadFileToLockerIdHeaders, _super);
    function UploadFileToLockerIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=hmac" }),
        __metadata("design:type", String)
    ], UploadFileToLockerIdHeaders.prototype, "hmac", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], UploadFileToLockerIdHeaders.prototype, "path", void 0);
    return UploadFileToLockerIdHeaders;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerIdHeaders = UploadFileToLockerIdHeaders;
var UploadFileToLockerIdRequests = /** @class */ (function (_super) {
    __extends(UploadFileToLockerIdRequests, _super);
    function UploadFileToLockerIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileToLockerIdRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileToLockerIdRequests.prototype, "imageJpeg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/jpg" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileToLockerIdRequests.prototype, "imageJpg", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/pdf" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileToLockerIdRequests.prototype, "imagePdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileToLockerIdRequests.prototype, "imagePng", void 0);
    return UploadFileToLockerIdRequests;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerIdRequests = UploadFileToLockerIdRequests;
var UploadFileToLockerIdSecurity = /** @class */ (function (_super) {
    __extends(UploadFileToLockerIdSecurity, _super);
    function UploadFileToLockerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], UploadFileToLockerIdSecurity.prototype, "bearerAuth", void 0);
    return UploadFileToLockerIdSecurity;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerIdSecurity = UploadFileToLockerIdSecurity;
var UploadFileToLockerId400ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadFileToLockerId400ApplicationJson, _super);
    function UploadFileToLockerId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], UploadFileToLockerId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], UploadFileToLockerId400ApplicationJson.prototype, "errorDescription", void 0);
    return UploadFileToLockerId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerId400ApplicationJson = UploadFileToLockerId400ApplicationJson;
var UploadFileToLockerId401ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadFileToLockerId401ApplicationJson, _super);
    function UploadFileToLockerId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UploadFileToLockerId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], UploadFileToLockerId401ApplicationJson.prototype, "errorDescription", void 0);
    return UploadFileToLockerId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerId401ApplicationJson = UploadFileToLockerId401ApplicationJson;
var UploadFileToLockerId500ApplicationJson = /** @class */ (function (_super) {
    __extends(UploadFileToLockerId500ApplicationJson, _super);
    function UploadFileToLockerId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], UploadFileToLockerId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], UploadFileToLockerId500ApplicationJson.prototype, "errorDescription", void 0);
    return UploadFileToLockerId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerId500ApplicationJson = UploadFileToLockerId500ApplicationJson;
var UploadFileToLockerIdRequest = /** @class */ (function (_super) {
    __extends(UploadFileToLockerIdRequest, _super);
    function UploadFileToLockerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerIdHeaders)
    ], UploadFileToLockerIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerIdRequests)
    ], UploadFileToLockerIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerIdSecurity)
    ], UploadFileToLockerIdRequest.prototype, "security", void 0);
    return UploadFileToLockerIdRequest;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerIdRequest = UploadFileToLockerIdRequest;
var UploadFileToLockerIdResponse = /** @class */ (function (_super) {
    __extends(UploadFileToLockerIdResponse, _super);
    function UploadFileToLockerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UploadFileToLockerIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UploadFileToLockerIdResponse.prototype, "fileUploadResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UploadFileToLockerIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerId400ApplicationJson)
    ], UploadFileToLockerIdResponse.prototype, "uploadFileToLockerId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerId401ApplicationJson)
    ], UploadFileToLockerIdResponse.prototype, "uploadFileToLockerId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UploadFileToLockerId500ApplicationJson)
    ], UploadFileToLockerIdResponse.prototype, "uploadFileToLockerId500ApplicationJSONObject", void 0);
    return UploadFileToLockerIdResponse;
}(utils_1.SpeakeasyBase));
exports.UploadFileToLockerIdResponse = UploadFileToLockerIdResponse;
