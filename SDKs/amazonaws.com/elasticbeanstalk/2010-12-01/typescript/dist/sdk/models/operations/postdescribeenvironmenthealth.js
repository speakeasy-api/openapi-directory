"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.POSTDescribeEnvironmentHealthResponse = exports.POSTDescribeEnvironmentHealthRequest = exports.POSTDescribeEnvironmentHealthVersionEnum = exports.POSTDescribeEnvironmentHealthActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var POSTDescribeEnvironmentHealthActionEnum;
(function (POSTDescribeEnvironmentHealthActionEnum) {
    POSTDescribeEnvironmentHealthActionEnum["DescribeEnvironmentHealth"] = "DescribeEnvironmentHealth";
})(POSTDescribeEnvironmentHealthActionEnum = exports.POSTDescribeEnvironmentHealthActionEnum || (exports.POSTDescribeEnvironmentHealthActionEnum = {}));
var POSTDescribeEnvironmentHealthVersionEnum;
(function (POSTDescribeEnvironmentHealthVersionEnum) {
    POSTDescribeEnvironmentHealthVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(POSTDescribeEnvironmentHealthVersionEnum = exports.POSTDescribeEnvironmentHealthVersionEnum || (exports.POSTDescribeEnvironmentHealthVersionEnum = {}));
var POSTDescribeEnvironmentHealthRequest = /** @class */ (function (_super) {
    __extends(POSTDescribeEnvironmentHealthRequest, _super);
    function POSTDescribeEnvironmentHealthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Action",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Version",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthRequest.prototype, "xAmzSignedHeaders", void 0);
    return POSTDescribeEnvironmentHealthRequest;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeEnvironmentHealthRequest = POSTDescribeEnvironmentHealthRequest;
var POSTDescribeEnvironmentHealthResponse = /** @class */ (function (_super) {
    __extends(POSTDescribeEnvironmentHealthResponse, _super);
    function POSTDescribeEnvironmentHealthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeEnvironmentHealthResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], POSTDescribeEnvironmentHealthResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], POSTDescribeEnvironmentHealthResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], POSTDescribeEnvironmentHealthResponse.prototype, "rawResponse", void 0);
    return POSTDescribeEnvironmentHealthResponse;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeEnvironmentHealthResponse = POSTDescribeEnvironmentHealthResponse;
