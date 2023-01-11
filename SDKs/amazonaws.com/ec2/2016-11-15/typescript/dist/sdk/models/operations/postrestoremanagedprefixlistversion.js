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
exports.PostRestoreManagedPrefixListVersionResponse = exports.PostRestoreManagedPrefixListVersionRequest = exports.PostRestoreManagedPrefixListVersionHeaders = exports.PostRestoreManagedPrefixListVersionQueryParams = exports.PostRestoreManagedPrefixListVersionVersionEnum = exports.PostRestoreManagedPrefixListVersionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostRestoreManagedPrefixListVersionActionEnum;
(function (PostRestoreManagedPrefixListVersionActionEnum) {
    PostRestoreManagedPrefixListVersionActionEnum["RestoreManagedPrefixListVersion"] = "RestoreManagedPrefixListVersion";
})(PostRestoreManagedPrefixListVersionActionEnum = exports.PostRestoreManagedPrefixListVersionActionEnum || (exports.PostRestoreManagedPrefixListVersionActionEnum = {}));
var PostRestoreManagedPrefixListVersionVersionEnum;
(function (PostRestoreManagedPrefixListVersionVersionEnum) {
    PostRestoreManagedPrefixListVersionVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostRestoreManagedPrefixListVersionVersionEnum = exports.PostRestoreManagedPrefixListVersionVersionEnum || (exports.PostRestoreManagedPrefixListVersionVersionEnum = {}));
var PostRestoreManagedPrefixListVersionQueryParams = /** @class */ (function (_super) {
    __extends(PostRestoreManagedPrefixListVersionQueryParams, _super);
    function PostRestoreManagedPrefixListVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionQueryParams.prototype, "version", void 0);
    return PostRestoreManagedPrefixListVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostRestoreManagedPrefixListVersionQueryParams = PostRestoreManagedPrefixListVersionQueryParams;
var PostRestoreManagedPrefixListVersionHeaders = /** @class */ (function (_super) {
    __extends(PostRestoreManagedPrefixListVersionHeaders, _super);
    function PostRestoreManagedPrefixListVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRestoreManagedPrefixListVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostRestoreManagedPrefixListVersionHeaders = PostRestoreManagedPrefixListVersionHeaders;
var PostRestoreManagedPrefixListVersionRequest = /** @class */ (function (_super) {
    __extends(PostRestoreManagedPrefixListVersionRequest, _super);
    function PostRestoreManagedPrefixListVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRestoreManagedPrefixListVersionQueryParams)
    ], PostRestoreManagedPrefixListVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostRestoreManagedPrefixListVersionHeaders)
    ], PostRestoreManagedPrefixListVersionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRestoreManagedPrefixListVersionRequest.prototype, "request", void 0);
    return PostRestoreManagedPrefixListVersionRequest;
}(utils_1.SpeakeasyBase));
exports.PostRestoreManagedPrefixListVersionRequest = PostRestoreManagedPrefixListVersionRequest;
var PostRestoreManagedPrefixListVersionResponse = /** @class */ (function (_super) {
    __extends(PostRestoreManagedPrefixListVersionResponse, _super);
    function PostRestoreManagedPrefixListVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostRestoreManagedPrefixListVersionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRestoreManagedPrefixListVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRestoreManagedPrefixListVersionResponse.prototype, "statusCode", void 0);
    return PostRestoreManagedPrefixListVersionResponse;
}(utils_1.SpeakeasyBase));
exports.PostRestoreManagedPrefixListVersionResponse = PostRestoreManagedPrefixListVersionResponse;
