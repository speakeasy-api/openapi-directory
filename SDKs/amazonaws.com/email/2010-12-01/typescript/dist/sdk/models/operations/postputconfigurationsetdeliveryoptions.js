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
exports.PostPutConfigurationSetDeliveryOptionsResponse = exports.PostPutConfigurationSetDeliveryOptionsRequest = exports.PostPutConfigurationSetDeliveryOptionsHeaders = exports.PostPutConfigurationSetDeliveryOptionsQueryParams = exports.PostPutConfigurationSetDeliveryOptionsVersionEnum = exports.PostPutConfigurationSetDeliveryOptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPutConfigurationSetDeliveryOptionsActionEnum;
(function (PostPutConfigurationSetDeliveryOptionsActionEnum) {
    PostPutConfigurationSetDeliveryOptionsActionEnum["PutConfigurationSetDeliveryOptions"] = "PutConfigurationSetDeliveryOptions";
})(PostPutConfigurationSetDeliveryOptionsActionEnum = exports.PostPutConfigurationSetDeliveryOptionsActionEnum || (exports.PostPutConfigurationSetDeliveryOptionsActionEnum = {}));
var PostPutConfigurationSetDeliveryOptionsVersionEnum;
(function (PostPutConfigurationSetDeliveryOptionsVersionEnum) {
    PostPutConfigurationSetDeliveryOptionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostPutConfigurationSetDeliveryOptionsVersionEnum = exports.PostPutConfigurationSetDeliveryOptionsVersionEnum || (exports.PostPutConfigurationSetDeliveryOptionsVersionEnum = {}));
var PostPutConfigurationSetDeliveryOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostPutConfigurationSetDeliveryOptionsQueryParams, _super);
    function PostPutConfigurationSetDeliveryOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsQueryParams.prototype, "version", void 0);
    return PostPutConfigurationSetDeliveryOptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPutConfigurationSetDeliveryOptionsQueryParams = PostPutConfigurationSetDeliveryOptionsQueryParams;
var PostPutConfigurationSetDeliveryOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostPutConfigurationSetDeliveryOptionsHeaders, _super);
    function PostPutConfigurationSetDeliveryOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutConfigurationSetDeliveryOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostPutConfigurationSetDeliveryOptionsHeaders = PostPutConfigurationSetDeliveryOptionsHeaders;
var PostPutConfigurationSetDeliveryOptionsRequest = /** @class */ (function (_super) {
    __extends(PostPutConfigurationSetDeliveryOptionsRequest, _super);
    function PostPutConfigurationSetDeliveryOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutConfigurationSetDeliveryOptionsQueryParams)
    ], PostPutConfigurationSetDeliveryOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutConfigurationSetDeliveryOptionsHeaders)
    ], PostPutConfigurationSetDeliveryOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutConfigurationSetDeliveryOptionsRequest.prototype, "request", void 0);
    return PostPutConfigurationSetDeliveryOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostPutConfigurationSetDeliveryOptionsRequest = PostPutConfigurationSetDeliveryOptionsRequest;
var PostPutConfigurationSetDeliveryOptionsResponse = /** @class */ (function (_super) {
    __extends(PostPutConfigurationSetDeliveryOptionsResponse, _super);
    function PostPutConfigurationSetDeliveryOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPutConfigurationSetDeliveryOptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPutConfigurationSetDeliveryOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPutConfigurationSetDeliveryOptionsResponse.prototype, "statusCode", void 0);
    return PostPutConfigurationSetDeliveryOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostPutConfigurationSetDeliveryOptionsResponse = PostPutConfigurationSetDeliveryOptionsResponse;
