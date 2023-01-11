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
exports.PostCreateTrafficMirrorTargetResponse = exports.PostCreateTrafficMirrorTargetRequest = exports.PostCreateTrafficMirrorTargetHeaders = exports.PostCreateTrafficMirrorTargetQueryParams = exports.PostCreateTrafficMirrorTargetVersionEnum = exports.PostCreateTrafficMirrorTargetActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateTrafficMirrorTargetActionEnum;
(function (PostCreateTrafficMirrorTargetActionEnum) {
    PostCreateTrafficMirrorTargetActionEnum["CreateTrafficMirrorTarget"] = "CreateTrafficMirrorTarget";
})(PostCreateTrafficMirrorTargetActionEnum = exports.PostCreateTrafficMirrorTargetActionEnum || (exports.PostCreateTrafficMirrorTargetActionEnum = {}));
var PostCreateTrafficMirrorTargetVersionEnum;
(function (PostCreateTrafficMirrorTargetVersionEnum) {
    PostCreateTrafficMirrorTargetVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCreateTrafficMirrorTargetVersionEnum = exports.PostCreateTrafficMirrorTargetVersionEnum || (exports.PostCreateTrafficMirrorTargetVersionEnum = {}));
var PostCreateTrafficMirrorTargetQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorTargetQueryParams, _super);
    function PostCreateTrafficMirrorTargetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetQueryParams.prototype, "version", void 0);
    return PostCreateTrafficMirrorTargetQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateTrafficMirrorTargetQueryParams = PostCreateTrafficMirrorTargetQueryParams;
var PostCreateTrafficMirrorTargetHeaders = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorTargetHeaders, _super);
    function PostCreateTrafficMirrorTargetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateTrafficMirrorTargetHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateTrafficMirrorTargetHeaders = PostCreateTrafficMirrorTargetHeaders;
var PostCreateTrafficMirrorTargetRequest = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorTargetRequest, _super);
    function PostCreateTrafficMirrorTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTrafficMirrorTargetQueryParams)
    ], PostCreateTrafficMirrorTargetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateTrafficMirrorTargetHeaders)
    ], PostCreateTrafficMirrorTargetRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorTargetRequest.prototype, "request", void 0);
    return PostCreateTrafficMirrorTargetRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateTrafficMirrorTargetRequest = PostCreateTrafficMirrorTargetRequest;
var PostCreateTrafficMirrorTargetResponse = /** @class */ (function (_super) {
    __extends(PostCreateTrafficMirrorTargetResponse, _super);
    function PostCreateTrafficMirrorTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateTrafficMirrorTargetResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateTrafficMirrorTargetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateTrafficMirrorTargetResponse.prototype, "statusCode", void 0);
    return PostCreateTrafficMirrorTargetResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateTrafficMirrorTargetResponse = PostCreateTrafficMirrorTargetResponse;
