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
exports.GetApiV1DonationsCarbonCalculateResponse = exports.GetApiV1DonationsCarbonCalculateRequest = exports.GetApiV1DonationsCarbonCalculateSecurity = exports.GetApiV1DonationsCarbonCalculateQueryParams = exports.GetApiV1DonationsCarbonCalculateTransportationMethodEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetApiV1DonationsCarbonCalculateTransportationMethodEnum;
(function (GetApiV1DonationsCarbonCalculateTransportationMethodEnum) {
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Air"] = "air";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Truck"] = "truck";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Rail"] = "rail";
    GetApiV1DonationsCarbonCalculateTransportationMethodEnum["Sea"] = "sea";
})(GetApiV1DonationsCarbonCalculateTransportationMethodEnum = exports.GetApiV1DonationsCarbonCalculateTransportationMethodEnum || (exports.GetApiV1DonationsCarbonCalculateTransportationMethodEnum = {}));
var GetApiV1DonationsCarbonCalculateQueryParams = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateQueryParams, _super);
    function GetApiV1DonationsCarbonCalculateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=destination_address" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "destinationAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=distance_mi" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "distanceMi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=origin_address" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "originAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=transportation_method" }),
        __metadata("design:type", String)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "transportationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=weight_lb" }),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateQueryParams.prototype, "weightLb", void 0);
    return GetApiV1DonationsCarbonCalculateQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsCarbonCalculateQueryParams = GetApiV1DonationsCarbonCalculateQueryParams;
var GetApiV1DonationsCarbonCalculateSecurity = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateSecurity, _super);
    function GetApiV1DonationsCarbonCalculateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], GetApiV1DonationsCarbonCalculateSecurity.prototype, "basicAuth", void 0);
    return GetApiV1DonationsCarbonCalculateSecurity;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsCarbonCalculateSecurity = GetApiV1DonationsCarbonCalculateSecurity;
var GetApiV1DonationsCarbonCalculateRequest = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateRequest, _super);
    function GetApiV1DonationsCarbonCalculateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1DonationsCarbonCalculateQueryParams)
    ], GetApiV1DonationsCarbonCalculateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetApiV1DonationsCarbonCalculateSecurity)
    ], GetApiV1DonationsCarbonCalculateRequest.prototype, "security", void 0);
    return GetApiV1DonationsCarbonCalculateRequest;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsCarbonCalculateRequest = GetApiV1DonationsCarbonCalculateRequest;
var GetApiV1DonationsCarbonCalculateResponse = /** @class */ (function (_super) {
    __extends(GetApiV1DonationsCarbonCalculateResponse, _super);
    function GetApiV1DonationsCarbonCalculateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetApiV1DonationsCarbonCalculateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetApiV1DonationsCarbonCalculateResponse.prototype, "statusCode", void 0);
    return GetApiV1DonationsCarbonCalculateResponse;
}(utils_1.SpeakeasyBase));
exports.GetApiV1DonationsCarbonCalculateResponse = GetApiV1DonationsCarbonCalculateResponse;
