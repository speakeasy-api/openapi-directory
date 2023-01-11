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
exports.UpdateEndpointsBatchResponse = exports.UpdateEndpointsBatchRequest = exports.UpdateEndpointsBatchRequestBody = exports.UpdateEndpointsBatchRequestBodyEndpointBatchRequest = exports.UpdateEndpointsBatchHeaders = exports.UpdateEndpointsBatchPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateEndpointsBatchPathParams = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchPathParams, _super);
    function UpdateEndpointsBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchPathParams.prototype, "applicationId", void 0);
    return UpdateEndpointsBatchPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchPathParams = UpdateEndpointsBatchPathParams;
var UpdateEndpointsBatchHeaders = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchHeaders, _super);
    function UpdateEndpointsBatchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateEndpointsBatchHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchHeaders = UpdateEndpointsBatchHeaders;
// UpdateEndpointsBatchRequestBodyEndpointBatchRequest
/**
 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
**/
var UpdateEndpointsBatchRequestBodyEndpointBatchRequest = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchRequestBodyEndpointBatchRequest, _super);
    function UpdateEndpointsBatchRequestBodyEndpointBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Item", elemType: shared.EndpointBatchItem }),
        __metadata("design:type", Array)
    ], UpdateEndpointsBatchRequestBodyEndpointBatchRequest.prototype, "item", void 0);
    return UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchRequestBodyEndpointBatchRequest = UpdateEndpointsBatchRequestBodyEndpointBatchRequest;
var UpdateEndpointsBatchRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchRequestBody, _super);
    function UpdateEndpointsBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndpointBatchRequest" }),
        __metadata("design:type", UpdateEndpointsBatchRequestBodyEndpointBatchRequest)
    ], UpdateEndpointsBatchRequestBody.prototype, "endpointBatchRequest", void 0);
    return UpdateEndpointsBatchRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchRequestBody = UpdateEndpointsBatchRequestBody;
var UpdateEndpointsBatchRequest = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchRequest, _super);
    function UpdateEndpointsBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEndpointsBatchPathParams)
    ], UpdateEndpointsBatchRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEndpointsBatchHeaders)
    ], UpdateEndpointsBatchRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEndpointsBatchRequestBody)
    ], UpdateEndpointsBatchRequest.prototype, "request", void 0);
    return UpdateEndpointsBatchRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchRequest = UpdateEndpointsBatchRequest;
var UpdateEndpointsBatchResponse = /** @class */ (function (_super) {
    __extends(UpdateEndpointsBatchResponse, _super);
    function UpdateEndpointsBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateEndpointsBatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateEndpointsBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateEndpointsBatchResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateEndpointsBatchResponse)
    ], UpdateEndpointsBatchResponse.prototype, "updateEndpointsBatchResponse", void 0);
    return UpdateEndpointsBatchResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateEndpointsBatchResponse = UpdateEndpointsBatchResponse;
