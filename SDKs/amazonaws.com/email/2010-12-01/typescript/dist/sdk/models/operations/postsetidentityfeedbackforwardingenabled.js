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
exports.PostSetIdentityFeedbackForwardingEnabledResponse = exports.PostSetIdentityFeedbackForwardingEnabledRequest = exports.PostSetIdentityFeedbackForwardingEnabledHeaders = exports.PostSetIdentityFeedbackForwardingEnabledQueryParams = exports.PostSetIdentityFeedbackForwardingEnabledVersionEnum = exports.PostSetIdentityFeedbackForwardingEnabledActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSetIdentityFeedbackForwardingEnabledActionEnum;
(function (PostSetIdentityFeedbackForwardingEnabledActionEnum) {
    PostSetIdentityFeedbackForwardingEnabledActionEnum["SetIdentityFeedbackForwardingEnabled"] = "SetIdentityFeedbackForwardingEnabled";
})(PostSetIdentityFeedbackForwardingEnabledActionEnum = exports.PostSetIdentityFeedbackForwardingEnabledActionEnum || (exports.PostSetIdentityFeedbackForwardingEnabledActionEnum = {}));
var PostSetIdentityFeedbackForwardingEnabledVersionEnum;
(function (PostSetIdentityFeedbackForwardingEnabledVersionEnum) {
    PostSetIdentityFeedbackForwardingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostSetIdentityFeedbackForwardingEnabledVersionEnum = exports.PostSetIdentityFeedbackForwardingEnabledVersionEnum || (exports.PostSetIdentityFeedbackForwardingEnabledVersionEnum = {}));
var PostSetIdentityFeedbackForwardingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(PostSetIdentityFeedbackForwardingEnabledQueryParams, _super);
    function PostSetIdentityFeedbackForwardingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledQueryParams.prototype, "version", void 0);
    return PostSetIdentityFeedbackForwardingEnabledQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSetIdentityFeedbackForwardingEnabledQueryParams = PostSetIdentityFeedbackForwardingEnabledQueryParams;
var PostSetIdentityFeedbackForwardingEnabledHeaders = /** @class */ (function (_super) {
    __extends(PostSetIdentityFeedbackForwardingEnabledHeaders, _super);
    function PostSetIdentityFeedbackForwardingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetIdentityFeedbackForwardingEnabledHeaders;
}(utils_1.SpeakeasyBase));
exports.PostSetIdentityFeedbackForwardingEnabledHeaders = PostSetIdentityFeedbackForwardingEnabledHeaders;
var PostSetIdentityFeedbackForwardingEnabledRequest = /** @class */ (function (_super) {
    __extends(PostSetIdentityFeedbackForwardingEnabledRequest, _super);
    function PostSetIdentityFeedbackForwardingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetIdentityFeedbackForwardingEnabledQueryParams)
    ], PostSetIdentityFeedbackForwardingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetIdentityFeedbackForwardingEnabledHeaders)
    ], PostSetIdentityFeedbackForwardingEnabledRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetIdentityFeedbackForwardingEnabledRequest.prototype, "request", void 0);
    return PostSetIdentityFeedbackForwardingEnabledRequest;
}(utils_1.SpeakeasyBase));
exports.PostSetIdentityFeedbackForwardingEnabledRequest = PostSetIdentityFeedbackForwardingEnabledRequest;
var PostSetIdentityFeedbackForwardingEnabledResponse = /** @class */ (function (_super) {
    __extends(PostSetIdentityFeedbackForwardingEnabledResponse, _super);
    function PostSetIdentityFeedbackForwardingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSetIdentityFeedbackForwardingEnabledResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSetIdentityFeedbackForwardingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSetIdentityFeedbackForwardingEnabledResponse.prototype, "statusCode", void 0);
    return PostSetIdentityFeedbackForwardingEnabledResponse;
}(utils_1.SpeakeasyBase));
exports.PostSetIdentityFeedbackForwardingEnabledResponse = PostSetIdentityFeedbackForwardingEnabledResponse;
