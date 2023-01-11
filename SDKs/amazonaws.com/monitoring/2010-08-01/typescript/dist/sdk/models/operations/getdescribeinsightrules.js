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
exports.GetDescribeInsightRulesResponse = exports.GetDescribeInsightRulesRequest = exports.GetDescribeInsightRulesHeaders = exports.GetDescribeInsightRulesQueryParams = exports.GetDescribeInsightRulesVersionEnum = exports.GetDescribeInsightRulesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeInsightRulesActionEnum;
(function (GetDescribeInsightRulesActionEnum) {
    GetDescribeInsightRulesActionEnum["DescribeInsightRules"] = "DescribeInsightRules";
})(GetDescribeInsightRulesActionEnum = exports.GetDescribeInsightRulesActionEnum || (exports.GetDescribeInsightRulesActionEnum = {}));
var GetDescribeInsightRulesVersionEnum;
(function (GetDescribeInsightRulesVersionEnum) {
    GetDescribeInsightRulesVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetDescribeInsightRulesVersionEnum = exports.GetDescribeInsightRulesVersionEnum || (exports.GetDescribeInsightRulesVersionEnum = {}));
var GetDescribeInsightRulesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeInsightRulesQueryParams, _super);
    function GetDescribeInsightRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeInsightRulesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesQueryParams.prototype, "version", void 0);
    return GetDescribeInsightRulesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeInsightRulesQueryParams = GetDescribeInsightRulesQueryParams;
var GetDescribeInsightRulesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeInsightRulesHeaders, _super);
    function GetDescribeInsightRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeInsightRulesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeInsightRulesHeaders = GetDescribeInsightRulesHeaders;
var GetDescribeInsightRulesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeInsightRulesRequest, _super);
    function GetDescribeInsightRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeInsightRulesQueryParams)
    ], GetDescribeInsightRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeInsightRulesHeaders)
    ], GetDescribeInsightRulesRequest.prototype, "headers", void 0);
    return GetDescribeInsightRulesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeInsightRulesRequest = GetDescribeInsightRulesRequest;
var GetDescribeInsightRulesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeInsightRulesResponse, _super);
    function GetDescribeInsightRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeInsightRulesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeInsightRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeInsightRulesResponse.prototype, "statusCode", void 0);
    return GetDescribeInsightRulesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeInsightRulesResponse = GetDescribeInsightRulesResponse;
