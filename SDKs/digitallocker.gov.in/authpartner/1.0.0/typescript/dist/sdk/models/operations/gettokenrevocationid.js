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
exports.GetTokenRevocationIdResponse = exports.GetTokenRevocationIdRequest = exports.GetTokenRevocationIdSecurity = exports.GetTokenRevocationIdRequestBody = exports.GetTokenRevocationIdRequestBodyTokenTypeHintEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTokenRevocationIdRequestBodyTokenTypeHintEnum;
(function (GetTokenRevocationIdRequestBodyTokenTypeHintEnum) {
    GetTokenRevocationIdRequestBodyTokenTypeHintEnum["RefreshToken"] = "refresh_token";
    GetTokenRevocationIdRequestBodyTokenTypeHintEnum["AccessToken"] = "access_token";
})(GetTokenRevocationIdRequestBodyTokenTypeHintEnum = exports.GetTokenRevocationIdRequestBodyTokenTypeHintEnum || (exports.GetTokenRevocationIdRequestBodyTokenTypeHintEnum = {}));
var GetTokenRevocationIdRequestBody = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdRequestBody, _super);
    function GetTokenRevocationIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], GetTokenRevocationIdRequestBody.prototype, "token", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=token_type_hint" }),
        __metadata("design:type", String)
    ], GetTokenRevocationIdRequestBody.prototype, "tokenTypeHint", void 0);
    return GetTokenRevocationIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetTokenRevocationIdRequestBody = GetTokenRevocationIdRequestBody;
var GetTokenRevocationIdSecurity = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdSecurity, _super);
    function GetTokenRevocationIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauthsecurity)
    ], GetTokenRevocationIdSecurity.prototype, "oauthsecurity", void 0);
    return GetTokenRevocationIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTokenRevocationIdSecurity = GetTokenRevocationIdSecurity;
var GetTokenRevocationIdRequest = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdRequest, _super);
    function GetTokenRevocationIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetTokenRevocationIdRequestBody)
    ], GetTokenRevocationIdRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTokenRevocationIdSecurity)
    ], GetTokenRevocationIdRequest.prototype, "security", void 0);
    return GetTokenRevocationIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetTokenRevocationIdRequest = GetTokenRevocationIdRequest;
var GetTokenRevocationIdResponse = /** @class */ (function (_super) {
    __extends(GetTokenRevocationIdResponse, _super);
    function GetTokenRevocationIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTokenRevocationIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTokenRevocationIdResponse.prototype, "statusCode", void 0);
    return GetTokenRevocationIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetTokenRevocationIdResponse = GetTokenRevocationIdResponse;
