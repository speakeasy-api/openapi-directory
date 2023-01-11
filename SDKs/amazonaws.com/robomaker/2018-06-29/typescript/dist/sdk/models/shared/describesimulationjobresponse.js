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
exports.DescribeSimulationJobResponse = void 0;
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
var DescribeSimulationJobResponse = /** @class */ (function (_super) {
    __extends(DescribeSimulationJobResponse, _super);
    function DescribeSimulationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compute" }),
        __metadata("design:type", computeresponse_1.ComputeResponse)
    ], DescribeSimulationJobResponse.prototype, "compute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSources", elemType: datasource_1.DataSource }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobResponse.prototype, "dataSources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureBehavior" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "failureBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureCode" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "failureCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "failureReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastStartedAt" }),
        __metadata("design:type", Date)
    ], DescribeSimulationJobResponse.prototype, "lastStartedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdatedAt" }),
        __metadata("design:type", Date)
    ], DescribeSimulationJobResponse.prototype, "lastUpdatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loggingConfig" }),
        __metadata("design:type", loggingconfig_1.LoggingConfig)
    ], DescribeSimulationJobResponse.prototype, "loggingConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxJobDurationInSeconds" }),
        __metadata("design:type", Number)
    ], DescribeSimulationJobResponse.prototype, "maxJobDurationInSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkInterface" }),
        __metadata("design:type", networkinterface_1.NetworkInterface)
    ], DescribeSimulationJobResponse.prototype, "networkInterface", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outputLocation" }),
        __metadata("design:type", outputlocation_1.OutputLocation)
    ], DescribeSimulationJobResponse.prototype, "outputLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=robotApplications", elemType: robotapplicationconfig_1.RobotApplicationConfig }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobResponse.prototype, "robotApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=simulationApplications", elemType: simulationapplicationconfig_1.SimulationApplicationConfig }),
        __metadata("design:type", Array)
    ], DescribeSimulationJobResponse.prototype, "simulationApplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=simulationTimeMillis" }),
        __metadata("design:type", Number)
    ], DescribeSimulationJobResponse.prototype, "simulationTimeMillis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DescribeSimulationJobResponse.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], DescribeSimulationJobResponse.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConfig" }),
        __metadata("design:type", vpcconfigresponse_1.VpcConfigResponse)
    ], DescribeSimulationJobResponse.prototype, "vpcConfig", void 0);
    return DescribeSimulationJobResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeSimulationJobResponse = DescribeSimulationJobResponse;
