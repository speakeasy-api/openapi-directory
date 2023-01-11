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
exports.PostGetAssociatedIpv6PoolCidrsResponse = exports.PostGetAssociatedIpv6PoolCidrsRequest = exports.PostGetAssociatedIpv6PoolCidrsHeaders = exports.PostGetAssociatedIpv6PoolCidrsQueryParams = exports.PostGetAssociatedIpv6PoolCidrsVersionEnum = exports.PostGetAssociatedIpv6PoolCidrsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetAssociatedIpv6PoolCidrsActionEnum;
(function (PostGetAssociatedIpv6PoolCidrsActionEnum) {
    PostGetAssociatedIpv6PoolCidrsActionEnum["GetAssociatedIpv6PoolCidrs"] = "GetAssociatedIpv6PoolCidrs";
})(PostGetAssociatedIpv6PoolCidrsActionEnum = exports.PostGetAssociatedIpv6PoolCidrsActionEnum || (exports.PostGetAssociatedIpv6PoolCidrsActionEnum = {}));
var PostGetAssociatedIpv6PoolCidrsVersionEnum;
(function (PostGetAssociatedIpv6PoolCidrsVersionEnum) {
    PostGetAssociatedIpv6PoolCidrsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetAssociatedIpv6PoolCidrsVersionEnum = exports.PostGetAssociatedIpv6PoolCidrsVersionEnum || (exports.PostGetAssociatedIpv6PoolCidrsVersionEnum = {}));
var PostGetAssociatedIpv6PoolCidrsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetAssociatedIpv6PoolCidrsQueryParams, _super);
    function PostGetAssociatedIpv6PoolCidrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsQueryParams.prototype, "version", void 0);
    return PostGetAssociatedIpv6PoolCidrsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetAssociatedIpv6PoolCidrsQueryParams = PostGetAssociatedIpv6PoolCidrsQueryParams;
var PostGetAssociatedIpv6PoolCidrsHeaders = /** @class */ (function (_super) {
    __extends(PostGetAssociatedIpv6PoolCidrsHeaders, _super);
    function PostGetAssociatedIpv6PoolCidrsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetAssociatedIpv6PoolCidrsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetAssociatedIpv6PoolCidrsHeaders = PostGetAssociatedIpv6PoolCidrsHeaders;
var PostGetAssociatedIpv6PoolCidrsRequest = /** @class */ (function (_super) {
    __extends(PostGetAssociatedIpv6PoolCidrsRequest, _super);
    function PostGetAssociatedIpv6PoolCidrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetAssociatedIpv6PoolCidrsQueryParams)
    ], PostGetAssociatedIpv6PoolCidrsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetAssociatedIpv6PoolCidrsHeaders)
    ], PostGetAssociatedIpv6PoolCidrsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetAssociatedIpv6PoolCidrsRequest.prototype, "request", void 0);
    return PostGetAssociatedIpv6PoolCidrsRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetAssociatedIpv6PoolCidrsRequest = PostGetAssociatedIpv6PoolCidrsRequest;
var PostGetAssociatedIpv6PoolCidrsResponse = /** @class */ (function (_super) {
    __extends(PostGetAssociatedIpv6PoolCidrsResponse, _super);
    function PostGetAssociatedIpv6PoolCidrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetAssociatedIpv6PoolCidrsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetAssociatedIpv6PoolCidrsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetAssociatedIpv6PoolCidrsResponse.prototype, "statusCode", void 0);
    return PostGetAssociatedIpv6PoolCidrsResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetAssociatedIpv6PoolCidrsResponse = PostGetAssociatedIpv6PoolCidrsResponse;
