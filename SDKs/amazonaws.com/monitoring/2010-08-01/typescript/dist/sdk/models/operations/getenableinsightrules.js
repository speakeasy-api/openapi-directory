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
exports.GetEnableInsightRulesResponse = exports.GetEnableInsightRulesRequest = exports.GetEnableInsightRulesHeaders = exports.GetEnableInsightRulesQueryParams = exports.GetEnableInsightRulesVersionEnum = exports.GetEnableInsightRulesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetEnableInsightRulesActionEnum;
(function (GetEnableInsightRulesActionEnum) {
    GetEnableInsightRulesActionEnum["EnableInsightRules"] = "EnableInsightRules";
})(GetEnableInsightRulesActionEnum = exports.GetEnableInsightRulesActionEnum || (exports.GetEnableInsightRulesActionEnum = {}));
var GetEnableInsightRulesVersionEnum;
(function (GetEnableInsightRulesVersionEnum) {
    GetEnableInsightRulesVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetEnableInsightRulesVersionEnum = exports.GetEnableInsightRulesVersionEnum || (exports.GetEnableInsightRulesVersionEnum = {}));
var GetEnableInsightRulesQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableInsightRulesQueryParams, _super);
    function GetEnableInsightRulesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RuleNames" }),
        __metadata("design:type", Array)
    ], GetEnableInsightRulesQueryParams.prototype, "ruleNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesQueryParams.prototype, "version", void 0);
    return GetEnableInsightRulesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEnableInsightRulesQueryParams = GetEnableInsightRulesQueryParams;
var GetEnableInsightRulesHeaders = /** @class */ (function (_super) {
    __extends(GetEnableInsightRulesHeaders, _super);
    function GetEnableInsightRulesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableInsightRulesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableInsightRulesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetEnableInsightRulesHeaders = GetEnableInsightRulesHeaders;
var GetEnableInsightRulesRequest = /** @class */ (function (_super) {
    __extends(GetEnableInsightRulesRequest, _super);
    function GetEnableInsightRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEnableInsightRulesQueryParams)
    ], GetEnableInsightRulesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEnableInsightRulesHeaders)
    ], GetEnableInsightRulesRequest.prototype, "headers", void 0);
    return GetEnableInsightRulesRequest;
}(utils_1.SpeakeasyBase));
exports.GetEnableInsightRulesRequest = GetEnableInsightRulesRequest;
var GetEnableInsightRulesResponse = /** @class */ (function (_super) {
    __extends(GetEnableInsightRulesResponse, _super);
    function GetEnableInsightRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetEnableInsightRulesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEnableInsightRulesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEnableInsightRulesResponse.prototype, "statusCode", void 0);
    return GetEnableInsightRulesResponse;
}(utils_1.SpeakeasyBase));
exports.GetEnableInsightRulesResponse = GetEnableInsightRulesResponse;
