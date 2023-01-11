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
exports.CreateTypedLinkFacetResponse = exports.CreateTypedLinkFacetRequest = exports.CreateTypedLinkFacetRequestBody = exports.CreateTypedLinkFacetRequestBodyFacet = exports.CreateTypedLinkFacetHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateTypedLinkFacetHeaders = /** @class */ (function (_super) {
    __extends(CreateTypedLinkFacetHeaders, _super);
    function CreateTypedLinkFacetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetHeaders.prototype, "xAmzDataPartition", void 0);
    return CreateTypedLinkFacetHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateTypedLinkFacetHeaders = CreateTypedLinkFacetHeaders;
// CreateTypedLinkFacetRequestBodyFacet
/**
 * Defines the typed links structure and its attributes. To create a typed link facet, use the <a>CreateTypedLinkFacet</a> API.
**/
var CreateTypedLinkFacetRequestBodyFacet = /** @class */ (function (_super) {
    __extends(CreateTypedLinkFacetRequestBodyFacet, _super);
    function CreateTypedLinkFacetRequestBodyFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes", elemType: shared.TypedLinkAttributeDefinition }),
        __metadata("design:type", Array)
    ], CreateTypedLinkFacetRequestBodyFacet.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IdentityAttributeOrder" }),
        __metadata("design:type", Array)
    ], CreateTypedLinkFacetRequestBodyFacet.prototype, "identityAttributeOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetRequestBodyFacet.prototype, "name", void 0);
    return CreateTypedLinkFacetRequestBodyFacet;
}(utils_1.SpeakeasyBase));
exports.CreateTypedLinkFacetRequestBodyFacet = CreateTypedLinkFacetRequestBodyFacet;
var CreateTypedLinkFacetRequestBody = /** @class */ (function (_super) {
    __extends(CreateTypedLinkFacetRequestBody, _super);
    function CreateTypedLinkFacetRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Facet" }),
        __metadata("design:type", CreateTypedLinkFacetRequestBodyFacet)
    ], CreateTypedLinkFacetRequestBody.prototype, "facet", void 0);
    return CreateTypedLinkFacetRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateTypedLinkFacetRequestBody = CreateTypedLinkFacetRequestBody;
var CreateTypedLinkFacetRequest = /** @class */ (function (_super) {
    __extends(CreateTypedLinkFacetRequest, _super);
    function CreateTypedLinkFacetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTypedLinkFacetHeaders)
    ], CreateTypedLinkFacetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateTypedLinkFacetRequestBody)
    ], CreateTypedLinkFacetRequest.prototype, "request", void 0);
    return CreateTypedLinkFacetRequest;
}(utils_1.SpeakeasyBase));
exports.CreateTypedLinkFacetRequest = CreateTypedLinkFacetRequest;
var CreateTypedLinkFacetResponse = /** @class */ (function (_super) {
    __extends(CreateTypedLinkFacetResponse, _super);
    function CreateTypedLinkFacetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccessDeniedException)
    ], CreateTypedLinkFacetResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateTypedLinkFacetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTypedLinkFacetResponse.prototype, "createTypedLinkFacetResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetAlreadyExistsException)
    ], CreateTypedLinkFacetResponse.prototype, "facetAlreadyExistsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetValidationException)
    ], CreateTypedLinkFacetResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InternalServiceException)
    ], CreateTypedLinkFacetResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidArnException)
    ], CreateTypedLinkFacetResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidRuleException)
    ], CreateTypedLinkFacetResponse.prototype, "invalidRuleException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LimitExceededException)
    ], CreateTypedLinkFacetResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], CreateTypedLinkFacetResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RetryableConflictException)
    ], CreateTypedLinkFacetResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateTypedLinkFacetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationException)
    ], CreateTypedLinkFacetResponse.prototype, "validationException", void 0);
    return CreateTypedLinkFacetResponse;
}(utils_1.SpeakeasyBase));
exports.CreateTypedLinkFacetResponse = CreateTypedLinkFacetResponse;
