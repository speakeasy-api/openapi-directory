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
exports.PostDefineRankExpressionResponse = exports.PostDefineRankExpressionRequest = exports.PostDefineRankExpressionHeaders = exports.PostDefineRankExpressionQueryParams = exports.PostDefineRankExpressionVersionEnum = exports.PostDefineRankExpressionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDefineRankExpressionActionEnum;
(function (PostDefineRankExpressionActionEnum) {
    PostDefineRankExpressionActionEnum["DefineRankExpression"] = "DefineRankExpression";
})(PostDefineRankExpressionActionEnum = exports.PostDefineRankExpressionActionEnum || (exports.PostDefineRankExpressionActionEnum = {}));
var PostDefineRankExpressionVersionEnum;
(function (PostDefineRankExpressionVersionEnum) {
    PostDefineRankExpressionVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostDefineRankExpressionVersionEnum = exports.PostDefineRankExpressionVersionEnum || (exports.PostDefineRankExpressionVersionEnum = {}));
var PostDefineRankExpressionQueryParams = /** @class */ (function (_super) {
    __extends(PostDefineRankExpressionQueryParams, _super);
    function PostDefineRankExpressionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionQueryParams.prototype, "version", void 0);
    return PostDefineRankExpressionQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDefineRankExpressionQueryParams = PostDefineRankExpressionQueryParams;
var PostDefineRankExpressionHeaders = /** @class */ (function (_super) {
    __extends(PostDefineRankExpressionHeaders, _super);
    function PostDefineRankExpressionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDefineRankExpressionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDefineRankExpressionHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDefineRankExpressionHeaders = PostDefineRankExpressionHeaders;
var PostDefineRankExpressionRequest = /** @class */ (function (_super) {
    __extends(PostDefineRankExpressionRequest, _super);
    function PostDefineRankExpressionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDefineRankExpressionQueryParams)
    ], PostDefineRankExpressionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDefineRankExpressionHeaders)
    ], PostDefineRankExpressionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDefineRankExpressionRequest.prototype, "request", void 0);
    return PostDefineRankExpressionRequest;
}(utils_1.SpeakeasyBase));
exports.PostDefineRankExpressionRequest = PostDefineRankExpressionRequest;
var PostDefineRankExpressionResponse = /** @class */ (function (_super) {
    __extends(PostDefineRankExpressionResponse, _super);
    function PostDefineRankExpressionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDefineRankExpressionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDefineRankExpressionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDefineRankExpressionResponse.prototype, "statusCode", void 0);
    return PostDefineRankExpressionResponse;
}(utils_1.SpeakeasyBase));
exports.PostDefineRankExpressionResponse = PostDefineRankExpressionResponse;
