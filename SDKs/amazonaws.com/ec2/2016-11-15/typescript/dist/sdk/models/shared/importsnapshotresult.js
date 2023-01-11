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
exports.ImportSnapshotResult = exports.ImportSnapshotResultSnapshotTaskDetail = exports.ImportSnapshotResultSnapshotTaskDetailUserBucket = void 0;
var utils_1 = require("../../../internal/utils");
// ImportSnapshotResultSnapshotTaskDetailUserBucket
/**
 * The Amazon S3 bucket for the disk image.
**/
var ImportSnapshotResultSnapshotTaskDetailUserBucket = /** @class */ (function (_super) {
    __extends(ImportSnapshotResultSnapshotTaskDetailUserBucket, _super);
    function ImportSnapshotResultSnapshotTaskDetailUserBucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetailUserBucket.prototype, "s3Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetailUserBucket.prototype, "s3Key", void 0);
    return ImportSnapshotResultSnapshotTaskDetailUserBucket;
}(utils_1.SpeakeasyBase));
exports.ImportSnapshotResultSnapshotTaskDetailUserBucket = ImportSnapshotResultSnapshotTaskDetailUserBucket;
// ImportSnapshotResultSnapshotTaskDetail
/**
 * Information about the import snapshot task.
**/
var ImportSnapshotResultSnapshotTaskDetail = /** @class */ (function (_super) {
    __extends(ImportSnapshotResultSnapshotTaskDetail, _super);
    function ImportSnapshotResultSnapshotTaskDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "diskImageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "encrypted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "kmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "snapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportSnapshotResultSnapshotTaskDetailUserBucket)
    ], ImportSnapshotResultSnapshotTaskDetail.prototype, "userBucket", void 0);
    return ImportSnapshotResultSnapshotTaskDetail;
}(utils_1.SpeakeasyBase));
exports.ImportSnapshotResultSnapshotTaskDetail = ImportSnapshotResultSnapshotTaskDetail;
var ImportSnapshotResult = /** @class */ (function (_super) {
    __extends(ImportSnapshotResult, _super);
    function ImportSnapshotResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResult.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResult.prototype, "importTaskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImportSnapshotResultSnapshotTaskDetail)
    ], ImportSnapshotResult.prototype, "snapshotTaskDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ImportSnapshotResult.prototype, "tags", void 0);
    return ImportSnapshotResult;
}(utils_1.SpeakeasyBase));
exports.ImportSnapshotResult = ImportSnapshotResult;
