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
exports.PostDeleteSubnetResponse = exports.PostDeleteSubnetRequest = exports.PostDeleteSubnetHeaders = exports.PostDeleteSubnetQueryParams = exports.PostDeleteSubnetVersionEnum = exports.PostDeleteSubnetActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteSubnetActionEnum;
(function (PostDeleteSubnetActionEnum) {
    PostDeleteSubnetActionEnum["DeleteSubnet"] = "DeleteSubnet";
})(PostDeleteSubnetActionEnum = exports.PostDeleteSubnetActionEnum || (exports.PostDeleteSubnetActionEnum = {}));
var PostDeleteSubnetVersionEnum;
(function (PostDeleteSubnetVersionEnum) {
    PostDeleteSubnetVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteSubnetVersionEnum = exports.PostDeleteSubnetVersionEnum || (exports.PostDeleteSubnetVersionEnum = {}));
var PostDeleteSubnetQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteSubnetQueryParams, _super);
    function PostDeleteSubnetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetQueryParams.prototype, "version", void 0);
    return PostDeleteSubnetQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteSubnetQueryParams = PostDeleteSubnetQueryParams;
var PostDeleteSubnetHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteSubnetHeaders, _super);
    function PostDeleteSubnetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteSubnetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteSubnetHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteSubnetHeaders = PostDeleteSubnetHeaders;
var PostDeleteSubnetRequest = /** @class */ (function (_super) {
    __extends(PostDeleteSubnetRequest, _super);
    function PostDeleteSubnetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteSubnetQueryParams)
    ], PostDeleteSubnetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteSubnetHeaders)
    ], PostDeleteSubnetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteSubnetRequest.prototype, "request", void 0);
    return PostDeleteSubnetRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteSubnetRequest = PostDeleteSubnetRequest;
var PostDeleteSubnetResponse = /** @class */ (function (_super) {
    __extends(PostDeleteSubnetResponse, _super);
    function PostDeleteSubnetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteSubnetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteSubnetResponse.prototype, "statusCode", void 0);
    return PostDeleteSubnetResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteSubnetResponse = PostDeleteSubnetResponse;
