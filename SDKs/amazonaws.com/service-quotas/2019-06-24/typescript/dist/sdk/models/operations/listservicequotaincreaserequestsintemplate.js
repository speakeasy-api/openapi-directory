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
exports.ListServiceQuotaIncreaseRequestsInTemplateResponse = exports.ListServiceQuotaIncreaseRequestsInTemplateRequest = exports.ListServiceQuotaIncreaseRequestsInTemplateHeaders = exports.ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum = exports.ListServiceQuotaIncreaseRequestsInTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListServiceQuotaIncreaseRequestsInTemplateQueryParams = /** @class */ (function (_super) {
    __extends(ListServiceQuotaIncreaseRequestsInTemplateQueryParams, _super);
    function ListServiceQuotaIncreaseRequestsInTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateQueryParams.prototype, "nextToken", void 0);
    return ListServiceQuotaIncreaseRequestsInTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListServiceQuotaIncreaseRequestsInTemplateQueryParams = ListServiceQuotaIncreaseRequestsInTemplateQueryParams;
var ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum;
(function (ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum) {
    ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum["ServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate"] = "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate";
})(ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum = exports.ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum || (exports.ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum = {}));
var ListServiceQuotaIncreaseRequestsInTemplateHeaders = /** @class */ (function (_super) {
    __extends(ListServiceQuotaIncreaseRequestsInTemplateHeaders, _super);
    function ListServiceQuotaIncreaseRequestsInTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateHeaders.prototype, "xAmzTarget", void 0);
    return ListServiceQuotaIncreaseRequestsInTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.ListServiceQuotaIncreaseRequestsInTemplateHeaders = ListServiceQuotaIncreaseRequestsInTemplateHeaders;
var ListServiceQuotaIncreaseRequestsInTemplateRequest = /** @class */ (function (_super) {
    __extends(ListServiceQuotaIncreaseRequestsInTemplateRequest, _super);
    function ListServiceQuotaIncreaseRequestsInTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceQuotaIncreaseRequestsInTemplateQueryParams)
    ], ListServiceQuotaIncreaseRequestsInTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListServiceQuotaIncreaseRequestsInTemplateHeaders)
    ], ListServiceQuotaIncreaseRequestsInTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListServiceQuotaIncreaseRequestsInTemplateRequest)
    ], ListServiceQuotaIncreaseRequestsInTemplateRequest.prototype, "request", void 0);
    return ListServiceQuotaIncreaseRequestsInTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.ListServiceQuotaIncreaseRequestsInTemplateRequest = ListServiceQuotaIncreaseRequestsInTemplateRequest;
var ListServiceQuotaIncreaseRequestsInTemplateResponse = /** @class */ (function (_super) {
    __extends(ListServiceQuotaIncreaseRequestsInTemplateResponse, _super);
    function ListServiceQuotaIncreaseRequestsInTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "awsServiceAccessNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "dependencyAccessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "illegalArgumentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListServiceQuotaIncreaseRequestsInTemplateResponse)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "listServiceQuotaIncreaseRequestsInTemplateResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "noAvailableOrganizationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "serviceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "templatesNotAvailableInRegionException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListServiceQuotaIncreaseRequestsInTemplateResponse.prototype, "tooManyRequestsException", void 0);
    return ListServiceQuotaIncreaseRequestsInTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.ListServiceQuotaIncreaseRequestsInTemplateResponse = ListServiceQuotaIncreaseRequestsInTemplateResponse;
