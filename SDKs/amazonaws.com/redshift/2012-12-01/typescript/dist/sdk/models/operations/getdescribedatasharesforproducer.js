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
exports.GetDescribeDataSharesForProducerResponse = exports.GetDescribeDataSharesForProducerRequest = exports.GetDescribeDataSharesForProducerHeaders = exports.GetDescribeDataSharesForProducerQueryParams = exports.GetDescribeDataSharesForProducerVersionEnum = exports.GetDescribeDataSharesForProducerStatusEnum = exports.GetDescribeDataSharesForProducerActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeDataSharesForProducerActionEnum;
(function (GetDescribeDataSharesForProducerActionEnum) {
    GetDescribeDataSharesForProducerActionEnum["DescribeDataSharesForProducer"] = "DescribeDataSharesForProducer";
})(GetDescribeDataSharesForProducerActionEnum = exports.GetDescribeDataSharesForProducerActionEnum || (exports.GetDescribeDataSharesForProducerActionEnum = {}));
var GetDescribeDataSharesForProducerStatusEnum;
(function (GetDescribeDataSharesForProducerStatusEnum) {
    GetDescribeDataSharesForProducerStatusEnum["Active"] = "ACTIVE";
    GetDescribeDataSharesForProducerStatusEnum["Authorized"] = "AUTHORIZED";
    GetDescribeDataSharesForProducerStatusEnum["PendingAuthorization"] = "PENDING_AUTHORIZATION";
    GetDescribeDataSharesForProducerStatusEnum["Deauthorized"] = "DEAUTHORIZED";
    GetDescribeDataSharesForProducerStatusEnum["Rejected"] = "REJECTED";
})(GetDescribeDataSharesForProducerStatusEnum = exports.GetDescribeDataSharesForProducerStatusEnum || (exports.GetDescribeDataSharesForProducerStatusEnum = {}));
var GetDescribeDataSharesForProducerVersionEnum;
(function (GetDescribeDataSharesForProducerVersionEnum) {
    GetDescribeDataSharesForProducerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeDataSharesForProducerVersionEnum = exports.GetDescribeDataSharesForProducerVersionEnum || (exports.GetDescribeDataSharesForProducerVersionEnum = {}));
var GetDescribeDataSharesForProducerQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForProducerQueryParams, _super);
    function GetDescribeDataSharesForProducerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ProducerArn" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "producerArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerQueryParams.prototype, "version", void 0);
    return GetDescribeDataSharesForProducerQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeDataSharesForProducerQueryParams = GetDescribeDataSharesForProducerQueryParams;
var GetDescribeDataSharesForProducerHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForProducerHeaders, _super);
    function GetDescribeDataSharesForProducerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDataSharesForProducerHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeDataSharesForProducerHeaders = GetDescribeDataSharesForProducerHeaders;
var GetDescribeDataSharesForProducerRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForProducerRequest, _super);
    function GetDescribeDataSharesForProducerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeDataSharesForProducerQueryParams)
    ], GetDescribeDataSharesForProducerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeDataSharesForProducerHeaders)
    ], GetDescribeDataSharesForProducerRequest.prototype, "headers", void 0);
    return GetDescribeDataSharesForProducerRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeDataSharesForProducerRequest = GetDescribeDataSharesForProducerRequest;
var GetDescribeDataSharesForProducerResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesForProducerResponse, _super);
    function GetDescribeDataSharesForProducerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDataSharesForProducerResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeDataSharesForProducerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesForProducerResponse.prototype, "statusCode", void 0);
    return GetDescribeDataSharesForProducerResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeDataSharesForProducerResponse = GetDescribeDataSharesForProducerResponse;
