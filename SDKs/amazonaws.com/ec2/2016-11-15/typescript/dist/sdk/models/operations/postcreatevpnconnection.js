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
exports.PostCreateVpnConnectionResponse = exports.PostCreateVpnConnectionRequest = exports.PostCreateVpnConnectionHeaders = exports.PostCreateVpnConnectionQueryParams = exports.PostCreateVpnConnectionVersionEnum = exports.PostCreateVpnConnectionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateVpnConnectionActionEnum;
(function (PostCreateVpnConnectionActionEnum) {
    PostCreateVpnConnectionActionEnum["CreateVpnConnection"] = "CreateVpnConnection";
})(PostCreateVpnConnectionActionEnum = exports.PostCreateVpnConnectionActionEnum || (exports.PostCreateVpnConnectionActionEnum = {}));
var PostCreateVpnConnectionVersionEnum;
(function (PostCreateVpnConnectionVersionEnum) {
    PostCreateVpnConnectionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateVpnConnectionVersionEnum = exports.PostCreateVpnConnectionVersionEnum || (exports.PostCreateVpnConnectionVersionEnum = {}));
var PostCreateVpnConnectionQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionQueryParams, _super);
    function PostCreateVpnConnectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionQueryParams.prototype, "version", void 0);
    return PostCreateVpnConnectionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionQueryParams = PostCreateVpnConnectionQueryParams;
var PostCreateVpnConnectionHeaders = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionHeaders, _super);
    function PostCreateVpnConnectionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateVpnConnectionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionHeaders = PostCreateVpnConnectionHeaders;
var PostCreateVpnConnectionRequest = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionRequest, _super);
    function PostCreateVpnConnectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateVpnConnectionQueryParams)
    ], PostCreateVpnConnectionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateVpnConnectionHeaders)
    ], PostCreateVpnConnectionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpnConnectionRequest.prototype, "request", void 0);
    return PostCreateVpnConnectionRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionRequest = PostCreateVpnConnectionRequest;
var PostCreateVpnConnectionResponse = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionResponse, _super);
    function PostCreateVpnConnectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpnConnectionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateVpnConnectionResponse.prototype, "statusCode", void 0);
    return PostCreateVpnConnectionResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionResponse = PostCreateVpnConnectionResponse;
