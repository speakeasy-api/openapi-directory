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
exports.CreateNodegroupResponse = exports.CreateNodegroupRequest = exports.CreateNodegroupRequestBody = exports.CreateNodegroupRequestBodyUpdateConfig = exports.CreateNodegroupRequestBodyScalingConfig = exports.CreateNodegroupRequestBodyRemoteAccess = exports.CreateNodegroupRequestBodyLaunchTemplate = exports.CreateNodegroupRequestBodyCapacityTypeEnum = exports.CreateNodegroupRequestBodyAmiTypeEnum = exports.CreateNodegroupHeaders = exports.CreateNodegroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateNodegroupPathParams = /** @class */ (function (_super) {
    __extends(CreateNodegroupPathParams, _super);
    function CreateNodegroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CreateNodegroupPathParams.prototype, "name", void 0);
    return CreateNodegroupPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupPathParams = CreateNodegroupPathParams;
var CreateNodegroupHeaders = /** @class */ (function (_super) {
    __extends(CreateNodegroupHeaders, _super);
    function CreateNodegroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateNodegroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateNodegroupHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupHeaders = CreateNodegroupHeaders;
var CreateNodegroupRequestBodyAmiTypeEnum;
(function (CreateNodegroupRequestBodyAmiTypeEnum) {
    CreateNodegroupRequestBodyAmiTypeEnum["Al2X8664"] = "AL2_x86_64";
    CreateNodegroupRequestBodyAmiTypeEnum["Al2X8664Gpu"] = "AL2_x86_64_GPU";
    CreateNodegroupRequestBodyAmiTypeEnum["Al2Arm64"] = "AL2_ARM_64";
    CreateNodegroupRequestBodyAmiTypeEnum["Custom"] = "CUSTOM";
})(CreateNodegroupRequestBodyAmiTypeEnum = exports.CreateNodegroupRequestBodyAmiTypeEnum || (exports.CreateNodegroupRequestBodyAmiTypeEnum = {}));
var CreateNodegroupRequestBodyCapacityTypeEnum;
(function (CreateNodegroupRequestBodyCapacityTypeEnum) {
    CreateNodegroupRequestBodyCapacityTypeEnum["OnDemand"] = "ON_DEMAND";
    CreateNodegroupRequestBodyCapacityTypeEnum["Spot"] = "SPOT";
})(CreateNodegroupRequestBodyCapacityTypeEnum = exports.CreateNodegroupRequestBodyCapacityTypeEnum || (exports.CreateNodegroupRequestBodyCapacityTypeEnum = {}));
// CreateNodegroupRequestBodyLaunchTemplate
/**
 * <p>An object representing a node group launch template specification. The launch template cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html"> <code>SubnetId</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html"> <code>IamInstanceProfile</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html"> <code>RequestSpotInstances</code> </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html"> <code>HibernationOptions</code> </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html"> <code>TerminateInstances</code> </a>, or the node group deployment or update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html"> <code>CreateLaunchTemplate</code> </a> in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p> <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
**/
var CreateNodegroupRequestBodyLaunchTemplate = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequestBodyLaunchTemplate, _super);
    function CreateNodegroupRequestBodyLaunchTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBodyLaunchTemplate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBodyLaunchTemplate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBodyLaunchTemplate.prototype, "version", void 0);
    return CreateNodegroupRequestBodyLaunchTemplate;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequestBodyLaunchTemplate = CreateNodegroupRequestBodyLaunchTemplate;
// CreateNodegroupRequestBodyRemoteAccess
/**
 * An object representing the remote access configuration for the managed node group.
**/
var CreateNodegroupRequestBodyRemoteAccess = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequestBodyRemoteAccess, _super);
    function CreateNodegroupRequestBodyRemoteAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2SshKey" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBodyRemoteAccess.prototype, "ec2SshKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceSecurityGroups" }),
        __metadata("design:type", Array)
    ], CreateNodegroupRequestBodyRemoteAccess.prototype, "sourceSecurityGroups", void 0);
    return CreateNodegroupRequestBodyRemoteAccess;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequestBodyRemoteAccess = CreateNodegroupRequestBodyRemoteAccess;
