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
exports.ListPlaybackKeyPairsResponse = exports.ListPlaybackKeyPairsRequest = exports.ListPlaybackKeyPairsRequestBody = exports.ListPlaybackKeyPairsHeaders = exports.ListPlaybackKeyPairsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPlaybackKeyPairsQueryParams = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsQueryParams, _super);
    function ListPlaybackKeyPairsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsQueryParams.prototype, "nextToken", void 0);
    return ListPlaybackKeyPairsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPlaybackKeyPairsQueryParams = ListPlaybackKeyPairsQueryParams;
var ListPlaybackKeyPairsHeaders = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsHeaders, _super);
    function ListPlaybackKeyPairsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListPlaybackKeyPairsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListPlaybackKeyPairsHeaders = ListPlaybackKeyPairsHeaders;
var ListPlaybackKeyPairsRequestBody = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsRequestBody, _super);
    function ListPlaybackKeyPairsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListPlaybackKeyPairsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsRequestBody.prototype, "nextToken", void 0);
    return ListPlaybackKeyPairsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListPlaybackKeyPairsRequestBody = ListPlaybackKeyPairsRequestBody;
var ListPlaybackKeyPairsRequest = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsRequest, _super);
    function ListPlaybackKeyPairsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPlaybackKeyPairsQueryParams)
    ], ListPlaybackKeyPairsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPlaybackKeyPairsHeaders)
    ], ListPlaybackKeyPairsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListPlaybackKeyPairsRequestBody)
    ], ListPlaybackKeyPairsRequest.prototype, "request", void 0);
    return ListPlaybackKeyPairsRequest;
}(utils_1.SpeakeasyBase));
exports.ListPlaybackKeyPairsRequest = ListPlaybackKeyPairsRequest;
var ListPlaybackKeyPairsResponse = /** @class */ (function (_super) {
    __extends(ListPlaybackKeyPairsResponse, _super);
    function ListPlaybackKeyPairsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPlaybackKeyPairsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPlaybackKeyPairsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListPlaybackKeyPairsResponse)
    ], ListPlaybackKeyPairsResponse.prototype, "listPlaybackKeyPairsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPlaybackKeyPairsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPlaybackKeyPairsResponse.prototype, "validationException", void 0);
    return ListPlaybackKeyPairsResponse;
}(utils_1.SpeakeasyBase));
exports.ListPlaybackKeyPairsResponse = ListPlaybackKeyPairsResponse;
