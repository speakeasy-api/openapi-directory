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
exports.PostDescribeEventSubscriptionsResponse = exports.PostDescribeEventSubscriptionsRequest = exports.PostDescribeEventSubscriptionsHeaders = exports.PostDescribeEventSubscriptionsQueryParams = exports.PostDescribeEventSubscriptionsVersionEnum = exports.PostDescribeEventSubscriptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeEventSubscriptionsActionEnum;
(function (PostDescribeEventSubscriptionsActionEnum) {
    PostDescribeEventSubscriptionsActionEnum["DescribeEventSubscriptions"] = "DescribeEventSubscriptions";
})(PostDescribeEventSubscriptionsActionEnum = exports.PostDescribeEventSubscriptionsActionEnum || (exports.PostDescribeEventSubscriptionsActionEnum = {}));
var PostDescribeEventSubscriptionsVersionEnum;
(function (PostDescribeEventSubscriptionsVersionEnum) {
    PostDescribeEventSubscriptionsVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(PostDescribeEventSubscriptionsVersionEnum = exports.PostDescribeEventSubscriptionsVersionEnum || (exports.PostDescribeEventSubscriptionsVersionEnum = {}));
var PostDescribeEventSubscriptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEventSubscriptionsQueryParams, _super);
    function PostDescribeEventSubscriptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsQueryParams.prototype, "version", void 0);
    return PostDescribeEventSubscriptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEventSubscriptionsQueryParams = PostDescribeEventSubscriptionsQueryParams;
var PostDescribeEventSubscriptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEventSubscriptionsHeaders, _super);
    function PostDescribeEventSubscriptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEventSubscriptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEventSubscriptionsHeaders = PostDescribeEventSubscriptionsHeaders;
var PostDescribeEventSubscriptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEventSubscriptionsRequest, _super);
    function PostDescribeEventSubscriptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEventSubscriptionsQueryParams)
    ], PostDescribeEventSubscriptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEventSubscriptionsHeaders)
    ], PostDescribeEventSubscriptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEventSubscriptionsRequest.prototype, "request", void 0);
    return PostDescribeEventSubscriptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEventSubscriptionsRequest = PostDescribeEventSubscriptionsRequest;
var PostDescribeEventSubscriptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEventSubscriptionsResponse, _super);
    function PostDescribeEventSubscriptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEventSubscriptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeEventSubscriptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeEventSubscriptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeEventSubscriptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEventSubscriptionsResponse = PostDescribeEventSubscriptionsResponse;
