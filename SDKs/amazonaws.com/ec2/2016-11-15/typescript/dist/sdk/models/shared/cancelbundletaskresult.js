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
exports.CancelBundleTaskResult = exports.CancelBundleTaskResultBundleTask = exports.CancelBundleTaskResultBundleTaskStorage = exports.CancelBundleTaskResultBundleTaskBundleTaskError = void 0;
var utils_1 = require("../../../internal/utils");
var s3storage_1 = require("./s3storage");
// CancelBundleTaskResultBundleTaskBundleTaskError
/**
 * If the task fails, a description of the error.
**/
var CancelBundleTaskResultBundleTaskBundleTaskError = /** @class */ (function (_super) {
    __extends(CancelBundleTaskResultBundleTaskBundleTaskError, _super);
    function CancelBundleTaskResultBundleTaskBundleTaskError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTaskBundleTaskError.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTaskBundleTaskError.prototype, "message", void 0);
    return CancelBundleTaskResultBundleTaskBundleTaskError;
}(utils_1.SpeakeasyBase));
exports.CancelBundleTaskResultBundleTaskBundleTaskError = CancelBundleTaskResultBundleTaskBundleTaskError;
// CancelBundleTaskResultBundleTaskStorage
/**
 * The Amazon S3 storage locations.
**/
var CancelBundleTaskResultBundleTaskStorage = /** @class */ (function (_super) {
    __extends(CancelBundleTaskResultBundleTaskStorage, _super);
    function CancelBundleTaskResultBundleTaskStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", s3storage_1.S3Storage)
    ], CancelBundleTaskResultBundleTaskStorage.prototype, "s3", void 0);
    return CancelBundleTaskResultBundleTaskStorage;
}(utils_1.SpeakeasyBase));
exports.CancelBundleTaskResultBundleTaskStorage = CancelBundleTaskResultBundleTaskStorage;
// CancelBundleTaskResultBundleTask
/**
 * Information about the bundle task.
**/
var CancelBundleTaskResultBundleTask = /** @class */ (function (_super) {
    __extends(CancelBundleTaskResultBundleTask, _super);
    function CancelBundleTaskResultBundleTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "bundleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBundleTaskResultBundleTaskBundleTaskError)
    ], CancelBundleTaskResultBundleTask.prototype, "bundleTaskError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBundleTaskResultBundleTaskStorage)
    ], CancelBundleTaskResultBundleTask.prototype, "storage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CancelBundleTaskResultBundleTask.prototype, "updateTime", void 0);
    return CancelBundleTaskResultBundleTask;
}(utils_1.SpeakeasyBase));
exports.CancelBundleTaskResultBundleTask = CancelBundleTaskResultBundleTask;
// CancelBundleTaskResult
/**
 * Contains the output of CancelBundleTask.
**/
var CancelBundleTaskResult = /** @class */ (function (_super) {
    __extends(CancelBundleTaskResult, _super);
    function CancelBundleTaskResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CancelBundleTaskResultBundleTask)
    ], CancelBundleTaskResult.prototype, "bundleTask", void 0);
    return CancelBundleTaskResult;
}(utils_1.SpeakeasyBase));
exports.CancelBundleTaskResult = CancelBundleTaskResult;
