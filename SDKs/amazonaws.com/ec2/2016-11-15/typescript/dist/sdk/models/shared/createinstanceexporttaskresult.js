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
exports.CreateInstanceExportTaskResult = exports.CreateInstanceExportTaskResultExportTask = exports.CreateInstanceExportTaskResultExportTaskInstanceExportDetails = exports.CreateInstanceExportTaskResultExportTaskExportToS3Task = void 0;
var utils_1 = require("../../../internal/utils");
// CreateInstanceExportTaskResultExportTaskExportToS3Task
/**
 * Information about the export task.
**/
var CreateInstanceExportTaskResultExportTaskExportToS3Task = /** @class */ (function (_super) {
    __extends(CreateInstanceExportTaskResultExportTaskExportToS3Task, _super);
    function CreateInstanceExportTaskResultExportTaskExportToS3Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskExportToS3Task.prototype, "containerFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskExportToS3Task.prototype, "diskImageFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskExportToS3Task.prototype, "s3Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskExportToS3Task.prototype, "s3Key", void 0);
    return CreateInstanceExportTaskResultExportTaskExportToS3Task;
}(utils_1.SpeakeasyBase));
exports.CreateInstanceExportTaskResultExportTaskExportToS3Task = CreateInstanceExportTaskResultExportTaskExportToS3Task;
// CreateInstanceExportTaskResultExportTaskInstanceExportDetails
/**
 * Information about the instance to export.
**/
var CreateInstanceExportTaskResultExportTaskInstanceExportDetails = /** @class */ (function (_super) {
    __extends(CreateInstanceExportTaskResultExportTaskInstanceExportDetails, _super);
    function CreateInstanceExportTaskResultExportTaskInstanceExportDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskInstanceExportDetails.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTaskInstanceExportDetails.prototype, "targetEnvironment", void 0);
    return CreateInstanceExportTaskResultExportTaskInstanceExportDetails;
}(utils_1.SpeakeasyBase));
exports.CreateInstanceExportTaskResultExportTaskInstanceExportDetails = CreateInstanceExportTaskResultExportTaskInstanceExportDetails;
// CreateInstanceExportTaskResultExportTask
/**
 * Information about the export instance task.
**/
var CreateInstanceExportTaskResultExportTask = /** @class */ (function (_super) {
    __extends(CreateInstanceExportTaskResultExportTask, _super);
    function CreateInstanceExportTaskResultExportTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTask.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTask.prototype, "exportTaskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInstanceExportTaskResultExportTaskExportToS3Task)
    ], CreateInstanceExportTaskResultExportTask.prototype, "exportToS3Task", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInstanceExportTaskResultExportTaskInstanceExportDetails)
    ], CreateInstanceExportTaskResultExportTask.prototype, "instanceExportDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTask.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTask.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateInstanceExportTaskResultExportTask.prototype, "tags", void 0);
    return CreateInstanceExportTaskResultExportTask;
}(utils_1.SpeakeasyBase));
exports.CreateInstanceExportTaskResultExportTask = CreateInstanceExportTaskResultExportTask;
var CreateInstanceExportTaskResult = /** @class */ (function (_super) {
    __extends(CreateInstanceExportTaskResult, _super);
    function CreateInstanceExportTaskResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateInstanceExportTaskResultExportTask)
    ], CreateInstanceExportTaskResult.prototype, "exportTask", void 0);
    return CreateInstanceExportTaskResult;
}(utils_1.SpeakeasyBase));
exports.CreateInstanceExportTaskResult = CreateInstanceExportTaskResult;
