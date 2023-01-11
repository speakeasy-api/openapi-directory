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
exports.PostCreateSpotDatafeedSubscriptionResponse = exports.PostCreateSpotDatafeedSubscriptionRequest = exports.PostCreateSpotDatafeedSubscriptionHeaders = exports.PostCreateSpotDatafeedSubscriptionQueryParams = exports.PostCreateSpotDatafeedSubscriptionVersionEnum = exports.PostCreateSpotDatafeedSubscriptionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateSpotDatafeedSubscriptionActionEnum;
(function (PostCreateSpotDatafeedSubscriptionActionEnum) {
    PostCreateSpotDatafeedSubscriptionActionEnum["CreateSpotDatafeedSubscription"] = "CreateSpotDatafeedSubscription";
})(PostCreateSpotDatafeedSubscriptionActionEnum = exports.PostCreateSpotDatafeedSubscriptionActionEnum || (exports.PostCreateSpotDatafeedSubscriptionActionEnum = {}));
var PostCreateSpotDatafeedSubscriptionVersionEnum;
(function (PostCreateSpotDatafeedSubscriptionVersionEnum) {
    PostCreateSpotDatafeedSubscriptionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateSpotDatafeedSubscriptionVersionEnum = exports.PostCreateSpotDatafeedSubscriptionVersionEnum || (exports.PostCreateSpotDatafeedSubscriptionVersionEnum = {}));
var PostCreateSpotDatafeedSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateSpotDatafeedSubscriptionQueryParams, _super);
    function PostCreateSpotDatafeedSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionQueryParams.prototype, "version", void 0);
    return PostCreateSpotDatafeedSubscriptionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateSpotDatafeedSubscriptionQueryParams = PostCreateSpotDatafeedSubscriptionQueryParams;
var PostCreateSpotDatafeedSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateSpotDatafeedSubscriptionHeaders, _super);
    function PostCreateSpotDatafeedSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateSpotDatafeedSubscriptionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateSpotDatafeedSubscriptionHeaders = PostCreateSpotDatafeedSubscriptionHeaders;
var PostCreateSpotDatafeedSubscriptionRequest = /** @class */ (function (_super) {
    __extends(PostCreateSpotDatafeedSubscriptionRequest, _super);
    function PostCreateSpotDatafeedSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateSpotDatafeedSubscriptionQueryParams)
    ], PostCreateSpotDatafeedSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateSpotDatafeedSubscriptionHeaders)
    ], PostCreateSpotDatafeedSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateSpotDatafeedSubscriptionRequest.prototype, "request", void 0);
    return PostCreateSpotDatafeedSubscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateSpotDatafeedSubscriptionRequest = PostCreateSpotDatafeedSubscriptionRequest;
var PostCreateSpotDatafeedSubscriptionResponse = /** @class */ (function (_super) {
    __extends(PostCreateSpotDatafeedSubscriptionResponse, _super);
    function PostCreateSpotDatafeedSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateSpotDatafeedSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateSpotDatafeedSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateSpotDatafeedSubscriptionResponse.prototype, "statusCode", void 0);
    return PostCreateSpotDatafeedSubscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateSpotDatafeedSubscriptionResponse = PostCreateSpotDatafeedSubscriptionResponse;
