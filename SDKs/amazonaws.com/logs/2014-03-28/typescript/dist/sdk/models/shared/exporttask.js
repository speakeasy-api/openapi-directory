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
exports.ExportTask = void 0;
var utils_1 = require("../../../internal/utils");
var exporttaskexecutioninfo_1 = require("./exporttaskexecutioninfo");
var exporttaskstatus_1 = require("./exporttaskstatus");
// ExportTask
/**
 * Represents an export task.
**/
var ExportTask = /** @class */ (function (_super) {
    __extends(ExportTask, _super);
    function ExportTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", String)
    ], ExportTask.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationPrefix" }),
        __metadata("design:type", String)
    ], ExportTask.prototype, "destinationPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionInfo" }),
        __metadata("design:type", exporttaskexecutioninfo_1.ExportTaskExecutionInfo)
    ], ExportTask.prototype, "executionInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Number)
    ], ExportTask.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logGroupName" }),
        __metadata("design:type", String)
    ], ExportTask.prototype, "logGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", exporttaskstatus_1.ExportTaskStatus)
    ], ExportTask.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], ExportTask.prototype, "taskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskName" }),
        __metadata("design:type", String)
    ], ExportTask.prototype, "taskName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Number)
    ], ExportTask.prototype, "to", void 0);
    return ExportTask;
}(utils_1.SpeakeasyBase));
exports.ExportTask = ExportTask;
