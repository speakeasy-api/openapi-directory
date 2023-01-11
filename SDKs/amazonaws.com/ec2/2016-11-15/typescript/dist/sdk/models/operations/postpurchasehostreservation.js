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
exports.PostPurchaseHostReservationResponse = exports.PostPurchaseHostReservationRequest = exports.PostPurchaseHostReservationHeaders = exports.PostPurchaseHostReservationQueryParams = exports.PostPurchaseHostReservationVersionEnum = exports.PostPurchaseHostReservationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPurchaseHostReservationActionEnum;
(function (PostPurchaseHostReservationActionEnum) {
    PostPurchaseHostReservationActionEnum["PurchaseHostReservation"] = "PurchaseHostReservation";
})(PostPurchaseHostReservationActionEnum = exports.PostPurchaseHostReservationActionEnum || (exports.PostPurchaseHostReservationActionEnum = {}));
var PostPurchaseHostReservationVersionEnum;
(function (PostPurchaseHostReservationVersionEnum) {
    PostPurchaseHostReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostPurchaseHostReservationVersionEnum = exports.PostPurchaseHostReservationVersionEnum || (exports.PostPurchaseHostReservationVersionEnum = {}));
var PostPurchaseHostReservationQueryParams = /** @class */ (function (_super) {
    __extends(PostPurchaseHostReservationQueryParams, _super);
    function PostPurchaseHostReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationQueryParams.prototype, "version", void 0);
    return PostPurchaseHostReservationQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPurchaseHostReservationQueryParams = PostPurchaseHostReservationQueryParams;
var PostPurchaseHostReservationHeaders = /** @class */ (function (_super) {
    __extends(PostPurchaseHostReservationHeaders, _super);
    function PostPurchaseHostReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPurchaseHostReservationHeaders;
}(utils_1.SpeakeasyBase));
exports.PostPurchaseHostReservationHeaders = PostPurchaseHostReservationHeaders;
var PostPurchaseHostReservationRequest = /** @class */ (function (_super) {
    __extends(PostPurchaseHostReservationRequest, _super);
    function PostPurchaseHostReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPurchaseHostReservationQueryParams)
    ], PostPurchaseHostReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPurchaseHostReservationHeaders)
    ], PostPurchaseHostReservationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPurchaseHostReservationRequest.prototype, "request", void 0);
    return PostPurchaseHostReservationRequest;
}(utils_1.SpeakeasyBase));
exports.PostPurchaseHostReservationRequest = PostPurchaseHostReservationRequest;
var PostPurchaseHostReservationResponse = /** @class */ (function (_super) {
    __extends(PostPurchaseHostReservationResponse, _super);
    function PostPurchaseHostReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPurchaseHostReservationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPurchaseHostReservationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPurchaseHostReservationResponse.prototype, "statusCode", void 0);
    return PostPurchaseHostReservationResponse;
}(utils_1.SpeakeasyBase));
exports.PostPurchaseHostReservationResponse = PostPurchaseHostReservationResponse;
