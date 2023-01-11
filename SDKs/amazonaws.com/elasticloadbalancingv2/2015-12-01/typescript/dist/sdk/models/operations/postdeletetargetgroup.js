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
exports.PostDeleteTargetGroupResponse = exports.PostDeleteTargetGroupRequest = exports.PostDeleteTargetGroupHeaders = exports.PostDeleteTargetGroupQueryParams = exports.PostDeleteTargetGroupVersionEnum = exports.PostDeleteTargetGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteTargetGroupActionEnum;
(function (PostDeleteTargetGroupActionEnum) {
    PostDeleteTargetGroupActionEnum["DeleteTargetGroup"] = "DeleteTargetGroup";
})(PostDeleteTargetGroupActionEnum = exports.PostDeleteTargetGroupActionEnum || (exports.PostDeleteTargetGroupActionEnum = {}));
var PostDeleteTargetGroupVersionEnum;
(function (PostDeleteTargetGroupVersionEnum) {
    PostDeleteTargetGroupVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostDeleteTargetGroupVersionEnum = exports.PostDeleteTargetGroupVersionEnum || (exports.PostDeleteTargetGroupVersionEnum = {}));
var PostDeleteTargetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteTargetGroupQueryParams, _super);
    function PostDeleteTargetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupQueryParams.prototype, "version", void 0);
    return PostDeleteTargetGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteTargetGroupQueryParams = PostDeleteTargetGroupQueryParams;
var PostDeleteTargetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteTargetGroupHeaders, _super);
    function PostDeleteTargetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteTargetGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteTargetGroupHeaders = PostDeleteTargetGroupHeaders;
var PostDeleteTargetGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteTargetGroupRequest, _super);
    function PostDeleteTargetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteTargetGroupQueryParams)
    ], PostDeleteTargetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteTargetGroupHeaders)
    ], PostDeleteTargetGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTargetGroupRequest.prototype, "request", void 0);
    return PostDeleteTargetGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteTargetGroupRequest = PostDeleteTargetGroupRequest;
var PostDeleteTargetGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteTargetGroupResponse, _super);
    function PostDeleteTargetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteTargetGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteTargetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteTargetGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteTargetGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteTargetGroupResponse = PostDeleteTargetGroupResponse;
