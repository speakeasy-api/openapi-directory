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
exports.GetCancelInstanceRefreshResponse = exports.GetCancelInstanceRefreshRequest = exports.GetCancelInstanceRefreshHeaders = exports.GetCancelInstanceRefreshQueryParams = exports.GetCancelInstanceRefreshVersionEnum = exports.GetCancelInstanceRefreshActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCancelInstanceRefreshActionEnum;
(function (GetCancelInstanceRefreshActionEnum) {
    GetCancelInstanceRefreshActionEnum["CancelInstanceRefresh"] = "CancelInstanceRefresh";
})(GetCancelInstanceRefreshActionEnum = exports.GetCancelInstanceRefreshActionEnum || (exports.GetCancelInstanceRefreshActionEnum = {}));
var GetCancelInstanceRefreshVersionEnum;
(function (GetCancelInstanceRefreshVersionEnum) {
    GetCancelInstanceRefreshVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetCancelInstanceRefreshVersionEnum = exports.GetCancelInstanceRefreshVersionEnum || (exports.GetCancelInstanceRefreshVersionEnum = {}));
var GetCancelInstanceRefreshQueryParams = /** @class */ (function (_super) {
    __extends(GetCancelInstanceRefreshQueryParams, _super);
    function GetCancelInstanceRefreshQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshQueryParams.prototype, "version", void 0);
    return GetCancelInstanceRefreshQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCancelInstanceRefreshQueryParams = GetCancelInstanceRefreshQueryParams;
var GetCancelInstanceRefreshHeaders = /** @class */ (function (_super) {
    __extends(GetCancelInstanceRefreshHeaders, _super);
    function GetCancelInstanceRefreshHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCancelInstanceRefreshHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCancelInstanceRefreshHeaders = GetCancelInstanceRefreshHeaders;
var GetCancelInstanceRefreshRequest = /** @class */ (function (_super) {
    __extends(GetCancelInstanceRefreshRequest, _super);
    function GetCancelInstanceRefreshRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCancelInstanceRefreshQueryParams)
    ], GetCancelInstanceRefreshRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCancelInstanceRefreshHeaders)
    ], GetCancelInstanceRefreshRequest.prototype, "headers", void 0);
    return GetCancelInstanceRefreshRequest;
}(utils_1.SpeakeasyBase));
exports.GetCancelInstanceRefreshRequest = GetCancelInstanceRefreshRequest;
var GetCancelInstanceRefreshResponse = /** @class */ (function (_super) {
    __extends(GetCancelInstanceRefreshResponse, _super);
    function GetCancelInstanceRefreshResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCancelInstanceRefreshResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCancelInstanceRefreshResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCancelInstanceRefreshResponse.prototype, "statusCode", void 0);
    return GetCancelInstanceRefreshResponse;
}(utils_1.SpeakeasyBase));
exports.GetCancelInstanceRefreshResponse = GetCancelInstanceRefreshResponse;
