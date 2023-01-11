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
exports.GetFindingStatisticsResponse = exports.GetFindingStatisticsRequest = exports.GetFindingStatisticsRequestBody = exports.GetFindingStatisticsRequestBodySortCriteria = exports.GetFindingStatisticsRequestBodyGroupByEnum = exports.GetFindingStatisticsRequestBodyFindingCriteria = exports.GetFindingStatisticsHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFindingStatisticsHeaders = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsHeaders, _super);
    function GetFindingStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFindingStatisticsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsHeaders = GetFindingStatisticsHeaders;
// GetFindingStatisticsRequestBodyFindingCriteria
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
var GetFindingStatisticsRequestBodyFindingCriteria = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBodyFindingCriteria, _super);
    function GetFindingStatisticsRequestBodyFindingCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties }),
        __metadata("design:type", Object)
    ], GetFindingStatisticsRequestBodyFindingCriteria.prototype, "criterion", void 0);
    return GetFindingStatisticsRequestBodyFindingCriteria;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsRequestBodyFindingCriteria = GetFindingStatisticsRequestBodyFindingCriteria;
var GetFindingStatisticsRequestBodyGroupByEnum;
(function (GetFindingStatisticsRequestBodyGroupByEnum) {
    GetFindingStatisticsRequestBodyGroupByEnum["ResourcesAffectedS3BucketName"] = "resourcesAffected.s3Bucket.name";
    GetFindingStatisticsRequestBodyGroupByEnum["Type"] = "type";
    GetFindingStatisticsRequestBodyGroupByEnum["ClassificationDetailsJobId"] = "classificationDetails.jobId";
    GetFindingStatisticsRequestBodyGroupByEnum["SeverityDescription"] = "severity.description";
})(GetFindingStatisticsRequestBodyGroupByEnum = exports.GetFindingStatisticsRequestBodyGroupByEnum || (exports.GetFindingStatisticsRequestBodyGroupByEnum = {}));
// GetFindingStatisticsRequestBodySortCriteria
/**
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
var GetFindingStatisticsRequestBodySortCriteria = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBodySortCriteria, _super);
    function GetFindingStatisticsRequestBodySortCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributeName" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBodySortCriteria.prototype, "attributeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBodySortCriteria.prototype, "orderBy", void 0);
    return GetFindingStatisticsRequestBodySortCriteria;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsRequestBodySortCriteria = GetFindingStatisticsRequestBodySortCriteria;
var GetFindingStatisticsRequestBody = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequestBody, _super);
    function GetFindingStatisticsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=findingCriteria" }),
        __metadata("design:type", GetFindingStatisticsRequestBodyFindingCriteria)
    ], GetFindingStatisticsRequestBody.prototype, "findingCriteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groupBy" }),
        __metadata("design:type", String)
    ], GetFindingStatisticsRequestBody.prototype, "groupBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetFindingStatisticsRequestBody.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sortCriteria" }),
        __metadata("design:type", GetFindingStatisticsRequestBodySortCriteria)
    ], GetFindingStatisticsRequestBody.prototype, "sortCriteria", void 0);
    return GetFindingStatisticsRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsRequestBody = GetFindingStatisticsRequestBody;
var GetFindingStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsRequest, _super);
    function GetFindingStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFindingStatisticsHeaders)
    ], GetFindingStatisticsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetFindingStatisticsRequestBody)
    ], GetFindingStatisticsRequest.prototype, "request", void 0);
    return GetFindingStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsRequest = GetFindingStatisticsRequest;
var GetFindingStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetFindingStatisticsResponse, _super);
    function GetFindingStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFindingStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetFindingStatisticsResponse)
    ], GetFindingStatisticsResponse.prototype, "getFindingStatisticsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFindingStatisticsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetFindingStatisticsResponse.prototype, "validationException", void 0);
    return GetFindingStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.GetFindingStatisticsResponse = GetFindingStatisticsResponse;
