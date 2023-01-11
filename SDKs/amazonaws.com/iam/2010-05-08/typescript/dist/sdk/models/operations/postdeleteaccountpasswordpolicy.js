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
exports.PostDeleteAccountPasswordPolicyResponse = exports.PostDeleteAccountPasswordPolicyRequest = exports.PostDeleteAccountPasswordPolicyHeaders = exports.PostDeleteAccountPasswordPolicyQueryParams = exports.PostDeleteAccountPasswordPolicyVersionEnum = exports.PostDeleteAccountPasswordPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteAccountPasswordPolicyActionEnum;
(function (PostDeleteAccountPasswordPolicyActionEnum) {
    PostDeleteAccountPasswordPolicyActionEnum["DeleteAccountPasswordPolicy"] = "DeleteAccountPasswordPolicy";
})(PostDeleteAccountPasswordPolicyActionEnum = exports.PostDeleteAccountPasswordPolicyActionEnum || (exports.PostDeleteAccountPasswordPolicyActionEnum = {}));
var PostDeleteAccountPasswordPolicyVersionEnum;
(function (PostDeleteAccountPasswordPolicyVersionEnum) {
    PostDeleteAccountPasswordPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteAccountPasswordPolicyVersionEnum = exports.PostDeleteAccountPasswordPolicyVersionEnum || (exports.PostDeleteAccountPasswordPolicyVersionEnum = {}));
var PostDeleteAccountPasswordPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteAccountPasswordPolicyQueryParams, _super);
    function PostDeleteAccountPasswordPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyQueryParams.prototype, "version", void 0);
    return PostDeleteAccountPasswordPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAccountPasswordPolicyQueryParams = PostDeleteAccountPasswordPolicyQueryParams;
var PostDeleteAccountPasswordPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteAccountPasswordPolicyHeaders, _super);
    function PostDeleteAccountPasswordPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteAccountPasswordPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAccountPasswordPolicyHeaders = PostDeleteAccountPasswordPolicyHeaders;
var PostDeleteAccountPasswordPolicyRequest = /** @class */ (function (_super) {
    __extends(PostDeleteAccountPasswordPolicyRequest, _super);
    function PostDeleteAccountPasswordPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteAccountPasswordPolicyQueryParams)
    ], PostDeleteAccountPasswordPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteAccountPasswordPolicyHeaders)
    ], PostDeleteAccountPasswordPolicyRequest.prototype, "headers", void 0);
    return PostDeleteAccountPasswordPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAccountPasswordPolicyRequest = PostDeleteAccountPasswordPolicyRequest;
var PostDeleteAccountPasswordPolicyResponse = /** @class */ (function (_super) {
    __extends(PostDeleteAccountPasswordPolicyResponse, _super);
    function PostDeleteAccountPasswordPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAccountPasswordPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteAccountPasswordPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteAccountPasswordPolicyResponse.prototype, "statusCode", void 0);
    return PostDeleteAccountPasswordPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAccountPasswordPolicyResponse = PostDeleteAccountPasswordPolicyResponse;
