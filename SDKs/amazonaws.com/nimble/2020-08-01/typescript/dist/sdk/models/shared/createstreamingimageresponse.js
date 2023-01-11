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
exports.CreateStreamingImageResponse = exports.CreateStreamingImageResponseStreamingImage = void 0;
var utils_1 = require("../../../internal/utils");
var streamingimageencryptionconfiguration_1 = require("./streamingimageencryptionconfiguration");
var streamingimagestateenum_1 = require("./streamingimagestateenum");
var streamingimagestatuscodeenum_1 = require("./streamingimagestatuscodeenum");
var CreateStreamingImageResponseStreamingImage = /** @class */ (function (_super) {
    __extends(CreateStreamingImageResponseStreamingImage, _super);
    function CreateStreamingImageResponseStreamingImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2ImageId" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "ec2ImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfiguration" }),
        __metadata("design:type", streamingimageencryptionconfiguration_1.StreamingImageEncryptionConfiguration)
    ], CreateStreamingImageResponseStreamingImage.prototype, "encryptionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eulaIds" }),
        __metadata("design:type", Array)
    ], CreateStreamingImageResponseStreamingImage.prototype, "eulaIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusCode" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusMessage" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamingImageId" }),
        __metadata("design:type", String)
    ], CreateStreamingImageResponseStreamingImage.prototype, "streamingImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateStreamingImageResponseStreamingImage.prototype, "tags", void 0);
    return CreateStreamingImageResponseStreamingImage;
}(utils_1.SpeakeasyBase));
exports.CreateStreamingImageResponseStreamingImage = CreateStreamingImageResponseStreamingImage;
var CreateStreamingImageResponse = /** @class */ (function (_super) {
    __extends(CreateStreamingImageResponse, _super);
    function CreateStreamingImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamingImage" }),
        __metadata("design:type", CreateStreamingImageResponseStreamingImage)
    ], CreateStreamingImageResponse.prototype, "streamingImage", void 0);
    return CreateStreamingImageResponse;
}(utils_1.SpeakeasyBase));
exports.CreateStreamingImageResponse = CreateStreamingImageResponse;
