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
exports.ImplantableDevice = exports.ImplantableDeviceStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var ImplantableDeviceStatusEnum;
(function (ImplantableDeviceStatusEnum) {
    ImplantableDeviceStatusEnum["Active"] = "active";
    ImplantableDeviceStatusEnum["Inactive"] = "inactive";
})(ImplantableDeviceStatusEnum = exports.ImplantableDeviceStatusEnum || (exports.ImplantableDeviceStatusEnum = {}));
var ImplantableDevice = /** @class */ (function (_super) {
    __extends(ImplantableDevice, _super);
    function ImplantableDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ImplantableDevice.prototype, "archived", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand_name" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "brandName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "companyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expiration_date" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gmdn_pt_name" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "gmdnPtName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ImplantableDevice.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manufacturing_date" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "manufacturingDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=procedure" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "procedure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serial_number" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "serialNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=udi" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "udi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version_or_model" }),
        __metadata("design:type", String)
    ], ImplantableDevice.prototype, "versionOrModel", void 0);
    return ImplantableDevice;
}(utils_1.SpeakeasyBase));
exports.ImplantableDevice = ImplantableDevice;
