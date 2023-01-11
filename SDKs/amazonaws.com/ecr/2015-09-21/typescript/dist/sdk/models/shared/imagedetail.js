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
exports.ImageDetail = void 0;
var utils_1 = require("../../../internal/utils");
var imagescanfindingssummary_1 = require("./imagescanfindingssummary");
var imagescanstatus_1 = require("./imagescanstatus");
// ImageDetail
/**
 * An object that describes an image returned by a <a>DescribeImages</a> operation.
**/
var ImageDetail = /** @class */ (function (_super) {
    __extends(ImageDetail, _super);
    function ImageDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifactMediaType" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "artifactMediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageDigest" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "imageDigest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageManifestMediaType" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "imageManifestMediaType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imagePushedAt" }),
        __metadata("design:type", Date)
    ], ImageDetail.prototype, "imagePushedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageScanFindingsSummary" }),
        __metadata("design:type", imagescanfindingssummary_1.ImageScanFindingsSummary)
    ], ImageDetail.prototype, "imageScanFindingsSummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageScanStatus" }),
        __metadata("design:type", imagescanstatus_1.ImageScanStatus)
    ], ImageDetail.prototype, "imageScanStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageSizeInBytes" }),
        __metadata("design:type", Number)
    ], ImageDetail.prototype, "imageSizeInBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageTags" }),
        __metadata("design:type", Array)
    ], ImageDetail.prototype, "imageTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registryId" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "registryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], ImageDetail.prototype, "repositoryName", void 0);
    return ImageDetail;
}(utils_1.SpeakeasyBase));
exports.ImageDetail = ImageDetail;
