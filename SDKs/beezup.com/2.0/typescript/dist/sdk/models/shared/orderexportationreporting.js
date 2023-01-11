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
exports.OrderExportationReporting = void 0;
var utils_1 = require("../../../internal/utils");
var orderexportationreportingprocessingstatusenum_1 = require("./orderexportationreportingprocessingstatusenum");
var sourcetypeenum_1 = require("./sourcetypeenum");
// OrderExportationReporting
/**
 * Represent the reporting of the Order report exportations
**/
var OrderExportationReporting = /** @class */ (function (_super) {
    __extends(OrderExportationReporting, _super);
    function OrderExportationReporting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=abortionUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "abortionUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beginUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "beginUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blobNameUri" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "blobNameUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "endUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enqueuedUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "enqueuedUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionUUID" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "executionUUID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "expirationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "failureUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonCriteria" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "jsonCriteria", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdateUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "lastUpdateUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderCount" }),
        __metadata("design:type", Number)
    ], OrderExportationReporting.prototype, "orderCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingStatus" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "processingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingOrderCount" }),
        __metadata("design:type", Number)
    ], OrderExportationReporting.prototype, "remainingOrderCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resumedUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "resumedUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceUserId" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "sourceUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceUserName" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "sourceUserName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspendedUtcDate" }),
        __metadata("design:type", Date)
    ], OrderExportationReporting.prototype, "suspendedUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeoutDuration" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "timeoutDuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warningMessage" }),
        __metadata("design:type", String)
    ], OrderExportationReporting.prototype, "warningMessage", void 0);
    return OrderExportationReporting;
}(utils_1.SpeakeasyBase));
exports.OrderExportationReporting = OrderExportationReporting;
