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
exports.PostModifyClusterIamRolesResponse = exports.PostModifyClusterIamRolesRequest = exports.PostModifyClusterIamRolesHeaders = exports.PostModifyClusterIamRolesQueryParams = exports.PostModifyClusterIamRolesVersionEnum = exports.PostModifyClusterIamRolesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyClusterIamRolesActionEnum;
(function (PostModifyClusterIamRolesActionEnum) {
    PostModifyClusterIamRolesActionEnum["ModifyClusterIamRoles"] = "ModifyClusterIamRoles";
})(PostModifyClusterIamRolesActionEnum = exports.PostModifyClusterIamRolesActionEnum || (exports.PostModifyClusterIamRolesActionEnum = {}));
var PostModifyClusterIamRolesVersionEnum;
(function (PostModifyClusterIamRolesVersionEnum) {
    PostModifyClusterIamRolesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyClusterIamRolesVersionEnum = exports.PostModifyClusterIamRolesVersionEnum || (exports.PostModifyClusterIamRolesVersionEnum = {}));
var PostModifyClusterIamRolesQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyClusterIamRolesQueryParams, _super);
    function PostModifyClusterIamRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesQueryParams.prototype, "version", void 0);
    return PostModifyClusterIamRolesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterIamRolesQueryParams = PostModifyClusterIamRolesQueryParams;
var PostModifyClusterIamRolesHeaders = /** @class */ (function (_super) {
    __extends(PostModifyClusterIamRolesHeaders, _super);
    function PostModifyClusterIamRolesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyClusterIamRolesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterIamRolesHeaders = PostModifyClusterIamRolesHeaders;
var PostModifyClusterIamRolesRequest = /** @class */ (function (_super) {
    __extends(PostModifyClusterIamRolesRequest, _super);
    function PostModifyClusterIamRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyClusterIamRolesQueryParams)
    ], PostModifyClusterIamRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyClusterIamRolesHeaders)
    ], PostModifyClusterIamRolesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterIamRolesRequest.prototype, "request", void 0);
    return PostModifyClusterIamRolesRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterIamRolesRequest = PostModifyClusterIamRolesRequest;
var PostModifyClusterIamRolesResponse = /** @class */ (function (_super) {
    __extends(PostModifyClusterIamRolesResponse, _super);
    function PostModifyClusterIamRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterIamRolesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyClusterIamRolesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyClusterIamRolesResponse.prototype, "statusCode", void 0);
    return PostModifyClusterIamRolesResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterIamRolesResponse = PostModifyClusterIamRolesResponse;
