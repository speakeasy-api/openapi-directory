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
exports.GetV3ImagesIdResponse = exports.GetV3ImagesIdRequest = exports.GetV3ImagesIdHeaders = exports.GetV3ImagesIdQueryParams = exports.GetV3ImagesIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV3ImagesIdPathParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdPathParams, _super);
    function GetV3ImagesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdPathParams.prototype, "id", void 0);
    return GetV3ImagesIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetV3ImagesIdPathParams = GetV3ImagesIdPathParams;
var GetV3ImagesIdQueryParams = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdQueryParams, _super);
    function GetV3ImagesIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetV3ImagesIdQueryParams.prototype, "fields", void 0);
    return GetV3ImagesIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV3ImagesIdQueryParams = GetV3ImagesIdQueryParams;
var GetV3ImagesIdHeaders = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdHeaders, _super);
    function GetV3ImagesIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], GetV3ImagesIdHeaders.prototype, "acceptLanguage", void 0);
    return GetV3ImagesIdHeaders;
}(utils_1.SpeakeasyBase));
exports.GetV3ImagesIdHeaders = GetV3ImagesIdHeaders;
var GetV3ImagesIdRequest = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdRequest, _super);
    function GetV3ImagesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3ImagesIdPathParams)
    ], GetV3ImagesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3ImagesIdQueryParams)
    ], GetV3ImagesIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV3ImagesIdHeaders)
    ], GetV3ImagesIdRequest.prototype, "headers", void 0);
    return GetV3ImagesIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetV3ImagesIdRequest = GetV3ImagesIdRequest;
var GetV3ImagesIdResponse = /** @class */ (function (_super) {
    __extends(GetV3ImagesIdResponse, _super);
    function GetV3ImagesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV3ImagesIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagesDetailResults)
    ], GetV3ImagesIdResponse.prototype, "imagesDetailResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV3ImagesIdResponse.prototype, "statusCode", void 0);
    return GetV3ImagesIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetV3ImagesIdResponse = GetV3ImagesIdResponse;
