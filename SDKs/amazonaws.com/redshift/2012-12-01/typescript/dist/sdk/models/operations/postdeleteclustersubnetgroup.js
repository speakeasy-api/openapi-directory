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
exports.PostDeleteClusterSubnetGroupResponse = exports.PostDeleteClusterSubnetGroupRequest = exports.PostDeleteClusterSubnetGroupHeaders = exports.PostDeleteClusterSubnetGroupQueryParams = exports.PostDeleteClusterSubnetGroupVersionEnum = exports.PostDeleteClusterSubnetGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteClusterSubnetGroupActionEnum;
(function (PostDeleteClusterSubnetGroupActionEnum) {
    PostDeleteClusterSubnetGroupActionEnum["DeleteClusterSubnetGroup"] = "DeleteClusterSubnetGroup";
})(PostDeleteClusterSubnetGroupActionEnum = exports.PostDeleteClusterSubnetGroupActionEnum || (exports.PostDeleteClusterSubnetGroupActionEnum = {}));
var PostDeleteClusterSubnetGroupVersionEnum;
(function (PostDeleteClusterSubnetGroupVersionEnum) {
    PostDeleteClusterSubnetGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDeleteClusterSubnetGroupVersionEnum = exports.PostDeleteClusterSubnetGroupVersionEnum || (exports.PostDeleteClusterSubnetGroupVersionEnum = {}));
var PostDeleteClusterSubnetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteClusterSubnetGroupQueryParams, _super);
    function PostDeleteClusterSubnetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupQueryParams.prototype, "version", void 0);
    return PostDeleteClusterSubnetGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClusterSubnetGroupQueryParams = PostDeleteClusterSubnetGroupQueryParams;
var PostDeleteClusterSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteClusterSubnetGroupHeaders, _super);
    function PostDeleteClusterSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteClusterSubnetGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClusterSubnetGroupHeaders = PostDeleteClusterSubnetGroupHeaders;
var PostDeleteClusterSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteClusterSubnetGroupRequest, _super);
    function PostDeleteClusterSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteClusterSubnetGroupQueryParams)
    ], PostDeleteClusterSubnetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteClusterSubnetGroupHeaders)
    ], PostDeleteClusterSubnetGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteClusterSubnetGroupRequest.prototype, "request", void 0);
    return PostDeleteClusterSubnetGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClusterSubnetGroupRequest = PostDeleteClusterSubnetGroupRequest;
var PostDeleteClusterSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteClusterSubnetGroupResponse, _super);
    function PostDeleteClusterSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteClusterSubnetGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteClusterSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteClusterSubnetGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteClusterSubnetGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClusterSubnetGroupResponse = PostDeleteClusterSubnetGroupResponse;
