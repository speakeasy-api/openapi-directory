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
exports.PostDetachGroupPolicyResponse = exports.PostDetachGroupPolicyRequest = exports.PostDetachGroupPolicyHeaders = exports.PostDetachGroupPolicyQueryParams = exports.PostDetachGroupPolicyVersionEnum = exports.PostDetachGroupPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDetachGroupPolicyActionEnum;
(function (PostDetachGroupPolicyActionEnum) {
    PostDetachGroupPolicyActionEnum["DetachGroupPolicy"] = "DetachGroupPolicy";
})(PostDetachGroupPolicyActionEnum = exports.PostDetachGroupPolicyActionEnum || (exports.PostDetachGroupPolicyActionEnum = {}));
var PostDetachGroupPolicyVersionEnum;
(function (PostDetachGroupPolicyVersionEnum) {
    PostDetachGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDetachGroupPolicyVersionEnum = exports.PostDetachGroupPolicyVersionEnum || (exports.PostDetachGroupPolicyVersionEnum = {}));
var PostDetachGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostDetachGroupPolicyQueryParams, _super);
    function PostDetachGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyQueryParams.prototype, "version", void 0);
    return PostDetachGroupPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDetachGroupPolicyQueryParams = PostDetachGroupPolicyQueryParams;
var PostDetachGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostDetachGroupPolicyHeaders, _super);
    function PostDetachGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDetachGroupPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDetachGroupPolicyHeaders = PostDetachGroupPolicyHeaders;
var PostDetachGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(PostDetachGroupPolicyRequest, _super);
    function PostDetachGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDetachGroupPolicyQueryParams)
    ], PostDetachGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDetachGroupPolicyHeaders)
    ], PostDetachGroupPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDetachGroupPolicyRequest.prototype, "request", void 0);
    return PostDetachGroupPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostDetachGroupPolicyRequest = PostDetachGroupPolicyRequest;
var PostDetachGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(PostDetachGroupPolicyResponse, _super);
    function PostDetachGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDetachGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDetachGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDetachGroupPolicyResponse.prototype, "statusCode", void 0);
    return PostDetachGroupPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostDetachGroupPolicyResponse = PostDetachGroupPolicyResponse;
