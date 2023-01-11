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
exports.PostModifyEndpointAccessResponse = exports.PostModifyEndpointAccessRequest = exports.PostModifyEndpointAccessHeaders = exports.PostModifyEndpointAccessQueryParams = exports.PostModifyEndpointAccessVersionEnum = exports.PostModifyEndpointAccessActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyEndpointAccessActionEnum;
(function (PostModifyEndpointAccessActionEnum) {
    PostModifyEndpointAccessActionEnum["ModifyEndpointAccess"] = "ModifyEndpointAccess";
})(PostModifyEndpointAccessActionEnum = exports.PostModifyEndpointAccessActionEnum || (exports.PostModifyEndpointAccessActionEnum = {}));
var PostModifyEndpointAccessVersionEnum;
(function (PostModifyEndpointAccessVersionEnum) {
    PostModifyEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostModifyEndpointAccessVersionEnum = exports.PostModifyEndpointAccessVersionEnum || (exports.PostModifyEndpointAccessVersionEnum = {}));
var PostModifyEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyEndpointAccessQueryParams, _super);
    function PostModifyEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessQueryParams.prototype, "version", void 0);
    return PostModifyEndpointAccessQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyEndpointAccessQueryParams = PostModifyEndpointAccessQueryParams;
var PostModifyEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(PostModifyEndpointAccessHeaders, _super);
    function PostModifyEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyEndpointAccessHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyEndpointAccessHeaders = PostModifyEndpointAccessHeaders;
var PostModifyEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(PostModifyEndpointAccessRequest, _super);
    function PostModifyEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyEndpointAccessQueryParams)
    ], PostModifyEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyEndpointAccessHeaders)
    ], PostModifyEndpointAccessRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyEndpointAccessRequest.prototype, "request", void 0);
    return PostModifyEndpointAccessRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyEndpointAccessRequest = PostModifyEndpointAccessRequest;
var PostModifyEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(PostModifyEndpointAccessResponse, _super);
    function PostModifyEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyEndpointAccessResponse.prototype, "statusCode", void 0);
    return PostModifyEndpointAccessResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyEndpointAccessResponse = PostModifyEndpointAccessResponse;
