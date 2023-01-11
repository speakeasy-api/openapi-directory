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
exports.GetApiV1ChaptersChapterNumberVersesResponse = exports.GetApiV1ChaptersChapterNumberVersesRequest = exports.GetApiV1ChaptersChapterNumberVersesQueryParams = exports.GetApiV1ChaptersChapterNumberVersesLanguageEnum = exports.GetApiV1ChaptersChapterNumberVersesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetApiV1ChaptersChapterNumberVersesPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1ChaptersChapterNumberVersesPathParams, _super);
    function GetApiV1ChaptersChapterNumberVersesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=chapter_number" }),
        __metadata("design:type", Number)
    ], GetApiV1ChaptersChapterNumberVersesPathParams.prototype, "chapterNumber", void 0);
    return GetApiV1ChaptersChapterNumberVersesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetApiV1ChaptersChapterNumberVersesPathParams = GetApiV1ChaptersChapterNumberVersesPathParams;
var GetApiV1ChaptersChapterNumberVersesLanguageEnum;
(function (GetApiV1ChaptersChapterNumberVersesLanguageEnum) {
    GetApiV1ChaptersChapterNumberVersesLanguageEnum["Hi"] = "hi";
})(GetApiV1ChaptersChapterNumberVersesLanguageEnum = exports.GetApiV1ChaptersChapterNumberVersesLanguageEnum || (exports.GetApiV1ChaptersChapterNumberVersesLanguageEnum = {}));
var GetApiV1ChaptersChapterNumberVersesQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1ChaptersChapterNumberVersesQueryParams, _super);
    function GetApiV1ChaptersChapterNumberVersesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GetApiV1ChaptersChapterNumberVersesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetApiV1ChaptersChapterNumberVersesQueryParams.prototype, "language", void 0);
    return GetApiV1ChaptersChapterNumberVersesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetApiV1ChaptersChapterNumberVersesQueryParams = GetApiV1ChaptersChapterNumberVersesQueryParams;
var GetApiV1ChaptersChapterNumberVersesRequest = /** @class */ (function (_super) {
    __extends(GetApiV1ChaptersChapterNumberVersesRequest, _super);
    function GetApiV1ChaptersChapterNumberVersesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1ChaptersChapterNumberVersesPathParams)
    ], GetApiV1ChaptersChapterNumberVersesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1ChaptersChapterNumberVersesQueryParams)
    ], GetApiV1ChaptersChapterNumberVersesRequest.prototype, "queryParams", void 0);
    return GetApiV1ChaptersChapterNumberVersesRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiV1ChaptersChapterNumberVersesRequest = GetApiV1ChaptersChapterNumberVersesRequest;
var GetApiV1ChaptersChapterNumberVersesResponse = /** @class */ (function (_super) {
    __extends(GetApiV1ChaptersChapterNumberVersesResponse, _super);
    function GetApiV1ChaptersChapterNumberVersesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiV1ChaptersChapterNumberVersesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiV1ChaptersChapterNumberVersesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VerseSchema)
    ], GetApiV1ChaptersChapterNumberVersesResponse.prototype, "verseSchema", void 0);
    return GetApiV1ChaptersChapterNumberVersesResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiV1ChaptersChapterNumberVersesResponse = GetApiV1ChaptersChapterNumberVersesResponse;
