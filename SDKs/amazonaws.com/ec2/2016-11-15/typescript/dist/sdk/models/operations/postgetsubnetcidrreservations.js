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
exports.PostGetSubnetCidrReservationsResponse = exports.PostGetSubnetCidrReservationsRequest = exports.PostGetSubnetCidrReservationsHeaders = exports.PostGetSubnetCidrReservationsQueryParams = exports.PostGetSubnetCidrReservationsVersionEnum = exports.PostGetSubnetCidrReservationsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetSubnetCidrReservationsActionEnum;
(function (PostGetSubnetCidrReservationsActionEnum) {
    PostGetSubnetCidrReservationsActionEnum["GetSubnetCidrReservations"] = "GetSubnetCidrReservations";
})(PostGetSubnetCidrReservationsActionEnum = exports.PostGetSubnetCidrReservationsActionEnum || (exports.PostGetSubnetCidrReservationsActionEnum = {}));
var PostGetSubnetCidrReservationsVersionEnum;
(function (PostGetSubnetCidrReservationsVersionEnum) {
    PostGetSubnetCidrReservationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetSubnetCidrReservationsVersionEnum = exports.PostGetSubnetCidrReservationsVersionEnum || (exports.PostGetSubnetCidrReservationsVersionEnum = {}));
var PostGetSubnetCidrReservationsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetSubnetCidrReservationsQueryParams, _super);
    function PostGetSubnetCidrReservationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsQueryParams.prototype, "version", void 0);
    return PostGetSubnetCidrReservationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetSubnetCidrReservationsQueryParams = PostGetSubnetCidrReservationsQueryParams;
var PostGetSubnetCidrReservationsHeaders = /** @class */ (function (_super) {
    __extends(PostGetSubnetCidrReservationsHeaders, _super);
    function PostGetSubnetCidrReservationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetSubnetCidrReservationsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetSubnetCidrReservationsHeaders = PostGetSubnetCidrReservationsHeaders;
var PostGetSubnetCidrReservationsRequest = /** @class */ (function (_super) {
    __extends(PostGetSubnetCidrReservationsRequest, _super);
    function PostGetSubnetCidrReservationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetSubnetCidrReservationsQueryParams)
    ], PostGetSubnetCidrReservationsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetSubnetCidrReservationsHeaders)
    ], PostGetSubnetCidrReservationsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetSubnetCidrReservationsRequest.prototype, "request", void 0);
    return PostGetSubnetCidrReservationsRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetSubnetCidrReservationsRequest = PostGetSubnetCidrReservationsRequest;
var PostGetSubnetCidrReservationsResponse = /** @class */ (function (_super) {
    __extends(PostGetSubnetCidrReservationsResponse, _super);
    function PostGetSubnetCidrReservationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetSubnetCidrReservationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetSubnetCidrReservationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetSubnetCidrReservationsResponse.prototype, "statusCode", void 0);
    return PostGetSubnetCidrReservationsResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetSubnetCidrReservationsResponse = PostGetSubnetCidrReservationsResponse;
