"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.LinuxParameters = void 0;
var utils_1 = require("../../../internal/utils");
var device_1 = require("./device");
var tmpfs_1 = require("./tmpfs");
var class_transformer_1 = require("class-transformer");
/**
 * Linux-specific modifications that are applied to the container, such as details for device mappings.
 */
var LinuxParameters = /** @class */ (function (_super) {
    __extends(LinuxParameters, _super);
    function LinuxParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: device_1.Device }),
        (0, class_transformer_1.Expose)({ name: "devices" }),
        (0, class_transformer_1.Type)(function () { return device_1.Device; }),
        __metadata("design:type", Array)
    ], LinuxParameters.prototype, "devices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "initProcessEnabled" }),
        __metadata("design:type", Boolean)
    ], LinuxParameters.prototype, "initProcessEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "maxSwap" }),
        __metadata("design:type", Number)
    ], LinuxParameters.prototype, "maxSwap", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sharedMemorySize" }),
        __metadata("design:type", Number)
    ], LinuxParameters.prototype, "sharedMemorySize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "swappiness" }),
        __metadata("design:type", Number)
    ], LinuxParameters.prototype, "swappiness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: tmpfs_1.Tmpfs }),
        (0, class_transformer_1.Expose)({ name: "tmpfs" }),
        (0, class_transformer_1.Type)(function () { return tmpfs_1.Tmpfs; }),
        __metadata("design:type", Array)
    ], LinuxParameters.prototype, "tmpfs", void 0);
    return LinuxParameters;
}(utils_1.SpeakeasyBase));
exports.LinuxParameters = LinuxParameters;
