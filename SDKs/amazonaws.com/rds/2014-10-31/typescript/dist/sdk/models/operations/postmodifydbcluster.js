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
exports.PostModifyDbClusterResponse = exports.PostModifyDbClusterRequest = exports.PostModifyDbClusterHeaders = exports.PostModifyDbClusterQueryParams = exports.PostModifyDbClusterVersionEnum = exports.PostModifyDbClusterActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyDbClusterActionEnum;
(function (PostModifyDbClusterActionEnum) {
    PostModifyDbClusterActionEnum["ModifyDbCluster"] = "ModifyDBCluster";
})(PostModifyDbClusterActionEnum = exports.PostModifyDbClusterActionEnum || (exports.PostModifyDbClusterActionEnum = {}));
var PostModifyDbClusterVersionEnum;
(function (PostModifyDbClusterVersionEnum) {
    PostModifyDbClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostModifyDbClusterVersionEnum = exports.PostModifyDbClusterVersionEnum || (exports.PostModifyDbClusterVersionEnum = {}));
var PostModifyDbClusterQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterQueryParams, _super);
    function PostModifyDbClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterQueryParams.prototype, "version", void 0);
    return PostModifyDbClusterQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyDbClusterQueryParams = PostModifyDbClusterQueryParams;
var PostModifyDbClusterHeaders = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterHeaders, _super);
    function PostModifyDbClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyDbClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyDbClusterHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyDbClusterHeaders = PostModifyDbClusterHeaders;
var PostModifyDbClusterRequest = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterRequest, _super);
    function PostModifyDbClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyDbClusterQueryParams)
    ], PostModifyDbClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyDbClusterHeaders)
    ], PostModifyDbClusterRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterRequest.prototype, "request", void 0);
    return PostModifyDbClusterRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyDbClusterRequest = PostModifyDbClusterRequest;
var PostModifyDbClusterResponse = /** @class */ (function (_super) {
    __extends(PostModifyDbClusterResponse, _super);
    function PostModifyDbClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyDbClusterResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyDbClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyDbClusterResponse.prototype, "statusCode", void 0);
    return PostModifyDbClusterResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyDbClusterResponse = PostModifyDbClusterResponse;
