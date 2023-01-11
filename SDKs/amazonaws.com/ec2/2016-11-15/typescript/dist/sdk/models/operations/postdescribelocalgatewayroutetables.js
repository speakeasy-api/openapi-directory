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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostDescribeLocalGatewayRouteTablesResponse = exports.PostDescribeLocalGatewayRouteTablesRequest = exports.PostDescribeLocalGatewayRouteTablesHeaders = exports.PostDescribeLocalGatewayRouteTablesQueryParams = exports.PostDescribeLocalGatewayRouteTablesVersionEnum = exports.PostDescribeLocalGatewayRouteTablesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeLocalGatewayRouteTablesActionEnum;
(function (PostDescribeLocalGatewayRouteTablesActionEnum) {
    PostDescribeLocalGatewayRouteTablesActionEnum["DescribeLocalGatewayRouteTables"] = "DescribeLocalGatewayRouteTables";
})(PostDescribeLocalGatewayRouteTablesActionEnum = exports.PostDescribeLocalGatewayRouteTablesActionEnum || (exports.PostDescribeLocalGatewayRouteTablesActionEnum = {}));
var PostDescribeLocalGatewayRouteTablesVersionEnum;
(function (PostDescribeLocalGatewayRouteTablesVersionEnum) {
    PostDescribeLocalGatewayRouteTablesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeLocalGatewayRouteTablesVersionEnum = exports.PostDescribeLocalGatewayRouteTablesVersionEnum || (exports.PostDescribeLocalGatewayRouteTablesVersionEnum = {}));
var PostDescribeLocalGatewayRouteTablesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTablesQueryParams, _super);
    function PostDescribeLocalGatewayRouteTablesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesQueryParams.prototype, "version", void 0);
    return PostDescribeLocalGatewayRouteTablesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLocalGatewayRouteTablesQueryParams = PostDescribeLocalGatewayRouteTablesQueryParams;
var PostDescribeLocalGatewayRouteTablesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTablesHeaders, _super);
    function PostDescribeLocalGatewayRouteTablesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLocalGatewayRouteTablesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLocalGatewayRouteTablesHeaders = PostDescribeLocalGatewayRouteTablesHeaders;
var PostDescribeLocalGatewayRouteTablesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTablesRequest, _super);
    function PostDescribeLocalGatewayRouteTablesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLocalGatewayRouteTablesQueryParams)
    ], PostDescribeLocalGatewayRouteTablesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLocalGatewayRouteTablesHeaders)
    ], PostDescribeLocalGatewayRouteTablesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLocalGatewayRouteTablesRequest.prototype, "request", void 0);
    return PostDescribeLocalGatewayRouteTablesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLocalGatewayRouteTablesRequest = PostDescribeLocalGatewayRouteTablesRequest;
var PostDescribeLocalGatewayRouteTablesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLocalGatewayRouteTablesResponse, _super);
    function PostDescribeLocalGatewayRouteTablesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLocalGatewayRouteTablesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeLocalGatewayRouteTablesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeLocalGatewayRouteTablesResponse.prototype, "statusCode", void 0);
    return PostDescribeLocalGatewayRouteTablesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLocalGatewayRouteTablesResponse = PostDescribeLocalGatewayRouteTablesResponse;
