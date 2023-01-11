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
exports.DescribeEnvironmentMembershipsResponse = exports.DescribeEnvironmentMembershipsRequest = exports.DescribeEnvironmentMembershipsHeaders = exports.DescribeEnvironmentMembershipsXAmzTargetEnum = exports.DescribeEnvironmentMembershipsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DescribeEnvironmentMembershipsQueryParams = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentMembershipsQueryParams, _super);
    function DescribeEnvironmentMembershipsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsQueryParams.prototype, "nextToken", void 0);
    return DescribeEnvironmentMembershipsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DescribeEnvironmentMembershipsQueryParams = DescribeEnvironmentMembershipsQueryParams;
var DescribeEnvironmentMembershipsXAmzTargetEnum;
(function (DescribeEnvironmentMembershipsXAmzTargetEnum) {
    DescribeEnvironmentMembershipsXAmzTargetEnum["AwsCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships"] = "AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships";
})(DescribeEnvironmentMembershipsXAmzTargetEnum = exports.DescribeEnvironmentMembershipsXAmzTargetEnum || (exports.DescribeEnvironmentMembershipsXAmzTargetEnum = {}));
var DescribeEnvironmentMembershipsHeaders = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentMembershipsHeaders, _super);
    function DescribeEnvironmentMembershipsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsHeaders.prototype, "xAmzTarget", void 0);
    return DescribeEnvironmentMembershipsHeaders;
}(utils_1.SpeakeasyBase));
exports.DescribeEnvironmentMembershipsHeaders = DescribeEnvironmentMembershipsHeaders;
var DescribeEnvironmentMembershipsRequest = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentMembershipsRequest, _super);
    function DescribeEnvironmentMembershipsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeEnvironmentMembershipsQueryParams)
    ], DescribeEnvironmentMembershipsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeEnvironmentMembershipsHeaders)
    ], DescribeEnvironmentMembershipsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DescribeEnvironmentMembershipsRequest)
    ], DescribeEnvironmentMembershipsRequest.prototype, "request", void 0);
    return DescribeEnvironmentMembershipsRequest;
}(utils_1.SpeakeasyBase));
exports.DescribeEnvironmentMembershipsRequest = DescribeEnvironmentMembershipsRequest;
var DescribeEnvironmentMembershipsResponse = /** @class */ (function (_super) {
    __extends(DescribeEnvironmentMembershipsResponse, _super);
    function DescribeEnvironmentMembershipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeEnvironmentMembershipsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DescribeEnvironmentMembershipsResult)
    ], DescribeEnvironmentMembershipsResponse.prototype, "describeEnvironmentMembershipsResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeEnvironmentMembershipsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeEnvironmentMembershipsResponse.prototype, "tooManyRequestsException", void 0);
    return DescribeEnvironmentMembershipsResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeEnvironmentMembershipsResponse = DescribeEnvironmentMembershipsResponse;
