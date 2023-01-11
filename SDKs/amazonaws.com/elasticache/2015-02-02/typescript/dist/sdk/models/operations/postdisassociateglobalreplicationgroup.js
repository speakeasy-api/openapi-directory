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
exports.PostDisassociateGlobalReplicationGroupResponse = exports.PostDisassociateGlobalReplicationGroupRequest = exports.PostDisassociateGlobalReplicationGroupHeaders = exports.PostDisassociateGlobalReplicationGroupQueryParams = exports.PostDisassociateGlobalReplicationGroupVersionEnum = exports.PostDisassociateGlobalReplicationGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDisassociateGlobalReplicationGroupActionEnum;
(function (PostDisassociateGlobalReplicationGroupActionEnum) {
    PostDisassociateGlobalReplicationGroupActionEnum["DisassociateGlobalReplicationGroup"] = "DisassociateGlobalReplicationGroup";
})(PostDisassociateGlobalReplicationGroupActionEnum = exports.PostDisassociateGlobalReplicationGroupActionEnum || (exports.PostDisassociateGlobalReplicationGroupActionEnum = {}));
var PostDisassociateGlobalReplicationGroupVersionEnum;
(function (PostDisassociateGlobalReplicationGroupVersionEnum) {
    PostDisassociateGlobalReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDisassociateGlobalReplicationGroupVersionEnum = exports.PostDisassociateGlobalReplicationGroupVersionEnum || (exports.PostDisassociateGlobalReplicationGroupVersionEnum = {}));
var PostDisassociateGlobalReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostDisassociateGlobalReplicationGroupQueryParams, _super);
    function PostDisassociateGlobalReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupQueryParams.prototype, "version", void 0);
    return PostDisassociateGlobalReplicationGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateGlobalReplicationGroupQueryParams = PostDisassociateGlobalReplicationGroupQueryParams;
var PostDisassociateGlobalReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostDisassociateGlobalReplicationGroupHeaders, _super);
    function PostDisassociateGlobalReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDisassociateGlobalReplicationGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateGlobalReplicationGroupHeaders = PostDisassociateGlobalReplicationGroupHeaders;
var PostDisassociateGlobalReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostDisassociateGlobalReplicationGroupRequest, _super);
    function PostDisassociateGlobalReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDisassociateGlobalReplicationGroupQueryParams)
    ], PostDisassociateGlobalReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDisassociateGlobalReplicationGroupHeaders)
    ], PostDisassociateGlobalReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateGlobalReplicationGroupRequest.prototype, "request", void 0);
    return PostDisassociateGlobalReplicationGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateGlobalReplicationGroupRequest = PostDisassociateGlobalReplicationGroupRequest;
var PostDisassociateGlobalReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostDisassociateGlobalReplicationGroupResponse, _super);
    function PostDisassociateGlobalReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateGlobalReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDisassociateGlobalReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDisassociateGlobalReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostDisassociateGlobalReplicationGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateGlobalReplicationGroupResponse = PostDisassociateGlobalReplicationGroupResponse;
