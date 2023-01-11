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
exports.ListPredictorBacktestExportJobsResponse = exports.ListPredictorBacktestExportJobsRequest = exports.ListPredictorBacktestExportJobsHeaders = exports.ListPredictorBacktestExportJobsXAmzTargetEnum = exports.ListPredictorBacktestExportJobsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListPredictorBacktestExportJobsQueryParams = /** @class */ (function (_super) {
    __extends(ListPredictorBacktestExportJobsQueryParams, _super);
    function ListPredictorBacktestExportJobsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsQueryParams.prototype, "nextToken", void 0);
    return ListPredictorBacktestExportJobsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListPredictorBacktestExportJobsQueryParams = ListPredictorBacktestExportJobsQueryParams;
var ListPredictorBacktestExportJobsXAmzTargetEnum;
(function (ListPredictorBacktestExportJobsXAmzTargetEnum) {
    ListPredictorBacktestExportJobsXAmzTargetEnum["AmazonForecastListPredictorBacktestExportJobs"] = "AmazonForecast.ListPredictorBacktestExportJobs";
})(ListPredictorBacktestExportJobsXAmzTargetEnum = exports.ListPredictorBacktestExportJobsXAmzTargetEnum || (exports.ListPredictorBacktestExportJobsXAmzTargetEnum = {}));
var ListPredictorBacktestExportJobsHeaders = /** @class */ (function (_super) {
    __extends(ListPredictorBacktestExportJobsHeaders, _super);
    function ListPredictorBacktestExportJobsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsHeaders.prototype, "xAmzTarget", void 0);
    return ListPredictorBacktestExportJobsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListPredictorBacktestExportJobsHeaders = ListPredictorBacktestExportJobsHeaders;
var ListPredictorBacktestExportJobsRequest = /** @class */ (function (_super) {
    __extends(ListPredictorBacktestExportJobsRequest, _super);
    function ListPredictorBacktestExportJobsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPredictorBacktestExportJobsQueryParams)
    ], ListPredictorBacktestExportJobsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListPredictorBacktestExportJobsHeaders)
    ], ListPredictorBacktestExportJobsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListPredictorBacktestExportJobsRequest)
    ], ListPredictorBacktestExportJobsRequest.prototype, "request", void 0);
    return ListPredictorBacktestExportJobsRequest;
}(utils_1.SpeakeasyBase));
exports.ListPredictorBacktestExportJobsRequest = ListPredictorBacktestExportJobsRequest;
var ListPredictorBacktestExportJobsResponse = /** @class */ (function (_super) {
    __extends(ListPredictorBacktestExportJobsResponse, _super);
    function ListPredictorBacktestExportJobsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListPredictorBacktestExportJobsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPredictorBacktestExportJobsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListPredictorBacktestExportJobsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListPredictorBacktestExportJobsResponse)
    ], ListPredictorBacktestExportJobsResponse.prototype, "listPredictorBacktestExportJobsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListPredictorBacktestExportJobsResponse.prototype, "statusCode", void 0);
    return ListPredictorBacktestExportJobsResponse;
}(utils_1.SpeakeasyBase));
exports.ListPredictorBacktestExportJobsResponse = ListPredictorBacktestExportJobsResponse;
