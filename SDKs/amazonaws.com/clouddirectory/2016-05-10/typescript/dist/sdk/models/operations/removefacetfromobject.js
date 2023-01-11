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
exports.RemoveFacetFromObjectResponse = exports.RemoveFacetFromObjectRequest = exports.RemoveFacetFromObjectRequestBody = exports.RemoveFacetFromObjectRequestBodySchemaFacet = exports.RemoveFacetFromObjectRequestBodyObjectReference = exports.RemoveFacetFromObjectHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var RemoveFacetFromObjectHeaders = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectHeaders, _super);
    function RemoveFacetFromObjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectHeaders.prototype, "xAmzDataPartition", void 0);
    return RemoveFacetFromObjectHeaders;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectHeaders = RemoveFacetFromObjectHeaders;
// RemoveFacetFromObjectRequestBodyObjectReference
/**
 * The reference that identifies an object.
**/
var RemoveFacetFromObjectRequestBodyObjectReference = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectRequestBodyObjectReference, _super);
    function RemoveFacetFromObjectRequestBodyObjectReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectRequestBodyObjectReference.prototype, "selector", void 0);
    return RemoveFacetFromObjectRequestBodyObjectReference;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectRequestBodyObjectReference = RemoveFacetFromObjectRequestBodyObjectReference;
// RemoveFacetFromObjectRequestBodySchemaFacet
/**
 * A facet.
**/
var RemoveFacetFromObjectRequestBodySchemaFacet = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectRequestBodySchemaFacet, _super);
    function RemoveFacetFromObjectRequestBodySchemaFacet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FacetName" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectRequestBodySchemaFacet.prototype, "facetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaArn" }),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectRequestBodySchemaFacet.prototype, "schemaArn", void 0);
    return RemoveFacetFromObjectRequestBodySchemaFacet;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectRequestBodySchemaFacet = RemoveFacetFromObjectRequestBodySchemaFacet;
var RemoveFacetFromObjectRequestBody = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectRequestBody, _super);
    function RemoveFacetFromObjectRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ObjectReference" }),
        __metadata("design:type", RemoveFacetFromObjectRequestBodyObjectReference)
    ], RemoveFacetFromObjectRequestBody.prototype, "objectReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaFacet" }),
        __metadata("design:type", RemoveFacetFromObjectRequestBodySchemaFacet)
    ], RemoveFacetFromObjectRequestBody.prototype, "schemaFacet", void 0);
    return RemoveFacetFromObjectRequestBody;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectRequestBody = RemoveFacetFromObjectRequestBody;
var RemoveFacetFromObjectRequest = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectRequest, _super);
    function RemoveFacetFromObjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RemoveFacetFromObjectHeaders)
    ], RemoveFacetFromObjectRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveFacetFromObjectRequestBody)
    ], RemoveFacetFromObjectRequest.prototype, "request", void 0);
    return RemoveFacetFromObjectRequest;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectRequest = RemoveFacetFromObjectRequest;
var RemoveFacetFromObjectResponse = /** @class */ (function (_super) {
    __extends(RemoveFacetFromObjectResponse, _super);
    function RemoveFacetFromObjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.AccessDeniedException)
    ], RemoveFacetFromObjectResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], RemoveFacetFromObjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DirectoryNotEnabledException)
    ], RemoveFacetFromObjectResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FacetValidationException)
    ], RemoveFacetFromObjectResponse.prototype, "facetValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InternalServiceException)
    ], RemoveFacetFromObjectResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InvalidArnException)
    ], RemoveFacetFromObjectResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.LimitExceededException)
    ], RemoveFacetFromObjectResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RemoveFacetFromObjectResponse.prototype, "removeFacetFromObjectResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ResourceNotFoundException)
    ], RemoveFacetFromObjectResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RetryableConflictException)
    ], RemoveFacetFromObjectResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], RemoveFacetFromObjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationException)
    ], RemoveFacetFromObjectResponse.prototype, "validationException", void 0);
    return RemoveFacetFromObjectResponse;
}(utils_1.SpeakeasyBase));
exports.RemoveFacetFromObjectResponse = RemoveFacetFromObjectResponse;
