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
exports.ListBotVersionsResponse = exports.ListBotVersionsRequest = exports.ListBotVersionsRequestBody = exports.ListBotVersionsRequestBodySortBy = exports.ListBotVersionsHeaders = exports.ListBotVersionsQueryParams = exports.ListBotVersionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListBotVersionsPathParams = /** @class */ (function (_super) {
    __extends(ListBotVersionsPathParams, _super);
    function ListBotVersionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=botId" }),
        __metadata("design:type", String)
    ], ListBotVersionsPathParams.prototype, "botId", void 0);
    return ListBotVersionsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsPathParams = ListBotVersionsPathParams;
var ListBotVersionsQueryParams = /** @class */ (function (_super) {
    __extends(ListBotVersionsQueryParams, _super);
    function ListBotVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListBotVersionsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListBotVersionsQueryParams.prototype, "nextToken", void 0);
    return ListBotVersionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsQueryParams = ListBotVersionsQueryParams;
var ListBotVersionsHeaders = /** @class */ (function (_super) {
    __extends(ListBotVersionsHeaders, _super);
    function ListBotVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListBotVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListBotVersionsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsHeaders = ListBotVersionsHeaders;
// ListBotVersionsRequestBodySortBy
/**
 * Specifies attributes for sorting a list of bot versions.
**/
var ListBotVersionsRequestBodySortBy = /** @class */ (function (_super) {
    __extends(ListBotVersionsRequestBodySortBy, _super);
    function ListBotVersionsRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], ListBotVersionsRequestBodySortBy.prototype, "attribute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], ListBotVersionsRequestBodySortBy.prototype, "order", void 0);
    return ListBotVersionsRequestBodySortBy;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsRequestBodySortBy = ListBotVersionsRequestBodySortBy;
var ListBotVersionsRequestBody = /** @class */ (function (_super) {
    __extends(ListBotVersionsRequestBody, _super);
    function ListBotVersionsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxResults" }),
        __metadata("design:type", Number)
    ], ListBotVersionsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], ListBotVersionsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortBy" }),
        __metadata("design:type", ListBotVersionsRequestBodySortBy)
    ], ListBotVersionsRequestBody.prototype, "sortBy", void 0);
    return ListBotVersionsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsRequestBody = ListBotVersionsRequestBody;
var ListBotVersionsRequest = /** @class */ (function (_super) {
    __extends(ListBotVersionsRequest, _super);
    function ListBotVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBotVersionsPathParams)
    ], ListBotVersionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBotVersionsQueryParams)
    ], ListBotVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListBotVersionsHeaders)
    ], ListBotVersionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListBotVersionsRequestBody)
    ], ListBotVersionsRequest.prototype, "request", void 0);
    return ListBotVersionsRequest;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsRequest = ListBotVersionsRequest;
var ListBotVersionsResponse = /** @class */ (function (_super) {
    __extends(ListBotVersionsResponse, _super);
    function ListBotVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListBotVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListBotVersionsResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListBotVersionsResponse)
    ], ListBotVersionsResponse.prototype, "listBotVersionsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListBotVersionsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListBotVersionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListBotVersionsResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListBotVersionsResponse.prototype, "validationException", void 0);
    return ListBotVersionsResponse;
}(utils_1.SpeakeasyBase));
exports.ListBotVersionsResponse = ListBotVersionsResponse;