// CreateNodegroupRequestBodyScalingConfig
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
**/
var CreateNodegroupRequestBodyScalingConfig = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequestBodyScalingConfig, _super);
    function CreateNodegroupRequestBodyScalingConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desiredSize" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBodyScalingConfig.prototype, "desiredSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxSize" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBodyScalingConfig.prototype, "maxSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minSize" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBodyScalingConfig.prototype, "minSize", void 0);
    return CreateNodegroupRequestBodyScalingConfig;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequestBodyScalingConfig = CreateNodegroupRequestBodyScalingConfig;
// CreateNodegroupRequestBodyUpdateConfig
/**
 * The node group update configuration.
**/
var CreateNodegroupRequestBodyUpdateConfig = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequestBodyUpdateConfig, _super);
    function CreateNodegroupRequestBodyUpdateConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxUnavailable" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBodyUpdateConfig.prototype, "maxUnavailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxUnavailablePercentage" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBodyUpdateConfig.prototype, "maxUnavailablePercentage", void 0);
    return CreateNodegroupRequestBodyUpdateConfig;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequestBodyUpdateConfig = CreateNodegroupRequestBodyUpdateConfig;
var CreateNodegroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequestBody, _super);
    function CreateNodegroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amiType" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "amiType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capacityType" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "capacityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=diskSize" }),
        __metadata("design:type", Number)
    ], CreateNodegroupRequestBody.prototype, "diskSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], CreateNodegroupRequestBody.prototype, "instanceTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], CreateNodegroupRequestBody.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchTemplate" }),
        __metadata("design:type", CreateNodegroupRequestBodyLaunchTemplate)
    ], CreateNodegroupRequestBody.prototype, "launchTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeRole" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "nodeRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodegroupName" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "nodegroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=releaseVersion" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "releaseVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteAccess" }),
        __metadata("design:type", CreateNodegroupRequestBodyRemoteAccess)
    ], CreateNodegroupRequestBody.prototype, "remoteAccess", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scalingConfig" }),
        __metadata("design:type", CreateNodegroupRequestBodyScalingConfig)
    ], CreateNodegroupRequestBody.prototype, "scalingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], CreateNodegroupRequestBody.prototype, "subnets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateNodegroupRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taints", elemType: shared.Taint }),
        __metadata("design:type", Array)
    ], CreateNodegroupRequestBody.prototype, "taints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateConfig" }),
        __metadata("design:type", CreateNodegroupRequestBodyUpdateConfig)
    ], CreateNodegroupRequestBody.prototype, "updateConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateNodegroupRequestBody.prototype, "version", void 0);
    return CreateNodegroupRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequestBody = CreateNodegroupRequestBody;
var CreateNodegroupRequest = /** @class */ (function (_super) {
    __extends(CreateNodegroupRequest, _super);
    function CreateNodegroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNodegroupPathParams)
    ], CreateNodegroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNodegroupHeaders)
    ], CreateNodegroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNodegroupRequestBody)
    ], CreateNodegroupRequest.prototype, "request", void 0);
    return CreateNodegroupRequest;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupRequest = CreateNodegroupRequest;
var CreateNodegroupResponse = /** @class */ (function (_super) {
    __extends(CreateNodegroupResponse, _super);
    function CreateNodegroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateNodegroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateNodegroupResponse)
    ], CreateNodegroupResponse.prototype, "createNodegroupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "resourceLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNodegroupResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateNodegroupResponse.prototype, "statusCode", void 0);
    return CreateNodegroupResponse;
}(utils_1.SpeakeasyBase));
exports.CreateNodegroupResponse = CreateNodegroupResponse;
