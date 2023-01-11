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
exports.InitiateJobResponse = exports.InitiateJobRequest = exports.InitiateJobRequestBody = exports.InitiateJobRequestBodyJobParameters = exports.InitiateJobHeaders = exports.InitiateJobPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var InitiateJobPathParams = /** @class */ (function (_super) {
    __extends(InitiateJobPathParams, _super);
    function InitiateJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], InitiateJobPathParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vaultName" }),
        __metadata("design:type", String)
    ], InitiateJobPathParams.prototype, "vaultName", void 0);
    return InitiateJobPathParams;
}(utils_1.SpeakeasyBase));
exports.InitiateJobPathParams = InitiateJobPathParams;
var InitiateJobHeaders = /** @class */ (function (_super) {
    __extends(InitiateJobHeaders, _super);
    function InitiateJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], InitiateJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return InitiateJobHeaders;
}(utils_1.SpeakeasyBase));
exports.InitiateJobHeaders = InitiateJobHeaders;
// InitiateJobRequestBodyJobParameters
/**
 * Provides options for defining a job.
**/
var InitiateJobRequestBodyJobParameters = /** @class */ (function (_super) {
    __extends(InitiateJobRequestBodyJobParameters, _super);
    function InitiateJobRequestBodyJobParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ArchiveId" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "archiveId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Format" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InventoryRetrievalParameters" }),
        __metadata("design:type", shared.InventoryRetrievalJobInput)
    ], InitiateJobRequestBodyJobParameters.prototype, "inventoryRetrievalParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OutputLocation" }),
        __metadata("design:type", shared.OutputLocation)
    ], InitiateJobRequestBodyJobParameters.prototype, "outputLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RetrievalByteRange" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "retrievalByteRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SNSTopic" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "snsTopic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SelectParameters" }),
        __metadata("design:type", shared.SelectParameters)
    ], InitiateJobRequestBodyJobParameters.prototype, "selectParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tier" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "tier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], InitiateJobRequestBodyJobParameters.prototype, "type", void 0);
    return InitiateJobRequestBodyJobParameters;
}(utils_1.SpeakeasyBase));
exports.InitiateJobRequestBodyJobParameters = InitiateJobRequestBodyJobParameters;
var InitiateJobRequestBody = /** @class */ (function (_super) {
    __extends(InitiateJobRequestBody, _super);
    function InitiateJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobParameters" }),
        __metadata("design:type", InitiateJobRequestBodyJobParameters)
    ], InitiateJobRequestBody.prototype, "jobParameters", void 0);
    return InitiateJobRequestBody;
}(utils_1.SpeakeasyBase));
exports.InitiateJobRequestBody = InitiateJobRequestBody;
var InitiateJobRequest = /** @class */ (function (_super) {
    __extends(InitiateJobRequest, _super);
    function InitiateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InitiateJobPathParams)
    ], InitiateJobRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InitiateJobHeaders)
    ], InitiateJobRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", InitiateJobRequestBody)
    ], InitiateJobRequest.prototype, "request", void 0);
    return InitiateJobRequest;
}(utils_1.SpeakeasyBase));
exports.InitiateJobRequest = InitiateJobRequest;
var InitiateJobResponse = /** @class */ (function (_super) {
    __extends(InitiateJobResponse, _super);
    function InitiateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], InitiateJobResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "initiateJobOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "insufficientCapacityException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "missingParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "policyEnforcedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InitiateJobResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], InitiateJobResponse.prototype, "statusCode", void 0);
    return InitiateJobResponse;
}(utils_1.SpeakeasyBase));
exports.InitiateJobResponse = InitiateJobResponse;
