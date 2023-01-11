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
exports.AssessmentRunFilter = void 0;
var utils_1 = require("../../../internal/utils");
var timestamprange_1 = require("./timestamprange");
var durationrange_1 = require("./durationrange");
// AssessmentRunFilter
/**
 * Used as the request parameter in the <a>ListAssessmentRuns</a> action.
**/
var AssessmentRunFilter = /** @class */ (function (_super) {
    __extends(AssessmentRunFilter, _super);
    function AssessmentRunFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completionTimeRange" }),
        __metadata("design:type", timestamprange_1.TimestampRange)
    ], AssessmentRunFilter.prototype, "completionTimeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=durationRange" }),
        __metadata("design:type", durationrange_1.DurationRange)
    ], AssessmentRunFilter.prototype, "durationRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=namePattern" }),
        __metadata("design:type", String)
    ], AssessmentRunFilter.prototype, "namePattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rulesPackageArns" }),
        __metadata("design:type", Array)
    ], AssessmentRunFilter.prototype, "rulesPackageArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTimeRange" }),
        __metadata("design:type", timestamprange_1.TimestampRange)
    ], AssessmentRunFilter.prototype, "startTimeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stateChangeTimeRange" }),
        __metadata("design:type", timestamprange_1.TimestampRange)
    ], AssessmentRunFilter.prototype, "stateChangeTimeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=states" }),
        __metadata("design:type", Array)
    ], AssessmentRunFilter.prototype, "states", void 0);
    return AssessmentRunFilter;
}(utils_1.SpeakeasyBase));
exports.AssessmentRunFilter = AssessmentRunFilter;
