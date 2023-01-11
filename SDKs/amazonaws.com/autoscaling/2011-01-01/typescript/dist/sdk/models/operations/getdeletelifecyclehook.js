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
exports.GetDeleteLifecycleHookResponse = exports.GetDeleteLifecycleHookRequest = exports.GetDeleteLifecycleHookHeaders = exports.GetDeleteLifecycleHookQueryParams = exports.GetDeleteLifecycleHookVersionEnum = exports.GetDeleteLifecycleHookActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteLifecycleHookActionEnum;
(function (GetDeleteLifecycleHookActionEnum) {
    GetDeleteLifecycleHookActionEnum["DeleteLifecycleHook"] = "DeleteLifecycleHook";
})(GetDeleteLifecycleHookActionEnum = exports.GetDeleteLifecycleHookActionEnum || (exports.GetDeleteLifecycleHookActionEnum = {}));
var GetDeleteLifecycleHookVersionEnum;
(function (GetDeleteLifecycleHookVersionEnum) {
    GetDeleteLifecycleHookVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDeleteLifecycleHookVersionEnum = exports.GetDeleteLifecycleHookVersionEnum || (exports.GetDeleteLifecycleHookVersionEnum = {}));
var GetDeleteLifecycleHookQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteLifecycleHookQueryParams, _super);
    function GetDeleteLifecycleHookQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=LifecycleHookName" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookQueryParams.prototype, "lifecycleHookName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookQueryParams.prototype, "version", void 0);
    return GetDeleteLifecycleHookQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteLifecycleHookQueryParams = GetDeleteLifecycleHookQueryParams;
var GetDeleteLifecycleHookHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteLifecycleHookHeaders, _super);
    function GetDeleteLifecycleHookHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteLifecycleHookHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteLifecycleHookHeaders = GetDeleteLifecycleHookHeaders;
var GetDeleteLifecycleHookRequest = /** @class */ (function (_super) {
    __extends(GetDeleteLifecycleHookRequest, _super);
    function GetDeleteLifecycleHookRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteLifecycleHookQueryParams)
    ], GetDeleteLifecycleHookRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteLifecycleHookHeaders)
    ], GetDeleteLifecycleHookRequest.prototype, "headers", void 0);
    return GetDeleteLifecycleHookRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteLifecycleHookRequest = GetDeleteLifecycleHookRequest;
var GetDeleteLifecycleHookResponse = /** @class */ (function (_super) {
    __extends(GetDeleteLifecycleHookResponse, _super);
    function GetDeleteLifecycleHookResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteLifecycleHookResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteLifecycleHookResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteLifecycleHookResponse.prototype, "statusCode", void 0);
    return GetDeleteLifecycleHookResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteLifecycleHookResponse = GetDeleteLifecycleHookResponse;
