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
exports.GetDetachNetworkInterfaceResponse = exports.GetDetachNetworkInterfaceRequest = exports.GetDetachNetworkInterfaceHeaders = exports.GetDetachNetworkInterfaceQueryParams = exports.GetDetachNetworkInterfaceVersionEnum = exports.GetDetachNetworkInterfaceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDetachNetworkInterfaceActionEnum;
(function (GetDetachNetworkInterfaceActionEnum) {
    GetDetachNetworkInterfaceActionEnum["DetachNetworkInterface"] = "DetachNetworkInterface";
})(GetDetachNetworkInterfaceActionEnum = exports.GetDetachNetworkInterfaceActionEnum || (exports.GetDetachNetworkInterfaceActionEnum = {}));
var GetDetachNetworkInterfaceVersionEnum;
(function (GetDetachNetworkInterfaceVersionEnum) {
    GetDetachNetworkInterfaceVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDetachNetworkInterfaceVersionEnum = exports.GetDetachNetworkInterfaceVersionEnum || (exports.GetDetachNetworkInterfaceVersionEnum = {}));
var GetDetachNetworkInterfaceQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachNetworkInterfaceQueryParams, _super);
    function GetDetachNetworkInterfaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AttachmentId" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceQueryParams.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDetachNetworkInterfaceQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Force" }),
        __metadata("design:type", Boolean)
    ], GetDetachNetworkInterfaceQueryParams.prototype, "force", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceQueryParams.prototype, "version", void 0);
    return GetDetachNetworkInterfaceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDetachNetworkInterfaceQueryParams = GetDetachNetworkInterfaceQueryParams;
var GetDetachNetworkInterfaceHeaders = /** @class */ (function (_super) {
    __extends(GetDetachNetworkInterfaceHeaders, _super);
    function GetDetachNetworkInterfaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachNetworkInterfaceHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDetachNetworkInterfaceHeaders = GetDetachNetworkInterfaceHeaders;
var GetDetachNetworkInterfaceRequest = /** @class */ (function (_super) {
    __extends(GetDetachNetworkInterfaceRequest, _super);
    function GetDetachNetworkInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDetachNetworkInterfaceQueryParams)
    ], GetDetachNetworkInterfaceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDetachNetworkInterfaceHeaders)
    ], GetDetachNetworkInterfaceRequest.prototype, "headers", void 0);
    return GetDetachNetworkInterfaceRequest;
}(utils_1.SpeakeasyBase));
exports.GetDetachNetworkInterfaceRequest = GetDetachNetworkInterfaceRequest;
var GetDetachNetworkInterfaceResponse = /** @class */ (function (_super) {
    __extends(GetDetachNetworkInterfaceResponse, _super);
    function GetDetachNetworkInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDetachNetworkInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDetachNetworkInterfaceResponse.prototype, "statusCode", void 0);
    return GetDetachNetworkInterfaceResponse;
}(utils_1.SpeakeasyBase));
exports.GetDetachNetworkInterfaceResponse = GetDetachNetworkInterfaceResponse;
