"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ProfilingGroupDescription = void 0;
var utils_1 = require("../../../internal/utils");
var agentorchestrationconfig_1 = require("./agentorchestrationconfig");
var computeplatformenum_1 = require("./computeplatformenum");
var profilingstatus_1 = require("./profilingstatus");
var class_transformer_1 = require("class-transformer");
/**
 *  Contains information about a profiling group.
 */
var ProfilingGroupDescription = /** @class */ (function (_super) {
    __extends(ProfilingGroupDescription, _super);
    function ProfilingGroupDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "agentOrchestrationConfig" }),
        (0, class_transformer_1.Type)(function () { return agentorchestrationconfig_1.AgentOrchestrationConfig; }),
        __metadata("design:type", agentorchestrationconfig_1.AgentOrchestrationConfig)
    ], ProfilingGroupDescription.prototype, "agentOrchestrationConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "arn" }),
        __metadata("design:type", String)
    ], ProfilingGroupDescription.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "computePlatform" }),
        __metadata("design:type", String)
    ], ProfilingGroupDescription.prototype, "computePlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "createdAt" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], ProfilingGroupDescription.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ProfilingGroupDescription.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profilingStatus" }),
        (0, class_transformer_1.Type)(function () { return profilingstatus_1.ProfilingStatus; }),
        __metadata("design:type", profilingstatus_1.ProfilingStatus)
    ], ProfilingGroupDescription.prototype, "profilingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        __metadata("design:type", Object)
    ], ProfilingGroupDescription.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updatedAt" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], ProfilingGroupDescription.prototype, "updatedAt", void 0);
    return ProfilingGroupDescription;
}(utils_1.SpeakeasyBase));
exports.ProfilingGroupDescription = ProfilingGroupDescription;
