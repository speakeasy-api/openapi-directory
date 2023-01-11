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
exports.CreateVirtualServiceResponse = exports.CreateVirtualServiceRequest = exports.CreateVirtualServiceRequestBody = exports.CreateVirtualServiceRequestBodySpec = exports.CreateVirtualServiceHeaders = exports.CreateVirtualServiceQueryParams = exports.CreateVirtualServicePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateVirtualServicePathParams = /** @class */ (function (_super) {
    __extends(CreateVirtualServicePathParams, _super);
    function CreateVirtualServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateVirtualServicePathParams.prototype, "meshName", void 0);
    return CreateVirtualServicePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServicePathParams = CreateVirtualServicePathParams;
var CreateVirtualServiceQueryParams = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceQueryParams, _super);
    function CreateVirtualServiceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceQueryParams.prototype, "meshOwner", void 0);
    return CreateVirtualServiceQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceQueryParams = CreateVirtualServiceQueryParams;
var CreateVirtualServiceHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceHeaders, _super);
    function CreateVirtualServiceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualServiceHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceHeaders = CreateVirtualServiceHeaders;
// CreateVirtualServiceRequestBodySpec
/**
 * An object that represents the specification of a virtual service.
**/
var CreateVirtualServiceRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceRequestBodySpec, _super);
    function CreateVirtualServiceRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", shared.VirtualServiceProvider)
    ], CreateVirtualServiceRequestBodySpec.prototype, "provider", void 0);
    return CreateVirtualServiceRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceRequestBodySpec = CreateVirtualServiceRequestBodySpec;
var CreateVirtualServiceRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceRequestBody, _super);
    function CreateVirtualServiceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", CreateVirtualServiceRequestBodySpec)
    ], CreateVirtualServiceRequestBody.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: shared.TagRef }),
        __metadata("design:type", Array)
    ], CreateVirtualServiceRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualServiceName" }),
        __metadata("design:type", String)
    ], CreateVirtualServiceRequestBody.prototype, "virtualServiceName", void 0);
    return CreateVirtualServiceRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceRequestBody = CreateVirtualServiceRequestBody;
var CreateVirtualServiceRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceRequest, _super);
    function CreateVirtualServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualServicePathParams)
    ], CreateVirtualServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualServiceQueryParams)
    ], CreateVirtualServiceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualServiceHeaders)
    ], CreateVirtualServiceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualServiceRequestBody)
    ], CreateVirtualServiceRequest.prototype, "request", void 0);
    return CreateVirtualServiceRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceRequest = CreateVirtualServiceRequest;
var CreateVirtualServiceResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualServiceResponse, _super);
    function CreateVirtualServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVirtualServiceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateVirtualServiceOutput)
    ], CreateVirtualServiceResponse.prototype, "createVirtualServiceOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateVirtualServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualServiceResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualServiceResponse;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualServiceResponse = CreateVirtualServiceResponse;
