"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetUsageStatisticsResponse = exports.GetUsageStatisticsRequest = exports.GetUsageStatisticsRequestBody = exports.GetUsageStatisticsRequestBodyTimeRangeEnum = exports.GetUsageStatisticsRequestBodySortBy = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
 */
var GetUsageStatisticsRequestBodySortBy = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequestBodySortBy, _super);
    function GetUsageStatisticsRequestBodySortBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "key" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBodySortBy.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "orderBy" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBodySortBy.prototype, "orderBy", void 0);
    return GetUsageStatisticsRequestBodySortBy;
}(utils_1.SpeakeasyBase));
exports.GetUsageStatisticsRequestBodySortBy = GetUsageStatisticsRequestBodySortBy;
/**
 * An inclusive time period that Amazon Macie usage data applies to. Possible values are:
 */
var GetUsageStatisticsRequestBodyTimeRangeEnum;
(function (GetUsageStatisticsRequestBodyTimeRangeEnum) {
    GetUsageStatisticsRequestBodyTimeRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    GetUsageStatisticsRequestBodyTimeRangeEnum["Past30Days"] = "PAST_30_DAYS";
})(GetUsageStatisticsRequestBodyTimeRangeEnum = exports.GetUsageStatisticsRequestBodyTimeRangeEnum || (exports.GetUsageStatisticsRequestBodyTimeRangeEnum = {}));
var GetUsageStatisticsRequestBody = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequestBody, _super);
    function GetUsageStatisticsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.UsageStatisticsFilter }),
        (0, class_transformer_1.Expose)({ name: "filterBy" }),
        (0, class_transformer_1.Type)(function () { return shared.UsageStatisticsFilter; }),
        __metadata("design:type", Array)
    ], GetUsageStatisticsRequestBody.prototype, "filterBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "maxResults" }),
        __metadata("design:type", Number)
    ], GetUsageStatisticsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nextToken" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sortBy" }),
        (0, class_transformer_1.Type)(function () { return GetUsageStatisticsRequestBodySortBy; }),
        __metadata("design:type", GetUsageStatisticsRequestBodySortBy)
    ], GetUsageStatisticsRequestBody.prototype, "sortBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "timeRange" }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequestBody.prototype, "timeRange", void 0);
    return GetUsageStatisticsRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetUsageStatisticsRequestBody = GetUsageStatisticsRequestBody;
var GetUsageStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsRequest, _super);
    function GetUsageStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetUsageStatisticsRequestBody)
    ], GetUsageStatisticsRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=maxResults",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=nextToken",
        }),
        __metadata("design:type", String)
    ], GetUsageStatisticsRequest.prototype, "nextToken", void 0);
    return GetUsageStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsageStatisticsRequest = GetUsageStatisticsRequest;
var GetUsageStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetUsageStatisticsResponse, _super);
    function GetUsageStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsageStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetUsageStatisticsResponse)
    ], GetUsageStatisticsResponse.prototype, "getUsageStatisticsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsageStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetUsageStatisticsResponse.prototype, "validationException", void 0);
    return GetUsageStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsageStatisticsResponse = GetUsageStatisticsResponse;
