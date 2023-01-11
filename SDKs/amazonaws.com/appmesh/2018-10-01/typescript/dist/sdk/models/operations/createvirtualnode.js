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
exports.CreateVirtualNodeResponse = exports.CreateVirtualNodeRequest = exports.CreateVirtualNodeRequestBody = exports.CreateVirtualNodeRequestBodySpec = exports.CreateVirtualNodeHeaders = exports.CreateVirtualNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateVirtualNodePathParams = /** @class */ (function (_super) {
    __extends(CreateVirtualNodePathParams, _super);
    function CreateVirtualNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], CreateVirtualNodePathParams.prototype, "meshName", void 0);
    return CreateVirtualNodePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodePathParams = CreateVirtualNodePathParams;
var CreateVirtualNodeHeaders = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeHeaders, _super);
    function CreateVirtualNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateVirtualNodeHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodeHeaders = CreateVirtualNodeHeaders;
// CreateVirtualNodeRequestBodySpec
/**
 * An object representing the specification of a virtual node.
**/
var CreateVirtualNodeRequestBodySpec = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequestBodySpec, _super);
    function CreateVirtualNodeRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backends" }),
        __metadata("design:type", Array)
    ], CreateVirtualNodeRequestBodySpec.prototype, "backends", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listeners", elemType: shared.Listener }),
        __metadata("design:type", Array)
    ], CreateVirtualNodeRequestBodySpec.prototype, "listeners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceDiscovery" }),
        __metadata("design:type", shared.ServiceDiscovery)
    ], CreateVirtualNodeRequestBodySpec.prototype, "serviceDiscovery", void 0);
    return CreateVirtualNodeRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodeRequestBodySpec = CreateVirtualNodeRequestBodySpec;
var CreateVirtualNodeRequestBody = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequestBody, _super);
    function CreateVirtualNodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", CreateVirtualNodeRequestBodySpec)
    ], CreateVirtualNodeRequestBody.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualNodeName" }),
        __metadata("design:type", String)
    ], CreateVirtualNodeRequestBody.prototype, "virtualNodeName", void 0);
    return CreateVirtualNodeRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodeRequestBody = CreateVirtualNodeRequestBody;
var CreateVirtualNodeRequest = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeRequest, _super);
    function CreateVirtualNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualNodePathParams)
    ], CreateVirtualNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVirtualNodeHeaders)
    ], CreateVirtualNodeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateVirtualNodeRequestBody)
    ], CreateVirtualNodeRequest.prototype, "request", void 0);
    return CreateVirtualNodeRequest;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodeRequest = CreateVirtualNodeRequest;
var CreateVirtualNodeResponse = /** @class */ (function (_super) {
    __extends(CreateVirtualNodeResponse, _super);
    function CreateVirtualNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateVirtualNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateVirtualNodeOutput)
    ], CreateVirtualNodeResponse.prototype, "createVirtualNodeOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateVirtualNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVirtualNodeResponse.prototype, "tooManyRequestsException", void 0);
    return CreateVirtualNodeResponse;
}(utils_1.SpeakeasyBase));
exports.CreateVirtualNodeResponse = CreateVirtualNodeResponse;
