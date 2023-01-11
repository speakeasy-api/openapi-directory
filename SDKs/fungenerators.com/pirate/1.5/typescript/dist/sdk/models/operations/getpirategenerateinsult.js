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
exports.GetPirateGenerateInsultResponse = exports.GetPirateGenerateInsultRequest = exports.GetPirateGenerateInsultSecurity = exports.GetPirateGenerateInsultQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPirateGenerateInsultQueryParams = /** @class */ (function (_super) {
    __extends(GetPirateGenerateInsultQueryParams, _super);
    function GetPirateGenerateInsultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetPirateGenerateInsultQueryParams.prototype, "limit", void 0);
    return GetPirateGenerateInsultQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPirateGenerateInsultQueryParams = GetPirateGenerateInsultQueryParams;
var GetPirateGenerateInsultSecurity = /** @class */ (function (_super) {
    __extends(GetPirateGenerateInsultSecurity, _super);
    function GetPirateGenerateInsultSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXFungeneratorsApiSecret)
    ], GetPirateGenerateInsultSecurity.prototype, "xFungeneratorsApiSecret", void 0);
    return GetPirateGenerateInsultSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPirateGenerateInsultSecurity = GetPirateGenerateInsultSecurity;
var GetPirateGenerateInsultRequest = /** @class */ (function (_super) {
    __extends(GetPirateGenerateInsultRequest, _super);
    function GetPirateGenerateInsultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPirateGenerateInsultQueryParams)
    ], GetPirateGenerateInsultRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPirateGenerateInsultSecurity)
    ], GetPirateGenerateInsultRequest.prototype, "security", void 0);
    return GetPirateGenerateInsultRequest;
}(utils_1.SpeakeasyBase));
exports.GetPirateGenerateInsultRequest = GetPirateGenerateInsultRequest;
var GetPirateGenerateInsultResponse = /** @class */ (function (_super) {
    __extends(GetPirateGenerateInsultResponse, _super);
    function GetPirateGenerateInsultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPirateGenerateInsultResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPirateGenerateInsultResponse.prototype, "statusCode", void 0);
    return GetPirateGenerateInsultResponse;
}(utils_1.SpeakeasyBase));
exports.GetPirateGenerateInsultResponse = GetPirateGenerateInsultResponse;
