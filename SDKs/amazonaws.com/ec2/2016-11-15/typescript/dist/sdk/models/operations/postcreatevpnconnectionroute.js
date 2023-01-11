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
exports.PostCreateVpnConnectionRouteResponse = exports.PostCreateVpnConnectionRouteRequest = exports.PostCreateVpnConnectionRouteHeaders = exports.PostCreateVpnConnectionRouteQueryParams = exports.PostCreateVpnConnectionRouteVersionEnum = exports.PostCreateVpnConnectionRouteActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateVpnConnectionRouteActionEnum;
(function (PostCreateVpnConnectionRouteActionEnum) {
    PostCreateVpnConnectionRouteActionEnum["CreateVpnConnectionRoute"] = "CreateVpnConnectionRoute";
})(PostCreateVpnConnectionRouteActionEnum = exports.PostCreateVpnConnectionRouteActionEnum || (exports.PostCreateVpnConnectionRouteActionEnum = {}));
var PostCreateVpnConnectionRouteVersionEnum;
(function (PostCreateVpnConnectionRouteVersionEnum) {
    PostCreateVpnConnectionRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateVpnConnectionRouteVersionEnum = exports.PostCreateVpnConnectionRouteVersionEnum || (exports.PostCreateVpnConnectionRouteVersionEnum = {}));
var PostCreateVpnConnectionRouteQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionRouteQueryParams, _super);
    function PostCreateVpnConnectionRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteQueryParams.prototype, "version", void 0);
    return PostCreateVpnConnectionRouteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionRouteQueryParams = PostCreateVpnConnectionRouteQueryParams;
var PostCreateVpnConnectionRouteHeaders = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionRouteHeaders, _super);
    function PostCreateVpnConnectionRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateVpnConnectionRouteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionRouteHeaders = PostCreateVpnConnectionRouteHeaders;
var PostCreateVpnConnectionRouteRequest = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionRouteRequest, _super);
    function PostCreateVpnConnectionRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateVpnConnectionRouteQueryParams)
    ], PostCreateVpnConnectionRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateVpnConnectionRouteHeaders)
    ], PostCreateVpnConnectionRouteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateVpnConnectionRouteRequest.prototype, "request", void 0);
    return PostCreateVpnConnectionRouteRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionRouteRequest = PostCreateVpnConnectionRouteRequest;
var PostCreateVpnConnectionRouteResponse = /** @class */ (function (_super) {
    __extends(PostCreateVpnConnectionRouteResponse, _super);
    function PostCreateVpnConnectionRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateVpnConnectionRouteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateVpnConnectionRouteResponse.prototype, "statusCode", void 0);
    return PostCreateVpnConnectionRouteResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateVpnConnectionRouteResponse = PostCreateVpnConnectionRouteResponse;
