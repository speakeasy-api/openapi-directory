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
exports.CreatePredictorRequest = void 0;
var utils_1 = require("../../../internal/utils");
var automloverridestrategyenum_1 = require("./automloverridestrategyenum");
var encryptionconfig_1 = require("./encryptionconfig");
var evaluationparameters_1 = require("./evaluationparameters");
var featurizationconfig_1 = require("./featurizationconfig");
var hyperparametertuningjobconfig_1 = require("./hyperparametertuningjobconfig");
var inputdataconfig_1 = require("./inputdataconfig");
var optimizationmetricenum_1 = require("./optimizationmetricenum");
var tag_1 = require("./tag");
var CreatePredictorRequest = /** @class */ (function (_super) {
    __extends(CreatePredictorRequest, _super);
    function CreatePredictorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AlgorithmArn" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "algorithmArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoMLOverrideStrategy" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "autoMLOverrideStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EncryptionConfig" }),
        __metadata("design:type", encryptionconfig_1.EncryptionConfig)
    ], CreatePredictorRequest.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EvaluationParameters" }),
        __metadata("design:type", evaluationparameters_1.EvaluationParameters)
    ], CreatePredictorRequest.prototype, "evaluationParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FeaturizationConfig" }),
        __metadata("design:type", featurizationconfig_1.FeaturizationConfig)
    ], CreatePredictorRequest.prototype, "featurizationConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForecastHorizon" }),
        __metadata("design:type", Number)
    ], CreatePredictorRequest.prototype, "forecastHorizon", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ForecastTypes" }),
        __metadata("design:type", Array)
    ], CreatePredictorRequest.prototype, "forecastTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=HPOConfig" }),
        __metadata("design:type", hyperparametertuningjobconfig_1.HyperParameterTuningJobConfig)
    ], CreatePredictorRequest.prototype, "hpoConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputDataConfig" }),
        __metadata("design:type", inputdataconfig_1.InputDataConfig)
    ], CreatePredictorRequest.prototype, "inputDataConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OptimizationMetric" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "optimizationMetric", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PerformAutoML" }),
        __metadata("design:type", Boolean)
    ], CreatePredictorRequest.prototype, "performAutoML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PerformHPO" }),
        __metadata("design:type", Boolean)
    ], CreatePredictorRequest.prototype, "performHPO", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PredictorName" }),
        __metadata("design:type", String)
    ], CreatePredictorRequest.prototype, "predictorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], CreatePredictorRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TrainingParameters" }),
        __metadata("design:type", Object)
    ], CreatePredictorRequest.prototype, "trainingParameters", void 0);
    return CreatePredictorRequest;
}(utils_1.SpeakeasyBase));
exports.CreatePredictorRequest = CreatePredictorRequest;
