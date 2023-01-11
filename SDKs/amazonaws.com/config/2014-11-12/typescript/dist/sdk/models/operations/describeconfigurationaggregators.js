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
exports.DescribeConfigurationAggregatorsResponse = exports.DescribeConfigurationAggregatorsRequest = exports.DescribeConfigurationAggregatorsHeaders = exports.DescribeConfigurationAggregatorsXAmzTargetEnum = exports.DescribeConfigurationAggregatorsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeConfigurationAggregatorsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorsQueryParams, _super);
    function DescribeConfigurationAggregatorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Limit" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsQueryParams.prototype, "nextToken", void 0);
    return DescribeConfigurationAggregatorsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorsQueryParams = DescribeConfigurationAggregatorsQueryParams;
var DescribeConfigurationAggregatorsXAmzTargetEnum;
(function (DescribeConfigurationAggregatorsXAmzTargetEnum) {
    DescribeConfigurationAggregatorsXAmzTargetEnum["StarlingDoveServiceDescribeConfigurationAggregators"] = "StarlingDoveService.DescribeConfigurationAggregators";
})(DescribeConfigurationAggregatorsXAmzTargetEnum = exports.DescribeConfigurationAggregatorsXAmzTargetEnum || (exports.DescribeConfigurationAggregatorsXAmzTargetEnum = {}));
var DescribeConfigurationAggregatorsHeaders = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorsHeaders, _super);
    function DescribeConfigurationAggregatorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeConfigurationAggregatorsHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorsHeaders = DescribeConfigurationAggregatorsHeaders;
var DescribeConfigurationAggregatorsRequest = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorsRequest, _super);
    function DescribeConfigurationAggregatorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeConfigurationAggregatorsQueryParams)
    ], DescribeConfigurationAggregatorsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeConfigurationAggregatorsHeaders)
    ], DescribeConfigurationAggregatorsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeConfigurationAggregatorsRequest)
    ], DescribeConfigurationAggregatorsRequest.prototype, "request", void 0);
    return DescribeConfigurationAggregatorsRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorsRequest = DescribeConfigurationAggregatorsRequest;
var DescribeConfigurationAggregatorsResponse = /** @class */ (function (_super) {
    __extends(DescribeConfigurationAggregatorsResponse, _super);
    function DescribeConfigurationAggregatorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeConfigurationAggregatorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeConfigurationAggregatorsResponse)
    ], DescribeConfigurationAggregatorsResponse.prototype, "describeConfigurationAggregatorsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorsResponse.prototype, "invalidLimitException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorsResponse.prototype, "invalidNextTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorsResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeConfigurationAggregatorsResponse.prototype, "noSuchConfigurationAggregatorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeConfigurationAggregatorsResponse.prototype, "statusCode", void 0);
    return DescribeConfigurationAggregatorsResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeConfigurationAggregatorsResponse = DescribeConfigurationAggregatorsResponse;
