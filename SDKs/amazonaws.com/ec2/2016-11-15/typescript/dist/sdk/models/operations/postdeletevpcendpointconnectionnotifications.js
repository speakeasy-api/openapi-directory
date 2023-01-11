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
exports.PostDeleteVpcEndpointConnectionNotificationsResponse = exports.PostDeleteVpcEndpointConnectionNotificationsRequest = exports.PostDeleteVpcEndpointConnectionNotificationsHeaders = exports.PostDeleteVpcEndpointConnectionNotificationsQueryParams = exports.PostDeleteVpcEndpointConnectionNotificationsVersionEnum = exports.PostDeleteVpcEndpointConnectionNotificationsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteVpcEndpointConnectionNotificationsActionEnum;
(function (PostDeleteVpcEndpointConnectionNotificationsActionEnum) {
    PostDeleteVpcEndpointConnectionNotificationsActionEnum["DeleteVpcEndpointConnectionNotifications"] = "DeleteVpcEndpointConnectionNotifications";
})(PostDeleteVpcEndpointConnectionNotificationsActionEnum = exports.PostDeleteVpcEndpointConnectionNotificationsActionEnum || (exports.PostDeleteVpcEndpointConnectionNotificationsActionEnum = {}));
var PostDeleteVpcEndpointConnectionNotificationsVersionEnum;
(function (PostDeleteVpcEndpointConnectionNotificationsVersionEnum) {
    PostDeleteVpcEndpointConnectionNotificationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDeleteVpcEndpointConnectionNotificationsVersionEnum = exports.PostDeleteVpcEndpointConnectionNotificationsVersionEnum || (exports.PostDeleteVpcEndpointConnectionNotificationsVersionEnum = {}));
var PostDeleteVpcEndpointConnectionNotificationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteVpcEndpointConnectionNotificationsQueryParams, _super);
    function PostDeleteVpcEndpointConnectionNotificationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsQueryParams.prototype, "version", void 0);
    return PostDeleteVpcEndpointConnectionNotificationsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpcEndpointConnectionNotificationsQueryParams = PostDeleteVpcEndpointConnectionNotificationsQueryParams;
var PostDeleteVpcEndpointConnectionNotificationsHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteVpcEndpointConnectionNotificationsHeaders, _super);
    function PostDeleteVpcEndpointConnectionNotificationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteVpcEndpointConnectionNotificationsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpcEndpointConnectionNotificationsHeaders = PostDeleteVpcEndpointConnectionNotificationsHeaders;
var PostDeleteVpcEndpointConnectionNotificationsRequest = /** @class */ (function (_super) {
    __extends(PostDeleteVpcEndpointConnectionNotificationsRequest, _super);
    function PostDeleteVpcEndpointConnectionNotificationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteVpcEndpointConnectionNotificationsQueryParams)
    ], PostDeleteVpcEndpointConnectionNotificationsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteVpcEndpointConnectionNotificationsHeaders)
    ], PostDeleteVpcEndpointConnectionNotificationsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVpcEndpointConnectionNotificationsRequest.prototype, "request", void 0);
    return PostDeleteVpcEndpointConnectionNotificationsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpcEndpointConnectionNotificationsRequest = PostDeleteVpcEndpointConnectionNotificationsRequest;
var PostDeleteVpcEndpointConnectionNotificationsResponse = /** @class */ (function (_super) {
    __extends(PostDeleteVpcEndpointConnectionNotificationsResponse, _super);
    function PostDeleteVpcEndpointConnectionNotificationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteVpcEndpointConnectionNotificationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteVpcEndpointConnectionNotificationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteVpcEndpointConnectionNotificationsResponse.prototype, "statusCode", void 0);
    return PostDeleteVpcEndpointConnectionNotificationsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteVpcEndpointConnectionNotificationsResponse = PostDeleteVpcEndpointConnectionNotificationsResponse;
