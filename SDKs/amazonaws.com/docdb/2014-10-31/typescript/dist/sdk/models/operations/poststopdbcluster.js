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
exports.PostStopDbClusterResponse = exports.PostStopDbClusterRequest = exports.PostStopDbClusterHeaders = exports.PostStopDbClusterQueryParams = exports.PostStopDbClusterVersionEnum = exports.PostStopDbClusterActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostStopDbClusterActionEnum;
(function (PostStopDbClusterActionEnum) {
    PostStopDbClusterActionEnum["StopDbCluster"] = "StopDBCluster";
})(PostStopDbClusterActionEnum = exports.PostStopDbClusterActionEnum || (exports.PostStopDbClusterActionEnum = {}));
var PostStopDbClusterVersionEnum;
(function (PostStopDbClusterVersionEnum) {
    PostStopDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostStopDbClusterVersionEnum = exports.PostStopDbClusterVersionEnum || (exports.PostStopDbClusterVersionEnum = {}));
var PostStopDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostStopDbClusterQueryParams, _super);
    function PostStopDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostStopDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostStopDbClusterQueryParams.prototype, "version", void 0);
    return PostStopDbClusterQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostStopDbClusterQueryParams = PostStopDbClusterQueryParams;
var PostStopDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostStopDbClusterHeaders, _super);
    function PostStopDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostStopDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostStopDbClusterHeaders;
}(utils_1.SpeakeasyBase));
exports.PostStopDbClusterHeaders = PostStopDbClusterHeaders;
var PostStopDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostStopDbClusterRequest, _super);
    function PostStopDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostStopDbClusterQueryParams)
    ], PostStopDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostStopDbClusterHeaders)
    ], PostStopDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostStopDbClusterRequest.prototype, "request", void 0);
    return PostStopDbClusterRequest;
}(utils_1.SpeakeasyBase));
exports.PostStopDbClusterRequest = PostStopDbClusterRequest;
var PostStopDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostStopDbClusterResponse, _super);
    function PostStopDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostStopDbClusterResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostStopDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostStopDbClusterResponse.prototype, "statusCode", void 0);
    return PostStopDbClusterResponse;
}(utils_1.SpeakeasyBase));
exports.PostStopDbClusterResponse = PostStopDbClusterResponse;
