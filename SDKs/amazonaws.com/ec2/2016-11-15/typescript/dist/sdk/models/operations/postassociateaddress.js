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
exports.PostAssociateAddressResponse = exports.PostAssociateAddressRequest = exports.PostAssociateAddressHeaders = exports.PostAssociateAddressQueryParams = exports.PostAssociateAddressVersionEnum = exports.PostAssociateAddressActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssociateAddressActionEnum;
(function (PostAssociateAddressActionEnum) {
    PostAssociateAddressActionEnum["AssociateAddress"] = "AssociateAddress";
})(PostAssociateAddressActionEnum = exports.PostAssociateAddressActionEnum || (exports.PostAssociateAddressActionEnum = {}));
var PostAssociateAddressVersionEnum;
(function (PostAssociateAddressVersionEnum) {
    PostAssociateAddressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssociateAddressVersionEnum = exports.PostAssociateAddressVersionEnum || (exports.PostAssociateAddressVersionEnum = {}));
var PostAssociateAddressQueryParams = /** @class */ (function (_super) {
    __extends(PostAssociateAddressQueryParams, _super);
    function PostAssociateAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssociateAddressQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssociateAddressQueryParams.prototype, "version", void 0);
    return PostAssociateAddressQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAssociateAddressQueryParams = PostAssociateAddressQueryParams;
var PostAssociateAddressHeaders = /** @class */ (function (_super) {
    __extends(PostAssociateAddressHeaders, _super);
    function PostAssociateAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssociateAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssociateAddressHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAssociateAddressHeaders = PostAssociateAddressHeaders;
var PostAssociateAddressRequest = /** @class */ (function (_super) {
    __extends(PostAssociateAddressRequest, _super);
    function PostAssociateAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssociateAddressQueryParams)
    ], PostAssociateAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssociateAddressHeaders)
    ], PostAssociateAddressRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssociateAddressRequest.prototype, "request", void 0);
    return PostAssociateAddressRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssociateAddressRequest = PostAssociateAddressRequest;
var PostAssociateAddressResponse = /** @class */ (function (_super) {
    __extends(PostAssociateAddressResponse, _super);
    function PostAssociateAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAssociateAddressResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssociateAddressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssociateAddressResponse.prototype, "statusCode", void 0);
    return PostAssociateAddressResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssociateAddressResponse = PostAssociateAddressResponse;
