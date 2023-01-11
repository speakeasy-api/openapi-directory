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
exports.PostDeleteRuleResponse = exports.PostDeleteRuleRequest = exports.PostDeleteRuleHeaders = exports.PostDeleteRuleQueryParams = exports.PostDeleteRuleVersionEnum = exports.PostDeleteRuleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteRuleActionEnum;
(function (PostDeleteRuleActionEnum) {
    PostDeleteRuleActionEnum["DeleteRule"] = "DeleteRule";
})(PostDeleteRuleActionEnum = exports.PostDeleteRuleActionEnum || (exports.PostDeleteRuleActionEnum = {}));
var PostDeleteRuleVersionEnum;
(function (PostDeleteRuleVersionEnum) {
    PostDeleteRuleVersionEnum["TwoThousandAndFifteen1201"] = "2015-12-01";
})(PostDeleteRuleVersionEnum = exports.PostDeleteRuleVersionEnum || (exports.PostDeleteRuleVersionEnum = {}));
var PostDeleteRuleQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteRuleQueryParams, _super);
    function PostDeleteRuleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteRuleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteRuleQueryParams.prototype, "version", void 0);
    return PostDeleteRuleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRuleQueryParams = PostDeleteRuleQueryParams;
var PostDeleteRuleHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteRuleHeaders, _super);
    function PostDeleteRuleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteRuleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteRuleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRuleHeaders = PostDeleteRuleHeaders;
var PostDeleteRuleRequest = /** @class */ (function (_super) {
    __extends(PostDeleteRuleRequest, _super);
    function PostDeleteRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteRuleQueryParams)
    ], PostDeleteRuleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteRuleHeaders)
    ], PostDeleteRuleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRuleRequest.prototype, "request", void 0);
    return PostDeleteRuleRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRuleRequest = PostDeleteRuleRequest;
var PostDeleteRuleResponse = /** @class */ (function (_super) {
    __extends(PostDeleteRuleResponse, _super);
    function PostDeleteRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteRuleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteRuleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteRuleResponse.prototype, "statusCode", void 0);
    return PostDeleteRuleResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteRuleResponse = PostDeleteRuleResponse;
