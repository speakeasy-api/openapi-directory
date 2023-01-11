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
exports.CreateCampaignResponse = exports.CreateCampaignRequest = exports.CreateCampaignRequestBody = exports.CreateCampaignRequestBodyWriteCampaignRequest = exports.CreateCampaignHeaders = exports.CreateCampaignPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateCampaignPathParams = /** @class */ (function (_super) {
    __extends(CreateCampaignPathParams, _super);
    function CreateCampaignPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], CreateCampaignPathParams.prototype, "applicationId", void 0);
    return CreateCampaignPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignPathParams = CreateCampaignPathParams;
var CreateCampaignHeaders = /** @class */ (function (_super) {
    __extends(CreateCampaignHeaders, _super);
    function CreateCampaignHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCampaignHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCampaignHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignHeaders = CreateCampaignHeaders;
// CreateCampaignRequestBodyWriteCampaignRequest
/**
 * Specifies the configuration and other settings for a campaign.
**/
var CreateCampaignRequestBodyWriteCampaignRequest = /** @class */ (function (_super) {
    __extends(CreateCampaignRequestBodyWriteCampaignRequest, _super);
    function CreateCampaignRequestBodyWriteCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalTreatments", elemType: shared.WriteTreatmentResource }),
        __metadata("design:type", Array)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "additionalTreatments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomDeliveryConfiguration" }),
        __metadata("design:type", shared.CustomDeliveryConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "customDeliveryConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=HoldoutPercent" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "holdoutPercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Hook" }),
        __metadata("design:type", shared.CampaignHook)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "hook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IsPaused" }),
        __metadata("design:type", Boolean)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "isPaused", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Limits" }),
        __metadata("design:type", shared.CampaignLimits)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "limits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", shared.MessageConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "messageConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "priority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Schedule" }),
        __metadata("design:type", shared.Schedule)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SegmentVersion" }),
        __metadata("design:type", Number)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "segmentVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", shared.TemplateConfiguration)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "templateConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TreatmentDescription" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TreatmentName" }),
        __metadata("design:type", String)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "treatmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateCampaignRequestBodyWriteCampaignRequest.prototype, "tags", void 0);
    return CreateCampaignRequestBodyWriteCampaignRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignRequestBodyWriteCampaignRequest = CreateCampaignRequestBodyWriteCampaignRequest;
var CreateCampaignRequestBody = /** @class */ (function (_super) {
    __extends(CreateCampaignRequestBody, _super);
    function CreateCampaignRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=WriteCampaignRequest" }),
        __metadata("design:type", CreateCampaignRequestBodyWriteCampaignRequest)
    ], CreateCampaignRequestBody.prototype, "writeCampaignRequest", void 0);
    return CreateCampaignRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignRequestBody = CreateCampaignRequestBody;
var CreateCampaignRequest = /** @class */ (function (_super) {
    __extends(CreateCampaignRequest, _super);
    function CreateCampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCampaignPathParams)
    ], CreateCampaignRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateCampaignHeaders)
    ], CreateCampaignRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCampaignRequestBody)
    ], CreateCampaignRequest.prototype, "request", void 0);
    return CreateCampaignRequest;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignRequest = CreateCampaignRequest;
var CreateCampaignResponse = /** @class */ (function (_super) {
    __extends(CreateCampaignResponse, _super);
    function CreateCampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateCampaignResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateCampaignResponse)
    ], CreateCampaignResponse.prototype, "createCampaignResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateCampaignResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateCampaignResponse.prototype, "tooManyRequestsException", void 0);
    return CreateCampaignResponse;
}(utils_1.SpeakeasyBase));
exports.CreateCampaignResponse = CreateCampaignResponse;
