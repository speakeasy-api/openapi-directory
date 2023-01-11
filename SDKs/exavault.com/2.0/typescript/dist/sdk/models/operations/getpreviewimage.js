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
exports.GetPreviewImageResponse = exports.GetPreviewImageRequest = exports.GetPreviewImageHeaders = exports.GetPreviewImageQueryParams = exports.GetPreviewImageSizeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPreviewImageSizeEnum;
(function (GetPreviewImageSizeEnum) {
    GetPreviewImageSizeEnum["Small"] = "small";
    GetPreviewImageSizeEnum["Medium"] = "medium";
    GetPreviewImageSizeEnum["Large"] = "large";
})(GetPreviewImageSizeEnum = exports.GetPreviewImageSizeEnum || (exports.GetPreviewImageSizeEnum = {}));
var GetPreviewImageQueryParams = /** @class */ (function (_super) {
    __extends(GetPreviewImageQueryParams, _super);
    function GetPreviewImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=height" }),
        __metadata("design:type", Number)
    ], GetPreviewImageQueryParams.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPreviewImageQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resource" }),
        __metadata("design:type", String)
    ], GetPreviewImageQueryParams.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], GetPreviewImageQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=width" }),
        __metadata("design:type", Number)
    ], GetPreviewImageQueryParams.prototype, "width", void 0);
    return GetPreviewImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPreviewImageQueryParams = GetPreviewImageQueryParams;
var GetPreviewImageHeaders = /** @class */ (function (_super) {
    __extends(GetPreviewImageHeaders, _super);
    function GetPreviewImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], GetPreviewImageHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], GetPreviewImageHeaders.prototype, "evApiKey", void 0);
    return GetPreviewImageHeaders;
}(utils_1.SpeakeasyBase));
exports.GetPreviewImageHeaders = GetPreviewImageHeaders;
var GetPreviewImageRequest = /** @class */ (function (_super) {
    __extends(GetPreviewImageRequest, _super);
    function GetPreviewImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPreviewImageQueryParams)
    ], GetPreviewImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPreviewImageHeaders)
    ], GetPreviewImageRequest.prototype, "headers", void 0);
    return GetPreviewImageRequest;
}(utils_1.SpeakeasyBase));
exports.GetPreviewImageRequest = GetPreviewImageRequest;
var GetPreviewImageResponse = /** @class */ (function (_super) {
    __extends(GetPreviewImageResponse, _super);
    function GetPreviewImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPreviewImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PreviewFileResponse)
    ], GetPreviewImageResponse.prototype, "previewFileResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPreviewImageResponse.prototype, "statusCode", void 0);
    return GetPreviewImageResponse;
}(utils_1.SpeakeasyBase));
exports.GetPreviewImageResponse = GetPreviewImageResponse;
