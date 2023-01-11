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
exports.StartNetworkInsightsAnalysisResult = exports.StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis = void 0;
var utils_1 = require("../../../internal/utils");
// StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis
/**
 * Information about the network insights analysis.
**/
var StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis = /** @class */ (function (_super) {
    __extends(StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis, _super);
    function StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "alternatePathHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "explanations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "filterInArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "forwardPathComponents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "networkInsightsAnalysisArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "networkInsightsAnalysisId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "networkInsightsPathId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "networkPathFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "returnPathComponents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis.prototype, "tags", void 0);
    return StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis;
}(utils_1.SpeakeasyBase));
exports.StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis = StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis;
var StartNetworkInsightsAnalysisResult = /** @class */ (function (_super) {
    __extends(StartNetworkInsightsAnalysisResult, _super);
    function StartNetworkInsightsAnalysisResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", StartNetworkInsightsAnalysisResultNetworkInsightsAnalysis)
    ], StartNetworkInsightsAnalysisResult.prototype, "networkInsightsAnalysis", void 0);
    return StartNetworkInsightsAnalysisResult;
}(utils_1.SpeakeasyBase));
exports.StartNetworkInsightsAnalysisResult = StartNetworkInsightsAnalysisResult;
