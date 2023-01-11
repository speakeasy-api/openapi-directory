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
exports.PostCreateTargetGroupResponse = exports.PostCreateTargetGroupRequest = exports.PostCreateTargetGroupHeaders = exports.PostCreateTargetGroupQueryParams = exports.PostCreateTargetGroupVersionEnum = exports.PostCreateTargetGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateTargetGroupActionEnum;
(function (PostCreateTargetGroupActionEnum) {
    PostCreateTargetGroupActionEnum["CreateTargetGroup"] = "CreateTargetGroup";
})(PostCreateTargetGroupActionEnum = exports.PostCreateTargetGroupActionEnum || (exports.PostCreateTargetGroupActionEnum = {}));
var PostCreateTargetGroupVersionEnum;
(function (PostCreateTargetGroupVersionEnum) {
    PostCreateTargetGroupVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostCreateTargetGroupVersionEnum = exports.PostCreateTargetGroupVersionEnum || (exports.PostCreateTargetGroupVersionEnum = {}));
var PostCreateTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTargetGroupQueryParams, _super);
    function PostCreateTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupQueryParams.prototype, "version", void 0);
    return PostCreateTargetGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateTargetGroupQueryParams = PostCreateTargetGroupQueryParams;
var PostCreateTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTargetGroupHeaders, _super);
    function PostCreateTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTargetGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateTargetGroupHeaders = PostCreateTargetGroupHeaders;
var PostCreateTargetGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateTargetGroupRequest, _super);
    function PostCreateTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTargetGroupQueryParams)
    ], PostCreateTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTargetGroupHeaders)
    ], PostCreateTargetGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTargetGroupRequest.prototype, "request", void 0);
    return PostCreateTargetGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateTargetGroupRequest = PostCreateTargetGroupRequest;
var PostCreateTargetGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateTargetGroupResponse, _super);
    function PostCreateTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateTargetGroupResponse.prototype, "statusCode", void 0);
    return PostCreateTargetGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateTargetGroupResponse = PostCreateTargetGroupResponse;
