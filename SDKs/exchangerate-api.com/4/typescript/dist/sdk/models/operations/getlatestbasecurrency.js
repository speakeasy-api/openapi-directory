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
exports.GetLatestBaseCurrencyResponse = exports.GetLatestBaseCurrencyRequest = exports.GetLatestBaseCurrency404ApplicationJson = exports.GetLatestBaseCurrency200ApplicationJson = exports.GetLatestBaseCurrencyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetLatestBaseCurrencyPathParams = /** @class */ (function (_super) {
    __extends(GetLatestBaseCurrencyPathParams, _super);
    function GetLatestBaseCurrencyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=base_currency" }),
        __metadata("design:type", String)
    ], GetLatestBaseCurrencyPathParams.prototype, "baseCurrency", void 0);
    return GetLatestBaseCurrencyPathParams;
}(utils_1.SpeakeasyBase));
exports.GetLatestBaseCurrencyPathParams = GetLatestBaseCurrencyPathParams;
var GetLatestBaseCurrency200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestBaseCurrency200ApplicationJson, _super);
    function GetLatestBaseCurrency200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=base" }),
        __metadata("design:type", String)
    ], GetLatestBaseCurrency200ApplicationJson.prototype, "base", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GetLatestBaseCurrency200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rates" }),
        __metadata("design:type", Object)
    ], GetLatestBaseCurrency200ApplicationJson.prototype, "rates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_last_updated" }),
        __metadata("design:type", Number)
    ], GetLatestBaseCurrency200ApplicationJson.prototype, "timeLastUpdated", void 0);
    return GetLatestBaseCurrency200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLatestBaseCurrency200ApplicationJson = GetLatestBaseCurrency200ApplicationJson;
var GetLatestBaseCurrency404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLatestBaseCurrency404ApplicationJson, _super);
    function GetLatestBaseCurrency404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_type" }),
        __metadata("design:type", String)
    ], GetLatestBaseCurrency404ApplicationJson.prototype, "errorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetLatestBaseCurrency404ApplicationJson.prototype, "result", void 0);
    return GetLatestBaseCurrency404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetLatestBaseCurrency404ApplicationJson = GetLatestBaseCurrency404ApplicationJson;
var GetLatestBaseCurrencyRequest = /** @class */ (function (_super) {
    __extends(GetLatestBaseCurrencyRequest, _super);
    function GetLatestBaseCurrencyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLatestBaseCurrencyPathParams)
    ], GetLatestBaseCurrencyRequest.prototype, "pathParams", void 0);
    return GetLatestBaseCurrencyRequest;
}(utils_1.SpeakeasyBase));
exports.GetLatestBaseCurrencyRequest = GetLatestBaseCurrencyRequest;
var GetLatestBaseCurrencyResponse = /** @class */ (function (_super) {
    __extends(GetLatestBaseCurrencyResponse, _super);
    function GetLatestBaseCurrencyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetLatestBaseCurrencyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetLatestBaseCurrencyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLatestBaseCurrency200ApplicationJson)
    ], GetLatestBaseCurrencyResponse.prototype, "getLatestBaseCurrency200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetLatestBaseCurrency404ApplicationJson)
    ], GetLatestBaseCurrencyResponse.prototype, "getLatestBaseCurrency404ApplicationJSONObject", void 0);
    return GetLatestBaseCurrencyResponse;
}(utils_1.SpeakeasyBase));
exports.GetLatestBaseCurrencyResponse = GetLatestBaseCurrencyResponse;
