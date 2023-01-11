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
exports.ListRealtimeContactAnalysisSegmentsResponse = exports.ListRealtimeContactAnalysisSegmentsRequest = exports.ListRealtimeContactAnalysisSegmentsRequestBody = exports.ListRealtimeContactAnalysisSegmentsHeaders = exports.ListRealtimeContactAnalysisSegmentsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListRealtimeContactAnalysisSegmentsQueryParams = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsQueryParams, _super);
    function ListRealtimeContactAnalysisSegmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsQueryParams.prototype, "nextToken", void 0);
    return ListRealtimeContactAnalysisSegmentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRealtimeContactAnalysisSegmentsQueryParams = ListRealtimeContactAnalysisSegmentsQueryParams;
var ListRealtimeContactAnalysisSegmentsHeaders = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsHeaders, _super);
    function ListRealtimeContactAnalysisSegmentsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListRealtimeContactAnalysisSegmentsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListRealtimeContactAnalysisSegmentsHeaders = ListRealtimeContactAnalysisSegmentsHeaders;
var ListRealtimeContactAnalysisSegmentsRequestBody = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsRequestBody, _super);
    function ListRealtimeContactAnalysisSegmentsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ContactId" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsRequestBody.prototype, "contactId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsRequestBody.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListRealtimeContactAnalysisSegmentsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsRequestBody.prototype, "nextToken", void 0);
    return ListRealtimeContactAnalysisSegmentsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListRealtimeContactAnalysisSegmentsRequestBody = ListRealtimeContactAnalysisSegmentsRequestBody;
var ListRealtimeContactAnalysisSegmentsRequest = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsRequest, _super);
    function ListRealtimeContactAnalysisSegmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRealtimeContactAnalysisSegmentsQueryParams)
    ], ListRealtimeContactAnalysisSegmentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRealtimeContactAnalysisSegmentsHeaders)
    ], ListRealtimeContactAnalysisSegmentsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListRealtimeContactAnalysisSegmentsRequestBody)
    ], ListRealtimeContactAnalysisSegmentsRequest.prototype, "request", void 0);
    return ListRealtimeContactAnalysisSegmentsRequest;
}(utils_1.SpeakeasyBase));
exports.ListRealtimeContactAnalysisSegmentsRequest = ListRealtimeContactAnalysisSegmentsRequest;
var ListRealtimeContactAnalysisSegmentsResponse = /** @class */ (function (_super) {
    __extends(ListRealtimeContactAnalysisSegmentsResponse, _super);
    function ListRealtimeContactAnalysisSegmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListRealtimeContactAnalysisSegmentsResponse)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "listRealtimeContactAnalysisSegmentsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRealtimeContactAnalysisSegmentsResponse.prototype, "throttlingException", void 0);
    return ListRealtimeContactAnalysisSegmentsResponse;
}(utils_1.SpeakeasyBase));
exports.ListRealtimeContactAnalysisSegmentsResponse = ListRealtimeContactAnalysisSegmentsResponse;
