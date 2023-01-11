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
exports.GetChargersResponse = exports.GetChargersRequest = exports.GetChargersSecurity = exports.GetChargersQueryParams = exports.GetChargersFieldEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetChargersFieldEnum;
(function (GetChargersFieldEnum) {
    GetChargersFieldEnum["ChargeState"] = "chargeState";
    GetChargersFieldEnum["Location"] = "location";
})(GetChargersFieldEnum = exports.GetChargersFieldEnum || (exports.GetChargersFieldEnum = {}));
var GetChargersQueryParams = /** @class */ (function (_super) {
    __extends(GetChargersQueryParams, _super);
    function GetChargersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=field[]" }),
        __metadata("design:type", Array)
    ], GetChargersQueryParams.prototype, "field", void 0);
    return GetChargersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetChargersQueryParams = GetChargersQueryParams;
var GetChargersSecurity = /** @class */ (function (_super) {
    __extends(GetChargersSecurity, _super);
    function GetChargersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargersSecurity.prototype, "userAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargersSecurity.prototype, "userAccessToken1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeUserAccessToken)
    ], GetChargersSecurity.prototype, "userAccessToken2", void 0);
    return GetChargersSecurity;
}(utils_1.SpeakeasyBase));
exports.GetChargersSecurity = GetChargersSecurity;
var GetChargersRequest = /** @class */ (function (_super) {
    __extends(GetChargersRequest, _super);
    function GetChargersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChargersQueryParams)
    ], GetChargersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetChargersSecurity)
    ], GetChargersRequest.prototype, "security", void 0);
    return GetChargersRequest;
}(utils_1.SpeakeasyBase));
exports.GetChargersRequest = GetChargersRequest;
var GetChargersResponse = /** @class */ (function (_super) {
    __extends(GetChargersResponse, _super);
    function GetChargersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetChargersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetChargersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema }),
        __metadata("design:type", Array)
    ], GetChargersResponse.prototype, "onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas", void 0);
    return GetChargersResponse;
}(utils_1.SpeakeasyBase));
exports.GetChargersResponse = GetChargersResponse;
