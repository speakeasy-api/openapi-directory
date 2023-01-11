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
exports.PostDeleteEventSubscriptionResponse = exports.PostDeleteEventSubscriptionRequest = exports.PostDeleteEventSubscriptionHeaders = exports.PostDeleteEventSubscriptionQueryParams = exports.PostDeleteEventSubscriptionVersionEnum = exports.PostDeleteEventSubscriptionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteEventSubscriptionActionEnum;
(function (PostDeleteEventSubscriptionActionEnum) {
    PostDeleteEventSubscriptionActionEnum["DeleteEventSubscription"] = "DeleteEventSubscription";
})(PostDeleteEventSubscriptionActionEnum = exports.PostDeleteEventSubscriptionActionEnum || (exports.PostDeleteEventSubscriptionActionEnum = {}));
var PostDeleteEventSubscriptionVersionEnum;
(function (PostDeleteEventSubscriptionVersionEnum) {
    PostDeleteEventSubscriptionVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(PostDeleteEventSubscriptionVersionEnum = exports.PostDeleteEventSubscriptionVersionEnum || (exports.PostDeleteEventSubscriptionVersionEnum = {}));
var PostDeleteEventSubscriptionQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteEventSubscriptionQueryParams, _super);
    function PostDeleteEventSubscriptionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionQueryParams.prototype, "version", void 0);
    return PostDeleteEventSubscriptionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteEventSubscriptionQueryParams = PostDeleteEventSubscriptionQueryParams;
var PostDeleteEventSubscriptionHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteEventSubscriptionHeaders, _super);
    function PostDeleteEventSubscriptionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteEventSubscriptionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteEventSubscriptionHeaders = PostDeleteEventSubscriptionHeaders;
var PostDeleteEventSubscriptionRequest = /** @class */ (function (_super) {
    __extends(PostDeleteEventSubscriptionRequest, _super);
    function PostDeleteEventSubscriptionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteEventSubscriptionQueryParams)
    ], PostDeleteEventSubscriptionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteEventSubscriptionHeaders)
    ], PostDeleteEventSubscriptionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteEventSubscriptionRequest.prototype, "request", void 0);
    return PostDeleteEventSubscriptionRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteEventSubscriptionRequest = PostDeleteEventSubscriptionRequest;
var PostDeleteEventSubscriptionResponse = /** @class */ (function (_super) {
    __extends(PostDeleteEventSubscriptionResponse, _super);
    function PostDeleteEventSubscriptionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteEventSubscriptionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteEventSubscriptionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteEventSubscriptionResponse.prototype, "statusCode", void 0);
    return PostDeleteEventSubscriptionResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteEventSubscriptionResponse = PostDeleteEventSubscriptionResponse;
