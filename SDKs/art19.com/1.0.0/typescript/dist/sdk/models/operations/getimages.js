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
exports.GetImagesResponse = exports.GetImagesRequest = exports.GetImages400ApplicationVndApiPlusJson = exports.GetImages400ApplicationVndApiPlusJsonErrors = exports.GetImages400ApplicationVndApiPlusJsonErrorsSource = exports.GetImages200ApplicationVndApiPlusJson = exports.GetImagesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesQueryParams, _super);
    function GetImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetImagesQueryParams.prototype, "ids", void 0);
    return GetImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetImagesQueryParams = GetImagesQueryParams;
var GetImages200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationVndApiPlusJson, _super);
    function GetImages200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Image }),
        __metadata("design:type", Array)
    ], GetImages200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetImages200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetImages200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetImages200ApplicationVndApiPlusJson = GetImages200ApplicationVndApiPlusJson;
// GetImages400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetImages400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetImages400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetImages400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetImages400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetImages400ApplicationVndApiPlusJsonErrorsSource = GetImages400ApplicationVndApiPlusJsonErrorsSource;
var GetImages400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetImages400ApplicationVndApiPlusJsonErrors, _super);
    function GetImages400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetImages400ApplicationVndApiPlusJsonErrorsSource)
    ], GetImages400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetImages400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetImages400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetImages400ApplicationVndApiPlusJsonErrors = GetImages400ApplicationVndApiPlusJsonErrors;
var GetImages400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetImages400ApplicationVndApiPlusJson, _super);
    function GetImages400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetImages400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetImages400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetImages400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetImages400ApplicationVndApiPlusJson = GetImages400ApplicationVndApiPlusJson;
var GetImagesRequest = /** @class */ (function (_super) {
    __extends(GetImagesRequest, _super);
    function GetImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImagesQueryParams)
    ], GetImagesRequest.prototype, "queryParams", void 0);
    return GetImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetImagesRequest = GetImagesRequest;
var GetImagesResponse = /** @class */ (function (_super) {
    __extends(GetImagesResponse, _super);
    function GetImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetImagesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetImagesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImages200ApplicationVndApiPlusJson)
    ], GetImagesResponse.prototype, "getImages200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetImages400ApplicationVndApiPlusJson)
    ], GetImagesResponse.prototype, "getImages400ApplicationVndApiPlusJsonObject", void 0);
    return GetImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetImagesResponse = GetImagesResponse;
