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
exports.PostUpdateDomainEndpointOptionsResponse = exports.PostUpdateDomainEndpointOptionsRequest = exports.PostUpdateDomainEndpointOptionsHeaders = exports.PostUpdateDomainEndpointOptionsQueryParams = exports.PostUpdateDomainEndpointOptionsVersionEnum = exports.PostUpdateDomainEndpointOptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateDomainEndpointOptionsActionEnum;
(function (PostUpdateDomainEndpointOptionsActionEnum) {
    PostUpdateDomainEndpointOptionsActionEnum["UpdateDomainEndpointOptions"] = "UpdateDomainEndpointOptions";
})(PostUpdateDomainEndpointOptionsActionEnum = exports.PostUpdateDomainEndpointOptionsActionEnum || (exports.PostUpdateDomainEndpointOptionsActionEnum = {}));
var PostUpdateDomainEndpointOptionsVersionEnum;
(function (PostUpdateDomainEndpointOptionsVersionEnum) {
    PostUpdateDomainEndpointOptionsVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostUpdateDomainEndpointOptionsVersionEnum = exports.PostUpdateDomainEndpointOptionsVersionEnum || (exports.PostUpdateDomainEndpointOptionsVersionEnum = {}));
var PostUpdateDomainEndpointOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateDomainEndpointOptionsQueryParams, _super);
    function PostUpdateDomainEndpointOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsQueryParams.prototype, "version", void 0);
    return PostUpdateDomainEndpointOptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDomainEndpointOptionsQueryParams = PostUpdateDomainEndpointOptionsQueryParams;
var PostUpdateDomainEndpointOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateDomainEndpointOptionsHeaders, _super);
    function PostUpdateDomainEndpointOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateDomainEndpointOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDomainEndpointOptionsHeaders = PostUpdateDomainEndpointOptionsHeaders;
var PostUpdateDomainEndpointOptionsRequest = /** @class */ (function (_super) {
    __extends(PostUpdateDomainEndpointOptionsRequest, _super);
    function PostUpdateDomainEndpointOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateDomainEndpointOptionsQueryParams)
    ], PostUpdateDomainEndpointOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateDomainEndpointOptionsHeaders)
    ], PostUpdateDomainEndpointOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateDomainEndpointOptionsRequest.prototype, "request", void 0);
    return PostUpdateDomainEndpointOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDomainEndpointOptionsRequest = PostUpdateDomainEndpointOptionsRequest;
var PostUpdateDomainEndpointOptionsResponse = /** @class */ (function (_super) {
    __extends(PostUpdateDomainEndpointOptionsResponse, _super);
    function PostUpdateDomainEndpointOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateDomainEndpointOptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateDomainEndpointOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateDomainEndpointOptionsResponse.prototype, "statusCode", void 0);
    return PostUpdateDomainEndpointOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDomainEndpointOptionsResponse = PostUpdateDomainEndpointOptionsResponse;
