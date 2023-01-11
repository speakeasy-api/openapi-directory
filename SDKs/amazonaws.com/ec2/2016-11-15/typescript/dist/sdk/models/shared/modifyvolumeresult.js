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
exports.ModifyVolumeResult = exports.ModifyVolumeResultVolumeModification = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyVolumeResultVolumeModification
/**
 * Information about the volume modification.
**/
var ModifyVolumeResultVolumeModification = /** @class */ (function (_super) {
    __extends(ModifyVolumeResultVolumeModification, _super);
    function ModifyVolumeResultVolumeModification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "modificationState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "originalIops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "originalMultiAttachEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "originalSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "originalThroughput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "originalVolumeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "targetIops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "targetMultiAttachEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "targetSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "targetThroughput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "targetVolumeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVolumeResultVolumeModification.prototype, "volumeId", void 0);
    return ModifyVolumeResultVolumeModification;
}(utils_1.SpeakeasyBase));
exports.ModifyVolumeResultVolumeModification = ModifyVolumeResultVolumeModification;
var ModifyVolumeResult = /** @class */ (function (_super) {
    __extends(ModifyVolumeResult, _super);
    function ModifyVolumeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVolumeResultVolumeModification)
    ], ModifyVolumeResult.prototype, "volumeModification", void 0);
    return ModifyVolumeResult;
}(utils_1.SpeakeasyBase));
exports.ModifyVolumeResult = ModifyVolumeResult;
