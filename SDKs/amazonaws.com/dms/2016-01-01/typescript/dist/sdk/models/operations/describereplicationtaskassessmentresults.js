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
exports.DescribeReplicationTaskAssessmentResultsResponse = exports.DescribeReplicationTaskAssessmentResultsRequest = exports.DescribeReplicationTaskAssessmentResultsHeaders = exports.DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = exports.DescribeReplicationTaskAssessmentResultsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeReplicationTaskAssessmentResultsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentResultsQueryParams, _super);
    function DescribeReplicationTaskAssessmentResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsQueryParams.prototype, "maxRecords", void 0);
    return DescribeReplicationTaskAssessmentResultsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeReplicationTaskAssessmentResultsQueryParams = DescribeReplicationTaskAssessmentResultsQueryParams;
var DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;
(function (DescribeReplicationTaskAssessmentResultsXAmzTargetEnum) {
    DescribeReplicationTaskAssessmentResultsXAmzTargetEnum["AmazonDmSv20160101DescribeReplicationTaskAssessmentResults"] = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults";
})(DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = exports.DescribeReplicationTaskAssessmentResultsXAmzTargetEnum || (exports.DescribeReplicationTaskAssessmentResultsXAmzTargetEnum = {}));
var DescribeReplicationTaskAssessmentResultsHeaders = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentResultsHeaders, _super);
    function DescribeReplicationTaskAssessmentResultsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeReplicationTaskAssessmentResultsHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeReplicationTaskAssessmentResultsHeaders = DescribeReplicationTaskAssessmentResultsHeaders;
var DescribeReplicationTaskAssessmentResultsRequest = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentResultsRequest, _super);
    function DescribeReplicationTaskAssessmentResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeReplicationTaskAssessmentResultsQueryParams)
    ], DescribeReplicationTaskAssessmentResultsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeReplicationTaskAssessmentResultsHeaders)
    ], DescribeReplicationTaskAssessmentResultsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeReplicationTaskAssessmentResultsMessage)
    ], DescribeReplicationTaskAssessmentResultsRequest.prototype, "request", void 0);
    return DescribeReplicationTaskAssessmentResultsRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeReplicationTaskAssessmentResultsRequest = DescribeReplicationTaskAssessmentResultsRequest;
var DescribeReplicationTaskAssessmentResultsResponse = /** @class */ (function (_super) {
    __extends(DescribeReplicationTaskAssessmentResultsResponse, _super);
    function DescribeReplicationTaskAssessmentResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeReplicationTaskAssessmentResultsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeReplicationTaskAssessmentResultsResponse)
    ], DescribeReplicationTaskAssessmentResultsResponse.prototype, "describeReplicationTaskAssessmentResultsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeReplicationTaskAssessmentResultsResponse.prototype, "resourceNotFoundFault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeReplicationTaskAssessmentResultsResponse.prototype, "statusCode", void 0);
    return DescribeReplicationTaskAssessmentResultsResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeReplicationTaskAssessmentResultsResponse = DescribeReplicationTaskAssessmentResultsResponse;
