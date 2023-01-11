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
exports.DefaultHyperParameterRanges = void 0;
var utils_1 = require("../../../internal/utils");
var defaultcategoricalhyperparameterrange_1 = require("./defaultcategoricalhyperparameterrange");
var defaultcontinuoushyperparameterrange_1 = require("./defaultcontinuoushyperparameterrange");
var defaultintegerhyperparameterrange_1 = require("./defaultintegerhyperparameterrange");
// DefaultHyperParameterRanges
/**
 * Specifies the hyperparameters and their default ranges. Hyperparameters can be categorical, continuous, or integer-valued.
**/
var DefaultHyperParameterRanges = /** @class */ (function (_super) {
    __extends(DefaultHyperParameterRanges, _super);
    function DefaultHyperParameterRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoricalHyperParameterRanges", elemType: defaultcategoricalhyperparameterrange_1.DefaultCategoricalHyperParameterRange }),
        __metadata("design:type", Array)
    ], DefaultHyperParameterRanges.prototype, "categoricalHyperParameterRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continuousHyperParameterRanges", elemType: defaultcontinuoushyperparameterrange_1.DefaultContinuousHyperParameterRange }),
        __metadata("design:type", Array)
    ], DefaultHyperParameterRanges.prototype, "continuousHyperParameterRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integerHyperParameterRanges", elemType: defaultintegerhyperparameterrange_1.DefaultIntegerHyperParameterRange }),
        __metadata("design:type", Array)
    ], DefaultHyperParameterRanges.prototype, "integerHyperParameterRanges", void 0);
    return DefaultHyperParameterRanges;
}(utils_1.SpeakeasyBase));
exports.DefaultHyperParameterRanges = DefaultHyperParameterRanges;
