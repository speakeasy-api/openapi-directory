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
exports.GetFileFromUriIdResponse = exports.GetFileFromUriIdRequest = exports.GetFileFromUriId404ApplicationJson = exports.GetFileFromUriId401ApplicationJson = exports.GetFileFromUriId400ApplicationJson = exports.GetFileFromUriIdSecurity = exports.GetFileFromUriIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFileFromUriIdPathParams = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdPathParams, _super);
    function GetFileFromUriIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=uri" }),
        __metadata("design:type", String)
    ], GetFileFromUriIdPathParams.prototype, "uri", void 0);
    return GetFileFromUriIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriIdPathParams = GetFileFromUriIdPathParams;
var GetFileFromUriIdSecurity = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdSecurity, _super);
    function GetFileFromUriIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetFileFromUriIdSecurity.prototype, "bearerAuth", void 0);
    return GetFileFromUriIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriIdSecurity = GetFileFromUriIdSecurity;
var GetFileFromUriId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId400ApplicationJson, _super);
    function GetFileFromUriId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriId400ApplicationJson = GetFileFromUriId400ApplicationJson;
var GetFileFromUriId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId401ApplicationJson, _super);
    function GetFileFromUriId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriId401ApplicationJson = GetFileFromUriId401ApplicationJson;
var GetFileFromUriId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFileFromUriId404ApplicationJson, _super);
    function GetFileFromUriId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetFileFromUriId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetFileFromUriId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetFileFromUriId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriId404ApplicationJson = GetFileFromUriId404ApplicationJson;
var GetFileFromUriIdRequest = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdRequest, _super);
    function GetFileFromUriIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFileFromUriIdPathParams)
    ], GetFileFromUriIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFileFromUriIdSecurity)
    ], GetFileFromUriIdRequest.prototype, "security", void 0);
    return GetFileFromUriIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriIdRequest = GetFileFromUriIdRequest;
var GetFileFromUriIdResponse = /** @class */ (function (_super) {
    __extends(GetFileFromUriIdResponse, _super);
    function GetFileFromUriIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId200ApplicationPdfString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId200ImageJpegString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId200ImageJpgString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId200ImagePngString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFileFromUriId400ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFileFromUriId401ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFileFromUriId404ApplicationJson)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId500ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFileFromUriIdResponse.prototype, "getFileFromURIId503ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFileFromUriIdResponse.prototype, "statusCode", void 0);
    return GetFileFromUriIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetFileFromUriIdResponse = GetFileFromUriIdResponse;
