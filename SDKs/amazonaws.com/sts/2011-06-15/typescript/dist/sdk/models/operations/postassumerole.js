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
exports.PostAssumeRoleResponse = exports.PostAssumeRoleRequest = exports.PostAssumeRoleHeaders = exports.PostAssumeRoleQueryParams = exports.PostAssumeRoleVersionEnum = exports.PostAssumeRoleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssumeRoleActionEnum;
(function (PostAssumeRoleActionEnum) {
    PostAssumeRoleActionEnum["AssumeRole"] = "AssumeRole";
})(PostAssumeRoleActionEnum = exports.PostAssumeRoleActionEnum || (exports.PostAssumeRoleActionEnum = {}));
var PostAssumeRoleVersionEnum;
(function (PostAssumeRoleVersionEnum) {
    PostAssumeRoleVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(PostAssumeRoleVersionEnum = exports.PostAssumeRoleVersionEnum || (exports.PostAssumeRoleVersionEnum = {}));
var PostAssumeRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostAssumeRoleQueryParams, _super);
    function PostAssumeRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssumeRoleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssumeRoleQueryParams.prototype, "version", void 0);
    return PostAssumeRoleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAssumeRoleQueryParams = PostAssumeRoleQueryParams;
var PostAssumeRoleHeaders = /** @class */ (function (_super) {
    __extends(PostAssumeRoleHeaders, _super);
    function PostAssumeRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssumeRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssumeRoleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAssumeRoleHeaders = PostAssumeRoleHeaders;
var PostAssumeRoleRequest = /** @class */ (function (_super) {
    __extends(PostAssumeRoleRequest, _super);
    function PostAssumeRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssumeRoleQueryParams)
    ], PostAssumeRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssumeRoleHeaders)
    ], PostAssumeRoleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssumeRoleRequest.prototype, "request", void 0);
    return PostAssumeRoleRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssumeRoleRequest = PostAssumeRoleRequest;
var PostAssumeRoleResponse = /** @class */ (function (_super) {
    __extends(PostAssumeRoleResponse, _super);
    function PostAssumeRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAssumeRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssumeRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssumeRoleResponse.prototype, "statusCode", void 0);
    return PostAssumeRoleResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssumeRoleResponse = PostAssumeRoleResponse;
