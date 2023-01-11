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
exports.CustomerAction = void 0;
var utils_1 = require("../../../internal/utils");
var acknowledgeactionconfiguration_1 = require("./acknowledgeactionconfiguration");
var customeractionnameenum_1 = require("./customeractionnameenum");
var disableactionconfiguration_1 = require("./disableactionconfiguration");
var enableactionconfiguration_1 = require("./enableactionconfiguration");
var resetactionconfiguration_1 = require("./resetactionconfiguration");
var snoozeactionconfiguration_1 = require("./snoozeactionconfiguration");
// CustomerAction
/**
 * Contains information about the action that you can take to respond to the alarm.
**/
var CustomerAction = /** @class */ (function (_super) {
    __extends(CustomerAction, _super);
    function CustomerAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=acknowledgeActionConfiguration" }),
        __metadata("design:type", acknowledgeactionconfiguration_1.AcknowledgeActionConfiguration)
    ], CustomerAction.prototype, "acknowledgeActionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actionName" }),
        __metadata("design:type", String)
    ], CustomerAction.prototype, "actionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableActionConfiguration" }),
        __metadata("design:type", disableactionconfiguration_1.DisableActionConfiguration)
    ], CustomerAction.prototype, "disableActionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableActionConfiguration" }),
        __metadata("design:type", enableactionconfiguration_1.EnableActionConfiguration)
    ], CustomerAction.prototype, "enableActionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resetActionConfiguration" }),
        __metadata("design:type", resetactionconfiguration_1.ResetActionConfiguration)
    ], CustomerAction.prototype, "resetActionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snoozeActionConfiguration" }),
        __metadata("design:type", snoozeactionconfiguration_1.SnoozeActionConfiguration)
    ], CustomerAction.prototype, "snoozeActionConfiguration", void 0);
    return CustomerAction;
}(utils_1.SpeakeasyBase));
exports.CustomerAction = CustomerAction;
