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
exports.GetDeparturesByCrsResponse = exports.GetDeparturesByCrsRequest = exports.GetDeparturesByCrsQueryParams = exports.GetDeparturesByCrsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeparturesByCrsPathParams = /** @class */ (function (_super) {
    __extends(GetDeparturesByCrsPathParams, _super);
    function GetDeparturesByCrsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=CRS" }),
        __metadata("design:type", String)
    ], GetDeparturesByCrsPathParams.prototype, "crs", void 0);
    return GetDeparturesByCrsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDeparturesByCrsPathParams = GetDeparturesByCrsPathParams;
var GetDeparturesByCrsQueryParams = /** @class */ (function (_super) {
    __extends(GetDeparturesByCrsQueryParams, _super);
    function GetDeparturesByCrsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=apiKey" }),
        __metadata("design:type", String)
    ], GetDeparturesByCrsQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filterStation" }),
        __metadata("design:type", String)
    ], GetDeparturesByCrsQueryParams.prototype, "filterStation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=numServices" }),
        __metadata("design:type", Number)
    ], GetDeparturesByCrsQueryParams.prototype, "numServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=serviceDetails" }),
        __metadata("design:type", Boolean)
    ], GetDeparturesByCrsQueryParams.prototype, "serviceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeOffset" }),
        __metadata("design:type", Number)
    ], GetDeparturesByCrsQueryParams.prototype, "timeOffset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timeWindow" }),
        __metadata("design:type", Number)
    ], GetDeparturesByCrsQueryParams.prototype, "timeWindow", void 0);
    return GetDeparturesByCrsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeparturesByCrsQueryParams = GetDeparturesByCrsQueryParams;
var GetDeparturesByCrsRequest = /** @class */ (function (_super) {
    __extends(GetDeparturesByCrsRequest, _super);
    function GetDeparturesByCrsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeparturesByCrsPathParams)
    ], GetDeparturesByCrsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeparturesByCrsQueryParams)
    ], GetDeparturesByCrsRequest.prototype, "queryParams", void 0);
    return GetDeparturesByCrsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeparturesByCrsRequest = GetDeparturesByCrsRequest;
var GetDeparturesByCrsResponse = /** @class */ (function (_super) {
    __extends(GetDeparturesByCrsResponse, _super);
    function GetDeparturesByCrsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeparturesByCrsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeparturesByCrsResponse.prototype, "statusCode", void 0);
    return GetDeparturesByCrsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeparturesByCrsResponse = GetDeparturesByCrsResponse;
