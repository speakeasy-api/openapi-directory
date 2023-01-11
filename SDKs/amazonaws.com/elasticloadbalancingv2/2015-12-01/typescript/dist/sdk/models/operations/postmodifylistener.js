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
exports.PostModifyListenerResponse = exports.PostModifyListenerRequest = exports.PostModifyListenerHeaders = exports.PostModifyListenerQueryParams = exports.PostModifyListenerVersionEnum = exports.PostModifyListenerActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyListenerActionEnum;
(function (PostModifyListenerActionEnum) {
    PostModifyListenerActionEnum["ModifyListener"] = "ModifyListener";
})(PostModifyListenerActionEnum = exports.PostModifyListenerActionEnum || (exports.PostModifyListenerActionEnum = {}));
var PostModifyListenerVersionEnum;
(function (PostModifyListenerVersionEnum) {
    PostModifyListenerVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostModifyListenerVersionEnum = exports.PostModifyListenerVersionEnum || (exports.PostModifyListenerVersionEnum = {}));
var PostModifyListenerQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyListenerQueryParams, _super);
    function PostModifyListenerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyListenerQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyListenerQueryParams.prototype, "version", void 0);
    return PostModifyListenerQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyListenerQueryParams = PostModifyListenerQueryParams;
var PostModifyListenerHeaders = /** @class */ (function (_super) {
    __extends(PostModifyListenerHeaders, _super);
    function PostModifyListenerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyListenerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyListenerHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyListenerHeaders = PostModifyListenerHeaders;
var PostModifyListenerRequest = /** @class */ (function (_super) {
    __extends(PostModifyListenerRequest, _super);
    function PostModifyListenerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyListenerQueryParams)
    ], PostModifyListenerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyListenerHeaders)
    ], PostModifyListenerRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyListenerRequest.prototype, "request", void 0);
    return PostModifyListenerRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyListenerRequest = PostModifyListenerRequest;
var PostModifyListenerResponse = /** @class */ (function (_super) {
    __extends(PostModifyListenerResponse, _super);
    function PostModifyListenerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyListenerResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyListenerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyListenerResponse.prototype, "statusCode", void 0);
    return PostModifyListenerResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyListenerResponse = PostModifyListenerResponse;
