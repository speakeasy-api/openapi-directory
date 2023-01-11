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
exports.DescribeRecommendationFeedbackResponse = exports.DescribeRecommendationFeedbackRequest = exports.DescribeRecommendationFeedbackHeaders = exports.DescribeRecommendationFeedbackQueryParams = exports.DescribeRecommendationFeedbackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeRecommendationFeedbackPathParams = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackPathParams, _super);
    function DescribeRecommendationFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CodeReviewArn" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackPathParams.prototype, "codeReviewArn", void 0);
    return DescribeRecommendationFeedbackPathParams;
}(utils_1.SpeakeasyBase));
exports.DescribeRecommendationFeedbackPathParams = DescribeRecommendationFeedbackPathParams;
var DescribeRecommendationFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackQueryParams, _super);
    function DescribeRecommendationFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RecommendationId" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackQueryParams.prototype, "recommendationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UserId" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackQueryParams.prototype, "userId", void 0);
    return DescribeRecommendationFeedbackQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeRecommendationFeedbackQueryParams = DescribeRecommendationFeedbackQueryParams;
var DescribeRecommendationFeedbackHeaders = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackHeaders, _super);
    function DescribeRecommendationFeedbackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeRecommendationFeedbackHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeRecommendationFeedbackHeaders = DescribeRecommendationFeedbackHeaders;
var DescribeRecommendationFeedbackRequest = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackRequest, _super);
    function DescribeRecommendationFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeRecommendationFeedbackPathParams)
    ], DescribeRecommendationFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeRecommendationFeedbackQueryParams)
    ], DescribeRecommendationFeedbackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeRecommendationFeedbackHeaders)
    ], DescribeRecommendationFeedbackRequest.prototype, "headers", void 0);
    return DescribeRecommendationFeedbackRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeRecommendationFeedbackRequest = DescribeRecommendationFeedbackRequest;
var DescribeRecommendationFeedbackResponse = /** @class */ (function (_super) {
    __extends(DescribeRecommendationFeedbackResponse, _super);
    function DescribeRecommendationFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeRecommendationFeedbackResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeRecommendationFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeRecommendationFeedbackResponse)
    ], DescribeRecommendationFeedbackResponse.prototype, "describeRecommendationFeedbackResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeRecommendationFeedbackResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeRecommendationFeedbackResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeRecommendationFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeRecommendationFeedbackResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeRecommendationFeedbackResponse.prototype, "validationException", void 0);
    return DescribeRecommendationFeedbackResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeRecommendationFeedbackResponse = DescribeRecommendationFeedbackResponse;
