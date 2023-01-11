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
exports.PostGetLaunchTemplateDataResponse = exports.PostGetLaunchTemplateDataRequest = exports.PostGetLaunchTemplateDataHeaders = exports.PostGetLaunchTemplateDataQueryParams = exports.PostGetLaunchTemplateDataVersionEnum = exports.PostGetLaunchTemplateDataActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetLaunchTemplateDataActionEnum;
(function (PostGetLaunchTemplateDataActionEnum) {
    PostGetLaunchTemplateDataActionEnum["GetLaunchTemplateData"] = "GetLaunchTemplateData";
})(PostGetLaunchTemplateDataActionEnum = exports.PostGetLaunchTemplateDataActionEnum || (exports.PostGetLaunchTemplateDataActionEnum = {}));
var PostGetLaunchTemplateDataVersionEnum;
(function (PostGetLaunchTemplateDataVersionEnum) {
    PostGetLaunchTemplateDataVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetLaunchTemplateDataVersionEnum = exports.PostGetLaunchTemplateDataVersionEnum || (exports.PostGetLaunchTemplateDataVersionEnum = {}));
var PostGetLaunchTemplateDataQueryParams = /** @class */ (function (_super) {
    __extends(PostGetLaunchTemplateDataQueryParams, _super);
    function PostGetLaunchTemplateDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataQueryParams.prototype, "version", void 0);
    return PostGetLaunchTemplateDataQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetLaunchTemplateDataQueryParams = PostGetLaunchTemplateDataQueryParams;
var PostGetLaunchTemplateDataHeaders = /** @class */ (function (_super) {
    __extends(PostGetLaunchTemplateDataHeaders, _super);
    function PostGetLaunchTemplateDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetLaunchTemplateDataHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetLaunchTemplateDataHeaders = PostGetLaunchTemplateDataHeaders;
var PostGetLaunchTemplateDataRequest = /** @class */ (function (_super) {
    __extends(PostGetLaunchTemplateDataRequest, _super);
    function PostGetLaunchTemplateDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetLaunchTemplateDataQueryParams)
    ], PostGetLaunchTemplateDataRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetLaunchTemplateDataHeaders)
    ], PostGetLaunchTemplateDataRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetLaunchTemplateDataRequest.prototype, "request", void 0);
    return PostGetLaunchTemplateDataRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetLaunchTemplateDataRequest = PostGetLaunchTemplateDataRequest;
var PostGetLaunchTemplateDataResponse = /** @class */ (function (_super) {
    __extends(PostGetLaunchTemplateDataResponse, _super);
    function PostGetLaunchTemplateDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetLaunchTemplateDataResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetLaunchTemplateDataResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetLaunchTemplateDataResponse.prototype, "statusCode", void 0);
    return PostGetLaunchTemplateDataResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetLaunchTemplateDataResponse = PostGetLaunchTemplateDataResponse;
