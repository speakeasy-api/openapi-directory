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
exports.PostBatchDeleteClusterSnapshotsResponse = exports.PostBatchDeleteClusterSnapshotsRequest = exports.PostBatchDeleteClusterSnapshotsHeaders = exports.PostBatchDeleteClusterSnapshotsQueryParams = exports.PostBatchDeleteClusterSnapshotsVersionEnum = exports.PostBatchDeleteClusterSnapshotsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostBatchDeleteClusterSnapshotsActionEnum;
(function (PostBatchDeleteClusterSnapshotsActionEnum) {
    PostBatchDeleteClusterSnapshotsActionEnum["BatchDeleteClusterSnapshots"] = "BatchDeleteClusterSnapshots";
})(PostBatchDeleteClusterSnapshotsActionEnum = exports.PostBatchDeleteClusterSnapshotsActionEnum || (exports.PostBatchDeleteClusterSnapshotsActionEnum = {}));
var PostBatchDeleteClusterSnapshotsVersionEnum;
(function (PostBatchDeleteClusterSnapshotsVersionEnum) {
    PostBatchDeleteClusterSnapshotsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostBatchDeleteClusterSnapshotsVersionEnum = exports.PostBatchDeleteClusterSnapshotsVersionEnum || (exports.PostBatchDeleteClusterSnapshotsVersionEnum = {}));
var PostBatchDeleteClusterSnapshotsQueryParams = /** @class */ (function (_super) {
    __extends(PostBatchDeleteClusterSnapshotsQueryParams, _super);
    function PostBatchDeleteClusterSnapshotsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsQueryParams.prototype, "version", void 0);
    return PostBatchDeleteClusterSnapshotsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostBatchDeleteClusterSnapshotsQueryParams = PostBatchDeleteClusterSnapshotsQueryParams;
var PostBatchDeleteClusterSnapshotsHeaders = /** @class */ (function (_super) {
    __extends(PostBatchDeleteClusterSnapshotsHeaders, _super);
    function PostBatchDeleteClusterSnapshotsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostBatchDeleteClusterSnapshotsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostBatchDeleteClusterSnapshotsHeaders = PostBatchDeleteClusterSnapshotsHeaders;
var PostBatchDeleteClusterSnapshotsRequest = /** @class */ (function (_super) {
    __extends(PostBatchDeleteClusterSnapshotsRequest, _super);
    function PostBatchDeleteClusterSnapshotsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBatchDeleteClusterSnapshotsQueryParams)
    ], PostBatchDeleteClusterSnapshotsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBatchDeleteClusterSnapshotsHeaders)
    ], PostBatchDeleteClusterSnapshotsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBatchDeleteClusterSnapshotsRequest.prototype, "request", void 0);
    return PostBatchDeleteClusterSnapshotsRequest;
}(utils_1.SpeakeasyBase));
exports.PostBatchDeleteClusterSnapshotsRequest = PostBatchDeleteClusterSnapshotsRequest;
var PostBatchDeleteClusterSnapshotsResponse = /** @class */ (function (_super) {
    __extends(PostBatchDeleteClusterSnapshotsResponse, _super);
    function PostBatchDeleteClusterSnapshotsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostBatchDeleteClusterSnapshotsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostBatchDeleteClusterSnapshotsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostBatchDeleteClusterSnapshotsResponse.prototype, "statusCode", void 0);
    return PostBatchDeleteClusterSnapshotsResponse;
}(utils_1.SpeakeasyBase));
exports.PostBatchDeleteClusterSnapshotsResponse = PostBatchDeleteClusterSnapshotsResponse;
