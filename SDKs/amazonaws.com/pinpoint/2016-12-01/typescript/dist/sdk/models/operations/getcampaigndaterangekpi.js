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
exports.GetCampaignDateRangeKpiResponse = exports.GetCampaignDateRangeKpiRequest = exports.GetCampaignDateRangeKpiHeaders = exports.GetCampaignDateRangeKpiQueryParams = exports.GetCampaignDateRangeKpiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCampaignDateRangeKpiPathParams = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiPathParams, _super);
    function GetCampaignDateRangeKpiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiPathParams.prototype, "applicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=campaign-id" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiPathParams.prototype, "campaignId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=kpi-name" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiPathParams.prototype, "kpiName", void 0);
    return GetCampaignDateRangeKpiPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCampaignDateRangeKpiPathParams = GetCampaignDateRangeKpiPathParams;
var GetCampaignDateRangeKpiQueryParams = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiQueryParams, _super);
    function GetCampaignDateRangeKpiQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end-time" }),
        __metadata("design:type", Date)
    ], GetCampaignDateRangeKpiQueryParams.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next-token" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page-size" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start-time" }),
        __metadata("design:type", Date)
    ], GetCampaignDateRangeKpiQueryParams.prototype, "startTime", void 0);
    return GetCampaignDateRangeKpiQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCampaignDateRangeKpiQueryParams = GetCampaignDateRangeKpiQueryParams;
var GetCampaignDateRangeKpiHeaders = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiHeaders, _super);
    function GetCampaignDateRangeKpiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCampaignDateRangeKpiHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCampaignDateRangeKpiHeaders = GetCampaignDateRangeKpiHeaders;
var GetCampaignDateRangeKpiRequest = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiRequest, _super);
    function GetCampaignDateRangeKpiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCampaignDateRangeKpiPathParams)
    ], GetCampaignDateRangeKpiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCampaignDateRangeKpiQueryParams)
    ], GetCampaignDateRangeKpiRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCampaignDateRangeKpiHeaders)
    ], GetCampaignDateRangeKpiRequest.prototype, "headers", void 0);
    return GetCampaignDateRangeKpiRequest;
}(utils_1.SpeakeasyBase));
exports.GetCampaignDateRangeKpiRequest = GetCampaignDateRangeKpiRequest;
var GetCampaignDateRangeKpiResponse = /** @class */ (function (_super) {
    __extends(GetCampaignDateRangeKpiResponse, _super);
    function GetCampaignDateRangeKpiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCampaignDateRangeKpiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetCampaignDateRangeKpiResponse)
    ], GetCampaignDateRangeKpiResponse.prototype, "getCampaignDateRangeKpiResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCampaignDateRangeKpiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCampaignDateRangeKpiResponse.prototype, "tooManyRequestsException", void 0);
    return GetCampaignDateRangeKpiResponse;
}(utils_1.SpeakeasyBase));
exports.GetCampaignDateRangeKpiResponse = GetCampaignDateRangeKpiResponse;
