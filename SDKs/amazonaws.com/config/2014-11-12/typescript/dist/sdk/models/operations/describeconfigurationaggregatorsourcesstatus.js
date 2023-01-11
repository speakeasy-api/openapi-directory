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
exports.DescribeConfigurationAggregatorSourcesStatusResponse = exports.DescribeConfigurationAggregatorSourcesStatusRequest = exports.DescribeConfigurationAggregatorSourcesStatusHeaders = exports.DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum = exports.DescribeConfigurationAggregatorSourcesStatusQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeConfigurationAggregatorSourcesStatusQueryParams = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorSourcesStatusQueryParams, _super);
    function DescribeConfigurationAggregatorSourcesStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusQueryParams.prototype, "nextToken", void 0);
    return DescribeConfigurationAggregatorSourcesStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorSourcesStatusQueryParams = DescribeConfigurationAggregatorSourcesStatusQueryParams;
var DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;
(function (DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum) {
    DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum["StarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus"] = "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus";
})(DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum = exports.DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum || (exports.DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum = {}));
var DescribeConfigurationAggregatorSourcesStatusHeaders = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorSourcesStatusHeaders, _super);
    function DescribeConfigurationAggregatorSourcesStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusHeaders.prototype, "xAmzTarget", void 0);
    return DescribeConfigurationAggregatorSourcesStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorSourcesStatusHeaders = DescribeConfigurationAggregatorSourcesStatusHeaders;
var DescribeConfigurationAggregatorSourcesStatusRequest = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorSourcesStatusRequest, _super);
    function DescribeConfigurationAggregatorSourcesStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeConfigurationAggregatorSourcesStatusQueryParams)
    ], DescribeConfigurationAggregatorSourcesStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeConfigurationAggregatorSourcesStatusHeaders)
    ], DescribeConfigurationAggregatorSourcesStatusRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeConfigurationAggregatorSourcesStatusRequest)
    ], DescribeConfigurationAggregatorSourcesStatusRequest.prototype, "request", void 0);
    return DescribeConfigurationAggregatorSourcesStatusRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorSourcesStatusRequest = DescribeConfigurationAggregatorSourcesStatusRequest;
var DescribeConfigurationAggregatorSourcesStatusResponse = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorSourcesStatusResponse, _super);
    function DescribeConfigurationAggregatorSourcesStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeConfigurationAggregatorSourcesStatusResponse)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "describeConfigurationAggregatorSourcesStatusResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "noSuchConfigurationAggregatorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeConfigurationAggregatorSourcesStatusResponse.prototype, "statusCode", void 0);
    return DescribeConfigurationAggregatorSourcesStatusResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorSourcesStatusResponse = DescribeConfigurationAggregatorSourcesStatusResponse;
