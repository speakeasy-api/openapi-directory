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
exports.GetVehiclesVehicleidResponse = exports.GetVehiclesVehicleidRequest = exports.GetVehiclesVehicleid200ApplicationJson = exports.GetVehiclesVehicleidSecurity = exports.GetVehiclesVehicleidQueryParams = exports.GetVehiclesVehicleidFieldEnum = exports.GetVehiclesVehicleidPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetVehiclesVehicleidPathParams = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidPathParams, _super);
    function GetVehiclesVehicleidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vehicleId" }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidPathParams.prototype, "vehicleId", void 0);
    return GetVehiclesVehicleidPathParams;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidPathParams = GetVehiclesVehicleidPathParams;
var GetVehiclesVehicleidFieldEnum;
(function (GetVehiclesVehicleidFieldEnum) {
    GetVehiclesVehicleidFieldEnum["SmartChargingPolicy"] = "smartChargingPolicy";
    GetVehiclesVehicleidFieldEnum["ChargeState"] = "chargeState";
    GetVehiclesVehicleidFieldEnum["Location"] = "location";
    GetVehiclesVehicleidFieldEnum["Information"] = "information";
    GetVehiclesVehicleidFieldEnum["Odometer"] = "odometer";
})(GetVehiclesVehicleidFieldEnum = exports.GetVehiclesVehicleidFieldEnum || (exports.GetVehiclesVehicleidFieldEnum = {}));
var GetVehiclesVehicleidQueryParams = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidQueryParams, _super);
    function GetVehiclesVehicleidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=field[]" }),
        __metadata("design:type", Array)
    ], GetVehiclesVehicleidQueryParams.prototype, "field", void 0);
    return GetVehiclesVehicleidQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidQueryParams = GetVehiclesVehicleidQueryParams;
var GetVehiclesVehicleidSecurity = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidSecurity, _super);
    function GetVehiclesVehicleidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetVehiclesVehicleidSecurity.prototype, "userAccessToken5", void 0);
    return GetVehiclesVehicleidSecurity;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidSecurity = GetVehiclesVehicleidSecurity;
var GetVehiclesVehicleid200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleid200ApplicationJson, _super);
    function GetVehiclesVehicleid200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeState" }),
        __metadata("design:type", shared.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "chargeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargingLocationId" }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "chargingLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=information" }),
        __metadata("design:type", shared.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "information", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isReachable" }),
        __metadata("design:type", Boolean)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "isReachable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeen" }),
        __metadata("design:type", Date)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "lastSeen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", shared.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=odometer" }),
        __metadata("design:type", shared.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "odometer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=smartChargingPolicy" }),
        __metadata("design:type", shared.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema)
    ], GetVehiclesVehicleid200ApplicationJson.prototype, "smartChargingPolicy", void 0);
    return GetVehiclesVehicleid200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleid200ApplicationJson = GetVehiclesVehicleid200ApplicationJson;
var GetVehiclesVehicleidRequest = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidRequest, _super);
    function GetVehiclesVehicleidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidPathParams)
    ], GetVehiclesVehicleidRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidQueryParams)
    ], GetVehiclesVehicleidRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleidSecurity)
    ], GetVehiclesVehicleidRequest.prototype, "security", void 0);
    return GetVehiclesVehicleidRequest;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidRequest = GetVehiclesVehicleidRequest;
var GetVehiclesVehicleidResponse = /** @class */ (function (_super) {
    __extends(GetVehiclesVehicleidResponse, _super);
    function GetVehiclesVehicleidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetVehiclesVehicleidResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetVehiclesVehicleidResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetVehiclesVehicleid200ApplicationJson)
    ], GetVehiclesVehicleidResponse.prototype, "getVehiclesVehicleid200ApplicationJSONObject", void 0);
    return GetVehiclesVehicleidResponse;
}(utils_1.SpeakeasyBase));
exports.GetVehiclesVehicleidResponse = GetVehiclesVehicleidResponse;
