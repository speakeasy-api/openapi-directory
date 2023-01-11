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
exports.PostModifyReplicationGroupResponse = exports.PostModifyReplicationGroupRequest = exports.PostModifyReplicationGroupHeaders = exports.PostModifyReplicationGroupQueryParams = exports.PostModifyReplicationGroupVersionEnum = exports.PostModifyReplicationGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyReplicationGroupActionEnum;
(function (PostModifyReplicationGroupActionEnum) {
    PostModifyReplicationGroupActionEnum["ModifyReplicationGroup"] = "ModifyReplicationGroup";
})(PostModifyReplicationGroupActionEnum = exports.PostModifyReplicationGroupActionEnum || (exports.PostModifyReplicationGroupActionEnum = {}));
var PostModifyReplicationGroupVersionEnum;
(function (PostModifyReplicationGroupVersionEnum) {
    PostModifyReplicationGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostModifyReplicationGroupVersionEnum = exports.PostModifyReplicationGroupVersionEnum || (exports.PostModifyReplicationGroupVersionEnum = {}));
var PostModifyReplicationGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupQueryParams, _super);
    function PostModifyReplicationGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupQueryParams.prototype, "version", void 0);
    return PostModifyReplicationGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyReplicationGroupQueryParams = PostModifyReplicationGroupQueryParams;
var PostModifyReplicationGroupHeaders = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupHeaders, _super);
    function PostModifyReplicationGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyReplicationGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyReplicationGroupHeaders = PostModifyReplicationGroupHeaders;
var PostModifyReplicationGroupRequest = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupRequest, _super);
    function PostModifyReplicationGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyReplicationGroupQueryParams)
    ], PostModifyReplicationGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyReplicationGroupHeaders)
    ], PostModifyReplicationGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyReplicationGroupRequest.prototype, "request", void 0);
    return PostModifyReplicationGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyReplicationGroupRequest = PostModifyReplicationGroupRequest;
var PostModifyReplicationGroupResponse = /** @class */ (function (_super) {
    __extends(PostModifyReplicationGroupResponse, _super);
    function PostModifyReplicationGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyReplicationGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyReplicationGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyReplicationGroupResponse.prototype, "statusCode", void 0);
    return PostModifyReplicationGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyReplicationGroupResponse = PostModifyReplicationGroupResponse;
