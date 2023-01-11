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
exports.DeviceInfo = exports.DeviceInfoFirmwareInfo = void 0;
var utils_1 = require("../../../internal/utils");
var vulnerability_1 = require("./vulnerability");
var DeviceInfoFirmwareInfo = /** @class */ (function (_super) {
    __extends(DeviceInfoFirmwareInfo, _super);
    function DeviceInfoFirmwareInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], DeviceInfoFirmwareInfo.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeviceInfoFirmwareInfo.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=release_date" }),
        __metadata("design:type", String)
    ], DeviceInfoFirmwareInfo.prototype, "releaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sha2" }),
        __metadata("design:type", String)
    ], DeviceInfoFirmwareInfo.prototype, "sha2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DeviceInfoFirmwareInfo.prototype, "version", void 0);
    return DeviceInfoFirmwareInfo;
}(utils_1.SpeakeasyBase));
exports.DeviceInfoFirmwareInfo = DeviceInfoFirmwareInfo;
var DeviceInfo = /** @class */ (function (_super) {
    __extends(DeviceInfo, _super);
    function DeviceInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cve_list", elemType: vulnerability_1.Vulnerability }),
        __metadata("design:type", Array)
    ], DeviceInfo.prototype, "cveList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firmware_info" }),
        __metadata("design:type", DeviceInfoFirmwareInfo)
    ], DeviceInfo.prototype, "firmwareInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firmware_version" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "firmwareVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_discontinued" }),
        __metadata("design:type", Boolean)
    ], DeviceInfo.prototype, "isDiscontinued", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latest_firmware_info" }),
        __metadata("design:type", DeviceInfoFirmwareInfo)
    ], DeviceInfo.prototype, "latestFirmwareInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "manufacturer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model_name" }),
        __metadata("design:type", String)
    ], DeviceInfo.prototype, "modelName", void 0);
    return DeviceInfo;
}(utils_1.SpeakeasyBase));
exports.DeviceInfo = DeviceInfo;
