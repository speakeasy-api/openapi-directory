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
exports.PostDeleteCacheSecurityGroupResponse = exports.PostDeleteCacheSecurityGroupRequest = exports.PostDeleteCacheSecurityGroupHeaders = exports.PostDeleteCacheSecurityGroupQueryParams = exports.PostDeleteCacheSecurityGroupVersionEnum = exports.PostDeleteCacheSecurityGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteCacheSecurityGroupActionEnum;
(function (PostDeleteCacheSecurityGroupActionEnum) {
    PostDeleteCacheSecurityGroupActionEnum["DeleteCacheSecurityGroup"] = "DeleteCacheSecurityGroup";
})(PostDeleteCacheSecurityGroupActionEnum = exports.PostDeleteCacheSecurityGroupActionEnum || (exports.PostDeleteCacheSecurityGroupActionEnum = {}));
var PostDeleteCacheSecurityGroupVersionEnum;
(function (PostDeleteCacheSecurityGroupVersionEnum) {
    PostDeleteCacheSecurityGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDeleteCacheSecurityGroupVersionEnum = exports.PostDeleteCacheSecurityGroupVersionEnum || (exports.PostDeleteCacheSecurityGroupVersionEnum = {}));
var PostDeleteCacheSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteCacheSecurityGroupQueryParams, _super);
    function PostDeleteCacheSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupQueryParams.prototype, "version", void 0);
    return PostDeleteCacheSecurityGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteCacheSecurityGroupQueryParams = PostDeleteCacheSecurityGroupQueryParams;
var PostDeleteCacheSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteCacheSecurityGroupHeaders, _super);
    function PostDeleteCacheSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteCacheSecurityGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteCacheSecurityGroupHeaders = PostDeleteCacheSecurityGroupHeaders;
var PostDeleteCacheSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteCacheSecurityGroupRequest, _super);
    function PostDeleteCacheSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteCacheSecurityGroupQueryParams)
    ], PostDeleteCacheSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteCacheSecurityGroupHeaders)
    ], PostDeleteCacheSecurityGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteCacheSecurityGroupRequest.prototype, "request", void 0);
    return PostDeleteCacheSecurityGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteCacheSecurityGroupRequest = PostDeleteCacheSecurityGroupRequest;
var PostDeleteCacheSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteCacheSecurityGroupResponse, _super);
    function PostDeleteCacheSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteCacheSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteCacheSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteCacheSecurityGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteCacheSecurityGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteCacheSecurityGroupResponse = PostDeleteCacheSecurityGroupResponse;
