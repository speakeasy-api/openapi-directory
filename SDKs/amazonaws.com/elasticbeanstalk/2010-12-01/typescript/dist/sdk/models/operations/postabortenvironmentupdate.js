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
exports.PostAbortEnvironmentUpdateResponse = exports.PostAbortEnvironmentUpdateRequest = exports.PostAbortEnvironmentUpdateHeaders = exports.PostAbortEnvironmentUpdateQueryParams = exports.PostAbortEnvironmentUpdateVersionEnum = exports.PostAbortEnvironmentUpdateActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAbortEnvironmentUpdateActionEnum;
(function (PostAbortEnvironmentUpdateActionEnum) {
    PostAbortEnvironmentUpdateActionEnum["AbortEnvironmentUpdate"] = "AbortEnvironmentUpdate";
})(PostAbortEnvironmentUpdateActionEnum = exports.PostAbortEnvironmentUpdateActionEnum || (exports.PostAbortEnvironmentUpdateActionEnum = {}));
var PostAbortEnvironmentUpdateVersionEnum;
(function (PostAbortEnvironmentUpdateVersionEnum) {
    PostAbortEnvironmentUpdateVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostAbortEnvironmentUpdateVersionEnum = exports.PostAbortEnvironmentUpdateVersionEnum || (exports.PostAbortEnvironmentUpdateVersionEnum = {}));
var PostAbortEnvironmentUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PostAbortEnvironmentUpdateQueryParams, _super);
    function PostAbortEnvironmentUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateQueryParams.prototype, "version", void 0);
    return PostAbortEnvironmentUpdateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAbortEnvironmentUpdateQueryParams = PostAbortEnvironmentUpdateQueryParams;
var PostAbortEnvironmentUpdateHeaders = /** @class */ (function (_super) {
    __extends(PostAbortEnvironmentUpdateHeaders, _super);
    function PostAbortEnvironmentUpdateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAbortEnvironmentUpdateHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAbortEnvironmentUpdateHeaders = PostAbortEnvironmentUpdateHeaders;
var PostAbortEnvironmentUpdateRequest = /** @class */ (function (_super) {
    __extends(PostAbortEnvironmentUpdateRequest, _super);
    function PostAbortEnvironmentUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAbortEnvironmentUpdateQueryParams)
    ], PostAbortEnvironmentUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAbortEnvironmentUpdateHeaders)
    ], PostAbortEnvironmentUpdateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAbortEnvironmentUpdateRequest.prototype, "request", void 0);
    return PostAbortEnvironmentUpdateRequest;
}(utils_1.SpeakeasyBase));
exports.PostAbortEnvironmentUpdateRequest = PostAbortEnvironmentUpdateRequest;
var PostAbortEnvironmentUpdateResponse = /** @class */ (function (_super) {
    __extends(PostAbortEnvironmentUpdateResponse, _super);
    function PostAbortEnvironmentUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAbortEnvironmentUpdateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAbortEnvironmentUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAbortEnvironmentUpdateResponse.prototype, "statusCode", void 0);
    return PostAbortEnvironmentUpdateResponse;
}(utils_1.SpeakeasyBase));
exports.PostAbortEnvironmentUpdateResponse = PostAbortEnvironmentUpdateResponse;
