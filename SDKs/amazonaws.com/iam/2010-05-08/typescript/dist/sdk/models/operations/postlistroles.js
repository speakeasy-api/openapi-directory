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
exports.PostListRolesResponse = exports.PostListRolesRequest = exports.PostListRolesHeaders = exports.PostListRolesQueryParams = exports.PostListRolesVersionEnum = exports.PostListRolesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListRolesActionEnum;
(function (PostListRolesActionEnum) {
    PostListRolesActionEnum["ListRoles"] = "ListRoles";
})(PostListRolesActionEnum = exports.PostListRolesActionEnum || (exports.PostListRolesActionEnum = {}));
var PostListRolesVersionEnum;
(function (PostListRolesVersionEnum) {
    PostListRolesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListRolesVersionEnum = exports.PostListRolesVersionEnum || (exports.PostListRolesVersionEnum = {}));
var PostListRolesQueryParams = /** @class */ (function (_super) {
    __extends(PostListRolesQueryParams, _super);
    function PostListRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListRolesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListRolesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListRolesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListRolesQueryParams.prototype, "version", void 0);
    return PostListRolesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListRolesQueryParams = PostListRolesQueryParams;
var PostListRolesHeaders = /** @class */ (function (_super) {
    __extends(PostListRolesHeaders, _super);
    function PostListRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListRolesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListRolesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListRolesHeaders = PostListRolesHeaders;
var PostListRolesRequest = /** @class */ (function (_super) {
    __extends(PostListRolesRequest, _super);
    function PostListRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListRolesQueryParams)
    ], PostListRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListRolesHeaders)
    ], PostListRolesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListRolesRequest.prototype, "request", void 0);
    return PostListRolesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListRolesRequest = PostListRolesRequest;
var PostListRolesResponse = /** @class */ (function (_super) {
    __extends(PostListRolesResponse, _super);
    function PostListRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListRolesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListRolesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListRolesResponse.prototype, "statusCode", void 0);
    return PostListRolesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListRolesResponse = PostListRolesResponse;
