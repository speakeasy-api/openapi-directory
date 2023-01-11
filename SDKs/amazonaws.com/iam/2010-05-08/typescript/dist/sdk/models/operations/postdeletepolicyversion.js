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
exports.PostDeletePolicyVersionResponse = exports.PostDeletePolicyVersionRequest = exports.PostDeletePolicyVersionHeaders = exports.PostDeletePolicyVersionQueryParams = exports.PostDeletePolicyVersionVersionEnum = exports.PostDeletePolicyVersionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeletePolicyVersionActionEnum;
(function (PostDeletePolicyVersionActionEnum) {
    PostDeletePolicyVersionActionEnum["DeletePolicyVersion"] = "DeletePolicyVersion";
})(PostDeletePolicyVersionActionEnum = exports.PostDeletePolicyVersionActionEnum || (exports.PostDeletePolicyVersionActionEnum = {}));
var PostDeletePolicyVersionVersionEnum;
(function (PostDeletePolicyVersionVersionEnum) {
    PostDeletePolicyVersionVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeletePolicyVersionVersionEnum = exports.PostDeletePolicyVersionVersionEnum || (exports.PostDeletePolicyVersionVersionEnum = {}));
var PostDeletePolicyVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostDeletePolicyVersionQueryParams, _super);
    function PostDeletePolicyVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionQueryParams.prototype, "version", void 0);
    return PostDeletePolicyVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeletePolicyVersionQueryParams = PostDeletePolicyVersionQueryParams;
var PostDeletePolicyVersionHeaders = /** @class */ (function (_super) {
    __extends(PostDeletePolicyVersionHeaders, _super);
    function PostDeletePolicyVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeletePolicyVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeletePolicyVersionHeaders = PostDeletePolicyVersionHeaders;
var PostDeletePolicyVersionRequest = /** @class */ (function (_super) {
    __extends(PostDeletePolicyVersionRequest, _super);
    function PostDeletePolicyVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeletePolicyVersionQueryParams)
    ], PostDeletePolicyVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeletePolicyVersionHeaders)
    ], PostDeletePolicyVersionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeletePolicyVersionRequest.prototype, "request", void 0);
    return PostDeletePolicyVersionRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeletePolicyVersionRequest = PostDeletePolicyVersionRequest;
var PostDeletePolicyVersionResponse = /** @class */ (function (_super) {
    __extends(PostDeletePolicyVersionResponse, _super);
    function PostDeletePolicyVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeletePolicyVersionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeletePolicyVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeletePolicyVersionResponse.prototype, "statusCode", void 0);
    return PostDeletePolicyVersionResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeletePolicyVersionResponse = PostDeletePolicyVersionResponse;
