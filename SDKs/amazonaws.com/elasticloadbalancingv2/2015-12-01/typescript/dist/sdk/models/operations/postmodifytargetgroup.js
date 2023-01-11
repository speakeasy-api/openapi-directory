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
exports.PostModifyTargetGroupResponse = exports.PostModifyTargetGroupRequest = exports.PostModifyTargetGroupHeaders = exports.PostModifyTargetGroupQueryParams = exports.PostModifyTargetGroupVersionEnum = exports.PostModifyTargetGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyTargetGroupActionEnum;
(function (PostModifyTargetGroupActionEnum) {
    PostModifyTargetGroupActionEnum["ModifyTargetGroup"] = "ModifyTargetGroup";
})(PostModifyTargetGroupActionEnum = exports.PostModifyTargetGroupActionEnum || (exports.PostModifyTargetGroupActionEnum = {}));
var PostModifyTargetGroupVersionEnum;
(function (PostModifyTargetGroupVersionEnum) {
    PostModifyTargetGroupVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostModifyTargetGroupVersionEnum = exports.PostModifyTargetGroupVersionEnum || (exports.PostModifyTargetGroupVersionEnum = {}));
var PostModifyTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyTargetGroupQueryParams, _super);
    function PostModifyTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupQueryParams.prototype, "version", void 0);
    return PostModifyTargetGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyTargetGroupQueryParams = PostModifyTargetGroupQueryParams;
var PostModifyTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyTargetGroupHeaders, _super);
    function PostModifyTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyTargetGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyTargetGroupHeaders = PostModifyTargetGroupHeaders;
var PostModifyTargetGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyTargetGroupRequest, _super);
    function PostModifyTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyTargetGroupQueryParams)
    ], PostModifyTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyTargetGroupHeaders)
    ], PostModifyTargetGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyTargetGroupRequest.prototype, "request", void 0);
    return PostModifyTargetGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyTargetGroupRequest = PostModifyTargetGroupRequest;
var PostModifyTargetGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyTargetGroupResponse, _super);
    function PostModifyTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyTargetGroupResponse.prototype, "statusCode", void 0);
    return PostModifyTargetGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyTargetGroupResponse = PostModifyTargetGroupResponse;
