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
exports.UpdateNodegroupConfigResponse = exports.UpdateNodegroupConfigRequest = exports.UpdateNodegroupConfigRequestBody = exports.UpdateNodegroupConfigRequestBodyUpdateConfig = exports.UpdateNodegroupConfigRequestBodyTaints = exports.UpdateNodegroupConfigRequestBodyScalingConfig = exports.UpdateNodegroupConfigRequestBodyLabels = exports.UpdateNodegroupConfigHeaders = exports.UpdateNodegroupConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateNodegroupConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigPathParams, _super);
    function UpdateNodegroupConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigPathParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=nodegroupName" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigPathParams.prototype, "nodegroupName", void 0);
    return UpdateNodegroupConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigPathParams = UpdateNodegroupConfigPathParams;
var UpdateNodegroupConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigHeaders, _super);
    function UpdateNodegroupConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateNodegroupConfigHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigHeaders = UpdateNodegroupConfigHeaders;
// UpdateNodegroupConfigRequestBodyLabels
/**
 * An object representing a Kubernetes label change for a managed node group.
**/
var UpdateNodegroupConfigRequestBodyLabels = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequestBodyLabels, _super);
    function UpdateNodegroupConfigRequestBodyLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addOrUpdateLabels" }),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigRequestBodyLabels.prototype, "addOrUpdateLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeLabels" }),
        __metadata("design:type", Array)
    ], UpdateNodegroupConfigRequestBodyLabels.prototype, "removeLabels", void 0);
    return UpdateNodegroupConfigRequestBodyLabels;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequestBodyLabels = UpdateNodegroupConfigRequestBodyLabels;
// UpdateNodegroupConfigRequestBodyScalingConfig
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
var UpdateNodegroupConfigRequestBodyScalingConfig = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequestBodyScalingConfig, _super);
    function UpdateNodegroupConfigRequestBodyScalingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desiredSize" }),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigRequestBodyScalingConfig.prototype, "desiredSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigRequestBodyScalingConfig.prototype, "maxSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minSize" }),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigRequestBodyScalingConfig.prototype, "minSize", void 0);
    return UpdateNodegroupConfigRequestBodyScalingConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequestBodyScalingConfig = UpdateNodegroupConfigRequestBodyScalingConfig;
// UpdateNodegroupConfigRequestBodyTaints
/**
 * An object representing the details of an update to a taints payload.
**/
var UpdateNodegroupConfigRequestBodyTaints = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequestBodyTaints, _super);
    function UpdateNodegroupConfigRequestBodyTaints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addOrUpdateTaints", elemType: shared.Taint }),
        __metadata("design:type", Array)
    ], UpdateNodegroupConfigRequestBodyTaints.prototype, "addOrUpdateTaints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=removeTaints", elemType: shared.Taint }),
        __metadata("design:type", Array)
    ], UpdateNodegroupConfigRequestBodyTaints.prototype, "removeTaints", void 0);
    return UpdateNodegroupConfigRequestBodyTaints;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequestBodyTaints = UpdateNodegroupConfigRequestBodyTaints;
// UpdateNodegroupConfigRequestBodyUpdateConfig
/**
 * The node group update configuration.
**/
var UpdateNodegroupConfigRequestBodyUpdateConfig = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequestBodyUpdateConfig, _super);
    function UpdateNodegroupConfigRequestBodyUpdateConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxUnavailable" }),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigRequestBodyUpdateConfig.prototype, "maxUnavailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxUnavailablePercentage" }),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigRequestBodyUpdateConfig.prototype, "maxUnavailablePercentage", void 0);
    return UpdateNodegroupConfigRequestBodyUpdateConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequestBodyUpdateConfig = UpdateNodegroupConfigRequestBodyUpdateConfig;
var UpdateNodegroupConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequestBody, _super);
    function UpdateNodegroupConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", UpdateNodegroupConfigRequestBodyLabels)
    ], UpdateNodegroupConfigRequestBody.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scalingConfig" }),
        __metadata("design:type", UpdateNodegroupConfigRequestBodyScalingConfig)
    ], UpdateNodegroupConfigRequestBody.prototype, "scalingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taints" }),
        __metadata("design:type", UpdateNodegroupConfigRequestBodyTaints)
    ], UpdateNodegroupConfigRequestBody.prototype, "taints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateConfig" }),
        __metadata("design:type", UpdateNodegroupConfigRequestBodyUpdateConfig)
    ], UpdateNodegroupConfigRequestBody.prototype, "updateConfig", void 0);
    return UpdateNodegroupConfigRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequestBody = UpdateNodegroupConfigRequestBody;
var UpdateNodegroupConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigRequest, _super);
    function UpdateNodegroupConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNodegroupConfigPathParams)
    ], UpdateNodegroupConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateNodegroupConfigHeaders)
    ], UpdateNodegroupConfigRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNodegroupConfigRequestBody)
    ], UpdateNodegroupConfigRequest.prototype, "request", void 0);
    return UpdateNodegroupConfigRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigRequest = UpdateNodegroupConfigRequest;
var UpdateNodegroupConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateNodegroupConfigResponse, _super);
    function UpdateNodegroupConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateNodegroupConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateNodegroupConfigResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateNodegroupConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateNodegroupConfigResponse)
    ], UpdateNodegroupConfigResponse.prototype, "updateNodegroupConfigResponse", void 0);
    return UpdateNodegroupConfigResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateNodegroupConfigResponse = UpdateNodegroupConfigResponse;
