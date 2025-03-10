"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetVehiclesVehicleidOdometerResponse = exports.GetVehiclesVehicleidOdometer200ApplicationJSON = exports.GetVehiclesVehicleidOdometerRequest = exports.GetVehiclesVehicleidOdometerSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GetVehiclesVehicleidOdometerSecurity = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerSecurity, _super);
    function GetVehiclesVehicleidOdometerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidOdometerSecurity.prototype, "userAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidOdometerSecurity.prototype, "userAccessToken1", void 0);
    return GetVehiclesVehicleidOdometerSecurity;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerSecurity = GetVehiclesVehicleidOdometerSecurity;
var GetVehiclesVehicleidOdometerRequest = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerRequest, _super);
    function GetVehiclesVehicleidOdometerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=vehicleId",
        }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidOdometerRequest.prototype, "vehicleId", void 0);
    return GetVehiclesVehicleidOdometerRequest;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerRequest = GetVehiclesVehicleidOdometerRequest;
/**
 * Vehicle's odometer with timestamp
 */
var GetVehiclesVehicleidOdometer200ApplicationJSON = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometer200ApplicationJSON, _super);
    function GetVehiclesVehicleidOdometer200ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "distance" }),
        __metadata("design:type", Number)
    ], GetVehiclesVehicleidOdometer200ApplicationJSON.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "lastUpdated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], GetVehiclesVehicleidOdometer200ApplicationJSON.prototype, "lastUpdated", void 0);
    return GetVehiclesVehicleidOdometer200ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometer200ApplicationJSON = GetVehiclesVehicleidOdometer200ApplicationJSON;
var GetVehiclesVehicleidOdometerResponse = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerResponse, _super);
    function GetVehiclesVehicleidOdometerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidOdometerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVehiclesVehicleidOdometerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetVehiclesVehicleidOdometerResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidOdometer200ApplicationJSON)
    ], GetVehiclesVehicleidOdometerResponse.prototype, "getVehiclesVehicleidOdometer200ApplicationJSONObject", void 0);
    return GetVehiclesVehicleidOdometerResponse;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerResponse = GetVehiclesVehicleidOdometerResponse;
