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
exports.AccountCreateOAuth2SessionResponse = exports.AccountCreateOAuth2SessionRequest = exports.AccountCreateOAuth2SessionSecurity = exports.AccountCreateOAuth2SessionQueryParams = exports.AccountCreateOAuth2SessionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AccountCreateOAuth2SessionPathParams = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionPathParams, _super);
    function AccountCreateOAuth2SessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=provider" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionPathParams.prototype, "provider", void 0);
    return AccountCreateOAuth2SessionPathParams;
}(utils_1.SpeakeasyBase));
exports.AccountCreateOAuth2SessionPathParams = AccountCreateOAuth2SessionPathParams;
var AccountCreateOAuth2SessionQueryParams = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionQueryParams, _super);
    function AccountCreateOAuth2SessionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=failure" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "failure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=scopes" }),
        __metadata("design:type", Array)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "scopes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=success" }),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionQueryParams.prototype, "success", void 0);
    return AccountCreateOAuth2SessionQueryParams;
}(utils_1.SpeakeasyBase));
exports.AccountCreateOAuth2SessionQueryParams = AccountCreateOAuth2SessionQueryParams;
var AccountCreateOAuth2SessionSecurity = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionSecurity, _super);
    function AccountCreateOAuth2SessionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], AccountCreateOAuth2SessionSecurity.prototype, "project", void 0);
    return AccountCreateOAuth2SessionSecurity;
}(utils_1.SpeakeasyBase));
exports.AccountCreateOAuth2SessionSecurity = AccountCreateOAuth2SessionSecurity;
var AccountCreateOAuth2SessionRequest = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionRequest, _super);
    function AccountCreateOAuth2SessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCreateOAuth2SessionPathParams)
    ], AccountCreateOAuth2SessionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCreateOAuth2SessionQueryParams)
    ], AccountCreateOAuth2SessionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCreateOAuth2SessionSecurity)
    ], AccountCreateOAuth2SessionRequest.prototype, "security", void 0);
    return AccountCreateOAuth2SessionRequest;
}(utils_1.SpeakeasyBase));
exports.AccountCreateOAuth2SessionRequest = AccountCreateOAuth2SessionRequest;
var AccountCreateOAuth2SessionResponse = /** @class */ (function (_super) {
    __extends(AccountCreateOAuth2SessionResponse, _super);
    function AccountCreateOAuth2SessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountCreateOAuth2SessionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountCreateOAuth2SessionResponse.prototype, "statusCode", void 0);
    return AccountCreateOAuth2SessionResponse;
}(utils_1.SpeakeasyBase));
exports.AccountCreateOAuth2SessionResponse = AccountCreateOAuth2SessionResponse;
