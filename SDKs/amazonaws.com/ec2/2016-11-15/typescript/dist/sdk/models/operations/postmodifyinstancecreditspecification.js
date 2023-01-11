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
exports.PostModifyInstanceCreditSpecificationResponse = exports.PostModifyInstanceCreditSpecificationRequest = exports.PostModifyInstanceCreditSpecificationHeaders = exports.PostModifyInstanceCreditSpecificationQueryParams = exports.PostModifyInstanceCreditSpecificationVersionEnum = exports.PostModifyInstanceCreditSpecificationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyInstanceCreditSpecificationActionEnum;
(function (PostModifyInstanceCreditSpecificationActionEnum) {
    PostModifyInstanceCreditSpecificationActionEnum["ModifyInstanceCreditSpecification"] = "ModifyInstanceCreditSpecification";
})(PostModifyInstanceCreditSpecificationActionEnum = exports.PostModifyInstanceCreditSpecificationActionEnum || (exports.PostModifyInstanceCreditSpecificationActionEnum = {}));
var PostModifyInstanceCreditSpecificationVersionEnum;
(function (PostModifyInstanceCreditSpecificationVersionEnum) {
    PostModifyInstanceCreditSpecificationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyInstanceCreditSpecificationVersionEnum = exports.PostModifyInstanceCreditSpecificationVersionEnum || (exports.PostModifyInstanceCreditSpecificationVersionEnum = {}));
var PostModifyInstanceCreditSpecificationQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyInstanceCreditSpecificationQueryParams, _super);
    function PostModifyInstanceCreditSpecificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationQueryParams.prototype, "version", void 0);
    return PostModifyInstanceCreditSpecificationQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyInstanceCreditSpecificationQueryParams = PostModifyInstanceCreditSpecificationQueryParams;
var PostModifyInstanceCreditSpecificationHeaders = /** @class */ (function (_super) {
    __extends(PostModifyInstanceCreditSpecificationHeaders, _super);
    function PostModifyInstanceCreditSpecificationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyInstanceCreditSpecificationHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyInstanceCreditSpecificationHeaders = PostModifyInstanceCreditSpecificationHeaders;
var PostModifyInstanceCreditSpecificationRequest = /** @class */ (function (_super) {
    __extends(PostModifyInstanceCreditSpecificationRequest, _super);
    function PostModifyInstanceCreditSpecificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyInstanceCreditSpecificationQueryParams)
    ], PostModifyInstanceCreditSpecificationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyInstanceCreditSpecificationHeaders)
    ], PostModifyInstanceCreditSpecificationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyInstanceCreditSpecificationRequest.prototype, "request", void 0);
    return PostModifyInstanceCreditSpecificationRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyInstanceCreditSpecificationRequest = PostModifyInstanceCreditSpecificationRequest;
var PostModifyInstanceCreditSpecificationResponse = /** @class */ (function (_super) {
    __extends(PostModifyInstanceCreditSpecificationResponse, _super);
    function PostModifyInstanceCreditSpecificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyInstanceCreditSpecificationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyInstanceCreditSpecificationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyInstanceCreditSpecificationResponse.prototype, "statusCode", void 0);
    return PostModifyInstanceCreditSpecificationResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyInstanceCreditSpecificationResponse = PostModifyInstanceCreditSpecificationResponse;
