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
exports.GetVehiclesVehicleidOdometerResponse = exports.GetVehiclesVehicleidOdometerRequest = exports.GetVehiclesVehicleidOdometer200ApplicationJson = exports.GetVehiclesVehicleidOdometerSecurity = exports.GetVehiclesVehicleidOdometerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVehiclesVehicleidOdometerPathParams = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerPathParams, _super);
    function GetVehiclesVehicleidOdometerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vehicleId" }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidOdometerPathParams.prototype, "vehicleId", void 0);
    return GetVehiclesVehicleidOdometerPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerPathParams = GetVehiclesVehicleidOdometerPathParams;
var GetVehiclesVehicleidOdometerSecurity = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerSecurity, _super);
    function GetVehiclesVehicleidOdometerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidOdometerSecurity.prototype, "userAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidOdometerSecurity.prototype, "userAccessToken1", void 0);
    return GetVehiclesVehicleidOdometerSecurity;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerSecurity = GetVehiclesVehicleidOdometerSecurity;
// GetVehiclesVehicleidOdometer200ApplicationJson
/**
 * Vehicle's odometer with timestamp
**/
var GetVehiclesVehicleidOdometer200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometer200ApplicationJson, _super);
    function GetVehiclesVehicleidOdometer200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], GetVehiclesVehicleidOdometer200ApplicationJson.prototype, "distance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetVehiclesVehicleidOdometer200ApplicationJson.prototype, "lastUpdated", void 0);
    return GetVehiclesVehicleidOdometer200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometer200ApplicationJson = GetVehiclesVehicleidOdometer200ApplicationJson;
var GetVehiclesVehicleidOdometerRequest = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidOdometerRequest, _super);
    function GetVehiclesVehicleidOdometerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidOdometerPathParams)
    ], GetVehiclesVehicleidOdometerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidOdometerSecurity)
    ], GetVehiclesVehicleidOdometerRequest.prototype, "security", void 0);
    return GetVehiclesVehicleidOdometerRequest;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerRequest = GetVehiclesVehicleidOdometerRequest;
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
        __metadata("design:type", GetVehiclesVehicleidOdometer200ApplicationJson)
    ], GetVehiclesVehicleidOdometerResponse.prototype, "getVehiclesVehicleidOdometer200ApplicationJSONObject", void 0);
    return GetVehiclesVehicleidOdometerResponse;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidOdometerResponse = GetVehiclesVehicleidOdometerResponse;
