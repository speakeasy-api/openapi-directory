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
exports.GetCreateJobResponse = exports.GetCreateJobRequest = exports.GetCreateJobQueryParams = exports.GetCreateJobVersionEnum = exports.GetCreateJobOperationEnum = exports.GetCreateJobJobTypeEnum = exports.GetCreateJobActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreateJobActionEnum;
(function (GetCreateJobActionEnum) {
    GetCreateJobActionEnum["CreateJob"] = "CreateJob";
})(GetCreateJobActionEnum = exports.GetCreateJobActionEnum || (exports.GetCreateJobActionEnum = {}));
var GetCreateJobJobTypeEnum;
(function (GetCreateJobJobTypeEnum) {
    GetCreateJobJobTypeEnum["Import"] = "Import";
    GetCreateJobJobTypeEnum["Export"] = "Export";
})(GetCreateJobJobTypeEnum = exports.GetCreateJobJobTypeEnum || (exports.GetCreateJobJobTypeEnum = {}));
var GetCreateJobOperationEnum;
(function (GetCreateJobOperationEnum) {
    GetCreateJobOperationEnum["CreateJob"] = "CreateJob";
})(GetCreateJobOperationEnum = exports.GetCreateJobOperationEnum || (exports.GetCreateJobOperationEnum = {}));
var GetCreateJobVersionEnum;
(function (GetCreateJobVersionEnum) {
    GetCreateJobVersionEnum["TwoThousandAndTen0601"] = "2010-06-01";
})(GetCreateJobVersionEnum = exports.GetCreateJobVersionEnum || (exports.GetCreateJobVersionEnum = {}));
var GetCreateJobQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateJobQueryParams, _super);
    function GetCreateJobQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=APIVersion" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=JobType" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "jobType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Manifest" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "manifest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ManifestAddendum" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "manifestAddendum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Operation" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "operation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ValidateOnly" }),
        __metadata("design:type", Boolean)
    ], GetCreateJobQueryParams.prototype, "validateOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateJobQueryParams.prototype, "version", void 0);
    return GetCreateJobQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreateJobQueryParams = GetCreateJobQueryParams;
var GetCreateJobRequest = /** @class */ (function (_super) {
    __extends(GetCreateJobRequest, _super);
    function GetCreateJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateJobQueryParams)
    ], GetCreateJobRequest.prototype, "queryParams", void 0);
    return GetCreateJobRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreateJobRequest = GetCreateJobRequest;
var GetCreateJobResponse = /** @class */ (function (_super) {
    __extends(GetCreateJobResponse, _super);
    function GetCreateJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCreateJobResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreateJobResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreateJobResponse.prototype, "statusCode", void 0);
    return GetCreateJobResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreateJobResponse = GetCreateJobResponse;
