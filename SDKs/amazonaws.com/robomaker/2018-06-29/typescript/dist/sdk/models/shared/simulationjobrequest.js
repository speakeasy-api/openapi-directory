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
exports.SimulationJobRequest = void 0;
var utils_1 = require("../../../internal/utils");
var compute_1 = require("./compute");
var datasourceconfig_1 = require("./datasourceconfig");
var failurebehaviorenum_1 = require("./failurebehaviorenum");
var loggingconfig_1 = require("./loggingconfig");
var outputlocation_1 = require("./outputlocation");
var robotapplicationconfig_1 = require("./robotapplicationconfig");
var simulationapplicationconfig_1 = require("./simulationapplicationconfig");
var vpcconfig_1 = require("./vpcconfig");
// SimulationJobRequest
/**
 * Information about a simulation job request.
**/
var SimulationJobRequest = /** @class */ (function (_super) {
    __extends(SimulationJobRequest, _super);
    function SimulationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compute" }),
        __metadata("design:type", compute_1.Compute)
    ], SimulationJobRequest.prototype, "compute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSources", elemType: datasourceconfig_1.DataSourceConfig }),
        __metadata("design:type", Array)
    ], SimulationJobRequest.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureBehavior" }),
        __metadata("design:type", String)
    ], SimulationJobRequest.prototype, "failureBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], SimulationJobRequest.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loggingConfig" }),
        __metadata("design:type", loggingconfig_1.LoggingConfig)
    ], SimulationJobRequest.prototype, "loggingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxJobDurationInSeconds" }),
        __metadata("design:type", Number)
    ], SimulationJobRequest.prototype, "maxJobDurationInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputLocation" }),
        __metadata("design:type", outputlocation_1.OutputLocation)
    ], SimulationJobRequest.prototype, "outputLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robotApplications", elemType: robotapplicationconfig_1.RobotApplicationConfig }),
        __metadata("design:type", Array)
    ], SimulationJobRequest.prototype, "robotApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=simulationApplications", elemType: simulationapplicationconfig_1.SimulationApplicationConfig }),
        __metadata("design:type", Array)
    ], SimulationJobRequest.prototype, "simulationApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], SimulationJobRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useDefaultApplications" }),
        __metadata("design:type", Boolean)
    ], SimulationJobRequest.prototype, "useDefaultApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConfig" }),
        __metadata("design:type", vpcconfig_1.VpcConfig)
    ], SimulationJobRequest.prototype, "vpcConfig", void 0);
    return SimulationJobRequest;
}(utils_1.SpeakeasyBase));
exports.SimulationJobRequest = SimulationJobRequest;
