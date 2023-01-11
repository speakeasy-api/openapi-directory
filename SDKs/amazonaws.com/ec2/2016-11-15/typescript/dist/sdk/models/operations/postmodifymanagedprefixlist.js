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
exports.PostModifyManagedPrefixListResponse = exports.PostModifyManagedPrefixListRequest = exports.PostModifyManagedPrefixListHeaders = exports.PostModifyManagedPrefixListQueryParams = exports.PostModifyManagedPrefixListVersionEnum = exports.PostModifyManagedPrefixListActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyManagedPrefixListActionEnum;
(function (PostModifyManagedPrefixListActionEnum) {
    PostModifyManagedPrefixListActionEnum["ModifyManagedPrefixList"] = "ModifyManagedPrefixList";
})(PostModifyManagedPrefixListActionEnum = exports.PostModifyManagedPrefixListActionEnum || (exports.PostModifyManagedPrefixListActionEnum = {}));
var PostModifyManagedPrefixListVersionEnum;
(function (PostModifyManagedPrefixListVersionEnum) {
    PostModifyManagedPrefixListVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyManagedPrefixListVersionEnum = exports.PostModifyManagedPrefixListVersionEnum || (exports.PostModifyManagedPrefixListVersionEnum = {}));
var PostModifyManagedPrefixListQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyManagedPrefixListQueryParams, _super);
    function PostModifyManagedPrefixListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListQueryParams.prototype, "version", void 0);
    return PostModifyManagedPrefixListQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyManagedPrefixListQueryParams = PostModifyManagedPrefixListQueryParams;
var PostModifyManagedPrefixListHeaders = /** @class */ (function (_super) {
    __extends(PostModifyManagedPrefixListHeaders, _super);
    function PostModifyManagedPrefixListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyManagedPrefixListHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyManagedPrefixListHeaders = PostModifyManagedPrefixListHeaders;
var PostModifyManagedPrefixListRequest = /** @class */ (function (_super) {
    __extends(PostModifyManagedPrefixListRequest, _super);
    function PostModifyManagedPrefixListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyManagedPrefixListQueryParams)
    ], PostModifyManagedPrefixListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyManagedPrefixListHeaders)
    ], PostModifyManagedPrefixListRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyManagedPrefixListRequest.prototype, "request", void 0);
    return PostModifyManagedPrefixListRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyManagedPrefixListRequest = PostModifyManagedPrefixListRequest;
var PostModifyManagedPrefixListResponse = /** @class */ (function (_super) {
    __extends(PostModifyManagedPrefixListResponse, _super);
    function PostModifyManagedPrefixListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostModifyManagedPrefixListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyManagedPrefixListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyManagedPrefixListResponse.prototype, "statusCode", void 0);
    return PostModifyManagedPrefixListResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyManagedPrefixListResponse = PostModifyManagedPrefixListResponse;
