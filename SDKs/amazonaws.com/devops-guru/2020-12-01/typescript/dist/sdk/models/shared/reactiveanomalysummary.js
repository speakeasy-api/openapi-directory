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
exports.ReactiveAnomalySummary = void 0;
var utils_1 = require("../../../internal/utils");
var anomalyreportedtimerange_1 = require("./anomalyreportedtimerange");
var anomalytimerange_1 = require("./anomalytimerange");
var resourcecollection_1 = require("./resourcecollection");
var anomalyseverityenum_1 = require("./anomalyseverityenum");
var anomalysourcedetails_1 = require("./anomalysourcedetails");
var anomalystatusenum_1 = require("./anomalystatusenum");
// ReactiveAnomalySummary
/**
 * Details about a reactive anomaly. This object is returned by <code>DescribeAnomaly.</code>
**/
var ReactiveAnomalySummary = /** @class */ (function (_super) {
    __extends(ReactiveAnomalySummary, _super);
    function ReactiveAnomalySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AnomalyReportedTimeRange" }),
        __metadata("design:type", anomalyreportedtimerange_1.AnomalyReportedTimeRange)
    ], ReactiveAnomalySummary.prototype, "anomalyReportedTimeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AnomalyTimeRange" }),
        __metadata("design:type", anomalytimerange_1.AnomalyTimeRange)
    ], ReactiveAnomalySummary.prototype, "anomalyTimeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AssociatedInsightId" }),
        __metadata("design:type", String)
    ], ReactiveAnomalySummary.prototype, "associatedInsightId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ReactiveAnomalySummary.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceCollection" }),
        __metadata("design:type", resourcecollection_1.ResourceCollection)
    ], ReactiveAnomalySummary.prototype, "resourceCollection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Severity" }),
        __metadata("design:type", String)
    ], ReactiveAnomalySummary.prototype, "severity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SourceDetails" }),
        __metadata("design:type", anomalysourcedetails_1.AnomalySourceDetails)
    ], ReactiveAnomalySummary.prototype, "sourceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ReactiveAnomalySummary.prototype, "status", void 0);
    return ReactiveAnomalySummary;
}(utils_1.SpeakeasyBase));
exports.ReactiveAnomalySummary = ReactiveAnomalySummary;
