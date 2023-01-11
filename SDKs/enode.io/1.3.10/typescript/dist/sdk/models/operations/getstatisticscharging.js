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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsChargingResponse = exports.GetStatisticsChargingRequest = exports.GetStatisticsCharging200ApplicationJson = exports.GetStatisticsCharging200ApplicationJsonPrice = exports.GetStatisticsCharging200ApplicationJsonKw = exports.GetStatisticsChargingSecurity = exports.GetStatisticsChargingQueryParams = exports.GetStatisticsChargingResolutionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetStatisticsChargingResolutionEnum;
(function (GetStatisticsChargingResolutionEnum) {
    GetStatisticsChargingResolutionEnum["Hour"] = "HOUR";
    GetStatisticsChargingResolutionEnum["Day"] = "DAY";
    GetStatisticsChargingResolutionEnum["Week"] = "WEEK";
    GetStatisticsChargingResolutionEnum["Month"] = "MONTH";
    GetStatisticsChargingResolutionEnum["Year"] = "YEAR";
})(GetStatisticsChargingResolutionEnum = exports.GetStatisticsChargingResolutionEnum || (exports.GetStatisticsChargingResolutionEnum = {}));
var GetStatisticsChargingQueryParams = /** @class */ (function (_super) {
    __extends(GetStatisticsChargingQueryParams, _super);
    function GetStatisticsChargingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=chargingLocationId" }),
        __metadata("design:type", String)
    ], GetStatisticsChargingQueryParams.prototype, "chargingLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", Date)
    ], GetStatisticsChargingQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", String)
    ], GetStatisticsChargingQueryParams.prototype, "resolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", Date)
    ], GetStatisticsChargingQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=vehicleId" }),
        __metadata("design:type", String)
    ], GetStatisticsChargingQueryParams.prototype, "vehicleId", void 0);
    return GetStatisticsChargingQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsChargingQueryParams = GetStatisticsChargingQueryParams;
var GetStatisticsChargingSecurity = /** @class */ (function (_super) {
    __extends(GetStatisticsChargingSecurity, _super);
    function GetStatisticsChargingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetStatisticsChargingSecurity.prototype, "userAccessToken", void 0);
    return GetStatisticsChargingSecurity;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsChargingSecurity = GetStatisticsChargingSecurity;
// GetStatisticsCharging200ApplicationJsonKw
/**
 * Aggregate statistics for charge rate in kW
**/
var GetStatisticsCharging200ApplicationJsonKw = /** @class */ (function (_super) {
    __extends(GetStatisticsCharging200ApplicationJsonKw, _super);
    function GetStatisticsCharging200ApplicationJsonKw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonKw.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mean" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonKw.prototype, "mean", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonKw.prototype, "min", void 0);
    return GetStatisticsCharging200ApplicationJsonKw;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsCharging200ApplicationJsonKw = GetStatisticsCharging200ApplicationJsonKw;
// GetStatisticsCharging200ApplicationJsonPrice
/**
 * Aggregate statistics for power price (<CURRENCY> per kWh)
**/
var GetStatisticsCharging200ApplicationJsonPrice = /** @class */ (function (_super) {
    __extends(GetStatisticsCharging200ApplicationJsonPrice, _super);
    function GetStatisticsCharging200ApplicationJsonPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonPrice.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mean" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonPrice.prototype, "mean", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJsonPrice.prototype, "min", void 0);
    return GetStatisticsCharging200ApplicationJsonPrice;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsCharging200ApplicationJsonPrice = GetStatisticsCharging200ApplicationJsonPrice;
var GetStatisticsCharging200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetStatisticsCharging200ApplicationJson, _super);
    function GetStatisticsCharging200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costSum" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJson.prototype, "costSum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], GetStatisticsCharging200ApplicationJson.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kw" }),
        __metadata("design:type", GetStatisticsCharging200ApplicationJsonKw)
    ], GetStatisticsCharging200ApplicationJson.prototype, "kw", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kwhSum" }),
        __metadata("design:type", Number)
    ], GetStatisticsCharging200ApplicationJson.prototype, "kwhSum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", GetStatisticsCharging200ApplicationJsonPrice)
    ], GetStatisticsCharging200ApplicationJson.prototype, "price", void 0);
    return GetStatisticsCharging200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsCharging200ApplicationJson = GetStatisticsCharging200ApplicationJson;
var GetStatisticsChargingRequest = /** @class */ (function (_super) {
    __extends(GetStatisticsChargingRequest, _super);
    function GetStatisticsChargingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsChargingQueryParams)
    ], GetStatisticsChargingRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetStatisticsChargingSecurity)
    ], GetStatisticsChargingRequest.prototype, "security", void 0);
    return GetStatisticsChargingRequest;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsChargingRequest = GetStatisticsChargingRequest;
var GetStatisticsChargingResponse = /** @class */ (function (_super) {
    __extends(GetStatisticsChargingResponse, _super);
    function GetStatisticsChargingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetStatisticsChargingResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetStatisticsChargingResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GetStatisticsCharging200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetStatisticsChargingResponse.prototype, "getStatisticsCharging200ApplicationJSONObjects", void 0);
    return GetStatisticsChargingResponse;
}(utils_1.SpeakeasyBase));
exports.GetStatisticsChargingResponse = GetStatisticsChargingResponse;
