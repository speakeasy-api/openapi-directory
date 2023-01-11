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
exports.GetDeliverabilityTestReportResponse = void 0;
var utils_1 = require("../../../internal/utils");
var deliverabilitytestreport_1 = require("./deliverabilitytestreport");
var ispplacement_1 = require("./ispplacement");
var placementstatistics_1 = require("./placementstatistics");
var tag_1 = require("./tag");
// GetDeliverabilityTestReportResponse
/**
 * The results of the predictive inbox placement test.
**/
var GetDeliverabilityTestReportResponse = /** @class */ (function (_super) {
    __extends(GetDeliverabilityTestReportResponse, _super);
    function GetDeliverabilityTestReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeliverabilityTestReport" }),
        __metadata("design:type", deliverabilitytestreport_1.DeliverabilityTestReport)
    ], GetDeliverabilityTestReportResponse.prototype, "deliverabilityTestReport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IspPlacements", elemType: ispplacement_1.IspPlacement }),
        __metadata("design:type", Array)
    ], GetDeliverabilityTestReportResponse.prototype, "ispPlacements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], GetDeliverabilityTestReportResponse.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OverallPlacement" }),
        __metadata("design:type", placementstatistics_1.PlacementStatistics)
    ], GetDeliverabilityTestReportResponse.prototype, "overallPlacement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], GetDeliverabilityTestReportResponse.prototype, "tags", void 0);
    return GetDeliverabilityTestReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeliverabilityTestReportResponse = GetDeliverabilityTestReportResponse;
