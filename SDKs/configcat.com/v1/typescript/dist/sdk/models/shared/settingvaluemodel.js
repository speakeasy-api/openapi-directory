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
exports.SettingValueModel = void 0;
var utils_1 = require("../../../internal/utils");
var configmodel_1 = require("./configmodel");
var environmentmodel_1 = require("./environmentmodel");
var integrationlinkmodel_1 = require("./integrationlinkmodel");
var rolloutpercentageitemmodel_1 = require("./rolloutpercentageitemmodel");
var rolloutrulemodel_1 = require("./rolloutrulemodel");
var settingdatamodel_1 = require("./settingdatamodel");
var settingtagmodel_1 = require("./settingtagmodel");
var SettingValueModel = /** @class */ (function (_super) {
    __extends(SettingValueModel, _super);
    function SettingValueModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=config" }),
        __metadata("design:type", configmodel_1.ConfigModel)
    ], SettingValueModel.prototype, "config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", environmentmodel_1.EnvironmentModel)
    ], SettingValueModel.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integrationLinks", elemType: integrationlinkmodel_1.IntegrationLinkModel }),
        __metadata("design:type", Array)
    ], SettingValueModel.prototype, "integrationLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdaterUserEmail" }),
        __metadata("design:type", String)
    ], SettingValueModel.prototype, "lastUpdaterUserEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdaterUserFullName" }),
        __metadata("design:type", String)
    ], SettingValueModel.prototype, "lastUpdaterUserFullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readOnly" }),
        __metadata("design:type", Boolean)
    ], SettingValueModel.prototype, "readOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rolloutPercentageItems", elemType: rolloutpercentageitemmodel_1.RolloutPercentageItemModel }),
        __metadata("design:type", Array)
    ], SettingValueModel.prototype, "rolloutPercentageItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rolloutRules", elemType: rolloutrulemodel_1.RolloutRuleModel }),
        __metadata("design:type", Array)
    ], SettingValueModel.prototype, "rolloutRules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setting" }),
        __metadata("design:type", settingdatamodel_1.SettingDataModel)
    ], SettingValueModel.prototype, "setting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settingTags", elemType: settingtagmodel_1.SettingTagModel }),
        __metadata("design:type", Array)
    ], SettingValueModel.prototype, "settingTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], SettingValueModel.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], SettingValueModel.prototype, "value", void 0);
    return SettingValueModel;
}(utils_1.SpeakeasyBase));
exports.SettingValueModel = SettingValueModel;
