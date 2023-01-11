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
exports.ListAttachedIndicesResponse = exports.ListAttachedIndicesRequest = exports.ListAttachedIndicesRequestBody = exports.ListAttachedIndicesRequestBodyTargetReference = exports.ListAttachedIndicesHeaders = exports.ListAttachedIndicesXAmzConsistencyLevelEnum = exports.ListAttachedIndicesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAttachedIndicesQueryParams = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesQueryParams, _super);
    function ListAttachedIndicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesQueryParams.prototype, "nextToken", void 0);
    return ListAttachedIndicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesQueryParams = ListAttachedIndicesQueryParams;
var ListAttachedIndicesXAmzConsistencyLevelEnum;
(function (ListAttachedIndicesXAmzConsistencyLevelEnum) {
    ListAttachedIndicesXAmzConsistencyLevelEnum["Serializable"] = "SERIALIZABLE";
    ListAttachedIndicesXAmzConsistencyLevelEnum["Eventual"] = "EVENTUAL";
})(ListAttachedIndicesXAmzConsistencyLevelEnum = exports.ListAttachedIndicesXAmzConsistencyLevelEnum || (exports.ListAttachedIndicesXAmzConsistencyLevelEnum = {}));
var ListAttachedIndicesHeaders = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesHeaders, _super);
    function ListAttachedIndicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-consistency-level" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzConsistencyLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=x-amz-data-partition" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesHeaders.prototype, "xAmzDataPartition", void 0);
    return ListAttachedIndicesHeaders;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesHeaders = ListAttachedIndicesHeaders;
// ListAttachedIndicesRequestBodyTargetReference
/**
 * The reference that identifies an object.
**/
var ListAttachedIndicesRequestBodyTargetReference = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequestBodyTargetReference, _super);
    function ListAttachedIndicesRequestBodyTargetReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Selector" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesRequestBodyTargetReference.prototype, "selector", void 0);
    return ListAttachedIndicesRequestBodyTargetReference;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesRequestBodyTargetReference = ListAttachedIndicesRequestBodyTargetReference;
var ListAttachedIndicesRequestBody = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequestBody, _super);
    function ListAttachedIndicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListAttachedIndicesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListAttachedIndicesRequestBody.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TargetReference" }),
        __metadata("design:type", ListAttachedIndicesRequestBodyTargetReference)
    ], ListAttachedIndicesRequestBody.prototype, "targetReference", void 0);
    return ListAttachedIndicesRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesRequestBody = ListAttachedIndicesRequestBody;
var ListAttachedIndicesRequest = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesRequest, _super);
    function ListAttachedIndicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAttachedIndicesQueryParams)
    ], ListAttachedIndicesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAttachedIndicesHeaders)
    ], ListAttachedIndicesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListAttachedIndicesRequestBody)
    ], ListAttachedIndicesRequest.prototype, "request", void 0);
    return ListAttachedIndicesRequest;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesRequest = ListAttachedIndicesRequest;
var ListAttachedIndicesResponse = /** @class */ (function (_super) {
    __extends(ListAttachedIndicesResponse, _super);
    function ListAttachedIndicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAttachedIndicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "directoryNotEnabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "internalServiceException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "invalidArnException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListAttachedIndicesResponse)
    ], ListAttachedIndicesResponse.prototype, "listAttachedIndicesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "retryableConflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAttachedIndicesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAttachedIndicesResponse.prototype, "validationException", void 0);
    return ListAttachedIndicesResponse;
}(utils_1.SpeakeasyBase));
exports.ListAttachedIndicesResponse = ListAttachedIndicesResponse;
