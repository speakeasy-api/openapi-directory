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
exports.BundleInstanceResult = exports.BundleInstanceResultBundleTask = exports.BundleInstanceResultBundleTaskStorage = exports.BundleInstanceResultBundleTaskBundleTaskError = void 0;
var utils_1 = require("../../../internal/utils");
var s3storage_1 = require("./s3storage");
// BundleInstanceResultBundleTaskBundleTaskError
/**
 * If the task fails, a description of the error.
**/
var BundleInstanceResultBundleTaskBundleTaskError = /** @class */ (function (_super) {
    __extends(BundleInstanceResultBundleTaskBundleTaskError, _super);
    function BundleInstanceResultBundleTaskBundleTaskError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTaskBundleTaskError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTaskBundleTaskError.prototype, "message", void 0);
    return BundleInstanceResultBundleTaskBundleTaskError;
}(utils_1.SpeakeasyBase));
exports.BundleInstanceResultBundleTaskBundleTaskError = BundleInstanceResultBundleTaskBundleTaskError;
// BundleInstanceResultBundleTaskStorage
/**
 * The Amazon S3 storage locations.
**/
var BundleInstanceResultBundleTaskStorage = /** @class */ (function (_super) {
    __extends(BundleInstanceResultBundleTaskStorage, _super);
    function BundleInstanceResultBundleTaskStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", s3storage_1.S3Storage)
    ], BundleInstanceResultBundleTaskStorage.prototype, "s3", void 0);
    return BundleInstanceResultBundleTaskStorage;
}(utils_1.SpeakeasyBase));
exports.BundleInstanceResultBundleTaskStorage = BundleInstanceResultBundleTaskStorage;
// BundleInstanceResultBundleTask
/**
 * Information about the bundle task.
**/
var BundleInstanceResultBundleTask = /** @class */ (function (_super) {
    __extends(BundleInstanceResultBundleTask, _super);
    function BundleInstanceResultBundleTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "bundleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BundleInstanceResultBundleTaskBundleTaskError)
    ], BundleInstanceResultBundleTask.prototype, "bundleTaskError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BundleInstanceResultBundleTaskStorage)
    ], BundleInstanceResultBundleTask.prototype, "storage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BundleInstanceResultBundleTask.prototype, "updateTime", void 0);
    return BundleInstanceResultBundleTask;
}(utils_1.SpeakeasyBase));
exports.BundleInstanceResultBundleTask = BundleInstanceResultBundleTask;
// BundleInstanceResult
/**
 * Contains the output of BundleInstance.
**/
var BundleInstanceResult = /** @class */ (function (_super) {
    __extends(BundleInstanceResult, _super);
    function BundleInstanceResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BundleInstanceResultBundleTask)
    ], BundleInstanceResult.prototype, "bundleTask", void 0);
    return BundleInstanceResult;
}(utils_1.SpeakeasyBase));
exports.BundleInstanceResult = BundleInstanceResult;
