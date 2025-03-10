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
exports.POSTDescribeClusterDbRevisionsResponse = exports.POSTDescribeClusterDbRevisionsRequest = exports.POSTDescribeClusterDbRevisionsVersionEnum = exports.POSTDescribeClusterDbRevisionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var POSTDescribeClusterDbRevisionsActionEnum;
(function (POSTDescribeClusterDbRevisionsActionEnum) {
    POSTDescribeClusterDbRevisionsActionEnum["DescribeClusterDbRevisions"] = "DescribeClusterDbRevisions";
})(POSTDescribeClusterDbRevisionsActionEnum = exports.POSTDescribeClusterDbRevisionsActionEnum || (exports.POSTDescribeClusterDbRevisionsActionEnum = {}));
var POSTDescribeClusterDbRevisionsVersionEnum;
(function (POSTDescribeClusterDbRevisionsVersionEnum) {
    POSTDescribeClusterDbRevisionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(POSTDescribeClusterDbRevisionsVersionEnum = exports.POSTDescribeClusterDbRevisionsVersionEnum || (exports.POSTDescribeClusterDbRevisionsVersionEnum = {}));
var POSTDescribeClusterDbRevisionsRequest = /** @class */ (function (_super) {
    __extends(POSTDescribeClusterDbRevisionsRequest, _super);
    function POSTDescribeClusterDbRevisionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Action",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Marker",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=MaxRecords",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Version",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsRequest.prototype, "xAmzSignedHeaders", void 0);
    return POSTDescribeClusterDbRevisionsRequest;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeClusterDbRevisionsRequest = POSTDescribeClusterDbRevisionsRequest;
var POSTDescribeClusterDbRevisionsResponse = /** @class */ (function (_super) {
    __extends(POSTDescribeClusterDbRevisionsResponse, _super);
    function POSTDescribeClusterDbRevisionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeClusterDbRevisionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], POSTDescribeClusterDbRevisionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], POSTDescribeClusterDbRevisionsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], POSTDescribeClusterDbRevisionsResponse.prototype, "rawResponse", void 0);
    return POSTDescribeClusterDbRevisionsResponse;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeClusterDbRevisionsResponse = POSTDescribeClusterDbRevisionsResponse;
