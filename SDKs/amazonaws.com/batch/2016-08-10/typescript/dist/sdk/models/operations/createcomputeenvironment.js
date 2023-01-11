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
exports.CreateComputeEnvironmentResponse = exports.CreateComputeEnvironmentRequest = exports.CreateComputeEnvironmentRequestBody = exports.CreateComputeEnvironmentRequestBodyTypeEnum = exports.CreateComputeEnvironmentRequestBodyStateEnum = exports.CreateComputeEnvironmentRequestBodyComputeResources = exports.CreateComputeEnvironmentHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateComputeEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentHeaders, _super);
    function CreateComputeEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateComputeEnvironmentHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateComputeEnvironmentHeaders = CreateComputeEnvironmentHeaders;
// CreateComputeEnvironmentRequestBodyComputeResources
/**
 * An object representing an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
var CreateComputeEnvironmentRequestBodyComputeResources = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequestBodyComputeResources, _super);
    function CreateComputeEnvironmentRequestBodyComputeResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allocationStrategy" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "allocationStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bidPercentage" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "bidPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desiredvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "desiredvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2Configuration", elemType: shared.Ec2Configuration }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "ec2Configuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2KeyPair" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "ec2KeyPair", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageId" }),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "instanceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instanceTypes" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "instanceTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchTemplate" }),
        __metadata("design:type", shared.LaunchTemplateSpecification)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "launchTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "maxvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minvCpus" }),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "minvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placementGroup" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "placementGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "securityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spotIamFleetRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "spotIamFleetRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "subnets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBodyComputeResources.prototype, "type", void 0);
    return CreateComputeEnvironmentRequestBodyComputeResources;
}(utils_1.SpeakeasyBase));
exports.CreateComputeEnvironmentRequestBodyComputeResources = CreateComputeEnvironmentRequestBodyComputeResources;
var CreateComputeEnvironmentRequestBodyStateEnum;
(function (CreateComputeEnvironmentRequestBodyStateEnum) {
    CreateComputeEnvironmentRequestBodyStateEnum["Enabled"] = "ENABLED";
    CreateComputeEnvironmentRequestBodyStateEnum["Disabled"] = "DISABLED";
})(CreateComputeEnvironmentRequestBodyStateEnum = exports.CreateComputeEnvironmentRequestBodyStateEnum || (exports.CreateComputeEnvironmentRequestBodyStateEnum = {}));
var CreateComputeEnvironmentRequestBodyTypeEnum;
(function (CreateComputeEnvironmentRequestBodyTypeEnum) {
    CreateComputeEnvironmentRequestBodyTypeEnum["Managed"] = "MANAGED";
    CreateComputeEnvironmentRequestBodyTypeEnum["Unmanaged"] = "UNMANAGED";
})(CreateComputeEnvironmentRequestBodyTypeEnum = exports.CreateComputeEnvironmentRequestBodyTypeEnum || (exports.CreateComputeEnvironmentRequestBodyTypeEnum = {}));
var CreateComputeEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequestBody, _super);
    function CreateComputeEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "computeEnvironmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeResources" }),
        __metadata("design:type", CreateComputeEnvironmentRequestBodyComputeResources)
    ], CreateComputeEnvironmentRequestBody.prototype, "computeResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "serviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentRequestBody.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentRequestBody.prototype, "type", void 0);
    return CreateComputeEnvironmentRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateComputeEnvironmentRequestBody = CreateComputeEnvironmentRequestBody;
var CreateComputeEnvironmentRequest = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentRequest, _super);
    function CreateComputeEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateComputeEnvironmentHeaders)
    ], CreateComputeEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateComputeEnvironmentRequestBody)
    ], CreateComputeEnvironmentRequest.prototype, "request", void 0);
    return CreateComputeEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.CreateComputeEnvironmentRequest = CreateComputeEnvironmentRequest;
var CreateComputeEnvironmentResponse = /** @class */ (function (_super) {
    __extends(CreateComputeEnvironmentResponse, _super);
    function CreateComputeEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateComputeEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateComputeEnvironmentResponse)
    ], CreateComputeEnvironmentResponse.prototype, "createComputeEnvironmentResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateComputeEnvironmentResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateComputeEnvironmentResponse.prototype, "statusCode", void 0);
    return CreateComputeEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.CreateComputeEnvironmentResponse = CreateComputeEnvironmentResponse;
