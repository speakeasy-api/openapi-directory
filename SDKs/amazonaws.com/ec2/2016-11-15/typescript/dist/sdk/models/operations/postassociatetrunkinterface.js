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
exports.PostAssociateTrunkInterfaceResponse = exports.PostAssociateTrunkInterfaceRequest = exports.PostAssociateTrunkInterfaceHeaders = exports.PostAssociateTrunkInterfaceQueryParams = exports.PostAssociateTrunkInterfaceVersionEnum = exports.PostAssociateTrunkInterfaceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssociateTrunkInterfaceActionEnum;
(function (PostAssociateTrunkInterfaceActionEnum) {
    PostAssociateTrunkInterfaceActionEnum["AssociateTrunkInterface"] = "AssociateTrunkInterface";
})(PostAssociateTrunkInterfaceActionEnum = exports.PostAssociateTrunkInterfaceActionEnum || (exports.PostAssociateTrunkInterfaceActionEnum = {}));
var PostAssociateTrunkInterfaceVersionEnum;
(function (PostAssociateTrunkInterfaceVersionEnum) {
    PostAssociateTrunkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssociateTrunkInterfaceVersionEnum = exports.PostAssociateTrunkInterfaceVersionEnum || (exports.PostAssociateTrunkInterfaceVersionEnum = {}));
var PostAssociateTrunkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(PostAssociateTrunkInterfaceQueryParams, _super);
    function PostAssociateTrunkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceQueryParams.prototype, "version", void 0);
    return PostAssociateTrunkInterfaceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAssociateTrunkInterfaceQueryParams = PostAssociateTrunkInterfaceQueryParams;
var PostAssociateTrunkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(PostAssociateTrunkInterfaceHeaders, _super);
    function PostAssociateTrunkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssociateTrunkInterfaceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAssociateTrunkInterfaceHeaders = PostAssociateTrunkInterfaceHeaders;
var PostAssociateTrunkInterfaceRequest = /** @class */ (function (_super) {
    __extends(PostAssociateTrunkInterfaceRequest, _super);
    function PostAssociateTrunkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssociateTrunkInterfaceQueryParams)
    ], PostAssociateTrunkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssociateTrunkInterfaceHeaders)
    ], PostAssociateTrunkInterfaceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssociateTrunkInterfaceRequest.prototype, "request", void 0);
    return PostAssociateTrunkInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssociateTrunkInterfaceRequest = PostAssociateTrunkInterfaceRequest;
var PostAssociateTrunkInterfaceResponse = /** @class */ (function (_super) {
    __extends(PostAssociateTrunkInterfaceResponse, _super);
    function PostAssociateTrunkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAssociateTrunkInterfaceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssociateTrunkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssociateTrunkInterfaceResponse.prototype, "statusCode", void 0);
    return PostAssociateTrunkInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssociateTrunkInterfaceResponse = PostAssociateTrunkInterfaceResponse;
