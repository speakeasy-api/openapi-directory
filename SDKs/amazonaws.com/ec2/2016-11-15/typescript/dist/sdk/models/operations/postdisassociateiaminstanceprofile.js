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
exports.PostDisassociateIamInstanceProfileResponse = exports.PostDisassociateIamInstanceProfileRequest = exports.PostDisassociateIamInstanceProfileHeaders = exports.PostDisassociateIamInstanceProfileQueryParams = exports.PostDisassociateIamInstanceProfileVersionEnum = exports.PostDisassociateIamInstanceProfileActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDisassociateIamInstanceProfileActionEnum;
(function (PostDisassociateIamInstanceProfileActionEnum) {
    PostDisassociateIamInstanceProfileActionEnum["DisassociateIamInstanceProfile"] = "DisassociateIamInstanceProfile";
})(PostDisassociateIamInstanceProfileActionEnum = exports.PostDisassociateIamInstanceProfileActionEnum || (exports.PostDisassociateIamInstanceProfileActionEnum = {}));
var PostDisassociateIamInstanceProfileVersionEnum;
(function (PostDisassociateIamInstanceProfileVersionEnum) {
    PostDisassociateIamInstanceProfileVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDisassociateIamInstanceProfileVersionEnum = exports.PostDisassociateIamInstanceProfileVersionEnum || (exports.PostDisassociateIamInstanceProfileVersionEnum = {}));
var PostDisassociateIamInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(PostDisassociateIamInstanceProfileQueryParams, _super);
    function PostDisassociateIamInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileQueryParams.prototype, "version", void 0);
    return PostDisassociateIamInstanceProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateIamInstanceProfileQueryParams = PostDisassociateIamInstanceProfileQueryParams;
var PostDisassociateIamInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(PostDisassociateIamInstanceProfileHeaders, _super);
    function PostDisassociateIamInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDisassociateIamInstanceProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateIamInstanceProfileHeaders = PostDisassociateIamInstanceProfileHeaders;
var PostDisassociateIamInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(PostDisassociateIamInstanceProfileRequest, _super);
    function PostDisassociateIamInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDisassociateIamInstanceProfileQueryParams)
    ], PostDisassociateIamInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDisassociateIamInstanceProfileHeaders)
    ], PostDisassociateIamInstanceProfileRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateIamInstanceProfileRequest.prototype, "request", void 0);
    return PostDisassociateIamInstanceProfileRequest;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateIamInstanceProfileRequest = PostDisassociateIamInstanceProfileRequest;
var PostDisassociateIamInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(PostDisassociateIamInstanceProfileResponse, _super);
    function PostDisassociateIamInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDisassociateIamInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDisassociateIamInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDisassociateIamInstanceProfileResponse.prototype, "statusCode", void 0);
    return PostDisassociateIamInstanceProfileResponse;
}(utils_1.SpeakeasyBase));
exports.PostDisassociateIamInstanceProfileResponse = PostDisassociateIamInstanceProfileResponse;
