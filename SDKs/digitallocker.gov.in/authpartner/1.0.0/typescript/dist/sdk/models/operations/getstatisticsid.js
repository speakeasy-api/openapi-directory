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
exports.GetStatisticsIdResponse = exports.GetStatisticsIdRequest = exports.GetStatisticsId500ApplicationJson = exports.GetStatisticsId401ApplicationJson = exports.GetStatisticsId400ApplicationJson = exports.GetStatisticsIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetStatisticsIdSecurity = /** @class */ (function (_super) {
    __extends(GetStatisticsIdSecurity, _super);
    function GetStatisticsIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetStatisticsIdSecurity.prototype, "oauthsecurity", void 0);
    return GetStatisticsIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsIdSecurity = GetStatisticsIdSecurity;
var GetStatisticsId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId400ApplicationJson, _super);
    function GetStatisticsId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsId400ApplicationJson = GetStatisticsId400ApplicationJson;
var GetStatisticsId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId401ApplicationJson, _super);
    function GetStatisticsId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsId401ApplicationJson = GetStatisticsId401ApplicationJson;
var GetStatisticsId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsId500ApplicationJson, _super);
    function GetStatisticsId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetStatisticsId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetStatisticsId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetStatisticsId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsId500ApplicationJson = GetStatisticsId500ApplicationJson;
var GetStatisticsIdRequest = /** @class */ (function (_super) {
    __extends(GetStatisticsIdRequest, _super);
    function GetStatisticsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], GetStatisticsIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsIdSecurity)
    ], GetStatisticsIdRequest.prototype, "security", void 0);
    return GetStatisticsIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsIdRequest = GetStatisticsIdRequest;
var GetStatisticsIdResponse = /** @class */ (function (_super) {
    __extends(GetStatisticsIdResponse, _super);
    function GetStatisticsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetStatisticsIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsId400ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsId401ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsId500ApplicationJson)
    ], GetStatisticsIdResponse.prototype, "getStatisticsId500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetStatisticsResponse)
    ], GetStatisticsIdResponse.prototype, "getStatisticsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetStatisticsIdResponse.prototype, "statusCode", void 0);
    return GetStatisticsIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsIdResponse = GetStatisticsIdResponse;
