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
exports.PostGetServiceLastAccessedDetailsResponse = exports.PostGetServiceLastAccessedDetailsRequest = exports.PostGetServiceLastAccessedDetailsHeaders = exports.PostGetServiceLastAccessedDetailsQueryParams = exports.PostGetServiceLastAccessedDetailsVersionEnum = exports.PostGetServiceLastAccessedDetailsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetServiceLastAccessedDetailsActionEnum;
(function (PostGetServiceLastAccessedDetailsActionEnum) {
    PostGetServiceLastAccessedDetailsActionEnum["GetServiceLastAccessedDetails"] = "GetServiceLastAccessedDetails";
})(PostGetServiceLastAccessedDetailsActionEnum = exports.PostGetServiceLastAccessedDetailsActionEnum || (exports.PostGetServiceLastAccessedDetailsActionEnum = {}));
var PostGetServiceLastAccessedDetailsVersionEnum;
(function (PostGetServiceLastAccessedDetailsVersionEnum) {
    PostGetServiceLastAccessedDetailsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostGetServiceLastAccessedDetailsVersionEnum = exports.PostGetServiceLastAccessedDetailsVersionEnum || (exports.PostGetServiceLastAccessedDetailsVersionEnum = {}));
var PostGetServiceLastAccessedDetailsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetServiceLastAccessedDetailsQueryParams, _super);
    function PostGetServiceLastAccessedDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsQueryParams.prototype, "version", void 0);
    return PostGetServiceLastAccessedDetailsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetServiceLastAccessedDetailsQueryParams = PostGetServiceLastAccessedDetailsQueryParams;
var PostGetServiceLastAccessedDetailsHeaders = /** @class */ (function (_super) {
    __extends(PostGetServiceLastAccessedDetailsHeaders, _super);
    function PostGetServiceLastAccessedDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetServiceLastAccessedDetailsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetServiceLastAccessedDetailsHeaders = PostGetServiceLastAccessedDetailsHeaders;
var PostGetServiceLastAccessedDetailsRequest = /** @class */ (function (_super) {
    __extends(PostGetServiceLastAccessedDetailsRequest, _super);
    function PostGetServiceLastAccessedDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetServiceLastAccessedDetailsQueryParams)
    ], PostGetServiceLastAccessedDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetServiceLastAccessedDetailsHeaders)
    ], PostGetServiceLastAccessedDetailsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetServiceLastAccessedDetailsRequest.prototype, "request", void 0);
    return PostGetServiceLastAccessedDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetServiceLastAccessedDetailsRequest = PostGetServiceLastAccessedDetailsRequest;
var PostGetServiceLastAccessedDetailsResponse = /** @class */ (function (_super) {
    __extends(PostGetServiceLastAccessedDetailsResponse, _super);
    function PostGetServiceLastAccessedDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetServiceLastAccessedDetailsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetServiceLastAccessedDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetServiceLastAccessedDetailsResponse.prototype, "statusCode", void 0);
    return PostGetServiceLastAccessedDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetServiceLastAccessedDetailsResponse = PostGetServiceLastAccessedDetailsResponse;
