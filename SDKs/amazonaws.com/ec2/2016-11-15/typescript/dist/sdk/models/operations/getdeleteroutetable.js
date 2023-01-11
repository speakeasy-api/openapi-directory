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
exports.GetDeleteRouteTableResponse = exports.GetDeleteRouteTableRequest = exports.GetDeleteRouteTableHeaders = exports.GetDeleteRouteTableQueryParams = exports.GetDeleteRouteTableVersionEnum = exports.GetDeleteRouteTableActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteRouteTableActionEnum;
(function (GetDeleteRouteTableActionEnum) {
    GetDeleteRouteTableActionEnum["DeleteRouteTable"] = "DeleteRouteTable";
})(GetDeleteRouteTableActionEnum = exports.GetDeleteRouteTableActionEnum || (exports.GetDeleteRouteTableActionEnum = {}));
var GetDeleteRouteTableVersionEnum;
(function (GetDeleteRouteTableVersionEnum) {
    GetDeleteRouteTableVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteRouteTableVersionEnum = exports.GetDeleteRouteTableVersionEnum || (exports.GetDeleteRouteTableVersionEnum = {}));
var GetDeleteRouteTableQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteRouteTableQueryParams, _super);
    function GetDeleteRouteTableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteRouteTableQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableQueryParams.prototype, "version", void 0);
    return GetDeleteRouteTableQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteRouteTableQueryParams = GetDeleteRouteTableQueryParams;
var GetDeleteRouteTableHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteRouteTableHeaders, _super);
    function GetDeleteRouteTableHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteRouteTableHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteRouteTableHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteRouteTableHeaders = GetDeleteRouteTableHeaders;
var GetDeleteRouteTableRequest = /** @class */ (function (_super) {
    __extends(GetDeleteRouteTableRequest, _super);
    function GetDeleteRouteTableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteRouteTableQueryParams)
    ], GetDeleteRouteTableRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteRouteTableHeaders)
    ], GetDeleteRouteTableRequest.prototype, "headers", void 0);
    return GetDeleteRouteTableRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteRouteTableRequest = GetDeleteRouteTableRequest;
var GetDeleteRouteTableResponse = /** @class */ (function (_super) {
    __extends(GetDeleteRouteTableResponse, _super);
    function GetDeleteRouteTableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteRouteTableResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteRouteTableResponse.prototype, "statusCode", void 0);
    return GetDeleteRouteTableResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteRouteTableResponse = GetDeleteRouteTableResponse;
