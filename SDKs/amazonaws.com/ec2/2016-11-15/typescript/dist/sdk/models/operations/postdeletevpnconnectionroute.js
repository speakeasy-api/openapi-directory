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
exports.PostDeleteVpnConnectionRouteResponse = exports.PostDeleteVpnConnectionRouteRequest = exports.PostDeleteVpnConnectionRouteHeaders = exports.PostDeleteVpnConnectionRouteQueryParams = exports.PostDeleteVpnConnectionRouteVersionEnum = exports.PostDeleteVpnConnectionRouteActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteVpnConnectionRouteActionEnum;
(function (PostDeleteVpnConnectionRouteActionEnum) {
    PostDeleteVpnConnectionRouteActionEnum["DeleteVpnConnectionRoute"] = "DeleteVpnConnectionRoute";
})(PostDeleteVpnConnectionRouteActionEnum = exports.PostDeleteVpnConnectionRouteActionEnum || (exports.PostDeleteVpnConnectionRouteActionEnum = {}));
var PostDeleteVpnConnectionRouteVersionEnum;
(function (PostDeleteVpnConnectionRouteVersionEnum) {
    PostDeleteVpnConnectionRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteVpnConnectionRouteVersionEnum = exports.PostDeleteVpnConnectionRouteVersionEnum || (exports.PostDeleteVpnConnectionRouteVersionEnum = {}));
var PostDeleteVpnConnectionRouteQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteVpnConnectionRouteQueryParams, _super);
    function PostDeleteVpnConnectionRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteQueryParams.prototype, "version", void 0);
    return PostDeleteVpnConnectionRouteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpnConnectionRouteQueryParams = PostDeleteVpnConnectionRouteQueryParams;
var PostDeleteVpnConnectionRouteHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteVpnConnectionRouteHeaders, _super);
    function PostDeleteVpnConnectionRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteVpnConnectionRouteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpnConnectionRouteHeaders = PostDeleteVpnConnectionRouteHeaders;
var PostDeleteVpnConnectionRouteRequest = /** @class */ (function (_super) {
    __extends(PostDeleteVpnConnectionRouteRequest, _super);
    function PostDeleteVpnConnectionRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteVpnConnectionRouteQueryParams)
    ], PostDeleteVpnConnectionRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteVpnConnectionRouteHeaders)
    ], PostDeleteVpnConnectionRouteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVpnConnectionRouteRequest.prototype, "request", void 0);
    return PostDeleteVpnConnectionRouteRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpnConnectionRouteRequest = PostDeleteVpnConnectionRouteRequest;
var PostDeleteVpnConnectionRouteResponse = /** @class */ (function (_super) {
    __extends(PostDeleteVpnConnectionRouteResponse, _super);
    function PostDeleteVpnConnectionRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteVpnConnectionRouteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteVpnConnectionRouteResponse.prototype, "statusCode", void 0);
    return PostDeleteVpnConnectionRouteResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpnConnectionRouteResponse = PostDeleteVpnConnectionRouteResponse;
