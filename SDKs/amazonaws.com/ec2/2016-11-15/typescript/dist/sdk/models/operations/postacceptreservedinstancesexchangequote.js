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
exports.PostAcceptReservedInstancesExchangeQuoteResponse = exports.PostAcceptReservedInstancesExchangeQuoteRequest = exports.PostAcceptReservedInstancesExchangeQuoteHeaders = exports.PostAcceptReservedInstancesExchangeQuoteQueryParams = exports.PostAcceptReservedInstancesExchangeQuoteVersionEnum = exports.PostAcceptReservedInstancesExchangeQuoteActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAcceptReservedInstancesExchangeQuoteActionEnum;
(function (PostAcceptReservedInstancesExchangeQuoteActionEnum) {
    PostAcceptReservedInstancesExchangeQuoteActionEnum["AcceptReservedInstancesExchangeQuote"] = "AcceptReservedInstancesExchangeQuote";
})(PostAcceptReservedInstancesExchangeQuoteActionEnum = exports.PostAcceptReservedInstancesExchangeQuoteActionEnum || (exports.PostAcceptReservedInstancesExchangeQuoteActionEnum = {}));
var PostAcceptReservedInstancesExchangeQuoteVersionEnum;
(function (PostAcceptReservedInstancesExchangeQuoteVersionEnum) {
    PostAcceptReservedInstancesExchangeQuoteVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAcceptReservedInstancesExchangeQuoteVersionEnum = exports.PostAcceptReservedInstancesExchangeQuoteVersionEnum || (exports.PostAcceptReservedInstancesExchangeQuoteVersionEnum = {}));
var PostAcceptReservedInstancesExchangeQuoteQueryParams = /** @class */ (function (_super) {
    __extends(PostAcceptReservedInstancesExchangeQuoteQueryParams, _super);
    function PostAcceptReservedInstancesExchangeQuoteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteQueryParams.prototype, "version", void 0);
    return PostAcceptReservedInstancesExchangeQuoteQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAcceptReservedInstancesExchangeQuoteQueryParams = PostAcceptReservedInstancesExchangeQuoteQueryParams;
var PostAcceptReservedInstancesExchangeQuoteHeaders = /** @class */ (function (_super) {
    __extends(PostAcceptReservedInstancesExchangeQuoteHeaders, _super);
    function PostAcceptReservedInstancesExchangeQuoteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAcceptReservedInstancesExchangeQuoteHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAcceptReservedInstancesExchangeQuoteHeaders = PostAcceptReservedInstancesExchangeQuoteHeaders;
var PostAcceptReservedInstancesExchangeQuoteRequest = /** @class */ (function (_super) {
    __extends(PostAcceptReservedInstancesExchangeQuoteRequest, _super);
    function PostAcceptReservedInstancesExchangeQuoteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAcceptReservedInstancesExchangeQuoteQueryParams)
    ], PostAcceptReservedInstancesExchangeQuoteRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAcceptReservedInstancesExchangeQuoteHeaders)
    ], PostAcceptReservedInstancesExchangeQuoteRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAcceptReservedInstancesExchangeQuoteRequest.prototype, "request", void 0);
    return PostAcceptReservedInstancesExchangeQuoteRequest;
}(utils_1.SpeakeasyBase));
exports.PostAcceptReservedInstancesExchangeQuoteRequest = PostAcceptReservedInstancesExchangeQuoteRequest;
var PostAcceptReservedInstancesExchangeQuoteResponse = /** @class */ (function (_super) {
    __extends(PostAcceptReservedInstancesExchangeQuoteResponse, _super);
    function PostAcceptReservedInstancesExchangeQuoteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAcceptReservedInstancesExchangeQuoteResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAcceptReservedInstancesExchangeQuoteResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAcceptReservedInstancesExchangeQuoteResponse.prototype, "statusCode", void 0);
    return PostAcceptReservedInstancesExchangeQuoteResponse;
}(utils_1.SpeakeasyBase));
exports.PostAcceptReservedInstancesExchangeQuoteResponse = PostAcceptReservedInstancesExchangeQuoteResponse;
