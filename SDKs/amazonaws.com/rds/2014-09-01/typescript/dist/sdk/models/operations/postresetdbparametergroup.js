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
exports.PostResetDbParameterGroupResponse = exports.PostResetDbParameterGroupRequest = exports.PostResetDbParameterGroupHeaders = exports.PostResetDbParameterGroupQueryParams = exports.PostResetDbParameterGroupVersionEnum = exports.PostResetDbParameterGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostResetDbParameterGroupActionEnum;
(function (PostResetDbParameterGroupActionEnum) {
    PostResetDbParameterGroupActionEnum["ResetDbParameterGroup"] = "ResetDBParameterGroup";
})(PostResetDbParameterGroupActionEnum = exports.PostResetDbParameterGroupActionEnum || (exports.PostResetDbParameterGroupActionEnum = {}));
var PostResetDbParameterGroupVersionEnum;
(function (PostResetDbParameterGroupVersionEnum) {
    PostResetDbParameterGroupVersionEnum["TwoThousandAndFourteen0901"] = "2014-09-01";
})(PostResetDbParameterGroupVersionEnum = exports.PostResetDbParameterGroupVersionEnum || (exports.PostResetDbParameterGroupVersionEnum = {}));
var PostResetDbParameterGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostResetDbParameterGroupQueryParams, _super);
    function PostResetDbParameterGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupQueryParams.prototype, "version", void 0);
    return PostResetDbParameterGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostResetDbParameterGroupQueryParams = PostResetDbParameterGroupQueryParams;
var PostResetDbParameterGroupHeaders = /** @class */ (function (_super) {
    __extends(PostResetDbParameterGroupHeaders, _super);
    function PostResetDbParameterGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostResetDbParameterGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostResetDbParameterGroupHeaders = PostResetDbParameterGroupHeaders;
var PostResetDbParameterGroupRequest = /** @class */ (function (_super) {
    __extends(PostResetDbParameterGroupRequest, _super);
    function PostResetDbParameterGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostResetDbParameterGroupQueryParams)
    ], PostResetDbParameterGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostResetDbParameterGroupHeaders)
    ], PostResetDbParameterGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostResetDbParameterGroupRequest.prototype, "request", void 0);
    return PostResetDbParameterGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostResetDbParameterGroupRequest = PostResetDbParameterGroupRequest;
var PostResetDbParameterGroupResponse = /** @class */ (function (_super) {
    __extends(PostResetDbParameterGroupResponse, _super);
    function PostResetDbParameterGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostResetDbParameterGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostResetDbParameterGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostResetDbParameterGroupResponse.prototype, "statusCode", void 0);
    return PostResetDbParameterGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostResetDbParameterGroupResponse = PostResetDbParameterGroupResponse;
