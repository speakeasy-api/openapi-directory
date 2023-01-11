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
exports.PostModifyClusterSubnetGroupResponse = exports.PostModifyClusterSubnetGroupRequest = exports.PostModifyClusterSubnetGroupHeaders = exports.PostModifyClusterSubnetGroupQueryParams = exports.PostModifyClusterSubnetGroupVersionEnum = exports.PostModifyClusterSubnetGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyClusterSubnetGroupActionEnum;
(function (PostModifyClusterSubnetGroupActionEnum) {
    PostModifyClusterSubnetGroupActionEnum["ModifyClusterSubnetGroup"] = "ModifyClusterSubnetGroup";
})(PostModifyClusterSubnetGroupActionEnum = exports.PostModifyClusterSubnetGroupActionEnum || (exports.PostModifyClusterSubnetGroupActionEnum = {}));
var PostModifyClusterSubnetGroupVersionEnum;
(function (PostModifyClusterSubnetGroupVersionEnum) {
    PostModifyClusterSubnetGroupVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyClusterSubnetGroupVersionEnum = exports.PostModifyClusterSubnetGroupVersionEnum || (exports.PostModifyClusterSubnetGroupVersionEnum = {}));
var PostModifyClusterSubnetGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyClusterSubnetGroupQueryParams, _super);
    function PostModifyClusterSubnetGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupQueryParams.prototype, "version", void 0);
    return PostModifyClusterSubnetGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterSubnetGroupQueryParams = PostModifyClusterSubnetGroupQueryParams;
var PostModifyClusterSubnetGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyClusterSubnetGroupHeaders, _super);
    function PostModifyClusterSubnetGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyClusterSubnetGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterSubnetGroupHeaders = PostModifyClusterSubnetGroupHeaders;
var PostModifyClusterSubnetGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyClusterSubnetGroupRequest, _super);
    function PostModifyClusterSubnetGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyClusterSubnetGroupQueryParams)
    ], PostModifyClusterSubnetGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyClusterSubnetGroupHeaders)
    ], PostModifyClusterSubnetGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterSubnetGroupRequest.prototype, "request", void 0);
    return PostModifyClusterSubnetGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterSubnetGroupRequest = PostModifyClusterSubnetGroupRequest;
var PostModifyClusterSubnetGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyClusterSubnetGroupResponse, _super);
    function PostModifyClusterSubnetGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyClusterSubnetGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyClusterSubnetGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyClusterSubnetGroupResponse.prototype, "statusCode", void 0);
    return PostModifyClusterSubnetGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyClusterSubnetGroupResponse = PostModifyClusterSubnetGroupResponse;
