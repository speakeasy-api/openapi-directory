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
exports.GetEAadhaarDataInXmlFormatIdResponse = exports.GetEAadhaarDataInXmlFormatIdRequest = exports.GetEAadhaarDataInXmlFormatId404ApplicationJson = exports.GetEAadhaarDataInXmlFormatId401ApplicationJson = exports.GetEAadhaarDataInXmlFormatIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEAadhaarDataInXmlFormatIdSecurity = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdSecurity, _super);
    function GetEAadhaarDataInXmlFormatIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetEAadhaarDataInXmlFormatIdSecurity.prototype, "bearerAuth", void 0);
    return GetEAadhaarDataInXmlFormatIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEAadhaarDataInXmlFormatIdSecurity = GetEAadhaarDataInXmlFormatIdSecurity;
var GetEAadhaarDataInXmlFormatId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatId401ApplicationJson, _super);
    function GetEAadhaarDataInXmlFormatId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetEAadhaarDataInXmlFormatId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetEAadhaarDataInXmlFormatId401ApplicationJson = GetEAadhaarDataInXmlFormatId401ApplicationJson;
var GetEAadhaarDataInXmlFormatId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatId404ApplicationJson, _super);
    function GetEAadhaarDataInXmlFormatId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatId404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatId404ApplicationJson.prototype, "errorDescription", void 0);
    return GetEAadhaarDataInXmlFormatId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetEAadhaarDataInXmlFormatId404ApplicationJson = GetEAadhaarDataInXmlFormatId404ApplicationJson;
var GetEAadhaarDataInXmlFormatIdRequest = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdRequest, _super);
    function GetEAadhaarDataInXmlFormatIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatIdSecurity)
    ], GetEAadhaarDataInXmlFormatIdRequest.prototype, "security", void 0);
    return GetEAadhaarDataInXmlFormatIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetEAadhaarDataInXmlFormatIdRequest = GetEAadhaarDataInXmlFormatIdRequest;
var GetEAadhaarDataInXmlFormatIdResponse = /** @class */ (function (_super) {
    __extends(GetEAadhaarDataInXmlFormatIdResponse, _super);
    function GetEAadhaarDataInXmlFormatIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatId401ApplicationJson)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXMLFormatId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEAadhaarDataInXmlFormatId404ApplicationJson)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXMLFormatId404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXMLFormatId500ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "getEAadhaarDataInXMLFormatId503ApplicationJSONOneOf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEAadhaarDataInXmlFormatIdResponse.prototype, "statusCode", void 0);
    return GetEAadhaarDataInXmlFormatIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetEAadhaarDataInXmlFormatIdResponse = GetEAadhaarDataInXmlFormatIdResponse;
