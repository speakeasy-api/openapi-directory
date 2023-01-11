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
exports.GetDeleteApplicationVersionResponse = exports.GetDeleteApplicationVersionRequest = exports.GetDeleteApplicationVersionHeaders = exports.GetDeleteApplicationVersionQueryParams = exports.GetDeleteApplicationVersionVersionEnum = exports.GetDeleteApplicationVersionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteApplicationVersionActionEnum;
(function (GetDeleteApplicationVersionActionEnum) {
    GetDeleteApplicationVersionActionEnum["DeleteApplicationVersion"] = "DeleteApplicationVersion";
})(GetDeleteApplicationVersionActionEnum = exports.GetDeleteApplicationVersionActionEnum || (exports.GetDeleteApplicationVersionActionEnum = {}));
var GetDeleteApplicationVersionVersionEnum;
(function (GetDeleteApplicationVersionVersionEnum) {
    GetDeleteApplicationVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteApplicationVersionVersionEnum = exports.GetDeleteApplicationVersionVersionEnum || (exports.GetDeleteApplicationVersionVersionEnum = {}));
var GetDeleteApplicationVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationVersionQueryParams, _super);
    function GetDeleteApplicationVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionQueryParams.prototype, "applicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DeleteSourceBundle" }),
        __metadata("design:type", Boolean)
    ], GetDeleteApplicationVersionQueryParams.prototype, "deleteSourceBundle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionQueryParams.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VersionLabel" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionQueryParams.prototype, "versionLabel", void 0);
    return GetDeleteApplicationVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteApplicationVersionQueryParams = GetDeleteApplicationVersionQueryParams;
var GetDeleteApplicationVersionHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationVersionHeaders, _super);
    function GetDeleteApplicationVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteApplicationVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteApplicationVersionHeaders = GetDeleteApplicationVersionHeaders;
var GetDeleteApplicationVersionRequest = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationVersionRequest, _super);
    function GetDeleteApplicationVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteApplicationVersionQueryParams)
    ], GetDeleteApplicationVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteApplicationVersionHeaders)
    ], GetDeleteApplicationVersionRequest.prototype, "headers", void 0);
    return GetDeleteApplicationVersionRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteApplicationVersionRequest = GetDeleteApplicationVersionRequest;
var GetDeleteApplicationVersionResponse = /** @class */ (function (_super) {
    __extends(GetDeleteApplicationVersionResponse, _super);
    function GetDeleteApplicationVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteApplicationVersionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteApplicationVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteApplicationVersionResponse.prototype, "statusCode", void 0);
    return GetDeleteApplicationVersionResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteApplicationVersionResponse = GetDeleteApplicationVersionResponse;
