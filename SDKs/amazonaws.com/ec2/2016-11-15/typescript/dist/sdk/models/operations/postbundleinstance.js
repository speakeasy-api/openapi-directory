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
exports.PostBundleInstanceResponse = exports.PostBundleInstanceRequest = exports.PostBundleInstanceHeaders = exports.PostBundleInstanceQueryParams = exports.PostBundleInstanceVersionEnum = exports.PostBundleInstanceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostBundleInstanceActionEnum;
(function (PostBundleInstanceActionEnum) {
    PostBundleInstanceActionEnum["BundleInstance"] = "BundleInstance";
})(PostBundleInstanceActionEnum = exports.PostBundleInstanceActionEnum || (exports.PostBundleInstanceActionEnum = {}));
var PostBundleInstanceVersionEnum;
(function (PostBundleInstanceVersionEnum) {
    PostBundleInstanceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostBundleInstanceVersionEnum = exports.PostBundleInstanceVersionEnum || (exports.PostBundleInstanceVersionEnum = {}));
var PostBundleInstanceQueryParams = /** @class */ (function (_super) {
    __extends(PostBundleInstanceQueryParams, _super);
    function PostBundleInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostBundleInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostBundleInstanceQueryParams.prototype, "version", void 0);
    return PostBundleInstanceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostBundleInstanceQueryParams = PostBundleInstanceQueryParams;
var PostBundleInstanceHeaders = /** @class */ (function (_super) {
    __extends(PostBundleInstanceHeaders, _super);
    function PostBundleInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostBundleInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostBundleInstanceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostBundleInstanceHeaders = PostBundleInstanceHeaders;
var PostBundleInstanceRequest = /** @class */ (function (_super) {
    __extends(PostBundleInstanceRequest, _super);
    function PostBundleInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBundleInstanceQueryParams)
    ], PostBundleInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostBundleInstanceHeaders)
    ], PostBundleInstanceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostBundleInstanceRequest.prototype, "request", void 0);
    return PostBundleInstanceRequest;
}(utils_1.SpeakeasyBase));
exports.PostBundleInstanceRequest = PostBundleInstanceRequest;
var PostBundleInstanceResponse = /** @class */ (function (_super) {
    __extends(PostBundleInstanceResponse, _super);
    function PostBundleInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostBundleInstanceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostBundleInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostBundleInstanceResponse.prototype, "statusCode", void 0);
    return PostBundleInstanceResponse;
}(utils_1.SpeakeasyBase));
exports.PostBundleInstanceResponse = PostBundleInstanceResponse;
