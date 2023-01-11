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
exports.MediaAttachment = exports.MediaAttachmentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var mediascoresharingmodeenum_1 = require("./mediascoresharingmodeenum");
var MediaAttachmentTypeEnum;
(function (MediaAttachmentTypeEnum) {
    MediaAttachmentTypeEnum["Rich"] = "rich";
    MediaAttachmentTypeEnum["Photo"] = "photo";
    MediaAttachmentTypeEnum["Video"] = "video";
    MediaAttachmentTypeEnum["Link"] = "link";
    MediaAttachmentTypeEnum["Flat"] = "flat";
    MediaAttachmentTypeEnum["GoogleDrive"] = "googleDrive";
    MediaAttachmentTypeEnum["Worksheet"] = "worksheet";
    MediaAttachmentTypeEnum["Performance"] = "performance";
})(MediaAttachmentTypeEnum = exports.MediaAttachmentTypeEnum || (exports.MediaAttachmentTypeEnum = {}));
// MediaAttachment
/**
 * Media attachment. The API will automatically resolve the details, oEmbed,
 * and media available if possible and return them in this object
 *
**/
var MediaAttachment = /** @class */ (function (_super) {
    __extends(MediaAttachment, _super);
    function MediaAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorName" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "authorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorUrl" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "authorUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleDriveFileId" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "googleDriveFileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlHeight" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "htmlHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlWidth" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "htmlWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "iconUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockScoreTemplate" }),
        __metadata("design:type", Boolean)
    ], MediaAttachment.prototype, "lockScoreTemplate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mimeType" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "revision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sharingMode" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "sharingMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnailHeight" }),
        __metadata("design:type", Number)
    ], MediaAttachment.prototype, "thumbnailHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnailUrl" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "thumbnailUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnailWidth" }),
        __metadata("design:type", Number)
    ], MediaAttachment.prototype, "thumbnailWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "track", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=worksheet" }),
        __metadata("design:type", String)
    ], MediaAttachment.prototype, "worksheet", void 0);
    return MediaAttachment;
}(utils_1.SpeakeasyBase));
exports.MediaAttachment = MediaAttachment;
