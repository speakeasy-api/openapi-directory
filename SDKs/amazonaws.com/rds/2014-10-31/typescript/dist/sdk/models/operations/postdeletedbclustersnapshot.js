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
exports.PostDeleteDbClusterSnapshotResponse = exports.PostDeleteDbClusterSnapshotRequest = exports.PostDeleteDbClusterSnapshotHeaders = exports.PostDeleteDbClusterSnapshotQueryParams = exports.PostDeleteDbClusterSnapshotVersionEnum = exports.PostDeleteDbClusterSnapshotActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteDbClusterSnapshotActionEnum;
(function (PostDeleteDbClusterSnapshotActionEnum) {
    PostDeleteDbClusterSnapshotActionEnum["DeleteDbClusterSnapshot"] = "DeleteDBClusterSnapshot";
})(PostDeleteDbClusterSnapshotActionEnum = exports.PostDeleteDbClusterSnapshotActionEnum || (exports.PostDeleteDbClusterSnapshotActionEnum = {}));
var PostDeleteDbClusterSnapshotVersionEnum;
(function (PostDeleteDbClusterSnapshotVersionEnum) {
    PostDeleteDbClusterSnapshotVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDeleteDbClusterSnapshotVersionEnum = exports.PostDeleteDbClusterSnapshotVersionEnum || (exports.PostDeleteDbClusterSnapshotVersionEnum = {}));
var PostDeleteDbClusterSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterSnapshotQueryParams, _super);
    function PostDeleteDbClusterSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotQueryParams.prototype, "version", void 0);
    return PostDeleteDbClusterSnapshotQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteDbClusterSnapshotQueryParams = PostDeleteDbClusterSnapshotQueryParams;
var PostDeleteDbClusterSnapshotHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterSnapshotHeaders, _super);
    function PostDeleteDbClusterSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteDbClusterSnapshotHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteDbClusterSnapshotHeaders = PostDeleteDbClusterSnapshotHeaders;
var PostDeleteDbClusterSnapshotRequest = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterSnapshotRequest, _super);
    function PostDeleteDbClusterSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteDbClusterSnapshotQueryParams)
    ], PostDeleteDbClusterSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteDbClusterSnapshotHeaders)
    ], PostDeleteDbClusterSnapshotRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbClusterSnapshotRequest.prototype, "request", void 0);
    return PostDeleteDbClusterSnapshotRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteDbClusterSnapshotRequest = PostDeleteDbClusterSnapshotRequest;
var PostDeleteDbClusterSnapshotResponse = /** @class */ (function (_super) {
    __extends(PostDeleteDbClusterSnapshotResponse, _super);
    function PostDeleteDbClusterSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteDbClusterSnapshotResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteDbClusterSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteDbClusterSnapshotResponse.prototype, "statusCode", void 0);
    return PostDeleteDbClusterSnapshotResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteDbClusterSnapshotResponse = PostDeleteDbClusterSnapshotResponse;
