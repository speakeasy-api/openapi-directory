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
exports.GetDescribeEventsResponse = exports.GetDescribeEventsRequest = exports.GetDescribeEventsHeaders = exports.GetDescribeEventsQueryParams = exports.GetDescribeEventsVersionEnum = exports.GetDescribeEventsSeverityEnum = exports.GetDescribeEventsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeEventsActionEnum;
(function (GetDescribeEventsActionEnum) {
    GetDescribeEventsActionEnum["DescribeEvents"] = "DescribeEvents";
})(GetDescribeEventsActionEnum = exports.GetDescribeEventsActionEnum || (exports.GetDescribeEventsActionEnum = {}));
var GetDescribeEventsSeverityEnum;
(function (GetDescribeEventsSeverityEnum) {
    GetDescribeEventsSeverityEnum["Trace"] = "TRACE";
    GetDescribeEventsSeverityEnum["Debug"] = "DEBUG";
    GetDescribeEventsSeverityEnum["Info"] = "INFO";
    GetDescribeEventsSeverityEnum["Warn"] = "WARN";
    GetDescribeEventsSeverityEnum["Error"] = "ERROR";
    GetDescribeEventsSeverityEnum["Fatal"] = "FATAL";
})(GetDescribeEventsSeverityEnum = exports.GetDescribeEventsSeverityEnum || (exports.GetDescribeEventsSeverityEnum = {}));
var GetDescribeEventsVersionEnum;
(function (GetDescribeEventsVersionEnum) {
    GetDescribeEventsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeEventsVersionEnum = exports.GetDescribeEventsVersionEnum || (exports.GetDescribeEventsVersionEnum = {}));
var GetDescribeEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeEventsQueryParams, _super);
    function GetDescribeEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "applicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EndTime" }),
        __metadata("design:type", Date)
    ], GetDescribeEventsQueryParams.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "environmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "environmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeEventsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PlatformArn" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "platformArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RequestId" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Severity" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "severity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StartTime" }),
        __metadata("design:type", Date)
    ], GetDescribeEventsQueryParams.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TemplateName" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "templateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VersionLabel" }),
        __metadata("design:type", String)
    ], GetDescribeEventsQueryParams.prototype, "versionLabel", void 0);
    return GetDescribeEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeEventsQueryParams = GetDescribeEventsQueryParams;
var GetDescribeEventsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeEventsHeaders, _super);
    function GetDescribeEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeEventsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeEventsHeaders = GetDescribeEventsHeaders;
var GetDescribeEventsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeEventsRequest, _super);
    function GetDescribeEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeEventsQueryParams)
    ], GetDescribeEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeEventsHeaders)
    ], GetDescribeEventsRequest.prototype, "headers", void 0);
    return GetDescribeEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeEventsRequest = GetDescribeEventsRequest;
var GetDescribeEventsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeEventsResponse, _super);
    function GetDescribeEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeEventsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeEventsResponse.prototype, "statusCode", void 0);
    return GetDescribeEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeEventsResponse = GetDescribeEventsResponse;
