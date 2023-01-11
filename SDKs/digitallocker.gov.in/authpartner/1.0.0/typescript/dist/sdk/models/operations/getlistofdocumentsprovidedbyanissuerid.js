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
exports.GetListOfDocumentsProvidedByAnIssuerIdResponse = exports.GetListOfDocumentsProvidedByAnIssuerIdRequest = exports.GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson = exports.GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson = exports.GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson = exports.GetListOfDocumentsProvidedByAnIssuerIdSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListOfDocumentsProvidedByAnIssuerIdSecurity = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdSecurity, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetListOfDocumentsProvidedByAnIssuerIdSecurity.prototype, "oauthsecurity", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerIdSecurity = GetListOfDocumentsProvidedByAnIssuerIdSecurity;
var GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson = GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson;
var GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson = GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson;
var GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson, _super);
    function GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_description" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson.prototype, "errorDescription", void 0);
    return GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson = GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson;
var GetListOfDocumentsProvidedByAnIssuerIdRequest = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdRequest, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", Object)
    ], GetListOfDocumentsProvidedByAnIssuerIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerIdSecurity)
    ], GetListOfDocumentsProvidedByAnIssuerIdRequest.prototype, "security", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerIdRequest = GetListOfDocumentsProvidedByAnIssuerIdRequest;
var GetListOfDocumentsProvidedByAnIssuerIdResponse = /** @class */ (function (_super) {
    __extends(GetListOfDocumentsProvidedByAnIssuerIdResponse, _super);
    function GetListOfDocumentsProvidedByAnIssuerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DocTypeResponse)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "docTypeResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId400ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId401ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListOfDocumentsProvidedByAnIssuerId500ApplicationJson)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "getListOfDocumentsProvidedByAnIssuerId500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListOfDocumentsProvidedByAnIssuerIdResponse.prototype, "statusCode", void 0);
    return GetListOfDocumentsProvidedByAnIssuerIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetListOfDocumentsProvidedByAnIssuerIdResponse = GetListOfDocumentsProvidedByAnIssuerIdResponse;
