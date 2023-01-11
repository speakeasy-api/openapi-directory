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
exports.PostAddRoleToDbInstanceResponse = exports.PostAddRoleToDbInstanceRequest = exports.PostAddRoleToDbInstanceHeaders = exports.PostAddRoleToDbInstanceQueryParams = exports.PostAddRoleToDbInstanceVersionEnum = exports.PostAddRoleToDbInstanceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAddRoleToDbInstanceActionEnum;
(function (PostAddRoleToDbInstanceActionEnum) {
    PostAddRoleToDbInstanceActionEnum["AddRoleToDbInstance"] = "AddRoleToDBInstance";
})(PostAddRoleToDbInstanceActionEnum = exports.PostAddRoleToDbInstanceActionEnum || (exports.PostAddRoleToDbInstanceActionEnum = {}));
var PostAddRoleToDbInstanceVersionEnum;
(function (PostAddRoleToDbInstanceVersionEnum) {
    PostAddRoleToDbInstanceVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostAddRoleToDbInstanceVersionEnum = exports.PostAddRoleToDbInstanceVersionEnum || (exports.PostAddRoleToDbInstanceVersionEnum = {}));
var PostAddRoleToDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbInstanceQueryParams, _super);
    function PostAddRoleToDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceQueryParams.prototype, "version", void 0);
    return PostAddRoleToDbInstanceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAddRoleToDbInstanceQueryParams = PostAddRoleToDbInstanceQueryParams;
var PostAddRoleToDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbInstanceHeaders, _super);
    function PostAddRoleToDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAddRoleToDbInstanceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAddRoleToDbInstanceHeaders = PostAddRoleToDbInstanceHeaders;
var PostAddRoleToDbInstanceRequest = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbInstanceRequest, _super);
    function PostAddRoleToDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAddRoleToDbInstanceQueryParams)
    ], PostAddRoleToDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAddRoleToDbInstanceHeaders)
    ], PostAddRoleToDbInstanceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAddRoleToDbInstanceRequest.prototype, "request", void 0);
    return PostAddRoleToDbInstanceRequest;
}(utils_1.SpeakeasyBase));
exports.PostAddRoleToDbInstanceRequest = PostAddRoleToDbInstanceRequest;
var PostAddRoleToDbInstanceResponse = /** @class */ (function (_super) {
    __extends(PostAddRoleToDbInstanceResponse, _super);
    function PostAddRoleToDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAddRoleToDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAddRoleToDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAddRoleToDbInstanceResponse.prototype, "statusCode", void 0);
    return PostAddRoleToDbInstanceResponse;
}(utils_1.SpeakeasyBase));
exports.PostAddRoleToDbInstanceResponse = PostAddRoleToDbInstanceResponse;
