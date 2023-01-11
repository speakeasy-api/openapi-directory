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
exports.ListIncomingTypedLinksResponse = exports.ListIncomingTypedLinksRequest = exports.ListIncomingTypedLinksRequestBody = exports.ListIncomingTypedLinksRequestBodyObjectReference = exports.ListIncomingTypedLinksRequestBodyFilterTypedLink = exports.ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = exports.ListIncomingTypedLinksHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListIncomingTypedLinksHeaders = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksHeaders, _super);
    function ListIncomingTypedLinksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksHeaders.prototype, "xAmzDataPartition", void 0);
    return ListIncomingTypedLinksHeaders;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksHeaders = ListIncomingTypedLinksHeaders;
var ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
(function (ListIncomingTypedLinksRequestBodyConsistencyLevelEnum) {
    ListIncomingTypedLinksRequestBodyConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListIncomingTypedLinksRequestBodyConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = exports.ListIncomingTypedLinksRequestBodyConsistencyLevelEnum || (exports.ListIncomingTypedLinksRequestBodyConsistencyLevelEnum = {}));
// ListIncomingTypedLinksRequestBodyFilterTypedLink
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
var ListIncomingTypedLinksRequestBodyFilterTypedLink = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBodyFilterTypedLink, _super);
    function ListIncomingTypedLinksRequestBodyFilterTypedLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyFilterTypedLink.prototype, "schemaArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkName" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyFilterTypedLink.prototype, "typedLinkName", void 0);
    return ListIncomingTypedLinksRequestBodyFilterTypedLink;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksRequestBodyFilterTypedLink = ListIncomingTypedLinksRequestBodyFilterTypedLink;
// ListIncomingTypedLinksRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var ListIncomingTypedLinksRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBodyObjectReference, _super);
    function ListIncomingTypedLinksRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBodyObjectReference.prototype, "selector", void 0);
    return ListIncomingTypedLinksRequestBodyObjectReference;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksRequestBodyObjectReference = ListIncomingTypedLinksRequestBodyObjectReference;
var ListIncomingTypedLinksRequestBody = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequestBody, _super);
    function ListIncomingTypedLinksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConsistencyLevel" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBody.prototype, "consistencyLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FilterAttributeRanges", elemType: shared.TypedLinkAttributeRange }),
        __metadata("design:type", Array)
    ], ListIncomingTypedLinksRequestBody.prototype, "filterAttributeRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FilterTypedLink" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBodyFilterTypedLink)
    ], ListIncomingTypedLinksRequestBody.prototype, "filterTypedLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListIncomingTypedLinksRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ObjectReference" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBodyObjectReference)
    ], ListIncomingTypedLinksRequestBody.prototype, "objectReference", void 0);
    return ListIncomingTypedLinksRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksRequestBody = ListIncomingTypedLinksRequestBody;
var ListIncomingTypedLinksRequest = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksRequest, _super);
    function ListIncomingTypedLinksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListIncomingTypedLinksHeaders)
    ], ListIncomingTypedLinksRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListIncomingTypedLinksRequestBody)
    ], ListIncomingTypedLinksRequest.prototype, "request", void 0);
    return ListIncomingTypedLinksRequest;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksRequest = ListIncomingTypedLinksRequest;
var ListIncomingTypedLinksResponse = /** @class */ (function (_super) {
    __extends(ListIncomingTypedLinksResponse, _super);
    function ListIncomingTypedLinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccessDeniedException)
    ], ListIncomingTypedLinksResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListIncomingTypedLinksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], ListIncomingTypedLinksResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetValidationException)
    ], ListIncomingTypedLinksResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InternalServiceException)
    ], ListIncomingTypedLinksResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidArnException)
    ], ListIncomingTypedLinksResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidNextTokenException)
    ], ListIncomingTypedLinksResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LimitExceededException)
    ], ListIncomingTypedLinksResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListIncomingTypedLinksResponse)
    ], ListIncomingTypedLinksResponse.prototype, "listIncomingTypedLinksResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], ListIncomingTypedLinksResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RetryableConflictException)
    ], ListIncomingTypedLinksResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListIncomingTypedLinksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationException)
    ], ListIncomingTypedLinksResponse.prototype, "validationException", void 0);
    return ListIncomingTypedLinksResponse;
}(utils_1.SpeakeasyBase));
exports.ListIncomingTypedLinksResponse = ListIncomingTypedLinksResponse;
