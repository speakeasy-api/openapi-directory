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
exports.Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 = exports.Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum;
(function (Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum) {
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["EnableBackups"] = "enable_backups";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["DisableBackups"] = "disable_backups";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Reboot"] = "reboot";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["PowerCycle"] = "power_cycle";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Shutdown"] = "shutdown";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["PowerOff"] = "power_off";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["PowerOn"] = "power_on";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Restore"] = "restore";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["PasswordReset"] = "password_reset";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Resize"] = "resize";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Rebuild"] = "rebuild";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Rename"] = "rename";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["ChangeKernel"] = "change_kernel";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["EnableIpv6"] = "enable_ipv6";
    Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum["Snapshot"] = "snapshot";
})(Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = exports.Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum || (exports.Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = {}));
// Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0
/**
 * Specifies the action that will be taken on the Droplet.
**/
var Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 = /** @class */ (function (_super) {
    __extends(Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0, _super);
    function Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0.prototype, "type", void 0);
    return Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0;
}(utils_1.SpeakeasyBase));
exports.Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0 = Onev21droplets1Percent7BdropletIdPercent7D1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0;
