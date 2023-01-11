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
exports.GetListOfIssuersIdResponse = exports.GetListOfIssuersIdRequest = exports.GetListOfIssuersId500ApplicationJson = exports.GetListOfIssuersId401ApplicationJson = exports.GetListOfIssuersId400ApplicationJson = exports.GetListOfIssuersIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListOfIssuersIdSecurity = /** @class */ (function (_super) {
    __extends(GetListOfIssuersIdSecurity, _super);
    function GetListOfIssuersIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetListOfIssuersIdSecurity.prototype, "oauthsecurity", void 0);
    return GetListOfIssuersIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersIdSecurity = GetListOfIssuersIdSecurity;
var GetListOfIssuersId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuersId400ApplicationJson, _super);
    function GetListOfIssuersId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfIssuersId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfIssuersId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfIssuersId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersId400ApplicationJson = GetListOfIssuersId400ApplicationJson;
var GetListOfIssuersId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuersId401ApplicationJson, _super);
    function GetListOfIssuersId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfIssuersId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfIssuersId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfIssuersId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersId401ApplicationJson = GetListOfIssuersId401ApplicationJson;
var GetListOfIssuersId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfIssuersId500ApplicationJson, _super);
    function GetListOfIssuersId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetListOfIssuersId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetListOfIssuersId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfIssuersId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersId500ApplicationJson = GetListOfIssuersId500ApplicationJson;
var GetListOfIssuersIdRequest = /** @class */ (function (_super) {
    __extends(GetListOfIssuersIdRequest, _super);
    function GetListOfIssuersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetListOfIssuersIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuersIdSecurity)
    ], GetListOfIssuersIdRequest.prototype, "security", void 0);
    return GetListOfIssuersIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersIdRequest = GetListOfIssuersIdRequest;
var GetListOfIssuersIdResponse = /** @class */ (function (_super) {
    __extends(GetListOfIssuersIdResponse, _super);
    function GetListOfIssuersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListOfIssuersIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuersId400ApplicationJson)
    ], GetListOfIssuersIdResponse.prototype, "getListOfIssuersId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuersId401ApplicationJson)
    ], GetListOfIssuersIdResponse.prototype, "getListOfIssuersId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfIssuersId500ApplicationJson)
    ], GetListOfIssuersIdResponse.prototype, "getListOfIssuersId500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.IssuerResponse)
    ], GetListOfIssuersIdResponse.prototype, "issuerResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListOfIssuersIdResponse.prototype, "statusCode", void 0);
    return GetListOfIssuersIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetListOfIssuersIdResponse = GetListOfIssuersIdResponse;
