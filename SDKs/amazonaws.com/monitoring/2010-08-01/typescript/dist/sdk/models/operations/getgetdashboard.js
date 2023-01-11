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
exports.GetGetDashboardResponse = exports.GetGetDashboardRequest = exports.GetGetDashboardHeaders = exports.GetGetDashboardQueryParams = exports.GetGetDashboardVersionEnum = exports.GetGetDashboardActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetDashboardActionEnum;
(function (GetGetDashboardActionEnum) {
    GetGetDashboardActionEnum["GetDashboard"] = "GetDashboard";
})(GetGetDashboardActionEnum = exports.GetGetDashboardActionEnum || (exports.GetGetDashboardActionEnum = {}));
var GetGetDashboardVersionEnum;
(function (GetGetDashboardVersionEnum) {
    GetGetDashboardVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(GetGetDashboardVersionEnum = exports.GetGetDashboardVersionEnum || (exports.GetGetDashboardVersionEnum = {}));
var GetGetDashboardQueryParams = /** @class */ (function (_super) {
    __extends(GetGetDashboardQueryParams, _super);
    function GetGetDashboardQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetDashboardQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DashboardName" }),
        __metadata("design:type", String)
    ], GetGetDashboardQueryParams.prototype, "dashboardName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetDashboardQueryParams.prototype, "version", void 0);
    return GetGetDashboardQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetDashboardQueryParams = GetGetDashboardQueryParams;
var GetGetDashboardHeaders = /** @class */ (function (_super) {
    __extends(GetGetDashboardHeaders, _super);
    function GetGetDashboardHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetDashboardHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetDashboardHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGetDashboardHeaders = GetGetDashboardHeaders;
var GetGetDashboardRequest = /** @class */ (function (_super) {
    __extends(GetGetDashboardRequest, _super);
    function GetGetDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetDashboardQueryParams)
    ], GetGetDashboardRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetDashboardHeaders)
    ], GetGetDashboardRequest.prototype, "headers", void 0);
    return GetGetDashboardRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetDashboardRequest = GetGetDashboardRequest;
var GetGetDashboardResponse = /** @class */ (function (_super) {
    __extends(GetGetDashboardResponse, _super);
    function GetGetDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetDashboardResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetDashboardResponse.prototype, "statusCode", void 0);
    return GetGetDashboardResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetDashboardResponse = GetGetDashboardResponse;
