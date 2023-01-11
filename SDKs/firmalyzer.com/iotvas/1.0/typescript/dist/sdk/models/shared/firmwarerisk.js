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
exports.FirmwareRisk = exports.FirmwareRiskRiskSummary = void 0;
var utils_1 = require("../../../internal/utils");
var vulnerablecomponent_1 = require("./vulnerablecomponent");
var FirmwareRiskRiskSummary = /** @class */ (function (_super) {
    __extends(FirmwareRiskRiskSummary, _super);
    function FirmwareRiskRiskSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_tools_risk" }),
        __metadata("design:type", String)
    ], FirmwareRiskRiskSummary.prototype, "clientToolsRisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crypto_risk" }),
        __metadata("design:type", String)
    ], FirmwareRiskRiskSummary.prototype, "cryptoRisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kernel_risk" }),
        __metadata("design:type", String)
    ], FirmwareRiskRiskSummary.prototype, "kernelRisk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net_services_risk" }),
        __metadata("design:type", String)
    ], FirmwareRiskRiskSummary.prototype, "netServicesRisk", void 0);
    return FirmwareRiskRiskSummary;
}(utils_1.SpeakeasyBase));
exports.FirmwareRiskRiskSummary = FirmwareRiskRiskSummary;
var FirmwareRisk = /** @class */ (function (_super) {
    __extends(FirmwareRisk, _super);
    function FirmwareRisk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=risk_summary" }),
        __metadata("design:type", FirmwareRiskRiskSummary)
    ], FirmwareRisk.prototype, "riskSummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vulnerable_components", elemType: vulnerablecomponent_1.VulnerableComponent }),
        __metadata("design:type", Array)
    ], FirmwareRisk.prototype, "vulnerableComponents", void 0);
    return FirmwareRisk;
}(utils_1.SpeakeasyBase));
exports.FirmwareRisk = FirmwareRisk;
