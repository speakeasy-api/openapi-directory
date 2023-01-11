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
exports.GetDeleteManagedPrefixListResponse = exports.GetDeleteManagedPrefixListRequest = exports.GetDeleteManagedPrefixListHeaders = exports.GetDeleteManagedPrefixListQueryParams = exports.GetDeleteManagedPrefixListVersionEnum = exports.GetDeleteManagedPrefixListActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteManagedPrefixListActionEnum;
(function (GetDeleteManagedPrefixListActionEnum) {
    GetDeleteManagedPrefixListActionEnum["DeleteManagedPrefixList"] = "DeleteManagedPrefixList";
})(GetDeleteManagedPrefixListActionEnum = exports.GetDeleteManagedPrefixListActionEnum || (exports.GetDeleteManagedPrefixListActionEnum = {}));
var GetDeleteManagedPrefixListVersionEnum;
(function (GetDeleteManagedPrefixListVersionEnum) {
    GetDeleteManagedPrefixListVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteManagedPrefixListVersionEnum = exports.GetDeleteManagedPrefixListVersionEnum || (exports.GetDeleteManagedPrefixListVersionEnum = {}));
var GetDeleteManagedPrefixListQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteManagedPrefixListQueryParams, _super);
    function GetDeleteManagedPrefixListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteManagedPrefixListQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PrefixListId" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListQueryParams.prototype, "prefixListId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListQueryParams.prototype, "version", void 0);
    return GetDeleteManagedPrefixListQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteManagedPrefixListQueryParams = GetDeleteManagedPrefixListQueryParams;
var GetDeleteManagedPrefixListHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteManagedPrefixListHeaders, _super);
    function GetDeleteManagedPrefixListHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteManagedPrefixListHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteManagedPrefixListHeaders = GetDeleteManagedPrefixListHeaders;
var GetDeleteManagedPrefixListRequest = /** @class */ (function (_super) {
    __extends(GetDeleteManagedPrefixListRequest, _super);
    function GetDeleteManagedPrefixListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteManagedPrefixListQueryParams)
    ], GetDeleteManagedPrefixListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteManagedPrefixListHeaders)
    ], GetDeleteManagedPrefixListRequest.prototype, "headers", void 0);
    return GetDeleteManagedPrefixListRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteManagedPrefixListRequest = GetDeleteManagedPrefixListRequest;
var GetDeleteManagedPrefixListResponse = /** @class */ (function (_super) {
    __extends(GetDeleteManagedPrefixListResponse, _super);
    function GetDeleteManagedPrefixListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteManagedPrefixListResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteManagedPrefixListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteManagedPrefixListResponse.prototype, "statusCode", void 0);
    return GetDeleteManagedPrefixListResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteManagedPrefixListResponse = GetDeleteManagedPrefixListResponse;
