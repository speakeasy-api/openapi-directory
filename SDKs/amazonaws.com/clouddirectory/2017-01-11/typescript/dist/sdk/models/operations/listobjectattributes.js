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
exports.ListObjectAttributesResponse = exports.ListObjectAttributesRequest = exports.ListObjectAttributesRequestBody = exports.ListObjectAttributesRequestBodyObjectReference = exports.ListObjectAttributesRequestBodyFacetFilter = exports.ListObjectAttributesHeaders = exports.ListObjectAttributesXAmzConsistencyLevelEnum = exports.ListObjectAttributesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListObjectAttributesQueryParams = /** @class */ (function (_super) {
    __extends(ListObjectAttributesQueryParams, _super);
    function ListObjectAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListObjectAttributesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectAttributesQueryParams.prototype, "nextToken", void 0);
    return ListObjectAttributesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesQueryParams = ListObjectAttributesQueryParams;
var ListObjectAttributesXAmzConsistencyLevelEnum;
(function (ListObjectAttributesXAmzConsistencyLevelEnum) {
    ListObjectAttributesXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListObjectAttributesXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListObjectAttributesXAmzConsistencyLevelEnum = exports.ListObjectAttributesXAmzConsistencyLevelEnum || (exports.ListObjectAttributesXAmzConsistencyLevelEnum = {}));
var ListObjectAttributesHeaders = /** @class */ (function (_super) {
    __extends(ListObjectAttributesHeaders, _super);
    function ListObjectAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListObjectAttributesHeaders.prototype, "xAmzDataPartition", void 0);
    return ListObjectAttributesHeaders;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesHeaders = ListObjectAttributesHeaders;
// ListObjectAttributesRequestBodyFacetFilter
/**
 * A facet.
**/
var ListObjectAttributesRequestBodyFacetFilter = /** @class */ (function (_super) {
    __extends(ListObjectAttributesRequestBodyFacetFilter, _super);
    function ListObjectAttributesRequestBodyFacetFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FacetName" }),
        __metadata("design:type", String)
    ], ListObjectAttributesRequestBodyFacetFilter.prototype, "facetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], ListObjectAttributesRequestBodyFacetFilter.prototype, "schemaArn", void 0);
    return ListObjectAttributesRequestBodyFacetFilter;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesRequestBodyFacetFilter = ListObjectAttributesRequestBodyFacetFilter;
// ListObjectAttributesRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListObjectAttributesRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListObjectAttributesRequestBodyObjectReference, _super);
    function ListObjectAttributesRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListObjectAttributesRequestBodyObjectReference.prototype, "selector", void 0);
    return ListObjectAttributesRequestBodyObjectReference;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesRequestBodyObjectReference = ListObjectAttributesRequestBodyObjectReference;
var ListObjectAttributesRequestBody = /** @class */ (function (_super) {
    __extends(ListObjectAttributesRequestBody, _super);
    function ListObjectAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FacetFilter" }),
        __metadata("design:type", ListObjectAttributesRequestBodyFacetFilter)
    ], ListObjectAttributesRequestBody.prototype, "facetFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListObjectAttributesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListObjectAttributesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListObjectAttributesRequestBodyObjectReference)
    ], ListObjectAttributesRequestBody.prototype, "objectReference", void 0);
    return ListObjectAttributesRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesRequestBody = ListObjectAttributesRequestBody;
var ListObjectAttributesRequest = /** @class */ (function (_super) {
    __extends(ListObjectAttributesRequest, _super);
    function ListObjectAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListObjectAttributesQueryParams)
    ], ListObjectAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListObjectAttributesHeaders)
    ], ListObjectAttributesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListObjectAttributesRequestBody)
    ], ListObjectAttributesRequest.prototype, "request", void 0);
    return ListObjectAttributesRequest;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesRequest = ListObjectAttributesRequest;
var ListObjectAttributesResponse = /** @class */ (function (_super) {
    __extends(ListObjectAttributesResponse, _super);
    function ListObjectAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListObjectAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListObjectAttributesResponse)
    ], ListObjectAttributesResponse.prototype, "listObjectAttributesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListObjectAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListObjectAttributesResponse.prototype, "validationException", void 0);
    return ListObjectAttributesResponse;
}(utils_1.SpeakeasyBase));
exports.ListObjectAttributesResponse = ListObjectAttributesResponse;
