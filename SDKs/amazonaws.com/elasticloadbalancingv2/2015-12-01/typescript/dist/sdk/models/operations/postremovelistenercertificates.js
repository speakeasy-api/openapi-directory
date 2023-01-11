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
exports.PostRemoveListenerCertificatesResponse = exports.PostRemoveListenerCertificatesRequest = exports.PostRemoveListenerCertificatesHeaders = exports.PostRemoveListenerCertificatesQueryParams = exports.PostRemoveListenerCertificatesVersionEnum = exports.PostRemoveListenerCertificatesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostRemoveListenerCertificatesActionEnum;
(function (PostRemoveListenerCertificatesActionEnum) {
    PostRemoveListenerCertificatesActionEnum["RemoveListenerCertificates"] = "RemoveListenerCertificates";
})(PostRemoveListenerCertificatesActionEnum = exports.PostRemoveListenerCertificatesActionEnum || (exports.PostRemoveListenerCertificatesActionEnum = {}));
var PostRemoveListenerCertificatesVersionEnum;
(function (PostRemoveListenerCertificatesVersionEnum) {
    PostRemoveListenerCertificatesVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostRemoveListenerCertificatesVersionEnum = exports.PostRemoveListenerCertificatesVersionEnum || (exports.PostRemoveListenerCertificatesVersionEnum = {}));
var PostRemoveListenerCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(PostRemoveListenerCertificatesQueryParams, _super);
    function PostRemoveListenerCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesQueryParams.prototype, "version", void 0);
    return PostRemoveListenerCertificatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRemoveListenerCertificatesQueryParams = PostRemoveListenerCertificatesQueryParams;
var PostRemoveListenerCertificatesHeaders = /** @class */ (function (_super) {
    __extends(PostRemoveListenerCertificatesHeaders, _super);
    function PostRemoveListenerCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRemoveListenerCertificatesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostRemoveListenerCertificatesHeaders = PostRemoveListenerCertificatesHeaders;
var PostRemoveListenerCertificatesRequest = /** @class */ (function (_super) {
    __extends(PostRemoveListenerCertificatesRequest, _super);
    function PostRemoveListenerCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRemoveListenerCertificatesQueryParams)
    ], PostRemoveListenerCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRemoveListenerCertificatesHeaders)
    ], PostRemoveListenerCertificatesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRemoveListenerCertificatesRequest.prototype, "request", void 0);
    return PostRemoveListenerCertificatesRequest;
}(utils_1.SpeakeasyBase));
exports.PostRemoveListenerCertificatesRequest = PostRemoveListenerCertificatesRequest;
var PostRemoveListenerCertificatesResponse = /** @class */ (function (_super) {
    __extends(PostRemoveListenerCertificatesResponse, _super);
    function PostRemoveListenerCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostRemoveListenerCertificatesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRemoveListenerCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRemoveListenerCertificatesResponse.prototype, "statusCode", void 0);
    return PostRemoveListenerCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.PostRemoveListenerCertificatesResponse = PostRemoveListenerCertificatesResponse;
