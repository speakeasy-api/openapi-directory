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
exports.ImportVolumeResult = exports.ImportVolumeResultConversionTask = exports.ImportVolumeResultConversionTaskImportVolume = exports.ImportVolumeResultConversionTaskImportVolumeVolume = exports.ImportVolumeResultConversionTaskImportVolumeImage = exports.ImportVolumeResultConversionTaskImportInstance = void 0;
var utils_1 = require("../../../internal/utils");
// ImportVolumeResultConversionTaskImportInstance
/**
 * If the task is for importing an instance, this contains information about the import instance task.
**/
var ImportVolumeResultConversionTaskImportInstance = /** @class */ (function (_super) {
    __extends(ImportVolumeResultConversionTaskImportInstance, _super);
    function ImportVolumeResultConversionTaskImportInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportInstance.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportInstance.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportInstance.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportInstance.prototype, "volumes", void 0);
    return ImportVolumeResultConversionTaskImportInstance;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResultConversionTaskImportInstance = ImportVolumeResultConversionTaskImportInstance;
// ImportVolumeResultConversionTaskImportVolumeImage
/**
 * The image.
**/
var ImportVolumeResultConversionTaskImportVolumeImage = /** @class */ (function (_super) {
    __extends(ImportVolumeResultConversionTaskImportVolumeImage, _super);
    function ImportVolumeResultConversionTaskImportVolumeImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeImage.prototype, "checksum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeImage.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeImage.prototype, "importManifestUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeImage.prototype, "size", void 0);
    return ImportVolumeResultConversionTaskImportVolumeImage;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResultConversionTaskImportVolumeImage = ImportVolumeResultConversionTaskImportVolumeImage;
// ImportVolumeResultConversionTaskImportVolumeVolume
/**
 * The volume.
**/
var ImportVolumeResultConversionTaskImportVolumeVolume = /** @class */ (function (_super) {
    __extends(ImportVolumeResultConversionTaskImportVolumeVolume, _super);
    function ImportVolumeResultConversionTaskImportVolumeVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeVolume.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolumeVolume.prototype, "size", void 0);
    return ImportVolumeResultConversionTaskImportVolumeVolume;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResultConversionTaskImportVolumeVolume = ImportVolumeResultConversionTaskImportVolumeVolume;
// ImportVolumeResultConversionTaskImportVolume
/**
 * If the task is for importing a volume, this contains information about the import volume task.
**/
var ImportVolumeResultConversionTaskImportVolume = /** @class */ (function (_super) {
    __extends(ImportVolumeResultConversionTaskImportVolume, _super);
    function ImportVolumeResultConversionTaskImportVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolume.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolume.prototype, "bytesConverted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTaskImportVolume.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportVolumeResultConversionTaskImportVolumeImage)
    ], ImportVolumeResultConversionTaskImportVolume.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportVolumeResultConversionTaskImportVolumeVolume)
    ], ImportVolumeResultConversionTaskImportVolume.prototype, "volume", void 0);
    return ImportVolumeResultConversionTaskImportVolume;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResultConversionTaskImportVolume = ImportVolumeResultConversionTaskImportVolume;
// ImportVolumeResultConversionTask
/**
 * Information about the conversion task.
**/
var ImportVolumeResultConversionTask = /** @class */ (function (_super) {
    __extends(ImportVolumeResultConversionTask, _super);
    function ImportVolumeResultConversionTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTask.prototype, "conversionTaskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTask.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportVolumeResultConversionTaskImportInstance)
    ], ImportVolumeResultConversionTask.prototype, "importInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportVolumeResultConversionTaskImportVolume)
    ], ImportVolumeResultConversionTask.prototype, "importVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTask.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTask.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportVolumeResultConversionTask.prototype, "tags", void 0);
    return ImportVolumeResultConversionTask;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResultConversionTask = ImportVolumeResultConversionTask;
var ImportVolumeResult = /** @class */ (function (_super) {
    __extends(ImportVolumeResult, _super);
    function ImportVolumeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportVolumeResultConversionTask)
    ], ImportVolumeResult.prototype, "conversionTask", void 0);
    return ImportVolumeResult;
}(utils_1.SpeakeasyBase));
exports.ImportVolumeResult = ImportVolumeResult;
