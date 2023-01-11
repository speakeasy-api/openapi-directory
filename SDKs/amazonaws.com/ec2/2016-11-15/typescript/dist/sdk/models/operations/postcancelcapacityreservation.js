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
exports.PostCancelCapacityReservationResponse = exports.PostCancelCapacityReservationRequest = exports.PostCancelCapacityReservationHeaders = exports.PostCancelCapacityReservationQueryParams = exports.PostCancelCapacityReservationVersionEnum = exports.PostCancelCapacityReservationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCancelCapacityReservationActionEnum;
(function (PostCancelCapacityReservationActionEnum) {
    PostCancelCapacityReservationActionEnum["CancelCapacityReservation"] = "CancelCapacityReservation";
})(PostCancelCapacityReservationActionEnum = exports.PostCancelCapacityReservationActionEnum || (exports.PostCancelCapacityReservationActionEnum = {}));
var PostCancelCapacityReservationVersionEnum;
(function (PostCancelCapacityReservationVersionEnum) {
    PostCancelCapacityReservationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostCancelCapacityReservationVersionEnum = exports.PostCancelCapacityReservationVersionEnum || (exports.PostCancelCapacityReservationVersionEnum = {}));
var PostCancelCapacityReservationQueryParams = /** @class */ (function (_super) {
    __extends(PostCancelCapacityReservationQueryParams, _super);
    function PostCancelCapacityReservationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationQueryParams.prototype, "version", void 0);
    return PostCancelCapacityReservationQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCancelCapacityReservationQueryParams = PostCancelCapacityReservationQueryParams;
var PostCancelCapacityReservationHeaders = /** @class */ (function (_super) {
    __extends(PostCancelCapacityReservationHeaders, _super);
    function PostCancelCapacityReservationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCancelCapacityReservationHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCancelCapacityReservationHeaders = PostCancelCapacityReservationHeaders;
var PostCancelCapacityReservationRequest = /** @class */ (function (_super) {
    __extends(PostCancelCapacityReservationRequest, _super);
    function PostCancelCapacityReservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelCapacityReservationQueryParams)
    ], PostCancelCapacityReservationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelCapacityReservationHeaders)
    ], PostCancelCapacityReservationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCancelCapacityReservationRequest.prototype, "request", void 0);
    return PostCancelCapacityReservationRequest;
}(utils_1.SpeakeasyBase));
exports.PostCancelCapacityReservationRequest = PostCancelCapacityReservationRequest;
var PostCancelCapacityReservationResponse = /** @class */ (function (_super) {
    __extends(PostCancelCapacityReservationResponse, _super);
    function PostCancelCapacityReservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCancelCapacityReservationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCancelCapacityReservationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCancelCapacityReservationResponse.prototype, "statusCode", void 0);
    return PostCancelCapacityReservationResponse;
}(utils_1.SpeakeasyBase));
exports.PostCancelCapacityReservationResponse = PostCancelCapacityReservationResponse;
