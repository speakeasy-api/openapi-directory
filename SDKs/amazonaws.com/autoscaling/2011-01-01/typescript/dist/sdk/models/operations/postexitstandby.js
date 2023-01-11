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
exports.PostExitStandbyResponse = exports.PostExitStandbyRequest = exports.PostExitStandbyHeaders = exports.PostExitStandbyQueryParams = exports.PostExitStandbyVersionEnum = exports.PostExitStandbyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostExitStandbyActionEnum;
(function (PostExitStandbyActionEnum) {
    PostExitStandbyActionEnum["ExitStandby"] = "ExitStandby";
})(PostExitStandbyActionEnum = exports.PostExitStandbyActionEnum || (exports.PostExitStandbyActionEnum = {}));
var PostExitStandbyVersionEnum;
(function (PostExitStandbyVersionEnum) {
    PostExitStandbyVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostExitStandbyVersionEnum = exports.PostExitStandbyVersionEnum || (exports.PostExitStandbyVersionEnum = {}));
var PostExitStandbyQueryParams = /** @class */ (function (_super) {
    __extends(PostExitStandbyQueryParams, _super);
    function PostExitStandbyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostExitStandbyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostExitStandbyQueryParams.prototype, "version", void 0);
    return PostExitStandbyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostExitStandbyQueryParams = PostExitStandbyQueryParams;
var PostExitStandbyHeaders = /** @class */ (function (_super) {
    __extends(PostExitStandbyHeaders, _super);
    function PostExitStandbyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostExitStandbyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostExitStandbyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostExitStandbyHeaders = PostExitStandbyHeaders;
var PostExitStandbyRequest = /** @class */ (function (_super) {
    __extends(PostExitStandbyRequest, _super);
    function PostExitStandbyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostExitStandbyQueryParams)
    ], PostExitStandbyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostExitStandbyHeaders)
    ], PostExitStandbyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostExitStandbyRequest.prototype, "request", void 0);
    return PostExitStandbyRequest;
}(utils_1.SpeakeasyBase));
exports.PostExitStandbyRequest = PostExitStandbyRequest;
var PostExitStandbyResponse = /** @class */ (function (_super) {
    __extends(PostExitStandbyResponse, _super);
    function PostExitStandbyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostExitStandbyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostExitStandbyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostExitStandbyResponse.prototype, "statusCode", void 0);
    return PostExitStandbyResponse;
}(utils_1.SpeakeasyBase));
exports.PostExitStandbyResponse = PostExitStandbyResponse;
