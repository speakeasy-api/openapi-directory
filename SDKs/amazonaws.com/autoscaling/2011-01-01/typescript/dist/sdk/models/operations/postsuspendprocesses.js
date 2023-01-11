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
exports.PostSuspendProcessesResponse = exports.PostSuspendProcessesRequest = exports.PostSuspendProcessesHeaders = exports.PostSuspendProcessesQueryParams = exports.PostSuspendProcessesVersionEnum = exports.PostSuspendProcessesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSuspendProcessesActionEnum;
(function (PostSuspendProcessesActionEnum) {
    PostSuspendProcessesActionEnum["SuspendProcesses"] = "SuspendProcesses";
})(PostSuspendProcessesActionEnum = exports.PostSuspendProcessesActionEnum || (exports.PostSuspendProcessesActionEnum = {}));
var PostSuspendProcessesVersionEnum;
(function (PostSuspendProcessesVersionEnum) {
    PostSuspendProcessesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostSuspendProcessesVersionEnum = exports.PostSuspendProcessesVersionEnum || (exports.PostSuspendProcessesVersionEnum = {}));
var PostSuspendProcessesQueryParams = /** @class */ (function (_super) {
    __extends(PostSuspendProcessesQueryParams, _super);
    function PostSuspendProcessesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesQueryParams.prototype, "version", void 0);
    return PostSuspendProcessesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSuspendProcessesQueryParams = PostSuspendProcessesQueryParams;
var PostSuspendProcessesHeaders = /** @class */ (function (_super) {
    __extends(PostSuspendProcessesHeaders, _super);
    function PostSuspendProcessesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSuspendProcessesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSuspendProcessesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostSuspendProcessesHeaders = PostSuspendProcessesHeaders;
var PostSuspendProcessesRequest = /** @class */ (function (_super) {
    __extends(PostSuspendProcessesRequest, _super);
    function PostSuspendProcessesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSuspendProcessesQueryParams)
    ], PostSuspendProcessesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSuspendProcessesHeaders)
    ], PostSuspendProcessesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSuspendProcessesRequest.prototype, "request", void 0);
    return PostSuspendProcessesRequest;
}(utils_1.SpeakeasyBase));
exports.PostSuspendProcessesRequest = PostSuspendProcessesRequest;
var PostSuspendProcessesResponse = /** @class */ (function (_super) {
    __extends(PostSuspendProcessesResponse, _super);
    function PostSuspendProcessesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSuspendProcessesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSuspendProcessesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSuspendProcessesResponse.prototype, "statusCode", void 0);
    return PostSuspendProcessesResponse;
}(utils_1.SpeakeasyBase));
exports.PostSuspendProcessesResponse = PostSuspendProcessesResponse;
