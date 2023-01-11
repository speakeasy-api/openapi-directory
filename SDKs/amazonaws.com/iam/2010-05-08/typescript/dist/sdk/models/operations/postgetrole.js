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
exports.PostGetRoleResponse = exports.PostGetRoleRequest = exports.PostGetRoleHeaders = exports.PostGetRoleQueryParams = exports.PostGetRoleVersionEnum = exports.PostGetRoleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetRoleActionEnum;
(function (PostGetRoleActionEnum) {
    PostGetRoleActionEnum["GetRole"] = "GetRole";
})(PostGetRoleActionEnum = exports.PostGetRoleActionEnum || (exports.PostGetRoleActionEnum = {}));
var PostGetRoleVersionEnum;
(function (PostGetRoleVersionEnum) {
    PostGetRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetRoleVersionEnum = exports.PostGetRoleVersionEnum || (exports.PostGetRoleVersionEnum = {}));
var PostGetRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostGetRoleQueryParams, _super);
    function PostGetRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetRoleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetRoleQueryParams.prototype, "version", void 0);
    return PostGetRoleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetRoleQueryParams = PostGetRoleQueryParams;
var PostGetRoleHeaders = /** @class */ (function (_super) {
    __extends(PostGetRoleHeaders, _super);
    function PostGetRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetRoleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetRoleHeaders = PostGetRoleHeaders;
var PostGetRoleRequest = /** @class */ (function (_super) {
    __extends(PostGetRoleRequest, _super);
    function PostGetRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetRoleQueryParams)
    ], PostGetRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetRoleHeaders)
    ], PostGetRoleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetRoleRequest.prototype, "request", void 0);
    return PostGetRoleRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetRoleRequest = PostGetRoleRequest;
var PostGetRoleResponse = /** @class */ (function (_super) {
    __extends(PostGetRoleResponse, _super);
    function PostGetRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetRoleResponse.prototype, "statusCode", void 0);
    return PostGetRoleResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetRoleResponse = PostGetRoleResponse;
