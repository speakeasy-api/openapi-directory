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
exports.PostPutUserPolicyResponse = exports.PostPutUserPolicyRequest = exports.PostPutUserPolicyHeaders = exports.PostPutUserPolicyQueryParams = exports.PostPutUserPolicyVersionEnum = exports.PostPutUserPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPutUserPolicyActionEnum;
(function (PostPutUserPolicyActionEnum) {
    PostPutUserPolicyActionEnum["PutUserPolicy"] = "PutUserPolicy";
})(PostPutUserPolicyActionEnum = exports.PostPutUserPolicyActionEnum || (exports.PostPutUserPolicyActionEnum = {}));
var PostPutUserPolicyVersionEnum;
(function (PostPutUserPolicyVersionEnum) {
    PostPutUserPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostPutUserPolicyVersionEnum = exports.PostPutUserPolicyVersionEnum || (exports.PostPutUserPolicyVersionEnum = {}));
var PostPutUserPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostPutUserPolicyQueryParams, _super);
    function PostPutUserPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyQueryParams.prototype, "version", void 0);
    return PostPutUserPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPutUserPolicyQueryParams = PostPutUserPolicyQueryParams;
var PostPutUserPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostPutUserPolicyHeaders, _super);
    function PostPutUserPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutUserPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutUserPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostPutUserPolicyHeaders = PostPutUserPolicyHeaders;
var PostPutUserPolicyRequest = /** @class */ (function (_super) {
    __extends(PostPutUserPolicyRequest, _super);
    function PostPutUserPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutUserPolicyQueryParams)
    ], PostPutUserPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutUserPolicyHeaders)
    ], PostPutUserPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutUserPolicyRequest.prototype, "request", void 0);
    return PostPutUserPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostPutUserPolicyRequest = PostPutUserPolicyRequest;
var PostPutUserPolicyResponse = /** @class */ (function (_super) {
    __extends(PostPutUserPolicyResponse, _super);
    function PostPutUserPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPutUserPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPutUserPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPutUserPolicyResponse.prototype, "statusCode", void 0);
    return PostPutUserPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostPutUserPolicyResponse = PostPutUserPolicyResponse;
