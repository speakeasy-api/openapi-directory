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
exports.UpdateVirtualNodeResponse = exports.UpdateVirtualNodeRequest = exports.UpdateVirtualNodeRequestBody = exports.UpdateVirtualNodeRequestBodySpec = exports.UpdateVirtualNodeHeaders = exports.UpdateVirtualNodeQueryParams = exports.UpdateVirtualNodePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateVirtualNodePathParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodePathParams, _super);
    function UpdateVirtualNodePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=meshName" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodePathParams.prototype, "meshName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=virtualNodeName" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodePathParams.prototype, "virtualNodeName", void 0);
    return UpdateVirtualNodePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodePathParams = UpdateVirtualNodePathParams;
var UpdateVirtualNodeQueryParams = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeQueryParams, _super);
    function UpdateVirtualNodeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=meshOwner" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeQueryParams.prototype, "meshOwner", void 0);
    return UpdateVirtualNodeQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeQueryParams = UpdateVirtualNodeQueryParams;
var UpdateVirtualNodeHeaders = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeHeaders, _super);
    function UpdateVirtualNodeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateVirtualNodeHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeHeaders = UpdateVirtualNodeHeaders;
// UpdateVirtualNodeRequestBodySpec
/**
 * An object that represents the specification of a virtual node.
**/
var UpdateVirtualNodeRequestBodySpec = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeRequestBodySpec, _super);
    function UpdateVirtualNodeRequestBodySpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backendDefaults" }),
        __metadata("design:type", shared.BackendDefaults)
    ], UpdateVirtualNodeRequestBodySpec.prototype, "backendDefaults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backends", elemType: shared.Backend }),
        __metadata("design:type", Array)
    ], UpdateVirtualNodeRequestBodySpec.prototype, "backends", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listeners", elemType: shared.Listener }),
        __metadata("design:type", Array)
    ], UpdateVirtualNodeRequestBodySpec.prototype, "listeners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logging" }),
        __metadata("design:type", shared.Logging)
    ], UpdateVirtualNodeRequestBodySpec.prototype, "logging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceDiscovery" }),
        __metadata("design:type", shared.ServiceDiscovery)
    ], UpdateVirtualNodeRequestBodySpec.prototype, "serviceDiscovery", void 0);
    return UpdateVirtualNodeRequestBodySpec;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeRequestBodySpec = UpdateVirtualNodeRequestBodySpec;
var UpdateVirtualNodeRequestBody = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeRequestBody, _super);
    function UpdateVirtualNodeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateVirtualNodeRequestBody.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", UpdateVirtualNodeRequestBodySpec)
    ], UpdateVirtualNodeRequestBody.prototype, "spec", void 0);
    return UpdateVirtualNodeRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeRequestBody = UpdateVirtualNodeRequestBody;
var UpdateVirtualNodeRequest = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeRequest, _super);
    function UpdateVirtualNodeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualNodePathParams)
    ], UpdateVirtualNodeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualNodeQueryParams)
    ], UpdateVirtualNodeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateVirtualNodeHeaders)
    ], UpdateVirtualNodeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateVirtualNodeRequestBody)
    ], UpdateVirtualNodeRequest.prototype, "request", void 0);
    return UpdateVirtualNodeRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeRequest = UpdateVirtualNodeRequest;
var UpdateVirtualNodeResponse = /** @class */ (function (_super) {
    __extends(UpdateVirtualNodeResponse, _super);
    function UpdateVirtualNodeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateVirtualNodeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateVirtualNodeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateVirtualNodeResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateVirtualNodeOutput)
    ], UpdateVirtualNodeResponse.prototype, "updateVirtualNodeOutput", void 0);
    return UpdateVirtualNodeResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateVirtualNodeResponse = UpdateVirtualNodeResponse;
