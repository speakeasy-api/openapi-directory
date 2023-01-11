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
exports.GetChargerResponse = exports.GetChargerRequest = exports.GetCharger200ApplicationJson = exports.GetCharger200ApplicationJsonInformation = exports.GetCharger200ApplicationJsonChargeState = exports.GetChargerSecurity = exports.GetChargerQueryParams = exports.GetChargerPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetChargerPathParams = /** @class */ (function (_super) {
    __extends(GetChargerPathParams, _super);
    function GetChargerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=chargerId" }),
        __metadata("design:type", String)
    ], GetChargerPathParams.prototype, "chargerId", void 0);
    return GetChargerPathParams;
}(utils_1.SpeakeasyBase));
exports.GetChargerPathParams = GetChargerPathParams;
var GetChargerQueryParams = /** @class */ (function (_super) {
    __extends(GetChargerQueryParams, _super);
    function GetChargerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=field[]" }),
        __metadata("design:type", Array)
    ], GetChargerQueryParams.prototype, "field", void 0);
    return GetChargerQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChargerQueryParams = GetChargerQueryParams;
var GetChargerSecurity = /** @class */ (function (_super) {
    __extends(GetChargerSecurity, _super);
    function GetChargerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargerSecurity.prototype, "userAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargerSecurity.prototype, "userAccessToken1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargerSecurity.prototype, "userAccessToken2", void 0);
    return GetChargerSecurity;
}(utils_1.SpeakeasyBase));
exports.GetChargerSecurity = GetChargerSecurity;
var GetCharger200ApplicationJsonChargeState = /** @class */ (function (_super) {
    __extends(GetCharger200ApplicationJsonChargeState, _super);
    function GetCharger200ApplicationJsonChargeState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeRate" }),
        __metadata("design:type", Number)
    ], GetCharger200ApplicationJsonChargeState.prototype, "chargeRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCharging" }),
        __metadata("design:type", Boolean)
    ], GetCharger200ApplicationJsonChargeState.prototype, "isCharging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPluggedIn" }),
        __metadata("design:type", Boolean)
    ], GetCharger200ApplicationJsonChargeState.prototype, "isPluggedIn", void 0);
    return GetCharger200ApplicationJsonChargeState;
}(utils_1.SpeakeasyBase));
exports.GetCharger200ApplicationJsonChargeState = GetCharger200ApplicationJsonChargeState;
// GetCharger200ApplicationJsonInformation
/**
 * Descriptive information about the Charger
**/
var GetCharger200ApplicationJsonInformation = /** @class */ (function (_super) {
    __extends(GetCharger200ApplicationJsonInformation, _super);
    function GetCharger200ApplicationJsonInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], GetCharger200ApplicationJsonInformation.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCharger200ApplicationJsonInformation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], GetCharger200ApplicationJsonInformation.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], GetCharger200ApplicationJsonInformation.prototype, "year", void 0);
    return GetCharger200ApplicationJsonInformation;
}(utils_1.SpeakeasyBase));
exports.GetCharger200ApplicationJsonInformation = GetCharger200ApplicationJsonInformation;
var GetCharger200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetCharger200ApplicationJson, _super);
    function GetCharger200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeState" }),
        __metadata("design:type", GetCharger200ApplicationJsonChargeState)
    ], GetCharger200ApplicationJson.prototype, "chargeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCharger200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=information" }),
        __metadata("design:type", GetCharger200ApplicationJsonInformation)
    ], GetCharger200ApplicationJson.prototype, "information", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isReachable" }),
        __metadata("design:type", Boolean)
    ], GetCharger200ApplicationJson.prototype, "isReachable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeen" }),
        __metadata("design:type", Date)
    ], GetCharger200ApplicationJson.prototype, "lastSeen", void 0);
    return GetCharger200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetCharger200ApplicationJson = GetCharger200ApplicationJson;
var GetChargerRequest = /** @class */ (function (_super) {
    __extends(GetChargerRequest, _super);
    function GetChargerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChargerPathParams)
    ], GetChargerRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChargerQueryParams)
    ], GetChargerRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChargerSecurity)
    ], GetChargerRequest.prototype, "security", void 0);
    return GetChargerRequest;
}(utils_1.SpeakeasyBase));
exports.GetChargerRequest = GetChargerRequest;
var GetChargerResponse = /** @class */ (function (_super) {
    __extends(GetChargerResponse, _super);
    function GetChargerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChargerResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChargerResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCharger200ApplicationJson)
    ], GetChargerResponse.prototype, "getCharger200ApplicationJSONObject", void 0);
    return GetChargerResponse;
}(utils_1.SpeakeasyBase));
exports.GetChargerResponse = GetChargerResponse;
