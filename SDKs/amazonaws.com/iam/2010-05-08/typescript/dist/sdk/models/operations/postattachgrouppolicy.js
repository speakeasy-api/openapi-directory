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
exports.PostAttachGroupPolicyResponse = exports.PostAttachGroupPolicyRequest = exports.PostAttachGroupPolicyHeaders = exports.PostAttachGroupPolicyQueryParams = exports.PostAttachGroupPolicyVersionEnum = exports.PostAttachGroupPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAttachGroupPolicyActionEnum;
(function (PostAttachGroupPolicyActionEnum) {
    PostAttachGroupPolicyActionEnum["AttachGroupPolicy"] = "AttachGroupPolicy";
})(PostAttachGroupPolicyActionEnum = exports.PostAttachGroupPolicyActionEnum || (exports.PostAttachGroupPolicyActionEnum = {}));
var PostAttachGroupPolicyVersionEnum;
(function (PostAttachGroupPolicyVersionEnum) {
    PostAttachGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostAttachGroupPolicyVersionEnum = exports.PostAttachGroupPolicyVersionEnum || (exports.PostAttachGroupPolicyVersionEnum = {}));
var PostAttachGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostAttachGroupPolicyQueryParams, _super);
    function PostAttachGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyQueryParams.prototype, "version", void 0);
    return PostAttachGroupPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAttachGroupPolicyQueryParams = PostAttachGroupPolicyQueryParams;
var PostAttachGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostAttachGroupPolicyHeaders, _super);
    function PostAttachGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAttachGroupPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAttachGroupPolicyHeaders = PostAttachGroupPolicyHeaders;
var PostAttachGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(PostAttachGroupPolicyRequest, _super);
    function PostAttachGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAttachGroupPolicyQueryParams)
    ], PostAttachGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAttachGroupPolicyHeaders)
    ], PostAttachGroupPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttachGroupPolicyRequest.prototype, "request", void 0);
    return PostAttachGroupPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostAttachGroupPolicyRequest = PostAttachGroupPolicyRequest;
var PostAttachGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(PostAttachGroupPolicyResponse, _super);
    function PostAttachGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAttachGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAttachGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAttachGroupPolicyResponse.prototype, "statusCode", void 0);
    return PostAttachGroupPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostAttachGroupPolicyResponse = PostAttachGroupPolicyResponse;
