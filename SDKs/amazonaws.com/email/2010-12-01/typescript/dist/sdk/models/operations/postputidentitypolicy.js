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
exports.PostPutIdentityPolicyResponse = exports.PostPutIdentityPolicyRequest = exports.PostPutIdentityPolicyHeaders = exports.PostPutIdentityPolicyQueryParams = exports.PostPutIdentityPolicyVersionEnum = exports.PostPutIdentityPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPutIdentityPolicyActionEnum;
(function (PostPutIdentityPolicyActionEnum) {
    PostPutIdentityPolicyActionEnum["PutIdentityPolicy"] = "PutIdentityPolicy";
})(PostPutIdentityPolicyActionEnum = exports.PostPutIdentityPolicyActionEnum || (exports.PostPutIdentityPolicyActionEnum = {}));
var PostPutIdentityPolicyVersionEnum;
(function (PostPutIdentityPolicyVersionEnum) {
    PostPutIdentityPolicyVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostPutIdentityPolicyVersionEnum = exports.PostPutIdentityPolicyVersionEnum || (exports.PostPutIdentityPolicyVersionEnum = {}));
var PostPutIdentityPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostPutIdentityPolicyQueryParams, _super);
    function PostPutIdentityPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyQueryParams.prototype, "version", void 0);
    return PostPutIdentityPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPutIdentityPolicyQueryParams = PostPutIdentityPolicyQueryParams;
var PostPutIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostPutIdentityPolicyHeaders, _super);
    function PostPutIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutIdentityPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostPutIdentityPolicyHeaders = PostPutIdentityPolicyHeaders;
var PostPutIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(PostPutIdentityPolicyRequest, _super);
    function PostPutIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutIdentityPolicyQueryParams)
    ], PostPutIdentityPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutIdentityPolicyHeaders)
    ], PostPutIdentityPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutIdentityPolicyRequest.prototype, "request", void 0);
    return PostPutIdentityPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostPutIdentityPolicyRequest = PostPutIdentityPolicyRequest;
var PostPutIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(PostPutIdentityPolicyResponse, _super);
    function PostPutIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPutIdentityPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPutIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPutIdentityPolicyResponse.prototype, "statusCode", void 0);
    return PostPutIdentityPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostPutIdentityPolicyResponse = PostPutIdentityPolicyResponse;
