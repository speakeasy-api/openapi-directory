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
exports.GetLatestTotalsResponse = exports.GetLatestTotalsRequest = exports.GetLatestTotals200ApplicationJson = exports.GetLatestTotalsQueryParams = exports.GetLatestTotalsFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetLatestTotalsFormatEnum;
(function (GetLatestTotalsFormatEnum) {
    GetLatestTotalsFormatEnum["Json"] = "json";
    GetLatestTotalsFormatEnum["Xml"] = "xml";
})(GetLatestTotalsFormatEnum = exports.GetLatestTotalsFormatEnum || (exports.GetLatestTotalsFormatEnum = {}));
var GetLatestTotalsQueryParams = /** @class */ (function (_super) {
    __extends(GetLatestTotalsQueryParams, _super);
    function GetLatestTotalsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetLatestTotalsQueryParams.prototype, "format", void 0);
    return GetLatestTotalsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetLatestTotalsQueryParams = GetLatestTotalsQueryParams;
var GetLatestTotals200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestTotals200ApplicationJson, _super);
    function GetLatestTotals200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confirmed" }),
        __metadata("design:type", Number)
    ], GetLatestTotals200ApplicationJson.prototype, "confirmed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=critical" }),
        __metadata("design:type", Number)
    ], GetLatestTotals200ApplicationJson.prototype, "critical", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deaths" }),
        __metadata("design:type", Number)
    ], GetLatestTotals200ApplicationJson.prototype, "deaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastChange" }),
        __metadata("design:type", Date)
    ], GetLatestTotals200ApplicationJson.prototype, "lastChange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdate" }),
        __metadata("design:type", Date)
    ], GetLatestTotals200ApplicationJson.prototype, "lastUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recovered" }),
        __metadata("design:type", Number)
    ], GetLatestTotals200ApplicationJson.prototype, "recovered", void 0);
    return GetLatestTotals200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLatestTotals200ApplicationJson = GetLatestTotals200ApplicationJson;
var GetLatestTotalsRequest = /** @class */ (function (_super) {
    __extends(GetLatestTotalsRequest, _super);
    function GetLatestTotalsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLatestTotalsQueryParams)
    ], GetLatestTotalsRequest.prototype, "queryParams", void 0);
    return GetLatestTotalsRequest;
}(utils_1.SpeakeasyBase));
exports.GetLatestTotalsRequest = GetLatestTotalsRequest;
var GetLatestTotalsResponse = /** @class */ (function (_super) {
    __extends(GetLatestTotalsResponse, _super);
    function GetLatestTotalsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetLatestTotalsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLatestTotalsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLatestTotalsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetLatestTotals200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetLatestTotalsResponse.prototype, "getLatestTotals200ApplicationJSONObjects", void 0);
    return GetLatestTotalsResponse;
}(utils_1.SpeakeasyBase));
exports.GetLatestTotalsResponse = GetLatestTotalsResponse;
