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
exports.PostUpdateConfigurationSetSendingEnabledResponse = exports.PostUpdateConfigurationSetSendingEnabledRequest = exports.PostUpdateConfigurationSetSendingEnabledHeaders = exports.PostUpdateConfigurationSetSendingEnabledQueryParams = exports.PostUpdateConfigurationSetSendingEnabledVersionEnum = exports.PostUpdateConfigurationSetSendingEnabledActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateConfigurationSetSendingEnabledActionEnum;
(function (PostUpdateConfigurationSetSendingEnabledActionEnum) {
    PostUpdateConfigurationSetSendingEnabledActionEnum["UpdateConfigurationSetSendingEnabled"] = "UpdateConfigurationSetSendingEnabled";
})(PostUpdateConfigurationSetSendingEnabledActionEnum = exports.PostUpdateConfigurationSetSendingEnabledActionEnum || (exports.PostUpdateConfigurationSetSendingEnabledActionEnum = {}));
var PostUpdateConfigurationSetSendingEnabledVersionEnum;
(function (PostUpdateConfigurationSetSendingEnabledVersionEnum) {
    PostUpdateConfigurationSetSendingEnabledVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostUpdateConfigurationSetSendingEnabledVersionEnum = exports.PostUpdateConfigurationSetSendingEnabledVersionEnum || (exports.PostUpdateConfigurationSetSendingEnabledVersionEnum = {}));
var PostUpdateConfigurationSetSendingEnabledQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetSendingEnabledQueryParams, _super);
    function PostUpdateConfigurationSetSendingEnabledQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledQueryParams.prototype, "version", void 0);
    return PostUpdateConfigurationSetSendingEnabledQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetSendingEnabledQueryParams = PostUpdateConfigurationSetSendingEnabledQueryParams;
var PostUpdateConfigurationSetSendingEnabledHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetSendingEnabledHeaders, _super);
    function PostUpdateConfigurationSetSendingEnabledHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateConfigurationSetSendingEnabledHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetSendingEnabledHeaders = PostUpdateConfigurationSetSendingEnabledHeaders;
var PostUpdateConfigurationSetSendingEnabledRequest = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetSendingEnabledRequest, _super);
    function PostUpdateConfigurationSetSendingEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateConfigurationSetSendingEnabledQueryParams)
    ], PostUpdateConfigurationSetSendingEnabledRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateConfigurationSetSendingEnabledHeaders)
    ], PostUpdateConfigurationSetSendingEnabledRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateConfigurationSetSendingEnabledRequest.prototype, "request", void 0);
    return PostUpdateConfigurationSetSendingEnabledRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetSendingEnabledRequest = PostUpdateConfigurationSetSendingEnabledRequest;
var PostUpdateConfigurationSetSendingEnabledResponse = /** @class */ (function (_super) {
    __extends(PostUpdateConfigurationSetSendingEnabledResponse, _super);
    function PostUpdateConfigurationSetSendingEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateConfigurationSetSendingEnabledResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateConfigurationSetSendingEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateConfigurationSetSendingEnabledResponse.prototype, "statusCode", void 0);
    return PostUpdateConfigurationSetSendingEnabledResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateConfigurationSetSendingEnabledResponse = PostUpdateConfigurationSetSendingEnabledResponse;
