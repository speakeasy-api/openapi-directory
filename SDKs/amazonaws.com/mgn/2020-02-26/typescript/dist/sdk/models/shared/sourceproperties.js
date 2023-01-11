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
exports.SourceProperties = void 0;
var utils_1 = require("../../../internal/utils");
var cpu_1 = require("./cpu");
var disk_1 = require("./disk");
var identificationhints_1 = require("./identificationhints");
var networkinterface_1 = require("./networkinterface");
var os_1 = require("./os");
// SourceProperties
/**
 * Source server properties.
**/
var SourceProperties = /** @class */ (function (_super) {
    __extends(SourceProperties, _super);
    function SourceProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpus", elemType: cpu_1.Cpu }),
        __metadata("design:type", Array)
    ], SourceProperties.prototype, "cpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disks", elemType: disk_1.Disk }),
        __metadata("design:type", Array)
    ], SourceProperties.prototype, "disks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identificationHints" }),
        __metadata("design:type", identificationhints_1.IdentificationHints)
    ], SourceProperties.prototype, "identificationHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", String)
    ], SourceProperties.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkInterfaces", elemType: networkinterface_1.NetworkInterface }),
        __metadata("design:type", Array)
    ], SourceProperties.prototype, "networkInterfaces", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=os" }),
        __metadata("design:type", os_1.Os)
    ], SourceProperties.prototype, "os", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ramBytes" }),
        __metadata("design:type", Number)
    ], SourceProperties.prototype, "ramBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendedInstanceType" }),
        __metadata("design:type", String)
    ], SourceProperties.prototype, "recommendedInstanceType", void 0);
    return SourceProperties;
}(utils_1.SpeakeasyBase));
exports.SourceProperties = SourceProperties;
