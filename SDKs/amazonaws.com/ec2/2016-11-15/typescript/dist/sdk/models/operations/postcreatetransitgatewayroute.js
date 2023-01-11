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
exports.PostCreateTransitGatewayRouteResponse = exports.PostCreateTransitGatewayRouteRequest = exports.PostCreateTransitGatewayRouteHeaders = exports.PostCreateTransitGatewayRouteQueryParams = exports.PostCreateTransitGatewayRouteVersionEnum = exports.PostCreateTransitGatewayRouteActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateTransitGatewayRouteActionEnum;
(function (PostCreateTransitGatewayRouteActionEnum) {
    PostCreateTransitGatewayRouteActionEnum["CreateTransitGatewayRoute"] = "CreateTransitGatewayRoute";
})(PostCreateTransitGatewayRouteActionEnum = exports.PostCreateTransitGatewayRouteActionEnum || (exports.PostCreateTransitGatewayRouteActionEnum = {}));
var PostCreateTransitGatewayRouteVersionEnum;
(function (PostCreateTransitGatewayRouteVersionEnum) {
    PostCreateTransitGatewayRouteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTransitGatewayRouteVersionEnum = exports.PostCreateTransitGatewayRouteVersionEnum || (exports.PostCreateTransitGatewayRouteVersionEnum = {}));
var PostCreateTransitGatewayRouteQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteQueryParams, _super);
    function PostCreateTransitGatewayRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteQueryParams.prototype, "version", void 0);
    return PostCreateTransitGatewayRouteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateTransitGatewayRouteQueryParams = PostCreateTransitGatewayRouteQueryParams;
var PostCreateTransitGatewayRouteHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteHeaders, _super);
    function PostCreateTransitGatewayRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTransitGatewayRouteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateTransitGatewayRouteHeaders = PostCreateTransitGatewayRouteHeaders;
var PostCreateTransitGatewayRouteRequest = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteRequest, _super);
    function PostCreateTransitGatewayRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTransitGatewayRouteQueryParams)
    ], PostCreateTransitGatewayRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTransitGatewayRouteHeaders)
    ], PostCreateTransitGatewayRouteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayRouteRequest.prototype, "request", void 0);
    return PostCreateTransitGatewayRouteRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateTransitGatewayRouteRequest = PostCreateTransitGatewayRouteRequest;
var PostCreateTransitGatewayRouteResponse = /** @class */ (function (_super) {
    __extends(PostCreateTransitGatewayRouteResponse, _super);
    function PostCreateTransitGatewayRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTransitGatewayRouteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateTransitGatewayRouteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateTransitGatewayRouteResponse.prototype, "statusCode", void 0);
    return PostCreateTransitGatewayRouteResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateTransitGatewayRouteResponse = PostCreateTransitGatewayRouteResponse;
