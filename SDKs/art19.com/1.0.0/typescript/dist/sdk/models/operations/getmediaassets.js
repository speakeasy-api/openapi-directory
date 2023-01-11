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
exports.GetMediaAssetsResponse = exports.GetMediaAssetsRequest = exports.GetMediaAssets400ApplicationVndApiPlusJson = exports.GetMediaAssets400ApplicationVndApiPlusJsonErrors = exports.GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource = exports.GetMediaAssets200ApplicationVndApiPlusJson = exports.GetMediaAssetsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMediaAssetsQueryParams = /** @class */ (function (_super) {
    __extends(GetMediaAssetsQueryParams, _super);
    function GetMediaAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetMediaAssetsQueryParams.prototype, "ids", void 0);
    return GetMediaAssetsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssetsQueryParams = GetMediaAssetsQueryParams;
var GetMediaAssets200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetMediaAssets200ApplicationVndApiPlusJson, _super);
    function GetMediaAssets200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.MediaAsset }),
        __metadata("design:type", Array)
    ], GetMediaAssets200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetMediaAssets200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetMediaAssets200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssets200ApplicationVndApiPlusJson = GetMediaAssets200ApplicationVndApiPlusJson;
// GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource = GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource;
var GetMediaAssets400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetMediaAssets400ApplicationVndApiPlusJsonErrors, _super);
    function GetMediaAssets400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetMediaAssets400ApplicationVndApiPlusJsonErrorsSource)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetMediaAssets400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetMediaAssets400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssets400ApplicationVndApiPlusJsonErrors = GetMediaAssets400ApplicationVndApiPlusJsonErrors;
var GetMediaAssets400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetMediaAssets400ApplicationVndApiPlusJson, _super);
    function GetMediaAssets400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetMediaAssets400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetMediaAssets400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetMediaAssets400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssets400ApplicationVndApiPlusJson = GetMediaAssets400ApplicationVndApiPlusJson;
var GetMediaAssetsRequest = /** @class */ (function (_super) {
    __extends(GetMediaAssetsRequest, _super);
    function GetMediaAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMediaAssetsQueryParams)
    ], GetMediaAssetsRequest.prototype, "queryParams", void 0);
    return GetMediaAssetsRequest;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssetsRequest = GetMediaAssetsRequest;
var GetMediaAssetsResponse = /** @class */ (function (_super) {
    __extends(GetMediaAssetsResponse, _super);
    function GetMediaAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMediaAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetMediaAssetsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMediaAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMediaAssets200ApplicationVndApiPlusJson)
    ], GetMediaAssetsResponse.prototype, "getMediaAssets200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMediaAssets400ApplicationVndApiPlusJson)
    ], GetMediaAssetsResponse.prototype, "getMediaAssets400ApplicationVndApiPlusJsonObject", void 0);
    return GetMediaAssetsResponse;
}(utils_1.SpeakeasyBase));
exports.GetMediaAssetsResponse = GetMediaAssetsResponse;
