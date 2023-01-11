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
exports.PostDeleteRolePolicyResponse = exports.PostDeleteRolePolicyRequest = exports.PostDeleteRolePolicyHeaders = exports.PostDeleteRolePolicyQueryParams = exports.PostDeleteRolePolicyVersionEnum = exports.PostDeleteRolePolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteRolePolicyActionEnum;
(function (PostDeleteRolePolicyActionEnum) {
    PostDeleteRolePolicyActionEnum["DeleteRolePolicy"] = "DeleteRolePolicy";
})(PostDeleteRolePolicyActionEnum = exports.PostDeleteRolePolicyActionEnum || (exports.PostDeleteRolePolicyActionEnum = {}));
var PostDeleteRolePolicyVersionEnum;
(function (PostDeleteRolePolicyVersionEnum) {
    PostDeleteRolePolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteRolePolicyVersionEnum = exports.PostDeleteRolePolicyVersionEnum || (exports.PostDeleteRolePolicyVersionEnum = {}));
var PostDeleteRolePolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteRolePolicyQueryParams, _super);
    function PostDeleteRolePolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyQueryParams.prototype, "version", void 0);
    return PostDeleteRolePolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRolePolicyQueryParams = PostDeleteRolePolicyQueryParams;
var PostDeleteRolePolicyHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteRolePolicyHeaders, _super);
    function PostDeleteRolePolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteRolePolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRolePolicyHeaders = PostDeleteRolePolicyHeaders;
var PostDeleteRolePolicyRequest = /** @class */ (function (_super) {
    __extends(PostDeleteRolePolicyRequest, _super);
    function PostDeleteRolePolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteRolePolicyQueryParams)
    ], PostDeleteRolePolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteRolePolicyHeaders)
    ], PostDeleteRolePolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRolePolicyRequest.prototype, "request", void 0);
    return PostDeleteRolePolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRolePolicyRequest = PostDeleteRolePolicyRequest;
var PostDeleteRolePolicyResponse = /** @class */ (function (_super) {
    __extends(PostDeleteRolePolicyResponse, _super);
    function PostDeleteRolePolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRolePolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteRolePolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteRolePolicyResponse.prototype, "statusCode", void 0);
    return PostDeleteRolePolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRolePolicyResponse = PostDeleteRolePolicyResponse;
