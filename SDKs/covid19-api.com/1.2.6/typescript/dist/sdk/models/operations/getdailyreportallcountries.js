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
exports.GetDailyReportAllCountriesResponse = exports.GetDailyReportAllCountriesRequest = exports.GetDailyReportAllCountries200ApplicationJson = exports.GetDailyReportAllCountries200ApplicationJsonProvince = exports.GetDailyReportAllCountriesQueryParams = exports.GetDailyReportAllCountriesFormatEnum = exports.GetDailyReportAllCountriesDateFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDailyReportAllCountriesDateFormatEnum;
(function (GetDailyReportAllCountriesDateFormatEnum) {
    GetDailyReportAllCountriesDateFormatEnum["YyyyMmDd"] = "YYYY-MM-DD";
    GetDailyReportAllCountriesDateFormatEnum["YyyyDdMm"] = "YYYY-DD-MM";
    GetDailyReportAllCountriesDateFormatEnum["DdMmYyyy"] = "DD-MM-YYYY";
    GetDailyReportAllCountriesDateFormatEnum["MmDdYyyy"] = "MM-DD-YYYY";
})(GetDailyReportAllCountriesDateFormatEnum = exports.GetDailyReportAllCountriesDateFormatEnum || (exports.GetDailyReportAllCountriesDateFormatEnum = {}));
var GetDailyReportAllCountriesFormatEnum;
(function (GetDailyReportAllCountriesFormatEnum) {
    GetDailyReportAllCountriesFormatEnum["Json"] = "json";
    GetDailyReportAllCountriesFormatEnum["Xml"] = "xml";
})(GetDailyReportAllCountriesFormatEnum = exports.GetDailyReportAllCountriesFormatEnum || (exports.GetDailyReportAllCountriesFormatEnum = {}));
var GetDailyReportAllCountriesQueryParams = /** @class */ (function (_super) {
    __extends(GetDailyReportAllCountriesQueryParams, _super);
    function GetDailyReportAllCountriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportAllCountriesQueryParams.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=date-format" }),
        __metadata("design:type", String)
    ], GetDailyReportAllCountriesQueryParams.prototype, "dateFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetDailyReportAllCountriesQueryParams.prototype, "format", void 0);
    return GetDailyReportAllCountriesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportAllCountriesQueryParams = GetDailyReportAllCountriesQueryParams;
var GetDailyReportAllCountries200ApplicationJsonProvince = /** @class */ (function (_super) {
    __extends(GetDailyReportAllCountries200ApplicationJsonProvince, _super);
    function GetDailyReportAllCountries200ApplicationJsonProvince() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJsonProvince.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJsonProvince.prototype, "confirmed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJsonProvince.prototype, "deaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJsonProvince.prototype, "recovered", void 0);
    return GetDailyReportAllCountries200ApplicationJsonProvince;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportAllCountries200ApplicationJsonProvince = GetDailyReportAllCountries200ApplicationJsonProvince;
var GetDailyReportAllCountries200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDailyReportAllCountries200ApplicationJson, _super);
    function GetDailyReportAllCountries200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetDailyReportAllCountries200ApplicationJson.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GetDailyReportAllCountries200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountries200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=province", elemType: GetDailyReportAllCountries200ApplicationJsonProvince }),
        __metadata("design:type", Array)
    ], GetDailyReportAllCountries200ApplicationJson.prototype, "province", void 0);
    return GetDailyReportAllCountries200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportAllCountries200ApplicationJson = GetDailyReportAllCountries200ApplicationJson;
var GetDailyReportAllCountriesRequest = /** @class */ (function (_super) {
    __extends(GetDailyReportAllCountriesRequest, _super);
    function GetDailyReportAllCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDailyReportAllCountriesQueryParams)
    ], GetDailyReportAllCountriesRequest.prototype, "queryParams", void 0);
    return GetDailyReportAllCountriesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportAllCountriesRequest = GetDailyReportAllCountriesRequest;
var GetDailyReportAllCountriesResponse = /** @class */ (function (_super) {
    __extends(GetDailyReportAllCountriesResponse, _super);
    function GetDailyReportAllCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDailyReportAllCountriesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDailyReportAllCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDailyReportAllCountriesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetDailyReportAllCountries200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetDailyReportAllCountriesResponse.prototype, "getDailyReportAllCountries200ApplicationJSONObjects", void 0);
    return GetDailyReportAllCountriesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDailyReportAllCountriesResponse = GetDailyReportAllCountriesResponse;
