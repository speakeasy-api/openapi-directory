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
exports.GetLinkAttributesResponse = exports.GetLinkAttributesRequest = exports.GetLinkAttributesRequestBody = exports.GetLinkAttributesRequestBodyTypedLinkSpecifier = exports.GetLinkAttributesRequestBodyConsistencyLevelEnum = exports.GetLinkAttributesHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetLinkAttributesHeaders = /** @class */ (function (_super) {
    __extends(GetLinkAttributesHeaders, _super);
    function GetLinkAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], GetLinkAttributesHeaders.prototype, "xAmzDataPartition", void 0);
    return GetLinkAttributesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetLinkAttributesHeaders = GetLinkAttributesHeaders;
var GetLinkAttributesRequestBodyConsistencyLevelEnum;
(function (GetLinkAttributesRequestBodyConsistencyLevelEnum) {
    GetLinkAttributesRequestBodyConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    GetLinkAttributesRequestBodyConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(GetLinkAttributesRequestBodyConsistencyLevelEnum = exports.GetLinkAttributesRequestBodyConsistencyLevelEnum || (exports.GetLinkAttributesRequestBodyConsistencyLevelEnum = {}));
// GetLinkAttributesRequestBodyTypedLinkSpecifier
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
**/
var GetLinkAttributesRequestBodyTypedLinkSpecifier = /** @class */ (function (_super) {
    __extends(GetLinkAttributesRequestBodyTypedLinkSpecifier, _super);
    function GetLinkAttributesRequestBodyTypedLinkSpecifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityAttributeValues", elemType: shared.AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], GetLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "identityAttributeValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], GetLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "sourceObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", shared.ObjectReference)
    ], GetLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "targetObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", shared.TypedLinkSchemaAndFacetName)
    ], GetLinkAttributesRequestBodyTypedLinkSpecifier.prototype, "typedLinkFacet", void 0);
    return GetLinkAttributesRequestBodyTypedLinkSpecifier;
}(utils_1.SpeakeasyBase));
exports.GetLinkAttributesRequestBodyTypedLinkSpecifier = GetLinkAttributesRequestBodyTypedLinkSpecifier;
var GetLinkAttributesRequestBody = /** @class */ (function (_super) {
    __extends(GetLinkAttributesRequestBody, _super);
    function GetLinkAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AttributeNames" }),
        __metadata("design:type", Array)
    ], GetLinkAttributesRequestBody.prototype, "attributeNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConsistencyLevel" }),
        __metadata("design:type", String)
    ], GetLinkAttributesRequestBody.prototype, "consistencyLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkSpecifier" }),
        __metadata("design:type", GetLinkAttributesRequestBodyTypedLinkSpecifier)
    ], GetLinkAttributesRequestBody.prototype, "typedLinkSpecifier", void 0);
    return GetLinkAttributesRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetLinkAttributesRequestBody = GetLinkAttributesRequestBody;
var GetLinkAttributesRequest = /** @class */ (function (_super) {
    __extends(GetLinkAttributesRequest, _super);
    function GetLinkAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLinkAttributesHeaders)
    ], GetLinkAttributesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetLinkAttributesRequestBody)
    ], GetLinkAttributesRequest.prototype, "request", void 0);
    return GetLinkAttributesRequest;
}(utils_1.SpeakeasyBase));
exports.GetLinkAttributesRequest = GetLinkAttributesRequest;
var GetLinkAttributesResponse = /** @class */ (function (_super) {
    __extends(GetLinkAttributesResponse, _super);
    function GetLinkAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccessDeniedException)
    ], GetLinkAttributesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLinkAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], GetLinkAttributesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetValidationException)
    ], GetLinkAttributesResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetLinkAttributesResponse)
    ], GetLinkAttributesResponse.prototype, "getLinkAttributesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InternalServiceException)
    ], GetLinkAttributesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidArnException)
    ], GetLinkAttributesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LimitExceededException)
    ], GetLinkAttributesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], GetLinkAttributesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RetryableConflictException)
    ], GetLinkAttributesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLinkAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationException)
    ], GetLinkAttributesResponse.prototype, "validationException", void 0);
    return GetLinkAttributesResponse;
}(utils_1.SpeakeasyBase));
exports.GetLinkAttributesResponse = GetLinkAttributesResponse;
