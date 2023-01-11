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
exports.GetDailyReportByCountryNameResponse = exports.GetDailyReportByCountryNameRequest = exports.GetDailyReportByCountryName200ApplicationJson = exports.GetDailyReportByCountryName200ApplicationJsonProvince = exports.GetDailyReportByCountryNameQueryParams = exports.GetDailyReportByCountryNameFormatEnum = exports.GetDailyReportByCountryNameDateFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDailyReportByCountryNameDateFormatEnum;
(function (GetDailyReportByCountryNameDateFormatEnum) {
    GetDailyReportByCountryNameDateFormatEnum["YyyyMmDd"] = "YYYY-MM-DD";
    GetDailyReportByCountryNameDateFormatEnum["YyyyDdMm"] = "YYYY-DD-MM";
    GetDailyReportByCountryNameDateFormatEnum["DdMmYyyy"] = "DD-MM-YYYY";
    GetDailyReportByCountryNameDateFormatEnum["MmDdYyyy"] = "MM-DD-YYYY";
})(GetDailyReportByCountryNameDateFormatEnum = exports.GetDailyReportByCountryNameDateFormatEnum || (exports.GetDailyReportByCountryNameDateFormatEnum = {}));
var GetDailyReportByCountryNameFormatEnum;
(function (GetDailyReportByCountryNameFormatEnum) {
    GetDailyReportByCountryNameFormatEnum["Json"] = "json";
    GetDailyReportByCountryNameFormatEnum["Xml"] = "xml";
})(GetDailyReportByCountryNameFormatEnum = exports.GetDailyReportByCountryNameFormatEnum || (exports.GetDailyReportByCountryNameFormatEnum = {}));
var GetDailyReportByCountryNameQueryParams = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryNameQueryParams, _super);
    function GetDailyReportByCountryNameQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryNameQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date-format" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryNameQueryParams.prototype, "dateFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryNameQueryParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryNameQueryParams.prototype, "name", void 0);
    return GetDailyReportByCountryNameQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportByCountryNameQueryParams = GetDailyReportByCountryNameQueryParams;
var GetDailyReportByCountryName200ApplicationJsonProvince = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryName200ApplicationJsonProvince, _super);
    function GetDailyReportByCountryName200ApplicationJsonProvince() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJsonProvince.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJsonProvince.prototype, "confirmed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJsonProvince.prototype, "deaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJsonProvince.prototype, "recovered", void 0);
    return GetDailyReportByCountryName200ApplicationJsonProvince;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportByCountryName200ApplicationJsonProvince = GetDailyReportByCountryName200ApplicationJsonProvince;
var GetDailyReportByCountryName200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryName200ApplicationJson, _super);
    function GetDailyReportByCountryName200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryName200ApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportByCountryName200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryName200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=province", elemType: GetDailyReportByCountryName200ApplicationJsonProvince }),
        __metadata("design:type", Array)
    ], GetDailyReportByCountryName200ApplicationJson.prototype, "province", void 0);
    return GetDailyReportByCountryName200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportByCountryName200ApplicationJson = GetDailyReportByCountryName200ApplicationJson;
var GetDailyReportByCountryNameRequest = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryNameRequest, _super);
    function GetDailyReportByCountryNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDailyReportByCountryNameQueryParams)
    ], GetDailyReportByCountryNameRequest.prototype, "queryParams", void 0);
    return GetDailyReportByCountryNameRequest;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportByCountryNameRequest = GetDailyReportByCountryNameRequest;
var GetDailyReportByCountryNameResponse = /** @class */ (function (_super) {
    __extends(GetDailyReportByCountryNameResponse, _super);
    function GetDailyReportByCountryNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDailyReportByCountryNameResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDailyReportByCountryNameResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDailyReportByCountryNameResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetDailyReportByCountryName200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetDailyReportByCountryNameResponse.prototype, "getDailyReportByCountryName200ApplicationJSONObjects", void 0);
    return GetDailyReportByCountryNameResponse;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportByCountryNameResponse = GetDailyReportByCountryNameResponse;
