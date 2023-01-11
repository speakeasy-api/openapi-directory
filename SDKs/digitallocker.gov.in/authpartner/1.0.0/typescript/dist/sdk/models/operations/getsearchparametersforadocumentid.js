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
exports.GetSearchParametersForADocumentIdResponse = exports.GetSearchParametersForADocumentIdRequest = exports.GetSearchParametersForADocumentId500ApplicationJson = exports.GetSearchParametersForADocumentId401ApplicationJson = exports.GetSearchParametersForADocumentId400ApplicationJson = exports.GetSearchParametersForADocumentIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSearchParametersForADocumentIdSecurity = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdSecurity, _super);
    function GetSearchParametersForADocumentIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetSearchParametersForADocumentIdSecurity.prototype, "oauthsecurity", void 0);
    return GetSearchParametersForADocumentIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentIdSecurity = GetSearchParametersForADocumentIdSecurity;
var GetSearchParametersForADocumentId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId400ApplicationJson, _super);
    function GetSearchParametersForADocumentId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentId400ApplicationJson = GetSearchParametersForADocumentId400ApplicationJson;
var GetSearchParametersForADocumentId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId401ApplicationJson, _super);
    function GetSearchParametersForADocumentId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentId401ApplicationJson = GetSearchParametersForADocumentId401ApplicationJson;
var GetSearchParametersForADocumentId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentId500ApplicationJson, _super);
    function GetSearchParametersForADocumentId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetSearchParametersForADocumentId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentId500ApplicationJson = GetSearchParametersForADocumentId500ApplicationJson;
var GetSearchParametersForADocumentIdRequest = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdRequest, _super);
    function GetSearchParametersForADocumentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetSearchParametersForADocumentIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchParametersForADocumentIdSecurity)
    ], GetSearchParametersForADocumentIdRequest.prototype, "security", void 0);
    return GetSearchParametersForADocumentIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentIdRequest = GetSearchParametersForADocumentIdRequest;
var GetSearchParametersForADocumentIdResponse = /** @class */ (function (_super) {
    __extends(GetSearchParametersForADocumentIdResponse, _super);
    function GetSearchParametersForADocumentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchParametersForADocumentIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchParametersForADocumentId400ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchParametersForADocumentId401ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchParametersForADocumentId500ApplicationJson)
    ], GetSearchParametersForADocumentIdResponse.prototype, "getSearchParametersForADocumentId500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.SearchParametersResponse }),
        __metadata("design:type", Array)
    ], GetSearchParametersForADocumentIdResponse.prototype, "searchParametersResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchParametersForADocumentIdResponse.prototype, "statusCode", void 0);
    return GetSearchParametersForADocumentIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchParametersForADocumentIdResponse = GetSearchParametersForADocumentIdResponse;
