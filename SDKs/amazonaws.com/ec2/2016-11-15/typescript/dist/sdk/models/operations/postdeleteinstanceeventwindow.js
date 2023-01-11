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
exports.PostDeleteInstanceEventWindowResponse = exports.PostDeleteInstanceEventWindowRequest = exports.PostDeleteInstanceEventWindowHeaders = exports.PostDeleteInstanceEventWindowQueryParams = exports.PostDeleteInstanceEventWindowVersionEnum = exports.PostDeleteInstanceEventWindowActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteInstanceEventWindowActionEnum;
(function (PostDeleteInstanceEventWindowActionEnum) {
    PostDeleteInstanceEventWindowActionEnum["DeleteInstanceEventWindow"] = "DeleteInstanceEventWindow";
})(PostDeleteInstanceEventWindowActionEnum = exports.PostDeleteInstanceEventWindowActionEnum || (exports.PostDeleteInstanceEventWindowActionEnum = {}));
var PostDeleteInstanceEventWindowVersionEnum;
(function (PostDeleteInstanceEventWindowVersionEnum) {
    PostDeleteInstanceEventWindowVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteInstanceEventWindowVersionEnum = exports.PostDeleteInstanceEventWindowVersionEnum || (exports.PostDeleteInstanceEventWindowVersionEnum = {}));
var PostDeleteInstanceEventWindowQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteInstanceEventWindowQueryParams, _super);
    function PostDeleteInstanceEventWindowQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowQueryParams.prototype, "version", void 0);
    return PostDeleteInstanceEventWindowQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteInstanceEventWindowQueryParams = PostDeleteInstanceEventWindowQueryParams;
var PostDeleteInstanceEventWindowHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteInstanceEventWindowHeaders, _super);
    function PostDeleteInstanceEventWindowHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteInstanceEventWindowHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteInstanceEventWindowHeaders = PostDeleteInstanceEventWindowHeaders;
var PostDeleteInstanceEventWindowRequest = /** @class */ (function (_super) {
    __extends(PostDeleteInstanceEventWindowRequest, _super);
    function PostDeleteInstanceEventWindowRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteInstanceEventWindowQueryParams)
    ], PostDeleteInstanceEventWindowRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteInstanceEventWindowHeaders)
    ], PostDeleteInstanceEventWindowRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteInstanceEventWindowRequest.prototype, "request", void 0);
    return PostDeleteInstanceEventWindowRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteInstanceEventWindowRequest = PostDeleteInstanceEventWindowRequest;
var PostDeleteInstanceEventWindowResponse = /** @class */ (function (_super) {
    __extends(PostDeleteInstanceEventWindowResponse, _super);
    function PostDeleteInstanceEventWindowResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteInstanceEventWindowResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteInstanceEventWindowResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteInstanceEventWindowResponse.prototype, "statusCode", void 0);
    return PostDeleteInstanceEventWindowResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteInstanceEventWindowResponse = PostDeleteInstanceEventWindowResponse;
