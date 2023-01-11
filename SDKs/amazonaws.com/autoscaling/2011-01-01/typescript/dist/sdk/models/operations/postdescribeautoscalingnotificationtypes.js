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
exports.PostDescribeAutoScalingNotificationTypesResponse = exports.PostDescribeAutoScalingNotificationTypesRequest = exports.PostDescribeAutoScalingNotificationTypesHeaders = exports.PostDescribeAutoScalingNotificationTypesQueryParams = exports.PostDescribeAutoScalingNotificationTypesVersionEnum = exports.PostDescribeAutoScalingNotificationTypesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeAutoScalingNotificationTypesActionEnum;
(function (PostDescribeAutoScalingNotificationTypesActionEnum) {
    PostDescribeAutoScalingNotificationTypesActionEnum["DescribeAutoScalingNotificationTypes"] = "DescribeAutoScalingNotificationTypes";
})(PostDescribeAutoScalingNotificationTypesActionEnum = exports.PostDescribeAutoScalingNotificationTypesActionEnum || (exports.PostDescribeAutoScalingNotificationTypesActionEnum = {}));
var PostDescribeAutoScalingNotificationTypesVersionEnum;
(function (PostDescribeAutoScalingNotificationTypesVersionEnum) {
    PostDescribeAutoScalingNotificationTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeAutoScalingNotificationTypesVersionEnum = exports.PostDescribeAutoScalingNotificationTypesVersionEnum || (exports.PostDescribeAutoScalingNotificationTypesVersionEnum = {}));
var PostDescribeAutoScalingNotificationTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingNotificationTypesQueryParams, _super);
    function PostDescribeAutoScalingNotificationTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesQueryParams.prototype, "version", void 0);
    return PostDescribeAutoScalingNotificationTypesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingNotificationTypesQueryParams = PostDescribeAutoScalingNotificationTypesQueryParams;
var PostDescribeAutoScalingNotificationTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingNotificationTypesHeaders, _super);
    function PostDescribeAutoScalingNotificationTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAutoScalingNotificationTypesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingNotificationTypesHeaders = PostDescribeAutoScalingNotificationTypesHeaders;
var PostDescribeAutoScalingNotificationTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingNotificationTypesRequest, _super);
    function PostDescribeAutoScalingNotificationTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAutoScalingNotificationTypesQueryParams)
    ], PostDescribeAutoScalingNotificationTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAutoScalingNotificationTypesHeaders)
    ], PostDescribeAutoScalingNotificationTypesRequest.prototype, "headers", void 0);
    return PostDescribeAutoScalingNotificationTypesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingNotificationTypesRequest = PostDescribeAutoScalingNotificationTypesRequest;
var PostDescribeAutoScalingNotificationTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingNotificationTypesResponse, _super);
    function PostDescribeAutoScalingNotificationTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAutoScalingNotificationTypesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingNotificationTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeAutoScalingNotificationTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeAutoScalingNotificationTypesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingNotificationTypesResponse = PostDescribeAutoScalingNotificationTypesResponse;
