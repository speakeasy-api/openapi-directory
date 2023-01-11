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
exports.GetGetStatusResponse = exports.GetGetStatusRequest = exports.GetGetStatusQueryParams = exports.GetGetStatusVersionEnum = exports.GetGetStatusOperationEnum = exports.GetGetStatusActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetStatusActionEnum;
(function (GetGetStatusActionEnum) {
    GetGetStatusActionEnum["GetStatus"] = "GetStatus";
})(GetGetStatusActionEnum = exports.GetGetStatusActionEnum || (exports.GetGetStatusActionEnum = {}));
var GetGetStatusOperationEnum;
(function (GetGetStatusOperationEnum) {
    GetGetStatusOperationEnum["GetStatus"] = "GetStatus";
})(GetGetStatusOperationEnum = exports.GetGetStatusOperationEnum || (exports.GetGetStatusOperationEnum = {}));
var GetGetStatusVersionEnum;
(function (GetGetStatusVersionEnum) {
    GetGetStatusVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(GetGetStatusVersionEnum = exports.GetGetStatusVersionEnum || (exports.GetGetStatusVersionEnum = {}));
var GetGetStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetGetStatusQueryParams, _super);
    function GetGetStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=APIVersion" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=JobId" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetStatusQueryParams.prototype, "version", void 0);
    return GetGetStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetStatusQueryParams = GetGetStatusQueryParams;
var GetGetStatusRequest = /** @class */ (function (_super) {
    __extends(GetGetStatusRequest, _super);
    function GetGetStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetStatusQueryParams)
    ], GetGetStatusRequest.prototype, "queryParams", void 0);
    return GetGetStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetStatusRequest = GetGetStatusRequest;
var GetGetStatusResponse = /** @class */ (function (_super) {
    __extends(GetGetStatusResponse, _super);
    function GetGetStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetStatusResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetStatusResponse.prototype, "statusCode", void 0);
    return GetGetStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetStatusResponse = GetGetStatusResponse;
