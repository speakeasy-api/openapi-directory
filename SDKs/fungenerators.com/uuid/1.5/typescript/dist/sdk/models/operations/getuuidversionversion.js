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
exports.GetUuidVersionVersionResponse = exports.GetUuidVersionVersionRequest = exports.GetUuidVersionVersionSecurity = exports.GetUuidVersionVersionQueryParams = exports.GetUuidVersionVersionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUuidVersionVersionPathParams = /** @class */ (function (_super) {
    __extends(GetUuidVersionVersionPathParams, _super);
    function GetUuidVersionVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", Number)
    ], GetUuidVersionVersionPathParams.prototype, "version", void 0);
    return GetUuidVersionVersionPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUuidVersionVersionPathParams = GetUuidVersionVersionPathParams;
var GetUuidVersionVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetUuidVersionVersionQueryParams, _super);
    function GetUuidVersionVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], GetUuidVersionVersionQueryParams.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], GetUuidVersionVersionQueryParams.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetUuidVersionVersionQueryParams.prototype, "type", void 0);
    return GetUuidVersionVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUuidVersionVersionQueryParams = GetUuidVersionVersionQueryParams;
var GetUuidVersionVersionSecurity = /** @class */ (function (_super) {
    __extends(GetUuidVersionVersionSecurity, _super);
    function GetUuidVersionVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetUuidVersionVersionSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetUuidVersionVersionSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUuidVersionVersionSecurity = GetUuidVersionVersionSecurity;
var GetUuidVersionVersionRequest = /** @class */ (function (_super) {
    __extends(GetUuidVersionVersionRequest, _super);
    function GetUuidVersionVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUuidVersionVersionPathParams)
    ], GetUuidVersionVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUuidVersionVersionQueryParams)
    ], GetUuidVersionVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUuidVersionVersionSecurity)
    ], GetUuidVersionVersionRequest.prototype, "security", void 0);
    return GetUuidVersionVersionRequest;
}(utils_1.SpeakeasyBase));
exports.GetUuidVersionVersionRequest = GetUuidVersionVersionRequest;
var GetUuidVersionVersionResponse = /** @class */ (function (_super) {
    __extends(GetUuidVersionVersionResponse, _super);
    function GetUuidVersionVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUuidVersionVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUuidVersionVersionResponse.prototype, "statusCode", void 0);
    return GetUuidVersionVersionResponse;
}(utils_1.SpeakeasyBase));
exports.GetUuidVersionVersionResponse = GetUuidVersionVersionResponse;
