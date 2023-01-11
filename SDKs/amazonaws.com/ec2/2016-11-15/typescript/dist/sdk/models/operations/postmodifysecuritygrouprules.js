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
exports.PostModifySecurityGroupRulesResponse = exports.PostModifySecurityGroupRulesRequest = exports.PostModifySecurityGroupRulesHeaders = exports.PostModifySecurityGroupRulesQueryParams = exports.PostModifySecurityGroupRulesVersionEnum = exports.PostModifySecurityGroupRulesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifySecurityGroupRulesActionEnum;
(function (PostModifySecurityGroupRulesActionEnum) {
    PostModifySecurityGroupRulesActionEnum["ModifySecurityGroupRules"] = "ModifySecurityGroupRules";
})(PostModifySecurityGroupRulesActionEnum = exports.PostModifySecurityGroupRulesActionEnum || (exports.PostModifySecurityGroupRulesActionEnum = {}));
var PostModifySecurityGroupRulesVersionEnum;
(function (PostModifySecurityGroupRulesVersionEnum) {
    PostModifySecurityGroupRulesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifySecurityGroupRulesVersionEnum = exports.PostModifySecurityGroupRulesVersionEnum || (exports.PostModifySecurityGroupRulesVersionEnum = {}));
var PostModifySecurityGroupRulesQueryParams = /** @class */ (function (_super) {
    __extends(PostModifySecurityGroupRulesQueryParams, _super);
    function PostModifySecurityGroupRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesQueryParams.prototype, "version", void 0);
    return PostModifySecurityGroupRulesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifySecurityGroupRulesQueryParams = PostModifySecurityGroupRulesQueryParams;
var PostModifySecurityGroupRulesHeaders = /** @class */ (function (_super) {
    __extends(PostModifySecurityGroupRulesHeaders, _super);
    function PostModifySecurityGroupRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifySecurityGroupRulesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifySecurityGroupRulesHeaders = PostModifySecurityGroupRulesHeaders;
var PostModifySecurityGroupRulesRequest = /** @class */ (function (_super) {
    __extends(PostModifySecurityGroupRulesRequest, _super);
    function PostModifySecurityGroupRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifySecurityGroupRulesQueryParams)
    ], PostModifySecurityGroupRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifySecurityGroupRulesHeaders)
    ], PostModifySecurityGroupRulesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifySecurityGroupRulesRequest.prototype, "request", void 0);
    return PostModifySecurityGroupRulesRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifySecurityGroupRulesRequest = PostModifySecurityGroupRulesRequest;
var PostModifySecurityGroupRulesResponse = /** @class */ (function (_super) {
    __extends(PostModifySecurityGroupRulesResponse, _super);
    function PostModifySecurityGroupRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifySecurityGroupRulesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifySecurityGroupRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifySecurityGroupRulesResponse.prototype, "statusCode", void 0);
    return PostModifySecurityGroupRulesResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifySecurityGroupRulesResponse = PostModifySecurityGroupRulesResponse;
