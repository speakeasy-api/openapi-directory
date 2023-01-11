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
exports.UpdateComputeEnvironmentResponse = exports.UpdateComputeEnvironmentRequest = exports.UpdateComputeEnvironmentRequestBody = exports.UpdateComputeEnvironmentRequestBodyStateEnum = exports.UpdateComputeEnvironmentRequestBodyComputeResources = exports.UpdateComputeEnvironmentHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateComputeEnvironmentHeaders = /** @class */ (function (_super) {
    __extends(UpdateComputeEnvironmentHeaders, _super);
    function UpdateComputeEnvironmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateComputeEnvironmentHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateComputeEnvironmentHeaders = UpdateComputeEnvironmentHeaders;
// UpdateComputeEnvironmentRequestBodyComputeResources
/**
 * An object representing the attributes of a compute environment that can be updated. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute Environments</a> in the <i>Batch User Guide</i>.
**/
var UpdateComputeEnvironmentRequestBodyComputeResources = /** @class */ (function (_super) {
    __extends(UpdateComputeEnvironmentRequestBodyComputeResources, _super);
    function UpdateComputeEnvironmentRequestBodyComputeResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desiredvCpus" }),
        __metadata("design:type", Number)
    ], UpdateComputeEnvironmentRequestBodyComputeResources.prototype, "desiredvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxvCpus" }),
        __metadata("design:type", Number)
    ], UpdateComputeEnvironmentRequestBodyComputeResources.prototype, "maxvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minvCpus" }),
        __metadata("design:type", Number)
    ], UpdateComputeEnvironmentRequestBodyComputeResources.prototype, "minvCpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=securityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateComputeEnvironmentRequestBodyComputeResources.prototype, "securityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subnets" }),
        __metadata("design:type", Array)
    ], UpdateComputeEnvironmentRequestBodyComputeResources.prototype, "subnets", void 0);
    return UpdateComputeEnvironmentRequestBodyComputeResources;
}(utils_1.SpeakeasyBase));
exports.UpdateComputeEnvironmentRequestBodyComputeResources = UpdateComputeEnvironmentRequestBodyComputeResources;
var UpdateComputeEnvironmentRequestBodyStateEnum;
(function (UpdateComputeEnvironmentRequestBodyStateEnum) {
    UpdateComputeEnvironmentRequestBodyStateEnum["Enabled"] = "ENABLED";
    UpdateComputeEnvironmentRequestBodyStateEnum["Disabled"] = "DISABLED";
})(UpdateComputeEnvironmentRequestBodyStateEnum = exports.UpdateComputeEnvironmentRequestBodyStateEnum || (exports.UpdateComputeEnvironmentRequestBodyStateEnum = {}));
var UpdateComputeEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateComputeEnvironmentRequestBody, _super);
    function UpdateComputeEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeEnvironment" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentRequestBody.prototype, "computeEnvironment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeResources" }),
        __metadata("design:type", UpdateComputeEnvironmentRequestBodyComputeResources)
    ], UpdateComputeEnvironmentRequestBody.prototype, "computeResources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentRequestBody.prototype, "serviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentRequestBody.prototype, "state", void 0);
    return UpdateComputeEnvironmentRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateComputeEnvironmentRequestBody = UpdateComputeEnvironmentRequestBody;
var UpdateComputeEnvironmentRequest = /** @class */ (function (_super) {
    __extends(UpdateComputeEnvironmentRequest, _super);
    function UpdateComputeEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateComputeEnvironmentHeaders)
    ], UpdateComputeEnvironmentRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateComputeEnvironmentRequestBody)
    ], UpdateComputeEnvironmentRequest.prototype, "request", void 0);
    return UpdateComputeEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateComputeEnvironmentRequest = UpdateComputeEnvironmentRequest;
var UpdateComputeEnvironmentResponse = /** @class */ (function (_super) {
    __extends(UpdateComputeEnvironmentResponse, _super);
    function UpdateComputeEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateComputeEnvironmentResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateComputeEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateComputeEnvironmentResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateComputeEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateComputeEnvironmentResponse)
    ], UpdateComputeEnvironmentResponse.prototype, "updateComputeEnvironmentResponse", void 0);
    return UpdateComputeEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateComputeEnvironmentResponse = UpdateComputeEnvironmentResponse;
