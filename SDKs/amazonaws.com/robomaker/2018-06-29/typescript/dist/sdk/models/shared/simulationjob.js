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
exports.SimulationJob = void 0;
var utils_1 = require("../../../internal/utils");
var computeresponse_1 = require("./computeresponse");
var datasource_1 = require("./datasource");
var failurebehaviorenum_1 = require("./failurebehaviorenum");
var simulationjoberrorcodeenum_1 = require("./simulationjoberrorcodeenum");
var loggingconfig_1 = require("./loggingconfig");
var networkinterface_1 = require("./networkinterface");
var outputlocation_1 = require("./outputlocation");
var robotapplicationconfig_1 = require("./robotapplicationconfig");
var simulationapplicationconfig_1 = require("./simulationapplicationconfig");
var simulationjobstatusenum_1 = require("./simulationjobstatusenum");
var vpcconfigresponse_1 = require("./vpcconfigresponse");
// SimulationJob
/**
 * Information about a simulation job.
**/
var SimulationJob = /** @class */ (function (_super) {
    __extends(SimulationJob, _super);
    function SimulationJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compute" }),
        __metadata("design:type", computeresponse_1.ComputeResponse)
    ], SimulationJob.prototype, "compute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSources", elemType: datasource_1.DataSource }),
        __metadata("design:type", Array)
    ], SimulationJob.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureBehavior" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "failureBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureCode" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "failureCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "failureReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastStartedAt" }),
        __metadata("design:type", Date)
    ], SimulationJob.prototype, "lastStartedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], SimulationJob.prototype, "lastUpdatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loggingConfig" }),
        __metadata("design:type", loggingconfig_1.LoggingConfig)
    ], SimulationJob.prototype, "loggingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxJobDurationInSeconds" }),
        __metadata("design:type", Number)
    ], SimulationJob.prototype, "maxJobDurationInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkInterface" }),
        __metadata("design:type", networkinterface_1.NetworkInterface)
    ], SimulationJob.prototype, "networkInterface", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputLocation" }),
        __metadata("design:type", outputlocation_1.OutputLocation)
    ], SimulationJob.prototype, "outputLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robotApplications", elemType: robotapplicationconfig_1.RobotApplicationConfig }),
        __metadata("design:type", Array)
    ], SimulationJob.prototype, "robotApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=simulationApplications", elemType: simulationapplicationconfig_1.SimulationApplicationConfig }),
        __metadata("design:type", Array)
    ], SimulationJob.prototype, "simulationApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=simulationTimeMillis" }),
        __metadata("design:type", Number)
    ], SimulationJob.prototype, "simulationTimeMillis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SimulationJob.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], SimulationJob.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConfig" }),
        __metadata("design:type", vpcconfigresponse_1.VpcConfigResponse)
    ], SimulationJob.prototype, "vpcConfig", void 0);
    return SimulationJob;
}(utils_1.SpeakeasyBase));
exports.SimulationJob = SimulationJob;
