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
exports.AutoImportConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var duplicateproductvalueconfiguration_1 = require("./duplicateproductvalueconfiguration");
var inputconfiguration_1 = require("./inputconfiguration");
var schedulingtypeenum_1 = require("./schedulingtypeenum");
var AutoImportConfiguration = /** @class */ (function (_super) {
    __extends(AutoImportConfiguration, _super);
    function AutoImportConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duplicateProductConfiguration" }),
        __metadata("design:type", duplicateproductvalueconfiguration_1.DuplicateProductValueConfiguration)
    ], AutoImportConfiguration.prototype, "duplicateProductConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=input" }),
        __metadata("design:type", inputconfiguration_1.InputConfiguration)
    ], AutoImportConfiguration.prototype, "input", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputConfiguredByUserId" }),
        __metadata("design:type", String)
    ], AutoImportConfiguration.prototype, "inputConfiguredByUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pauseStatusChangedByUserId" }),
        __metadata("design:type", String)
    ], AutoImportConfiguration.prototype, "pauseStatusChangedByUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pauseStatusChangedUtcDate" }),
        __metadata("design:type", Date)
    ], AutoImportConfiguration.prototype, "pauseStatusChangedUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paused" }),
        __metadata("design:type", Boolean)
    ], AutoImportConfiguration.prototype, "paused", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduledByUserId" }),
        __metadata("design:type", String)
    ], AutoImportConfiguration.prototype, "scheduledByUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedulingLocalTimeZoneName" }),
        __metadata("design:type", String)
    ], AutoImportConfiguration.prototype, "schedulingLocalTimeZoneName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedulingType" }),
        __metadata("design:type", String)
    ], AutoImportConfiguration.prototype, "schedulingType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedulingValue" }),
        __metadata("design:type", Array)
    ], AutoImportConfiguration.prototype, "schedulingValue", void 0);
    return AutoImportConfiguration;
}(utils_1.SpeakeasyBase));
exports.AutoImportConfiguration = AutoImportConfiguration;
