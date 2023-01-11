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
exports.PostDeleteClientVpnRouteResponse = exports.PostDeleteClientVpnRouteRequest = exports.PostDeleteClientVpnRouteHeaders = exports.PostDeleteClientVpnRouteQueryParams = exports.PostDeleteClientVpnRouteVersionEnum = exports.PostDeleteClientVpnRouteActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteClientVpnRouteActionEnum;
(function (PostDeleteClientVpnRouteActionEnum) {
    PostDeleteClientVpnRouteActionEnum["DeleteClientVpnRoute"] = "DeleteClientVpnRoute";
})(PostDeleteClientVpnRouteActionEnum = exports.PostDeleteClientVpnRouteActionEnum || (exports.PostDeleteClientVpnRouteActionEnum = {}));
var PostDeleteClientVpnRouteVersionEnum;
(function (PostDeleteClientVpnRouteVersionEnum) {
    PostDeleteClientVpnRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteClientVpnRouteVersionEnum = exports.PostDeleteClientVpnRouteVersionEnum || (exports.PostDeleteClientVpnRouteVersionEnum = {}));
var PostDeleteClientVpnRouteQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteClientVpnRouteQueryParams, _super);
    function PostDeleteClientVpnRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteQueryParams.prototype, "version", void 0);
    return PostDeleteClientVpnRouteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClientVpnRouteQueryParams = PostDeleteClientVpnRouteQueryParams;
var PostDeleteClientVpnRouteHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteClientVpnRouteHeaders, _super);
    function PostDeleteClientVpnRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteClientVpnRouteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClientVpnRouteHeaders = PostDeleteClientVpnRouteHeaders;
var PostDeleteClientVpnRouteRequest = /** @class */ (function (_super) {
    __extends(PostDeleteClientVpnRouteRequest, _super);
    function PostDeleteClientVpnRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteClientVpnRouteQueryParams)
    ], PostDeleteClientVpnRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteClientVpnRouteHeaders)
    ], PostDeleteClientVpnRouteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteClientVpnRouteRequest.prototype, "request", void 0);
    return PostDeleteClientVpnRouteRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClientVpnRouteRequest = PostDeleteClientVpnRouteRequest;
var PostDeleteClientVpnRouteResponse = /** @class */ (function (_super) {
    __extends(PostDeleteClientVpnRouteResponse, _super);
    function PostDeleteClientVpnRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteClientVpnRouteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteClientVpnRouteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteClientVpnRouteResponse.prototype, "statusCode", void 0);
    return PostDeleteClientVpnRouteResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteClientVpnRouteResponse = PostDeleteClientVpnRouteResponse;
