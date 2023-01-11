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
exports.SolutionConfig = void 0;
var utils_1 = require("../../../internal/utils");
var automlconfig_1 = require("./automlconfig");
var hpoconfig_1 = require("./hpoconfig");
var optimizationobjective_1 = require("./optimizationobjective");
// SolutionConfig
/**
 * Describes the configuration properties for the solution.
**/
var SolutionConfig = /** @class */ (function (_super) {
    __extends(SolutionConfig, _super);
    function SolutionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=algorithmHyperParameters" }),
        __metadata("design:type", Object)
    ], SolutionConfig.prototype, "algorithmHyperParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoMLConfig" }),
        __metadata("design:type", automlconfig_1.AutoMlConfig)
    ], SolutionConfig.prototype, "autoMLConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=eventValueThreshold" }),
        __metadata("design:type", String)
    ], SolutionConfig.prototype, "eventValueThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=featureTransformationParameters" }),
        __metadata("design:type", Object)
    ], SolutionConfig.prototype, "featureTransformationParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hpoConfig" }),
        __metadata("design:type", hpoconfig_1.HpoConfig)
    ], SolutionConfig.prototype, "hpoConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimizationObjective" }),
        __metadata("design:type", optimizationobjective_1.OptimizationObjective)
    ], SolutionConfig.prototype, "optimizationObjective", void 0);
    return SolutionConfig;
}(utils_1.SpeakeasyBase));
exports.SolutionConfig = SolutionConfig;
