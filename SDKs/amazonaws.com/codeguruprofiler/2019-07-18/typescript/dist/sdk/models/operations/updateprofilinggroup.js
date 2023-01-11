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
exports.UpdateProfilingGroupResponse = exports.UpdateProfilingGroupRequest = exports.UpdateProfilingGroupRequestBody = exports.UpdateProfilingGroupRequestBodyAgentOrchestrationConfig = exports.UpdateProfilingGroupHeaders = exports.UpdateProfilingGroupPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateProfilingGroupPathParams = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupPathParams, _super);
    function UpdateProfilingGroupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=profilingGroupName" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupPathParams.prototype, "profilingGroupName", void 0);
    return UpdateProfilingGroupPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupPathParams = UpdateProfilingGroupPathParams;
var UpdateProfilingGroupHeaders = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupHeaders, _super);
    function UpdateProfilingGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateProfilingGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateProfilingGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupHeaders = UpdateProfilingGroupHeaders;
// UpdateProfilingGroupRequestBodyAgentOrchestrationConfig
/**
 *  Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group.
**/
var UpdateProfilingGroupRequestBodyAgentOrchestrationConfig = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupRequestBodyAgentOrchestrationConfig, _super);
    function UpdateProfilingGroupRequestBodyAgentOrchestrationConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profilingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateProfilingGroupRequestBodyAgentOrchestrationConfig.prototype, "profilingEnabled", void 0);
    return UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupRequestBodyAgentOrchestrationConfig = UpdateProfilingGroupRequestBodyAgentOrchestrationConfig;
var UpdateProfilingGroupRequestBody = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupRequestBody, _super);
    function UpdateProfilingGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agentOrchestrationConfig" }),
        __metadata("design:type", UpdateProfilingGroupRequestBodyAgentOrchestrationConfig)
    ], UpdateProfilingGroupRequestBody.prototype, "agentOrchestrationConfig", void 0);
    return UpdateProfilingGroupRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupRequestBody = UpdateProfilingGroupRequestBody;
var UpdateProfilingGroupRequest = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupRequest, _super);
    function UpdateProfilingGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProfilingGroupPathParams)
    ], UpdateProfilingGroupRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateProfilingGroupHeaders)
    ], UpdateProfilingGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateProfilingGroupRequestBody)
    ], UpdateProfilingGroupRequest.prototype, "request", void 0);
    return UpdateProfilingGroupRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupRequest = UpdateProfilingGroupRequest;
var UpdateProfilingGroupResponse = /** @class */ (function (_super) {
    __extends(UpdateProfilingGroupResponse, _super);
    function UpdateProfilingGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProfilingGroupResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateProfilingGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProfilingGroupResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProfilingGroupResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateProfilingGroupResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProfilingGroupResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateProfilingGroupResponse)
    ], UpdateProfilingGroupResponse.prototype, "updateProfilingGroupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateProfilingGroupResponse.prototype, "validationException", void 0);
    return UpdateProfilingGroupResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateProfilingGroupResponse = UpdateProfilingGroupResponse;
