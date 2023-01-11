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
exports.PostModifyTransitGatewayPrefixListReferenceResponse = exports.PostModifyTransitGatewayPrefixListReferenceRequest = exports.PostModifyTransitGatewayPrefixListReferenceHeaders = exports.PostModifyTransitGatewayPrefixListReferenceQueryParams = exports.PostModifyTransitGatewayPrefixListReferenceVersionEnum = exports.PostModifyTransitGatewayPrefixListReferenceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyTransitGatewayPrefixListReferenceActionEnum;
(function (PostModifyTransitGatewayPrefixListReferenceActionEnum) {
    PostModifyTransitGatewayPrefixListReferenceActionEnum["ModifyTransitGatewayPrefixListReference"] = "ModifyTransitGatewayPrefixListReference";
})(PostModifyTransitGatewayPrefixListReferenceActionEnum = exports.PostModifyTransitGatewayPrefixListReferenceActionEnum || (exports.PostModifyTransitGatewayPrefixListReferenceActionEnum = {}));
var PostModifyTransitGatewayPrefixListReferenceVersionEnum;
(function (PostModifyTransitGatewayPrefixListReferenceVersionEnum) {
    PostModifyTransitGatewayPrefixListReferenceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyTransitGatewayPrefixListReferenceVersionEnum = exports.PostModifyTransitGatewayPrefixListReferenceVersionEnum || (exports.PostModifyTransitGatewayPrefixListReferenceVersionEnum = {}));
var PostModifyTransitGatewayPrefixListReferenceQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayPrefixListReferenceQueryParams, _super);
    function PostModifyTransitGatewayPrefixListReferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceQueryParams.prototype, "version", void 0);
    return PostModifyTransitGatewayPrefixListReferenceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyTransitGatewayPrefixListReferenceQueryParams = PostModifyTransitGatewayPrefixListReferenceQueryParams;
var PostModifyTransitGatewayPrefixListReferenceHeaders = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayPrefixListReferenceHeaders, _super);
    function PostModifyTransitGatewayPrefixListReferenceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyTransitGatewayPrefixListReferenceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyTransitGatewayPrefixListReferenceHeaders = PostModifyTransitGatewayPrefixListReferenceHeaders;
var PostModifyTransitGatewayPrefixListReferenceRequest = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayPrefixListReferenceRequest, _super);
    function PostModifyTransitGatewayPrefixListReferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyTransitGatewayPrefixListReferenceQueryParams)
    ], PostModifyTransitGatewayPrefixListReferenceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyTransitGatewayPrefixListReferenceHeaders)
    ], PostModifyTransitGatewayPrefixListReferenceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyTransitGatewayPrefixListReferenceRequest.prototype, "request", void 0);
    return PostModifyTransitGatewayPrefixListReferenceRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyTransitGatewayPrefixListReferenceRequest = PostModifyTransitGatewayPrefixListReferenceRequest;
var PostModifyTransitGatewayPrefixListReferenceResponse = /** @class */ (function (_super) {
    __extends(PostModifyTransitGatewayPrefixListReferenceResponse, _super);
    function PostModifyTransitGatewayPrefixListReferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyTransitGatewayPrefixListReferenceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyTransitGatewayPrefixListReferenceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyTransitGatewayPrefixListReferenceResponse.prototype, "statusCode", void 0);
    return PostModifyTransitGatewayPrefixListReferenceResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyTransitGatewayPrefixListReferenceResponse = PostModifyTransitGatewayPrefixListReferenceResponse;
