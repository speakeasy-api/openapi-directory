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
exports.ImageAttribute = exports.ImageAttributeSriovNetSupport = exports.ImageAttributeRamdiskId = exports.ImageAttributeKernelId = exports.ImageAttributeDescription = exports.ImageAttributeBootMode = void 0;
var utils_1 = require("../../../internal/utils");
// ImageAttributeBootMode
/**
 * Describes a value for a resource attribute that is a String.
**/
var ImageAttributeBootMode = /** @class */ (function (_super) {
    __extends(ImageAttributeBootMode, _super);
    function ImageAttributeBootMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttributeBootMode.prototype, "value", void 0);
    return ImageAttributeBootMode;
}(utils_1.SpeakeasyBase));
exports.ImageAttributeBootMode = ImageAttributeBootMode;
// ImageAttributeDescription
/**
 * A description for the AMI.
**/
var ImageAttributeDescription = /** @class */ (function (_super) {
    __extends(ImageAttributeDescription, _super);
    function ImageAttributeDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttributeDescription.prototype, "value", void 0);
    return ImageAttributeDescription;
}(utils_1.SpeakeasyBase));
exports.ImageAttributeDescription = ImageAttributeDescription;
// ImageAttributeKernelId
/**
 * The kernel ID.
**/
var ImageAttributeKernelId = /** @class */ (function (_super) {
    __extends(ImageAttributeKernelId, _super);
    function ImageAttributeKernelId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttributeKernelId.prototype, "value", void 0);
    return ImageAttributeKernelId;
}(utils_1.SpeakeasyBase));
exports.ImageAttributeKernelId = ImageAttributeKernelId;
// ImageAttributeRamdiskId
/**
 * The RAM disk ID.
**/
var ImageAttributeRamdiskId = /** @class */ (function (_super) {
    __extends(ImageAttributeRamdiskId, _super);
    function ImageAttributeRamdiskId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttributeRamdiskId.prototype, "value", void 0);
    return ImageAttributeRamdiskId;
}(utils_1.SpeakeasyBase));
exports.ImageAttributeRamdiskId = ImageAttributeRamdiskId;
// ImageAttributeSriovNetSupport
/**
 * Indicates whether enhanced networking with the Intel 82599 Virtual Function interface is enabled.
**/
var ImageAttributeSriovNetSupport = /** @class */ (function (_super) {
    __extends(ImageAttributeSriovNetSupport, _super);
    function ImageAttributeSriovNetSupport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttributeSriovNetSupport.prototype, "value", void 0);
    return ImageAttributeSriovNetSupport;
}(utils_1.SpeakeasyBase));
exports.ImageAttributeSriovNetSupport = ImageAttributeSriovNetSupport;
// ImageAttribute
/**
 * Describes an image attribute.
**/
var ImageAttribute = /** @class */ (function (_super) {
    __extends(ImageAttribute, _super);
    function ImageAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttribute.prototype, "blockDeviceMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageAttributeBootMode)
    ], ImageAttribute.prototype, "bootMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageAttributeDescription)
    ], ImageAttribute.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttribute.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageAttributeKernelId)
    ], ImageAttribute.prototype, "kernelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttribute.prototype, "launchPermissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImageAttribute.prototype, "productCodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageAttributeRamdiskId)
    ], ImageAttribute.prototype, "ramdiskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImageAttributeSriovNetSupport)
    ], ImageAttribute.prototype, "sriovNetSupport", void 0);
    return ImageAttribute;
}(utils_1.SpeakeasyBase));
exports.ImageAttribute = ImageAttribute;
