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
exports.GetDeleteEndpointAccessResponse = exports.GetDeleteEndpointAccessRequest = exports.GetDeleteEndpointAccessHeaders = exports.GetDeleteEndpointAccessQueryParams = exports.GetDeleteEndpointAccessVersionEnum = exports.GetDeleteEndpointAccessActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteEndpointAccessActionEnum;
(function (GetDeleteEndpointAccessActionEnum) {
    GetDeleteEndpointAccessActionEnum["DeleteEndpointAccess"] = "DeleteEndpointAccess";
})(GetDeleteEndpointAccessActionEnum = exports.GetDeleteEndpointAccessActionEnum || (exports.GetDeleteEndpointAccessActionEnum = {}));
var GetDeleteEndpointAccessVersionEnum;
(function (GetDeleteEndpointAccessVersionEnum) {
    GetDeleteEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDeleteEndpointAccessVersionEnum = exports.GetDeleteEndpointAccessVersionEnum || (exports.GetDeleteEndpointAccessVersionEnum = {}));
var GetDeleteEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteEndpointAccessQueryParams, _super);
    function GetDeleteEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndpointName" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessQueryParams.prototype, "endpointName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessQueryParams.prototype, "version", void 0);
    return GetDeleteEndpointAccessQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteEndpointAccessQueryParams = GetDeleteEndpointAccessQueryParams;
var GetDeleteEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteEndpointAccessHeaders, _super);
    function GetDeleteEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteEndpointAccessHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteEndpointAccessHeaders = GetDeleteEndpointAccessHeaders;
var GetDeleteEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(GetDeleteEndpointAccessRequest, _super);
    function GetDeleteEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteEndpointAccessQueryParams)
    ], GetDeleteEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteEndpointAccessHeaders)
    ], GetDeleteEndpointAccessRequest.prototype, "headers", void 0);
    return GetDeleteEndpointAccessRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteEndpointAccessRequest = GetDeleteEndpointAccessRequest;
var GetDeleteEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(GetDeleteEndpointAccessResponse, _super);
    function GetDeleteEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteEndpointAccessResponse.prototype, "statusCode", void 0);
    return GetDeleteEndpointAccessResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteEndpointAccessResponse = GetDeleteEndpointAccessResponse;
