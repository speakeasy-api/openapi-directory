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
exports.POSTDescribeVpcEndpointServiceConfigurationsResponse = exports.POSTDescribeVpcEndpointServiceConfigurationsRequest = exports.POSTDescribeVpcEndpointServiceConfigurationsVersionEnum = exports.POSTDescribeVpcEndpointServiceConfigurationsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var POSTDescribeVpcEndpointServiceConfigurationsActionEnum;
(function (POSTDescribeVpcEndpointServiceConfigurationsActionEnum) {
    POSTDescribeVpcEndpointServiceConfigurationsActionEnum["DescribeVpcEndpointServiceConfigurations"] = "DescribeVpcEndpointServiceConfigurations";
})(POSTDescribeVpcEndpointServiceConfigurationsActionEnum = exports.POSTDescribeVpcEndpointServiceConfigurationsActionEnum || (exports.POSTDescribeVpcEndpointServiceConfigurationsActionEnum = {}));
var POSTDescribeVpcEndpointServiceConfigurationsVersionEnum;
(function (POSTDescribeVpcEndpointServiceConfigurationsVersionEnum) {
    POSTDescribeVpcEndpointServiceConfigurationsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(POSTDescribeVpcEndpointServiceConfigurationsVersionEnum = exports.POSTDescribeVpcEndpointServiceConfigurationsVersionEnum || (exports.POSTDescribeVpcEndpointServiceConfigurationsVersionEnum = {}));
var POSTDescribeVpcEndpointServiceConfigurationsRequest = /** @class */ (function (_super) {
    __extends(POSTDescribeVpcEndpointServiceConfigurationsRequest, _super);
    function POSTDescribeVpcEndpointServiceConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Action",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=MaxResults",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=NextToken",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=Version",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsRequest.prototype, "xAmzSignedHeaders", void 0);
    return POSTDescribeVpcEndpointServiceConfigurationsRequest;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeVpcEndpointServiceConfigurationsRequest = POSTDescribeVpcEndpointServiceConfigurationsRequest;
var POSTDescribeVpcEndpointServiceConfigurationsResponse = /** @class */ (function (_super) {
    __extends(POSTDescribeVpcEndpointServiceConfigurationsResponse, _super);
    function POSTDescribeVpcEndpointServiceConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], POSTDescribeVpcEndpointServiceConfigurationsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], POSTDescribeVpcEndpointServiceConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], POSTDescribeVpcEndpointServiceConfigurationsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], POSTDescribeVpcEndpointServiceConfigurationsResponse.prototype, "rawResponse", void 0);
    return POSTDescribeVpcEndpointServiceConfigurationsResponse;
}(utils_1.SpeakeasyBase));
exports.POSTDescribeVpcEndpointServiceConfigurationsResponse = POSTDescribeVpcEndpointServiceConfigurationsResponse;
