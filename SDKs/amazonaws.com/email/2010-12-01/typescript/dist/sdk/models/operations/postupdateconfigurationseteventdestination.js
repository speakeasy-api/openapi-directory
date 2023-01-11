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
exports.PostUpdateConfigurationSetEventDestinationResponse = exports.PostUpdateConfigurationSetEventDestinationRequest = exports.PostUpdateConfigurationSetEventDestinationHeaders = exports.PostUpdateConfigurationSetEventDestinationQueryParams = exports.PostUpdateConfigurationSetEventDestinationVersionEnum = exports.PostUpdateConfigurationSetEventDestinationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateConfigurationSetEventDestinationActionEnum;
(function (PostUpdateConfigurationSetEventDestinationActionEnum) {
    PostUpdateConfigurationSetEventDestinationActionEnum["UpdateConfigurationSetEventDestination"] = "UpdateConfigurationSetEventDestination";
})(PostUpdateConfigurationSetEventDestinationActionEnum = exports.PostUpdateConfigurationSetEventDestinationActionEnum || (exports.PostUpdateConfigurationSetEventDestinationActionEnum = {}));
var PostUpdateConfigurationSetEventDestinationVersionEnum;
(function (PostUpdateConfigurationSetEventDestinationVersionEnum) {
    PostUpdateConfigurationSetEventDestinationVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostUpdateConfigurationSetEventDestinationVersionEnum = exports.PostUpdateConfigurationSetEventDestinationVersionEnum || (exports.PostUpdateConfigurationSetEventDestinationVersionEnum = {}));
var PostUpdateConfigurationSetEventDestinationQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetEventDestinationQueryParams, _super);
    function PostUpdateConfigurationSetEventDestinationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationQueryParams.prototype, "version", void 0);
    return PostUpdateConfigurationSetEventDestinationQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetEventDestinationQueryParams = PostUpdateConfigurationSetEventDestinationQueryParams;
var PostUpdateConfigurationSetEventDestinationHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetEventDestinationHeaders, _super);
    function PostUpdateConfigurationSetEventDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateConfigurationSetEventDestinationHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetEventDestinationHeaders = PostUpdateConfigurationSetEventDestinationHeaders;
var PostUpdateConfigurationSetEventDestinationRequest = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetEventDestinationRequest, _super);
    function PostUpdateConfigurationSetEventDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateConfigurationSetEventDestinationQueryParams)
    ], PostUpdateConfigurationSetEventDestinationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateConfigurationSetEventDestinationHeaders)
    ], PostUpdateConfigurationSetEventDestinationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateConfigurationSetEventDestinationRequest.prototype, "request", void 0);
    return PostUpdateConfigurationSetEventDestinationRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetEventDestinationRequest = PostUpdateConfigurationSetEventDestinationRequest;
var PostUpdateConfigurationSetEventDestinationResponse = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetEventDestinationResponse, _super);
    function PostUpdateConfigurationSetEventDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateConfigurationSetEventDestinationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetEventDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateConfigurationSetEventDestinationResponse.prototype, "statusCode", void 0);
    return PostUpdateConfigurationSetEventDestinationResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetEventDestinationResponse = PostUpdateConfigurationSetEventDestinationResponse;
