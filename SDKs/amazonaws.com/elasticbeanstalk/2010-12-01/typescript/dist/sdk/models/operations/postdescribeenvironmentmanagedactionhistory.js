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
exports.PostDescribeEnvironmentManagedActionHistoryResponse = exports.PostDescribeEnvironmentManagedActionHistoryRequest = exports.PostDescribeEnvironmentManagedActionHistoryHeaders = exports.PostDescribeEnvironmentManagedActionHistoryQueryParams = exports.PostDescribeEnvironmentManagedActionHistoryVersionEnum = exports.PostDescribeEnvironmentManagedActionHistoryActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeEnvironmentManagedActionHistoryActionEnum;
(function (PostDescribeEnvironmentManagedActionHistoryActionEnum) {
    PostDescribeEnvironmentManagedActionHistoryActionEnum["DescribeEnvironmentManagedActionHistory"] = "DescribeEnvironmentManagedActionHistory";
})(PostDescribeEnvironmentManagedActionHistoryActionEnum = exports.PostDescribeEnvironmentManagedActionHistoryActionEnum || (exports.PostDescribeEnvironmentManagedActionHistoryActionEnum = {}));
var PostDescribeEnvironmentManagedActionHistoryVersionEnum;
(function (PostDescribeEnvironmentManagedActionHistoryVersionEnum) {
    PostDescribeEnvironmentManagedActionHistoryVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDescribeEnvironmentManagedActionHistoryVersionEnum = exports.PostDescribeEnvironmentManagedActionHistoryVersionEnum || (exports.PostDescribeEnvironmentManagedActionHistoryVersionEnum = {}));
var PostDescribeEnvironmentManagedActionHistoryQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionHistoryQueryParams, _super);
    function PostDescribeEnvironmentManagedActionHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryQueryParams.prototype, "version", void 0);
    return PostDescribeEnvironmentManagedActionHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEnvironmentManagedActionHistoryQueryParams = PostDescribeEnvironmentManagedActionHistoryQueryParams;
var PostDescribeEnvironmentManagedActionHistoryHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionHistoryHeaders, _super);
    function PostDescribeEnvironmentManagedActionHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEnvironmentManagedActionHistoryHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEnvironmentManagedActionHistoryHeaders = PostDescribeEnvironmentManagedActionHistoryHeaders;
var PostDescribeEnvironmentManagedActionHistoryRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionHistoryRequest, _super);
    function PostDescribeEnvironmentManagedActionHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEnvironmentManagedActionHistoryQueryParams)
    ], PostDescribeEnvironmentManagedActionHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEnvironmentManagedActionHistoryHeaders)
    ], PostDescribeEnvironmentManagedActionHistoryRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentManagedActionHistoryRequest.prototype, "request", void 0);
    return PostDescribeEnvironmentManagedActionHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEnvironmentManagedActionHistoryRequest = PostDescribeEnvironmentManagedActionHistoryRequest;
var PostDescribeEnvironmentManagedActionHistoryResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEnvironmentManagedActionHistoryResponse, _super);
    function PostDescribeEnvironmentManagedActionHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEnvironmentManagedActionHistoryResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeEnvironmentManagedActionHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeEnvironmentManagedActionHistoryResponse.prototype, "statusCode", void 0);
    return PostDescribeEnvironmentManagedActionHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEnvironmentManagedActionHistoryResponse = PostDescribeEnvironmentManagedActionHistoryResponse;
