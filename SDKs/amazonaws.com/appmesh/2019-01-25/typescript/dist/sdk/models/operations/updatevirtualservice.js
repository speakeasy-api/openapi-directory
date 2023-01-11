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
exports.UpdateVirtualServiceResponse = exports.UpdateVirtualServiceRequest = exports.UpdateVirtualServiceRequestBody = exports.UpdateVirtualServiceRequestBodySpec = exports.UpdateVirtualServiceHeaders = exports.UpdateVirtualServiceQueryParams = exports.UpdateVirtualServicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateVirtualServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualServicePathParams, _super);
    function UpdateVirtualServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateVirtualServicePathParams.prototype, "meshName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=virtualServiceName" }),
        __metadata("design:type", String)
    ], UpdateVirtualServicePathParams.prototype, "virtualServiceName", void 0);
    return UpdateVirtualServicePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServicePathParams = UpdateVirtualServicePathParams;
var UpdateVirtualServiceQueryParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceQueryParams, _super);
    function UpdateVirtualServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceQueryParams.prototype, "meshOwner", void 0);
    return UpdateVirtualServiceQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceQueryParams = UpdateVirtualServiceQueryParams;
var UpdateVirtualServiceHeaders = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceHeaders, _super);
    function UpdateVirtualServiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVirtualServiceHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceHeaders = UpdateVirtualServiceHeaders;
// UpdateVirtualServiceRequestBodySpec
/**
 * An object that represents the specification of a virtual service.
**/
var UpdateVirtualServiceRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequestBodySpec, _super);
    function UpdateVirtualServiceRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", shared.VirtualServiceProvider)
    ], UpdateVirtualServiceRequestBodySpec.prototype, "provider", void 0);
    return UpdateVirtualServiceRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceRequestBodySpec = UpdateVirtualServiceRequestBodySpec;
var UpdateVirtualServiceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequestBody, _super);
    function UpdateVirtualServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateVirtualServiceRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", UpdateVirtualServiceRequestBodySpec)
    ], UpdateVirtualServiceRequestBody.prototype, "spec", void 0);
    return UpdateVirtualServiceRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceRequestBody = UpdateVirtualServiceRequestBody;
var UpdateVirtualServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceRequest, _super);
    function UpdateVirtualServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualServicePathParams)
    ], UpdateVirtualServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualServiceQueryParams)
    ], UpdateVirtualServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualServiceHeaders)
    ], UpdateVirtualServiceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVirtualServiceRequestBody)
    ], UpdateVirtualServiceRequest.prototype, "request", void 0);
    return UpdateVirtualServiceRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceRequest = UpdateVirtualServiceRequest;
var UpdateVirtualServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateVirtualServiceResponse, _super);
    function UpdateVirtualServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateVirtualServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateVirtualServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualServiceResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateVirtualServiceOutput)
    ], UpdateVirtualServiceResponse.prototype, "updateVirtualServiceOutput", void 0);
    return UpdateVirtualServiceResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualServiceResponse = UpdateVirtualServiceResponse;
