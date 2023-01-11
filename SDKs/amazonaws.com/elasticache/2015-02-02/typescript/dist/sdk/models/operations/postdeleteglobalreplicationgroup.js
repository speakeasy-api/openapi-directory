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
exports.PostDeleteGlobalReplicationGroupResponse = exports.PostDeleteGlobalReplicationGroupRequest = exports.PostDeleteGlobalReplicationGroupHeaders = exports.PostDeleteGlobalReplicationGroupQueryParams = exports.PostDeleteGlobalReplicationGroupVersionEnum = exports.PostDeleteGlobalReplicationGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteGlobalReplicationGroupActionEnum;
(function (PostDeleteGlobalReplicationGroupActionEnum) {
    PostDeleteGlobalReplicationGroupActionEnum["DeleteGlobalReplicationGroup"] = "DeleteGlobalReplicationGroup";
})(PostDeleteGlobalReplicationGroupActionEnum = exports.PostDeleteGlobalReplicationGroupActionEnum || (exports.PostDeleteGlobalReplicationGroupActionEnum = {}));
var PostDeleteGlobalReplicationGroupVersionEnum;
(function (PostDeleteGlobalReplicationGroupVersionEnum) {
    PostDeleteGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDeleteGlobalReplicationGroupVersionEnum = exports.PostDeleteGlobalReplicationGroupVersionEnum || (exports.PostDeleteGlobalReplicationGroupVersionEnum = {}));
var PostDeleteGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalReplicationGroupQueryParams, _super);
    function PostDeleteGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return PostDeleteGlobalReplicationGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteGlobalReplicationGroupQueryParams = PostDeleteGlobalReplicationGroupQueryParams;
var PostDeleteGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalReplicationGroupHeaders, _super);
    function PostDeleteGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteGlobalReplicationGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteGlobalReplicationGroupHeaders = PostDeleteGlobalReplicationGroupHeaders;
var PostDeleteGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalReplicationGroupRequest, _super);
    function PostDeleteGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteGlobalReplicationGroupQueryParams)
    ], PostDeleteGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteGlobalReplicationGroupHeaders)
    ], PostDeleteGlobalReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGlobalReplicationGroupRequest.prototype, "request", void 0);
    return PostDeleteGlobalReplicationGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteGlobalReplicationGroupRequest = PostDeleteGlobalReplicationGroupRequest;
var PostDeleteGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostDeleteGlobalReplicationGroupResponse, _super);
    function PostDeleteGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostDeleteGlobalReplicationGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteGlobalReplicationGroupResponse = PostDeleteGlobalReplicationGroupResponse;
