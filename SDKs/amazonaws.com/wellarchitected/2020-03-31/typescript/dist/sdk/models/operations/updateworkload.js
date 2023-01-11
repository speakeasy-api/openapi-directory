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
exports.UpdateWorkloadResponse = exports.UpdateWorkloadRequest = exports.UpdateWorkloadRequestBody = exports.UpdateWorkloadRequestBodyImprovementStatusEnum = exports.UpdateWorkloadRequestBodyEnvironmentEnum = exports.UpdateWorkloadHeaders = exports.UpdateWorkloadPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateWorkloadPathParams = /** @class */ (function (_super) {
    __extends(UpdateWorkloadPathParams, _super);
    function UpdateWorkloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=WorkloadId" }),
        __metadata("design:type", String)
    ], UpdateWorkloadPathParams.prototype, "workloadId", void 0);
    return UpdateWorkloadPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateWorkloadPathParams = UpdateWorkloadPathParams;
var UpdateWorkloadHeaders = /** @class */ (function (_super) {
    __extends(UpdateWorkloadHeaders, _super);
    function UpdateWorkloadHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateWorkloadHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateWorkloadHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateWorkloadHeaders = UpdateWorkloadHeaders;
var UpdateWorkloadRequestBodyEnvironmentEnum;
(function (UpdateWorkloadRequestBodyEnvironmentEnum) {
    UpdateWorkloadRequestBodyEnvironmentEnum["Production"] = "PRODUCTION";
    UpdateWorkloadRequestBodyEnvironmentEnum["Preproduction"] = "PREPRODUCTION";
})(UpdateWorkloadRequestBodyEnvironmentEnum = exports.UpdateWorkloadRequestBodyEnvironmentEnum || (exports.UpdateWorkloadRequestBodyEnvironmentEnum = {}));
var UpdateWorkloadRequestBodyImprovementStatusEnum;
(function (UpdateWorkloadRequestBodyImprovementStatusEnum) {
    UpdateWorkloadRequestBodyImprovementStatusEnum["NotApplicable"] = "NOT_APPLICABLE";
    UpdateWorkloadRequestBodyImprovementStatusEnum["NotStarted"] = "NOT_STARTED";
    UpdateWorkloadRequestBodyImprovementStatusEnum["InProgress"] = "IN_PROGRESS";
    UpdateWorkloadRequestBodyImprovementStatusEnum["Complete"] = "COMPLETE";
    UpdateWorkloadRequestBodyImprovementStatusEnum["RiskAcknowledged"] = "RISK_ACKNOWLEDGED";
})(UpdateWorkloadRequestBodyImprovementStatusEnum = exports.UpdateWorkloadRequestBodyImprovementStatusEnum || (exports.UpdateWorkloadRequestBodyImprovementStatusEnum = {}));
var UpdateWorkloadRequestBody = /** @class */ (function (_super) {
    __extends(UpdateWorkloadRequestBody, _super);
    function UpdateWorkloadRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccountIds" }),
        __metadata("design:type", Array)
    ], UpdateWorkloadRequestBody.prototype, "accountIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ArchitecturalDesign" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "architecturalDesign", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AwsRegions" }),
        __metadata("design:type", Array)
    ], UpdateWorkloadRequestBody.prototype, "awsRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Environment" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ImprovementStatus" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "improvementStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Industry" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "industry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IndustryType" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "industryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IsReviewOwnerUpdateAcknowledged" }),
        __metadata("design:type", Boolean)
    ], UpdateWorkloadRequestBody.prototype, "isReviewOwnerUpdateAcknowledged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NonAwsRegions" }),
        __metadata("design:type", Array)
    ], UpdateWorkloadRequestBody.prototype, "nonAwsRegions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PillarPriorities" }),
        __metadata("design:type", Array)
    ], UpdateWorkloadRequestBody.prototype, "pillarPriorities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReviewOwner" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "reviewOwner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=WorkloadName" }),
        __metadata("design:type", String)
    ], UpdateWorkloadRequestBody.prototype, "workloadName", void 0);
    return UpdateWorkloadRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateWorkloadRequestBody = UpdateWorkloadRequestBody;
var UpdateWorkloadRequest = /** @class */ (function (_super) {
    __extends(UpdateWorkloadRequest, _super);
    function UpdateWorkloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateWorkloadPathParams)
    ], UpdateWorkloadRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateWorkloadHeaders)
    ], UpdateWorkloadRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateWorkloadRequestBody)
    ], UpdateWorkloadRequest.prototype, "request", void 0);
    return UpdateWorkloadRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateWorkloadRequest = UpdateWorkloadRequest;
var UpdateWorkloadResponse = /** @class */ (function (_super) {
    __extends(UpdateWorkloadResponse, _super);
    function UpdateWorkloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateWorkloadResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateWorkloadResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateWorkloadOutput)
    ], UpdateWorkloadResponse.prototype, "updateWorkloadOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateWorkloadResponse.prototype, "validationException", void 0);
    return UpdateWorkloadResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateWorkloadResponse = UpdateWorkloadResponse;
