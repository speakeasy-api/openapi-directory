"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.CreateVirtualRouterResponse = exports.CreateVirtualRouterRequest = exports.CreateVirtualRouterRequestBody = exports.CreateVirtualRouterRequestBodySpec = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * An object that represents the specification of a virtual router.
 */
var CreateVirtualRouterRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequestBodySpec, _super);
    function CreateVirtualRouterRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.VirtualRouterListener }),
        (0, class_transformer_1.Expose)({ name: "listeners" }),
        (0, class_transformer_1.Type)(function () { return shared.VirtualRouterListener; }),
        __metadata("design:type", Array)
    ], CreateVirtualRouterRequestBodySpec.prototype, "listeners", void 0);
    return CreateVirtualRouterRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualRouterRequestBodySpec = CreateVirtualRouterRequestBodySpec;
var CreateVirtualRouterRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequestBody, _super);
    function CreateVirtualRouterRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "spec" }),
        (0, class_transformer_1.Type)(function () { return CreateVirtualRouterRequestBodySpec; }),
        __metadata("design:type", CreateVirtualRouterRequestBodySpec)
    ], CreateVirtualRouterRequestBody.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.TagRef }),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        (0, class_transformer_1.Type)(function () { return shared.TagRef; }),
        __metadata("design:type", Array)
    ], CreateVirtualRouterRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "virtualRouterName" }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequestBody.prototype, "virtualRouterName", void 0);
    return CreateVirtualRouterRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualRouterRequestBody = CreateVirtualRouterRequestBody;
var CreateVirtualRouterRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterRequest, _super);
    function CreateVirtualRouterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualRouterRequestBody)
    ], CreateVirtualRouterRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=meshName",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "meshName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=meshOwner",
        }),
        __metadata("design:type", String)
    ], CreateVirtualRouterRequest.prototype, "meshOwner", void 0);
    return CreateVirtualRouterRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualRouterRequest = CreateVirtualRouterRequest;
var CreateVirtualRouterResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualRouterResponse, _super);
    function CreateVirtualRouterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVirtualRouterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateVirtualRouterOutput)
    ], CreateVirtualRouterResponse.prototype, "createVirtualRouterOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateVirtualRouterResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualRouterResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualRouterResponse;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualRouterResponse = CreateVirtualRouterResponse;
