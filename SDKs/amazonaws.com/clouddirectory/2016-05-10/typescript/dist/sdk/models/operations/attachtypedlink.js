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
exports.AttachTypedLinkResponse = exports.AttachTypedLinkRequest = exports.AttachTypedLinkRequestBody = exports.AttachTypedLinkRequestBodyTypedLinkFacet = exports.AttachTypedLinkRequestBodyTargetObjectReference = exports.AttachTypedLinkRequestBodySourceObjectReference = exports.AttachTypedLinkHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var AttachTypedLinkHeaders = /** @class */ (function (_super) {
    __extends(AttachTypedLinkHeaders, _super);
    function AttachTypedLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], AttachTypedLinkHeaders.prototype, "xAmzDataPartition", void 0);
    return AttachTypedLinkHeaders;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkHeaders = AttachTypedLinkHeaders;
// AttachTypedLinkRequestBodySourceObjectReference
/**
 * The reference that identifies an object.
**/
var AttachTypedLinkRequestBodySourceObjectReference = /** @class */ (function (_super) {
    __extends(AttachTypedLinkRequestBodySourceObjectReference, _super);
    function AttachTypedLinkRequestBodySourceObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachTypedLinkRequestBodySourceObjectReference.prototype, "selector", void 0);
    return AttachTypedLinkRequestBodySourceObjectReference;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkRequestBodySourceObjectReference = AttachTypedLinkRequestBodySourceObjectReference;
// AttachTypedLinkRequestBodyTargetObjectReference
/**
 * The reference that identifies an object.
**/
var AttachTypedLinkRequestBodyTargetObjectReference = /** @class */ (function (_super) {
    __extends(AttachTypedLinkRequestBodyTargetObjectReference, _super);
    function AttachTypedLinkRequestBodyTargetObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], AttachTypedLinkRequestBodyTargetObjectReference.prototype, "selector", void 0);
    return AttachTypedLinkRequestBodyTargetObjectReference;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkRequestBodyTargetObjectReference = AttachTypedLinkRequestBodyTargetObjectReference;
// AttachTypedLinkRequestBodyTypedLinkFacet
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
var AttachTypedLinkRequestBodyTypedLinkFacet = /** @class */ (function (_super) {
    __extends(AttachTypedLinkRequestBodyTypedLinkFacet, _super);
    function AttachTypedLinkRequestBodyTypedLinkFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], AttachTypedLinkRequestBodyTypedLinkFacet.prototype, "schemaArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkName" }),
        __metadata("design:type", String)
    ], AttachTypedLinkRequestBodyTypedLinkFacet.prototype, "typedLinkName", void 0);
    return AttachTypedLinkRequestBodyTypedLinkFacet;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkRequestBodyTypedLinkFacet = AttachTypedLinkRequestBodyTypedLinkFacet;
var AttachTypedLinkRequestBody = /** @class */ (function (_super) {
    __extends(AttachTypedLinkRequestBody, _super);
    function AttachTypedLinkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes", elemType: shared.AttributeNameAndValue }),
        __metadata("design:type", Array)
    ], AttachTypedLinkRequestBody.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SourceObjectReference" }),
        __metadata("design:type", AttachTypedLinkRequestBodySourceObjectReference)
    ], AttachTypedLinkRequestBody.prototype, "sourceObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TargetObjectReference" }),
        __metadata("design:type", AttachTypedLinkRequestBodyTargetObjectReference)
    ], AttachTypedLinkRequestBody.prototype, "targetObjectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TypedLinkFacet" }),
        __metadata("design:type", AttachTypedLinkRequestBodyTypedLinkFacet)
    ], AttachTypedLinkRequestBody.prototype, "typedLinkFacet", void 0);
    return AttachTypedLinkRequestBody;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkRequestBody = AttachTypedLinkRequestBody;
var AttachTypedLinkRequest = /** @class */ (function (_super) {
    __extends(AttachTypedLinkRequest, _super);
    function AttachTypedLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AttachTypedLinkHeaders)
    ], AttachTypedLinkRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AttachTypedLinkRequestBody)
    ], AttachTypedLinkRequest.prototype, "request", void 0);
    return AttachTypedLinkRequest;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkRequest = AttachTypedLinkRequest;
var AttachTypedLinkResponse = /** @class */ (function (_super) {
    __extends(AttachTypedLinkResponse, _super);
    function AttachTypedLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccessDeniedException)
    ], AttachTypedLinkResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AttachTypedLinkResponse)
    ], AttachTypedLinkResponse.prototype, "attachTypedLinkResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AttachTypedLinkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], AttachTypedLinkResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetValidationException)
    ], AttachTypedLinkResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InternalServiceException)
    ], AttachTypedLinkResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidArnException)
    ], AttachTypedLinkResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidAttachmentException)
    ], AttachTypedLinkResponse.prototype, "invalidAttachmentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LimitExceededException)
    ], AttachTypedLinkResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], AttachTypedLinkResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RetryableConflictException)
    ], AttachTypedLinkResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AttachTypedLinkResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationException)
    ], AttachTypedLinkResponse.prototype, "validationException", void 0);
    return AttachTypedLinkResponse;
}(utils_1.SpeakeasyBase));
exports.AttachTypedLinkResponse = AttachTypedLinkResponse;
