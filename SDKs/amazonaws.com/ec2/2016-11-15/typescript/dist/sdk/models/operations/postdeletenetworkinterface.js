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
exports.PostDeleteNetworkInterfaceResponse = exports.PostDeleteNetworkInterfaceRequest = exports.PostDeleteNetworkInterfaceHeaders = exports.PostDeleteNetworkInterfaceQueryParams = exports.PostDeleteNetworkInterfaceVersionEnum = exports.PostDeleteNetworkInterfaceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteNetworkInterfaceActionEnum;
(function (PostDeleteNetworkInterfaceActionEnum) {
    PostDeleteNetworkInterfaceActionEnum["DeleteNetworkInterface"] = "DeleteNetworkInterface";
})(PostDeleteNetworkInterfaceActionEnum = exports.PostDeleteNetworkInterfaceActionEnum || (exports.PostDeleteNetworkInterfaceActionEnum = {}));
var PostDeleteNetworkInterfaceVersionEnum;
(function (PostDeleteNetworkInterfaceVersionEnum) {
    PostDeleteNetworkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteNetworkInterfaceVersionEnum = exports.PostDeleteNetworkInterfaceVersionEnum || (exports.PostDeleteNetworkInterfaceVersionEnum = {}));
var PostDeleteNetworkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkInterfaceQueryParams, _super);
    function PostDeleteNetworkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceQueryParams.prototype, "version", void 0);
    return PostDeleteNetworkInterfaceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteNetworkInterfaceQueryParams = PostDeleteNetworkInterfaceQueryParams;
var PostDeleteNetworkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkInterfaceHeaders, _super);
    function PostDeleteNetworkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteNetworkInterfaceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteNetworkInterfaceHeaders = PostDeleteNetworkInterfaceHeaders;
var PostDeleteNetworkInterfaceRequest = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkInterfaceRequest, _super);
    function PostDeleteNetworkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteNetworkInterfaceQueryParams)
    ], PostDeleteNetworkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteNetworkInterfaceHeaders)
    ], PostDeleteNetworkInterfaceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteNetworkInterfaceRequest.prototype, "request", void 0);
    return PostDeleteNetworkInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteNetworkInterfaceRequest = PostDeleteNetworkInterfaceRequest;
var PostDeleteNetworkInterfaceResponse = /** @class */ (function (_super) {
    __extends(PostDeleteNetworkInterfaceResponse, _super);
    function PostDeleteNetworkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteNetworkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteNetworkInterfaceResponse.prototype, "statusCode", void 0);
    return PostDeleteNetworkInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteNetworkInterfaceResponse = PostDeleteNetworkInterfaceResponse;
