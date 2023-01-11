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
exports.PostCreateDbSecurityGroupResponse = exports.PostCreateDbSecurityGroupRequest = exports.PostCreateDbSecurityGroupHeaders = exports.PostCreateDbSecurityGroupQueryParams = exports.PostCreateDbSecurityGroupVersionEnum = exports.PostCreateDbSecurityGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateDbSecurityGroupActionEnum;
(function (PostCreateDbSecurityGroupActionEnum) {
    PostCreateDbSecurityGroupActionEnum["CreateDbSecurityGroup"] = "CreateDBSecurityGroup";
})(PostCreateDbSecurityGroupActionEnum = exports.PostCreateDbSecurityGroupActionEnum || (exports.PostCreateDbSecurityGroupActionEnum = {}));
var PostCreateDbSecurityGroupVersionEnum;
(function (PostCreateDbSecurityGroupVersionEnum) {
    PostCreateDbSecurityGroupVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(PostCreateDbSecurityGroupVersionEnum = exports.PostCreateDbSecurityGroupVersionEnum || (exports.PostCreateDbSecurityGroupVersionEnum = {}));
var PostCreateDbSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateDbSecurityGroupQueryParams, _super);
    function PostCreateDbSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupQueryParams.prototype, "version", void 0);
    return PostCreateDbSecurityGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateDbSecurityGroupQueryParams = PostCreateDbSecurityGroupQueryParams;
var PostCreateDbSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(PostCreateDbSecurityGroupHeaders, _super);
    function PostCreateDbSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateDbSecurityGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateDbSecurityGroupHeaders = PostCreateDbSecurityGroupHeaders;
var PostCreateDbSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(PostCreateDbSecurityGroupRequest, _super);
    function PostCreateDbSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateDbSecurityGroupQueryParams)
    ], PostCreateDbSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateDbSecurityGroupHeaders)
    ], PostCreateDbSecurityGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbSecurityGroupRequest.prototype, "request", void 0);
    return PostCreateDbSecurityGroupRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateDbSecurityGroupRequest = PostCreateDbSecurityGroupRequest;
var PostCreateDbSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(PostCreateDbSecurityGroupResponse, _super);
    function PostCreateDbSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateDbSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateDbSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateDbSecurityGroupResponse.prototype, "statusCode", void 0);
    return PostCreateDbSecurityGroupResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateDbSecurityGroupResponse = PostCreateDbSecurityGroupResponse;
