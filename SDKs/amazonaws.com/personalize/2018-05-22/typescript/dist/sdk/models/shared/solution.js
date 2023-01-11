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
exports.Solution = void 0;
var utils_1 = require("../../../internal/utils");
var automlresult_1 = require("./automlresult");
var solutionversionsummary_1 = require("./solutionversionsummary");
var solutionconfig_1 = require("./solutionconfig");
// Solution
/**
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
**/
var Solution = /** @class */ (function (_super) {
    __extends(Solution, _super);
    function Solution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoMLResult" }),
        __metadata("design:type", automlresult_1.AutoMlResult)
    ], Solution.prototype, "autoMLResult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], Solution.prototype, "creationDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=datasetGroupArn" }),
        __metadata("design:type", String)
    ], Solution.prototype, "datasetGroupArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], Solution.prototype, "eventType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], Solution.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestSolutionVersion" }),
        __metadata("design:type", solutionversionsummary_1.SolutionVersionSummary)
    ], Solution.prototype, "latestSolutionVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Solution.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performAutoML" }),
        __metadata("design:type", Boolean)
    ], Solution.prototype, "performAutoML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performHPO" }),
        __metadata("design:type", Boolean)
    ], Solution.prototype, "performHPO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recipeArn" }),
        __metadata("design:type", String)
    ], Solution.prototype, "recipeArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=solutionArn" }),
        __metadata("design:type", String)
    ], Solution.prototype, "solutionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=solutionConfig" }),
        __metadata("design:type", solutionconfig_1.SolutionConfig)
    ], Solution.prototype, "solutionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Solution.prototype, "status", void 0);
    return Solution;
}(utils_1.SpeakeasyBase));
exports.Solution = Solution;
