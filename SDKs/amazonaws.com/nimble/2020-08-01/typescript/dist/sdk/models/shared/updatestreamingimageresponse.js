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
exports.UpdateStreamingImageResponse = exports.UpdateStreamingImageResponseStreamingImage = void 0;
var utils_1 = require("../../../internal/utils");
var streamingimageencryptionconfiguration_1 = require("./streamingimageencryptionconfiguration");
var streamingimagestateenum_1 = require("./streamingimagestateenum");
var streamingimagestatuscodeenum_1 = require("./streamingimagestatuscodeenum");
var UpdateStreamingImageResponseStreamingImage = /** @class */ (function (_super) {
    __extends(UpdateStreamingImageResponseStreamingImage, _super);
    function UpdateStreamingImageResponseStreamingImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2ImageId" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "ec2ImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfiguration" }),
        __metadata("design:type", streamingimageencryptionconfiguration_1.StreamingImageEncryptionConfiguration)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "encryptionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eulaIds" }),
        __metadata("design:type", Array)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "eulaIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamingImageId" }),
        __metadata("design:type", String)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "streamingImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], UpdateStreamingImageResponseStreamingImage.prototype, "tags", void 0);
    return UpdateStreamingImageResponseStreamingImage;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingImageResponseStreamingImage = UpdateStreamingImageResponseStreamingImage;
var UpdateStreamingImageResponse = /** @class */ (function (_super) {
    __extends(UpdateStreamingImageResponse, _super);
    function UpdateStreamingImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamingImage" }),
        __metadata("design:type", UpdateStreamingImageResponseStreamingImage)
    ], UpdateStreamingImageResponse.prototype, "streamingImage", void 0);
    return UpdateStreamingImageResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateStreamingImageResponse = UpdateStreamingImageResponse;
