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
exports.PostAdvertiseByoipCidrResponse = exports.PostAdvertiseByoipCidrRequest = exports.PostAdvertiseByoipCidrHeaders = exports.PostAdvertiseByoipCidrQueryParams = exports.PostAdvertiseByoipCidrVersionEnum = exports.PostAdvertiseByoipCidrActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAdvertiseByoipCidrActionEnum;
(function (PostAdvertiseByoipCidrActionEnum) {
    PostAdvertiseByoipCidrActionEnum["AdvertiseByoipCidr"] = "AdvertiseByoipCidr";
})(PostAdvertiseByoipCidrActionEnum = exports.PostAdvertiseByoipCidrActionEnum || (exports.PostAdvertiseByoipCidrActionEnum = {}));
var PostAdvertiseByoipCidrVersionEnum;
(function (PostAdvertiseByoipCidrVersionEnum) {
    PostAdvertiseByoipCidrVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAdvertiseByoipCidrVersionEnum = exports.PostAdvertiseByoipCidrVersionEnum || (exports.PostAdvertiseByoipCidrVersionEnum = {}));
var PostAdvertiseByoipCidrQueryParams = /** @class */ (function (_super) {
    __extends(PostAdvertiseByoipCidrQueryParams, _super);
    function PostAdvertiseByoipCidrQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrQueryParams.prototype, "version", void 0);
    return PostAdvertiseByoipCidrQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAdvertiseByoipCidrQueryParams = PostAdvertiseByoipCidrQueryParams;
var PostAdvertiseByoipCidrHeaders = /** @class */ (function (_super) {
    __extends(PostAdvertiseByoipCidrHeaders, _super);
    function PostAdvertiseByoipCidrHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAdvertiseByoipCidrHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAdvertiseByoipCidrHeaders = PostAdvertiseByoipCidrHeaders;
var PostAdvertiseByoipCidrRequest = /** @class */ (function (_super) {
    __extends(PostAdvertiseByoipCidrRequest, _super);
    function PostAdvertiseByoipCidrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAdvertiseByoipCidrQueryParams)
    ], PostAdvertiseByoipCidrRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAdvertiseByoipCidrHeaders)
    ], PostAdvertiseByoipCidrRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAdvertiseByoipCidrRequest.prototype, "request", void 0);
    return PostAdvertiseByoipCidrRequest;
}(utils_1.SpeakeasyBase));
exports.PostAdvertiseByoipCidrRequest = PostAdvertiseByoipCidrRequest;
var PostAdvertiseByoipCidrResponse = /** @class */ (function (_super) {
    __extends(PostAdvertiseByoipCidrResponse, _super);
    function PostAdvertiseByoipCidrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAdvertiseByoipCidrResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAdvertiseByoipCidrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAdvertiseByoipCidrResponse.prototype, "statusCode", void 0);
    return PostAdvertiseByoipCidrResponse;
}(utils_1.SpeakeasyBase));
exports.PostAdvertiseByoipCidrResponse = PostAdvertiseByoipCidrResponse;
