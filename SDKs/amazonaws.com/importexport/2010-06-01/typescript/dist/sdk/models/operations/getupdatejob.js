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
exports.GetUpdateJobResponse = exports.GetUpdateJobRequest = exports.GetUpdateJobQueryParams = exports.GetUpdateJobVersionEnum = exports.GetUpdateJobOperationEnum = exports.GetUpdateJobJobTypeEnum = exports.GetUpdateJobActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetUpdateJobActionEnum;
(function (GetUpdateJobActionEnum) {
    GetUpdateJobActionEnum["UpdateJob"] = "UpdateJob";
})(GetUpdateJobActionEnum = exports.GetUpdateJobActionEnum || (exports.GetUpdateJobActionEnum = {}));
var GetUpdateJobJobTypeEnum;
(function (GetUpdateJobJobTypeEnum) {
    GetUpdateJobJobTypeEnum["Import"] = "Import";
    GetUpdateJobJobTypeEnum["Export"] = "Export";
})(GetUpdateJobJobTypeEnum = exports.GetUpdateJobJobTypeEnum || (exports.GetUpdateJobJobTypeEnum = {}));
var GetUpdateJobOperationEnum;
(function (GetUpdateJobOperationEnum) {
    GetUpdateJobOperationEnum["UpdateJob"] = "UpdateJob";
})(GetUpdateJobOperationEnum = exports.GetUpdateJobOperationEnum || (exports.GetUpdateJobOperationEnum = {}));
var GetUpdateJobVersionEnum;
(function (GetUpdateJobVersionEnum) {
    GetUpdateJobVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(GetUpdateJobVersionEnum = exports.GetUpdateJobVersionEnum || (exports.GetUpdateJobVersionEnum = {}));
var GetUpdateJobQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdateJobQueryParams, _super);
    function GetUpdateJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=APIVersion" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=JobId" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "jobId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=JobType" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "jobType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Manifest" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "manifest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ValidateOnly" }),
        __metadata("design:type", Boolean)
    ], GetUpdateJobQueryParams.prototype, "validateOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdateJobQueryParams.prototype, "version", void 0);
    return GetUpdateJobQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUpdateJobQueryParams = GetUpdateJobQueryParams;
var GetUpdateJobRequest = /** @class */ (function (_super) {
    __extends(GetUpdateJobRequest, _super);
    function GetUpdateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpdateJobQueryParams)
    ], GetUpdateJobRequest.prototype, "queryParams", void 0);
    return GetUpdateJobRequest;
}(utils_1.SpeakeasyBase));
exports.GetUpdateJobRequest = GetUpdateJobRequest;
var GetUpdateJobResponse = /** @class */ (function (_super) {
    __extends(GetUpdateJobResponse, _super);
    function GetUpdateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUpdateJobResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUpdateJobResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUpdateJobResponse.prototype, "statusCode", void 0);
    return GetUpdateJobResponse;
}(utils_1.SpeakeasyBase));
exports.GetUpdateJobResponse = GetUpdateJobResponse;
