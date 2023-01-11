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
exports.CreateVirtualGatewayResponse = exports.CreateVirtualGatewayRequest = exports.CreateVirtualGatewayRequestBody = exports.CreateVirtualGatewayRequestBodySpec = exports.CreateVirtualGatewayHeaders = exports.CreateVirtualGatewayQueryParams = exports.CreateVirtualGatewayPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateVirtualGatewayPathParams = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayPathParams, _super);
    function CreateVirtualGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayPathParams.prototype, "meshName", void 0);
    return CreateVirtualGatewayPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayPathParams = CreateVirtualGatewayPathParams;
var CreateVirtualGatewayQueryParams = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayQueryParams, _super);
    function CreateVirtualGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayQueryParams.prototype, "meshOwner", void 0);
    return CreateVirtualGatewayQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayQueryParams = CreateVirtualGatewayQueryParams;
var CreateVirtualGatewayHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayHeaders, _super);
    function CreateVirtualGatewayHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualGatewayHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayHeaders = CreateVirtualGatewayHeaders;
// CreateVirtualGatewayRequestBodySpec
/**
 * An object that represents the specification of a service mesh resource.
**/
var CreateVirtualGatewayRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayRequestBodySpec, _super);
    function CreateVirtualGatewayRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backendDefaults" }),
        __metadata("design:type", shared.VirtualGatewayBackendDefaults)
    ], CreateVirtualGatewayRequestBodySpec.prototype, "backendDefaults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listeners", elemType: shared.VirtualGatewayListener }),
        __metadata("design:type", Array)
    ], CreateVirtualGatewayRequestBodySpec.prototype, "listeners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logging" }),
        __metadata("design:type", shared.VirtualGatewayLogging)
    ], CreateVirtualGatewayRequestBodySpec.prototype, "logging", void 0);
    return CreateVirtualGatewayRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayRequestBodySpec = CreateVirtualGatewayRequestBodySpec;
var CreateVirtualGatewayRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayRequestBody, _super);
    function CreateVirtualGatewayRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", CreateVirtualGatewayRequestBodySpec)
    ], CreateVirtualGatewayRequestBody.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: shared.TagRef }),
        __metadata("design:type", Array)
    ], CreateVirtualGatewayRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], CreateVirtualGatewayRequestBody.prototype, "virtualGatewayName", void 0);
    return CreateVirtualGatewayRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayRequestBody = CreateVirtualGatewayRequestBody;
var CreateVirtualGatewayRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayRequest, _super);
    function CreateVirtualGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualGatewayPathParams)
    ], CreateVirtualGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualGatewayQueryParams)
    ], CreateVirtualGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualGatewayHeaders)
    ], CreateVirtualGatewayRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualGatewayRequestBody)
    ], CreateVirtualGatewayRequest.prototype, "request", void 0);
    return CreateVirtualGatewayRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayRequest = CreateVirtualGatewayRequest;
var CreateVirtualGatewayResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualGatewayResponse, _super);
    function CreateVirtualGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVirtualGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateVirtualGatewayOutput)
    ], CreateVirtualGatewayResponse.prototype, "createVirtualGatewayOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateVirtualGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualGatewayResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualGatewayResponse;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualGatewayResponse = CreateVirtualGatewayResponse;
