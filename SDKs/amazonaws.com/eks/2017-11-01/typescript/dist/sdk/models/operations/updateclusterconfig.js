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
exports.UpdateClusterConfigResponse = exports.UpdateClusterConfigRequest = exports.UpdateClusterConfigRequestBody = exports.UpdateClusterConfigRequestBodyResourcesVpcConfig = exports.UpdateClusterConfigRequestBodyLogging = exports.UpdateClusterConfigHeaders = exports.UpdateClusterConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateClusterConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigPathParams, _super);
    function UpdateClusterConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigPathParams.prototype, "name", void 0);
    return UpdateClusterConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigPathParams = UpdateClusterConfigPathParams;
var UpdateClusterConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigHeaders, _super);
    function UpdateClusterConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateClusterConfigHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigHeaders = UpdateClusterConfigHeaders;
// UpdateClusterConfigRequestBodyLogging
/**
 * An object representing the logging configuration for resources in your cluster.
**/
var UpdateClusterConfigRequestBodyLogging = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBodyLogging, _super);
    function UpdateClusterConfigRequestBodyLogging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterLogging", elemType: shared.LogSetup }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyLogging.prototype, "clusterLogging", void 0);
    return UpdateClusterConfigRequestBodyLogging;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigRequestBodyLogging = UpdateClusterConfigRequestBodyLogging;
// UpdateClusterConfigRequestBodyResourcesVpcConfig
/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
**/
var UpdateClusterConfigRequestBodyResourcesVpcConfig = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBodyResourcesVpcConfig, _super);
    function UpdateClusterConfigRequestBodyResourcesVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointPrivateAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "endpointPrivateAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpointPublicAccess" }),
        __metadata("design:type", Boolean)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "endpointPublicAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publicAccessCidrs" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "publicAccessCidrs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "securityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnetIds" }),
        __metadata("design:type", Array)
    ], UpdateClusterConfigRequestBodyResourcesVpcConfig.prototype, "subnetIds", void 0);
    return UpdateClusterConfigRequestBodyResourcesVpcConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigRequestBodyResourcesVpcConfig = UpdateClusterConfigRequestBodyResourcesVpcConfig;
var UpdateClusterConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequestBody, _super);
    function UpdateClusterConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], UpdateClusterConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logging" }),
        __metadata("design:type", UpdateClusterConfigRequestBodyLogging)
    ], UpdateClusterConfigRequestBody.prototype, "logging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourcesVpcConfig" }),
        __metadata("design:type", UpdateClusterConfigRequestBodyResourcesVpcConfig)
    ], UpdateClusterConfigRequestBody.prototype, "resourcesVpcConfig", void 0);
    return UpdateClusterConfigRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigRequestBody = UpdateClusterConfigRequestBody;
var UpdateClusterConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigRequest, _super);
    function UpdateClusterConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateClusterConfigPathParams)
    ], UpdateClusterConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateClusterConfigHeaders)
    ], UpdateClusterConfigRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateClusterConfigRequestBody)
    ], UpdateClusterConfigRequest.prototype, "request", void 0);
    return UpdateClusterConfigRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigRequest = UpdateClusterConfigRequest;
var UpdateClusterConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateClusterConfigResponse, _super);
    function UpdateClusterConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateClusterConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateClusterConfigResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateClusterConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateClusterConfigResponse)
    ], UpdateClusterConfigResponse.prototype, "updateClusterConfigResponse", void 0);
    return UpdateClusterConfigResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateClusterConfigResponse = UpdateClusterConfigResponse;
