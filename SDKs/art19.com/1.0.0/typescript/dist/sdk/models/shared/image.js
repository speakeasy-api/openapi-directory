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
exports.Image = exports.ImageRelationships = exports.ImageRelationshipsAllMediaAssetsAvailableForThisImage = exports.ImageAttributes = exports.ImageAttributesStatusEnum = exports.ImageAttributesTheCropAreaWithinTheOriginalMediaAsset = exports.ImageAttributesBucketTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var ImageAttributesBucketTypeEnum;
(function (ImageAttributesBucketTypeEnum) {
    ImageAttributesBucketTypeEnum["AdRepAccount"] = "AdRepAccount";
    ImageAttributesBucketTypeEnum["Agency"] = "Agency";
    ImageAttributesBucketTypeEnum["Network"] = "Network";
    ImageAttributesBucketTypeEnum["Series"] = "Series";
    ImageAttributesBucketTypeEnum["User"] = "User";
})(ImageAttributesBucketTypeEnum = exports.ImageAttributesBucketTypeEnum || (exports.ImageAttributesBucketTypeEnum = {}));
var ImageAttributesTheCropAreaWithinTheOriginalMediaAsset = /** @class */ (function (_super) {
    __extends(ImageAttributesTheCropAreaWithinTheOriginalMediaAsset, _super);
    function ImageAttributesTheCropAreaWithinTheOriginalMediaAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ImageAttributesTheCropAreaWithinTheOriginalMediaAsset.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=left" }),
        __metadata("design:type", Number)
    ], ImageAttributesTheCropAreaWithinTheOriginalMediaAsset.prototype, "left", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=top" }),
        __metadata("design:type", Number)
    ], ImageAttributesTheCropAreaWithinTheOriginalMediaAsset.prototype, "top", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ImageAttributesTheCropAreaWithinTheOriginalMediaAsset.prototype, "width", void 0);
    return ImageAttributesTheCropAreaWithinTheOriginalMediaAsset;
}(utils_1.SpeakeasyBase));
exports.ImageAttributesTheCropAreaWithinTheOriginalMediaAsset = ImageAttributesTheCropAreaWithinTheOriginalMediaAsset;
var ImageAttributesStatusEnum;
(function (ImageAttributesStatusEnum) {
    ImageAttributesStatusEnum["Invalid"] = "invalid";
    ImageAttributesStatusEnum["Processing"] = "processing";
    ImageAttributesStatusEnum["Uploaded"] = "uploaded";
    ImageAttributesStatusEnum["Valid"] = "valid";
})(ImageAttributesStatusEnum = exports.ImageAttributesStatusEnum || (exports.ImageAttributesStatusEnum = {}));
var ImageAttributes = /** @class */ (function (_super) {
    __extends(ImageAttributes, _super);
    function ImageAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucket_id" }),
        __metadata("design:type", String)
    ], ImageAttributes.prototype, "bucketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucket_type" }),
        __metadata("design:type", String)
    ], ImageAttributes.prototype, "bucketType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ImageAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crop_data" }),
        __metadata("design:type", ImageAttributesTheCropAreaWithinTheOriginalMediaAsset)
    ], ImageAttributes.prototype, "cropData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ImageAttributes.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ImageAttributes.prototype, "updatedAt", void 0);
    return ImageAttributes;
}(utils_1.SpeakeasyBase));
exports.ImageAttributes = ImageAttributes;
var ImageRelationshipsAllMediaAssetsAvailableForThisImage = /** @class */ (function (_super) {
    __extends(ImageRelationshipsAllMediaAssetsAvailableForThisImage, _super);
    function ImageRelationshipsAllMediaAssetsAvailableForThisImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], ImageRelationshipsAllMediaAssetsAvailableForThisImage.prototype, "data", void 0);
    return ImageRelationshipsAllMediaAssetsAvailableForThisImage;
}(utils_1.SpeakeasyBase));
exports.ImageRelationshipsAllMediaAssetsAvailableForThisImage = ImageRelationshipsAllMediaAssetsAvailableForThisImage;
var ImageRelationships = /** @class */ (function (_super) {
    __extends(ImageRelationships, _super);
    function ImageRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media_assets" }),
        __metadata("design:type", ImageRelationshipsAllMediaAssetsAvailableForThisImage)
    ], ImageRelationships.prototype, "mediaAssets", void 0);
    return ImageRelationships;
}(utils_1.SpeakeasyBase));
exports.ImageRelationships = ImageRelationships;
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", ImageAttributes)
    ], Image.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Image.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", ImageRelationships)
    ], Image.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Image.prototype, "type", void 0);
    return Image;
}(utils_1.SpeakeasyBase));
exports.Image = Image;
