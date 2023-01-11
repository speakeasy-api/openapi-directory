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
exports.ImportInstanceResult = exports.ImportInstanceResultConversionTask = exports.ImportInstanceResultConversionTaskImportVolume = exports.ImportInstanceResultConversionTaskImportVolumeVolume = exports.ImportInstanceResultConversionTaskImportVolumeImage = exports.ImportInstanceResultConversionTaskImportInstance = void 0;
var utils_1 = require("../../../internal/utils");
// ImportInstanceResultConversionTaskImportInstance
/**
 * If the task is for importing an instance, this contains information about the import instance task.
**/
var ImportInstanceResultConversionTaskImportInstance = /** @class */ (function (_super) {
    __extends(ImportInstanceResultConversionTaskImportInstance, _super);
    function ImportInstanceResultConversionTaskImportInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportInstance.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportInstance.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportInstance.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportInstance.prototype, "volumes", void 0);
    return ImportInstanceResultConversionTaskImportInstance;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResultConversionTaskImportInstance = ImportInstanceResultConversionTaskImportInstance;
// ImportInstanceResultConversionTaskImportVolumeImage
/**
 * The image.
**/
var ImportInstanceResultConversionTaskImportVolumeImage = /** @class */ (function (_super) {
    __extends(ImportInstanceResultConversionTaskImportVolumeImage, _super);
    function ImportInstanceResultConversionTaskImportVolumeImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeImage.prototype, "checksum", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeImage.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeImage.prototype, "importManifestUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeImage.prototype, "size", void 0);
    return ImportInstanceResultConversionTaskImportVolumeImage;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResultConversionTaskImportVolumeImage = ImportInstanceResultConversionTaskImportVolumeImage;
// ImportInstanceResultConversionTaskImportVolumeVolume
/**
 * The volume.
**/
var ImportInstanceResultConversionTaskImportVolumeVolume = /** @class */ (function (_super) {
    __extends(ImportInstanceResultConversionTaskImportVolumeVolume, _super);
    function ImportInstanceResultConversionTaskImportVolumeVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeVolume.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolumeVolume.prototype, "size", void 0);
    return ImportInstanceResultConversionTaskImportVolumeVolume;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResultConversionTaskImportVolumeVolume = ImportInstanceResultConversionTaskImportVolumeVolume;
// ImportInstanceResultConversionTaskImportVolume
/**
 * If the task is for importing a volume, this contains information about the import volume task.
**/
var ImportInstanceResultConversionTaskImportVolume = /** @class */ (function (_super) {
    __extends(ImportInstanceResultConversionTaskImportVolume, _super);
    function ImportInstanceResultConversionTaskImportVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolume.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolume.prototype, "bytesConverted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTaskImportVolume.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportInstanceResultConversionTaskImportVolumeImage)
    ], ImportInstanceResultConversionTaskImportVolume.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportInstanceResultConversionTaskImportVolumeVolume)
    ], ImportInstanceResultConversionTaskImportVolume.prototype, "volume", void 0);
    return ImportInstanceResultConversionTaskImportVolume;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResultConversionTaskImportVolume = ImportInstanceResultConversionTaskImportVolume;
// ImportInstanceResultConversionTask
/**
 * Information about the conversion task.
**/
var ImportInstanceResultConversionTask = /** @class */ (function (_super) {
    __extends(ImportInstanceResultConversionTask, _super);
    function ImportInstanceResultConversionTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTask.prototype, "conversionTaskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTask.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportInstanceResultConversionTaskImportInstance)
    ], ImportInstanceResultConversionTask.prototype, "importInstance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportInstanceResultConversionTaskImportVolume)
    ], ImportInstanceResultConversionTask.prototype, "importVolume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTask.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTask.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportInstanceResultConversionTask.prototype, "tags", void 0);
    return ImportInstanceResultConversionTask;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResultConversionTask = ImportInstanceResultConversionTask;
var ImportInstanceResult = /** @class */ (function (_super) {
    __extends(ImportInstanceResult, _super);
    function ImportInstanceResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportInstanceResultConversionTask)
    ], ImportInstanceResult.prototype, "conversionTask", void 0);
    return ImportInstanceResult;
}(utils_1.SpeakeasyBase));
exports.ImportInstanceResult = ImportInstanceResult;
