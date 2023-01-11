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
exports.ReportTask = void 0;
var utils_1 = require("../../../internal/utils");
var dimension_1 = require("./dimension");
var inventoryreference_1 = require("./inventoryreference");
// ReportTask
/**
 * This type defines the fields in a report task.
**/
var ReportTask = /** @class */ (function (_super) {
    __extends(ReportTask, _super);
    function ReportTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=campaignIds" }),
        __metadata("design:type", Array)
    ], ReportTask.prototype, "campaignIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateFrom" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "dateFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateTo" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "dateTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dimensions", elemType: dimension_1.Dimension }),
        __metadata("design:type", Array)
    ], ReportTask.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventoryReferences", elemType: inventoryreference_1.InventoryReference }),
        __metadata("design:type", Array)
    ], ReportTask.prototype, "inventoryReferences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listingIds" }),
        __metadata("design:type", Array)
    ], ReportTask.prototype, "listingIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "marketplaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metricKeys" }),
        __metadata("design:type", Array)
    ], ReportTask.prototype, "metricKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportExpirationDate" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportExpirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportFormat" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportHref" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportHref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportId" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportName" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskCompletionDate" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskCompletionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskCreationDate" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskCreationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskExpectedCompletionDate" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskExpectedCompletionDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskId" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskStatus" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportTaskStatusMessage" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportTaskStatusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportType" }),
        __metadata("design:type", String)
    ], ReportTask.prototype, "reportType", void 0);
    return ReportTask;
}(utils_1.SpeakeasyBase));
exports.ReportTask = ReportTask;
