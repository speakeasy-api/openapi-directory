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
exports.PostV3DownloadsVideosIdResponse = exports.PostV3DownloadsVideosIdRequest = exports.PostV3DownloadsVideosIdRequests = exports.PostV3DownloadsVideosIdHeaders = exports.PostV3DownloadsVideosIdQueryParams = exports.PostV3DownloadsVideosIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostV3DownloadsVideosIdPathParams = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdPathParams, _super);
    function PostV3DownloadsVideosIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostV3DownloadsVideosIdPathParams.prototype, "id", void 0);
    return PostV3DownloadsVideosIdPathParams;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdPathParams = PostV3DownloadsVideosIdPathParams;
var PostV3DownloadsVideosIdQueryParams = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdQueryParams, _super);
    function PostV3DownloadsVideosIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=auto_download" }),
        __metadata("design:type", Boolean)
    ], PostV3DownloadsVideosIdQueryParams.prototype, "autoDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=product_id" }),
        __metadata("design:type", Number)
    ], PostV3DownloadsVideosIdQueryParams.prototype, "productId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], PostV3DownloadsVideosIdQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=use_team_credits" }),
        __metadata("design:type", Boolean)
    ], PostV3DownloadsVideosIdQueryParams.prototype, "useTeamCredits", void 0);
    return PostV3DownloadsVideosIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdQueryParams = PostV3DownloadsVideosIdQueryParams;
var PostV3DownloadsVideosIdHeaders = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdHeaders, _super);
    function PostV3DownloadsVideosIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept-Language" }),
        __metadata("design:type", String)
    ], PostV3DownloadsVideosIdHeaders.prototype, "acceptLanguage", void 0);
    return PostV3DownloadsVideosIdHeaders;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdHeaders = PostV3DownloadsVideosIdHeaders;
var PostV3DownloadsVideosIdRequests = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdRequests, _super);
    function PostV3DownloadsVideosIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsVideosIdRequests.prototype, "premiumAccessDownloadData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsVideosIdRequests.prototype, "premiumAccessDownloadData1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsVideosIdRequests.prototype, "premiumAccessDownloadData2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PremiumAccessDownloadData)
    ], PostV3DownloadsVideosIdRequests.prototype, "premiumAccessDownloadData3", void 0);
    return PostV3DownloadsVideosIdRequests;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdRequests = PostV3DownloadsVideosIdRequests;
var PostV3DownloadsVideosIdRequest = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdRequest, _super);
    function PostV3DownloadsVideosIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV3DownloadsVideosIdPathParams)
    ], PostV3DownloadsVideosIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV3DownloadsVideosIdQueryParams)
    ], PostV3DownloadsVideosIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV3DownloadsVideosIdHeaders)
    ], PostV3DownloadsVideosIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostV3DownloadsVideosIdRequests)
    ], PostV3DownloadsVideosIdRequest.prototype, "request", void 0);
    return PostV3DownloadsVideosIdRequest;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdRequest = PostV3DownloadsVideosIdRequest;
var PostV3DownloadsVideosIdResponse = /** @class */ (function (_super) {
    __extends(PostV3DownloadsVideosIdResponse, _super);
    function PostV3DownloadsVideosIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostV3DownloadsVideosIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostV3DownloadsVideosIdResponse.prototype, "statusCode", void 0);
    return PostV3DownloadsVideosIdResponse;
}(utils_1.SpeakeasyBase));
exports.PostV3DownloadsVideosIdResponse = PostV3DownloadsVideosIdResponse;
