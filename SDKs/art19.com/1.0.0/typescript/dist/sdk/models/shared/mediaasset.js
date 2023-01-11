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
exports.MediaAsset = exports.MediaAssetAttributes = exports.MediaAssetAttributesStyleEnum = exports.MediaAssetAttributesAttachmentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var MediaAssetAttributesAttachmentTypeEnum;
(function (MediaAssetAttributesAttachmentTypeEnum) {
    MediaAssetAttributesAttachmentTypeEnum["Image"] = "Image";
    MediaAssetAttributesAttachmentTypeEnum["Segment"] = "Segment";
    MediaAssetAttributesAttachmentTypeEnum["SegmentList"] = "SegmentList";
})(MediaAssetAttributesAttachmentTypeEnum = exports.MediaAssetAttributesAttachmentTypeEnum || (exports.MediaAssetAttributesAttachmentTypeEnum = {}));
var MediaAssetAttributesStyleEnum;
(function (MediaAssetAttributesStyleEnum) {
    MediaAssetAttributesStyleEnum["Info"] = "info";
    MediaAssetAttributesStyleEnum["Itunes"] = "itunes";
    MediaAssetAttributesStyleEnum["Medium"] = "medium";
    MediaAssetAttributesStyleEnum["Original"] = "original";
    MediaAssetAttributesStyleEnum["Regular"] = "regular";
    MediaAssetAttributesStyleEnum["Square400"] = "square-400";
    MediaAssetAttributesStyleEnum["Square640"] = "square-640";
    MediaAssetAttributesStyleEnum["Square888"] = "square-888";
    MediaAssetAttributesStyleEnum["Square3000"] = "square-3000";
    MediaAssetAttributesStyleEnum["StrippedOriginal"] = "stripped-original";
    MediaAssetAttributesStyleEnum["Thumb"] = "thumb";
    MediaAssetAttributesStyleEnum["WaveformData"] = "waveform_data";
})(MediaAssetAttributesStyleEnum = exports.MediaAssetAttributesStyleEnum || (exports.MediaAssetAttributesStyleEnum = {}));
var MediaAssetAttributes = /** @class */ (function (_super) {
    __extends(MediaAssetAttributes, _super);
    function MediaAssetAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachment_id" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachment_type" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "attachmentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cdn_url" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "cdnUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], MediaAssetAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_name" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "fileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_size" }),
        __metadata("design:type", Number)
    ], MediaAssetAttributes.prototype, "fileSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_height" }),
        __metadata("design:type", Number)
    ], MediaAssetAttributes.prototype, "sizeHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_width" }),
        __metadata("design:type", Number)
    ], MediaAssetAttributes.prototype, "sizeWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=style" }),
        __metadata("design:type", String)
    ], MediaAssetAttributes.prototype, "style", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], MediaAssetAttributes.prototype, "updatedAt", void 0);
    return MediaAssetAttributes;
}(utils_1.SpeakeasyBase));
exports.MediaAssetAttributes = MediaAssetAttributes;
var MediaAsset = /** @class */ (function (_super) {
    __extends(MediaAsset, _super);
    function MediaAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", MediaAssetAttributes)
    ], MediaAsset.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MediaAsset.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MediaAsset.prototype, "type", void 0);
    return MediaAsset;
}(utils_1.SpeakeasyBase));
exports.MediaAsset = MediaAsset;
