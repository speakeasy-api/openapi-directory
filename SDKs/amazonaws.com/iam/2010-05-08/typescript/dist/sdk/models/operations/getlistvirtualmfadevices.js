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
exports.GetListVirtualMfaDevicesResponse = exports.GetListVirtualMfaDevicesRequest = exports.GetListVirtualMfaDevicesHeaders = exports.GetListVirtualMfaDevicesQueryParams = exports.GetListVirtualMfaDevicesVersionEnum = exports.GetListVirtualMfaDevicesAssignmentStatusEnum = exports.GetListVirtualMfaDevicesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListVirtualMfaDevicesActionEnum;
(function (GetListVirtualMfaDevicesActionEnum) {
    GetListVirtualMfaDevicesActionEnum["ListVirtualMfaDevices"] = "ListVirtualMFADevices";
})(GetListVirtualMfaDevicesActionEnum = exports.GetListVirtualMfaDevicesActionEnum || (exports.GetListVirtualMfaDevicesActionEnum = {}));
var GetListVirtualMfaDevicesAssignmentStatusEnum;
(function (GetListVirtualMfaDevicesAssignmentStatusEnum) {
    GetListVirtualMfaDevicesAssignmentStatusEnum["Assigned"] = "Assigned";
    GetListVirtualMfaDevicesAssignmentStatusEnum["Unassigned"] = "Unassigned";
    GetListVirtualMfaDevicesAssignmentStatusEnum["Any"] = "Any";
})(GetListVirtualMfaDevicesAssignmentStatusEnum = exports.GetListVirtualMfaDevicesAssignmentStatusEnum || (exports.GetListVirtualMfaDevicesAssignmentStatusEnum = {}));
var GetListVirtualMfaDevicesVersionEnum;
(function (GetListVirtualMfaDevicesVersionEnum) {
    GetListVirtualMfaDevicesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListVirtualMfaDevicesVersionEnum = exports.GetListVirtualMfaDevicesVersionEnum || (exports.GetListVirtualMfaDevicesVersionEnum = {}));
var GetListVirtualMfaDevicesQueryParams = /** @class */ (function (_super) {
    __extends(GetListVirtualMfaDevicesQueryParams, _super);
    function GetListVirtualMfaDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AssignmentStatus" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesQueryParams.prototype, "assignmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListVirtualMfaDevicesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesQueryParams.prototype, "version", void 0);
    return GetListVirtualMfaDevicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListVirtualMfaDevicesQueryParams = GetListVirtualMfaDevicesQueryParams;
var GetListVirtualMfaDevicesHeaders = /** @class */ (function (_super) {
    __extends(GetListVirtualMfaDevicesHeaders, _super);
    function GetListVirtualMfaDevicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListVirtualMfaDevicesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListVirtualMfaDevicesHeaders = GetListVirtualMfaDevicesHeaders;
var GetListVirtualMfaDevicesRequest = /** @class */ (function (_super) {
    __extends(GetListVirtualMfaDevicesRequest, _super);
    function GetListVirtualMfaDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListVirtualMfaDevicesQueryParams)
    ], GetListVirtualMfaDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListVirtualMfaDevicesHeaders)
    ], GetListVirtualMfaDevicesRequest.prototype, "headers", void 0);
    return GetListVirtualMfaDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.GetListVirtualMfaDevicesRequest = GetListVirtualMfaDevicesRequest;
var GetListVirtualMfaDevicesResponse = /** @class */ (function (_super) {
    __extends(GetListVirtualMfaDevicesResponse, _super);
    function GetListVirtualMfaDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListVirtualMfaDevicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListVirtualMfaDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListVirtualMfaDevicesResponse.prototype, "statusCode", void 0);
    return GetListVirtualMfaDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.GetListVirtualMfaDevicesResponse = GetListVirtualMfaDevicesResponse;
