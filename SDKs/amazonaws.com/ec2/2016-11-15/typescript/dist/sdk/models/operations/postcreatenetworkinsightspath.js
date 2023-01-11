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
exports.PostCreateNetworkInsightsPathResponse = exports.PostCreateNetworkInsightsPathRequest = exports.PostCreateNetworkInsightsPathHeaders = exports.PostCreateNetworkInsightsPathQueryParams = exports.PostCreateNetworkInsightsPathVersionEnum = exports.PostCreateNetworkInsightsPathActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateNetworkInsightsPathActionEnum;
(function (PostCreateNetworkInsightsPathActionEnum) {
    PostCreateNetworkInsightsPathActionEnum["CreateNetworkInsightsPath"] = "CreateNetworkInsightsPath";
})(PostCreateNetworkInsightsPathActionEnum = exports.PostCreateNetworkInsightsPathActionEnum || (exports.PostCreateNetworkInsightsPathActionEnum = {}));
var PostCreateNetworkInsightsPathVersionEnum;
(function (PostCreateNetworkInsightsPathVersionEnum) {
    PostCreateNetworkInsightsPathVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateNetworkInsightsPathVersionEnum = exports.PostCreateNetworkInsightsPathVersionEnum || (exports.PostCreateNetworkInsightsPathVersionEnum = {}));
var PostCreateNetworkInsightsPathQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateNetworkInsightsPathQueryParams, _super);
    function PostCreateNetworkInsightsPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathQueryParams.prototype, "version", void 0);
    return PostCreateNetworkInsightsPathQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateNetworkInsightsPathQueryParams = PostCreateNetworkInsightsPathQueryParams;
var PostCreateNetworkInsightsPathHeaders = /** @class */ (function (_super) {
    __extends(PostCreateNetworkInsightsPathHeaders, _super);
    function PostCreateNetworkInsightsPathHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateNetworkInsightsPathHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateNetworkInsightsPathHeaders = PostCreateNetworkInsightsPathHeaders;
var PostCreateNetworkInsightsPathRequest = /** @class */ (function (_super) {
    __extends(PostCreateNetworkInsightsPathRequest, _super);
    function PostCreateNetworkInsightsPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateNetworkInsightsPathQueryParams)
    ], PostCreateNetworkInsightsPathRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateNetworkInsightsPathHeaders)
    ], PostCreateNetworkInsightsPathRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateNetworkInsightsPathRequest.prototype, "request", void 0);
    return PostCreateNetworkInsightsPathRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateNetworkInsightsPathRequest = PostCreateNetworkInsightsPathRequest;
var PostCreateNetworkInsightsPathResponse = /** @class */ (function (_super) {
    __extends(PostCreateNetworkInsightsPathResponse, _super);
    function PostCreateNetworkInsightsPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateNetworkInsightsPathResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateNetworkInsightsPathResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateNetworkInsightsPathResponse.prototype, "statusCode", void 0);
    return PostCreateNetworkInsightsPathResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateNetworkInsightsPathResponse = PostCreateNetworkInsightsPathResponse;
