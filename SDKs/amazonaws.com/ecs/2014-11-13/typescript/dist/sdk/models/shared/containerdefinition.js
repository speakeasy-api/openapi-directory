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
exports.ContainerDefinition = void 0;
var utils_1 = require("../../../internal/utils");
var containerdependency_1 = require("./containerdependency");
var keyvaluepair_1 = require("./keyvaluepair");
var environmentfile_1 = require("./environmentfile");
var hostentry_1 = require("./hostentry");
var firelensconfiguration_1 = require("./firelensconfiguration");
var healthcheck_1 = require("./healthcheck");
var linuxparameters_1 = require("./linuxparameters");
var logconfiguration_1 = require("./logconfiguration");
var mountpoint_1 = require("./mountpoint");
var portmapping_1 = require("./portmapping");
var repositorycredentials_1 = require("./repositorycredentials");
var resourcerequirement_1 = require("./resourcerequirement");
var secret_1 = require("./secret");
var systemcontrol_1 = require("./systemcontrol");
var ulimit_1 = require("./ulimit");
var volumefrom_1 = require("./volumefrom");
// ContainerDefinition
/**
 * Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
**/
var ContainerDefinition = /** @class */ (function (_super) {
    __extends(ContainerDefinition, _super);
    function ContainerDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu" }),
        __metadata("design:type", Number)
    ], ContainerDefinition.prototype, "cpu", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dependsOn", elemType: containerdependency_1.ContainerDependency }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "dependsOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableNetworking" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "disableNetworking", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnsSearchDomains" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "dnsSearchDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dnsServers" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "dnsServers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerLabels" }),
        __metadata("design:type", Object)
    ], ContainerDefinition.prototype, "dockerLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerSecurityOptions" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "dockerSecurityOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entryPoint" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "entryPoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment", elemType: keyvaluepair_1.KeyValuePair }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentFiles", elemType: environmentfile_1.EnvironmentFile }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "environmentFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=essential" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "essential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extraHosts", elemType: hostentry_1.HostEntry }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "extraHosts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firelensConfiguration" }),
        __metadata("design:type", firelensconfiguration_1.FirelensConfiguration)
    ], ContainerDefinition.prototype, "firelensConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthCheck" }),
        __metadata("design:type", healthcheck_1.HealthCheck)
    ], ContainerDefinition.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], ContainerDefinition.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], ContainerDefinition.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interactive" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "interactive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linuxParameters" }),
        __metadata("design:type", linuxparameters_1.LinuxParameters)
    ], ContainerDefinition.prototype, "linuxParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logConfiguration" }),
        __metadata("design:type", logconfiguration_1.LogConfiguration)
    ], ContainerDefinition.prototype, "logConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ContainerDefinition.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memoryReservation" }),
        __metadata("design:type", Number)
    ], ContainerDefinition.prototype, "memoryReservation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mountPoints", elemType: mountpoint_1.MountPoint }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "mountPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ContainerDefinition.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portMappings", elemType: portmapping_1.PortMapping }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "portMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privileged" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "privileged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pseudoTerminal" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "pseudoTerminal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=readonlyRootFilesystem" }),
        __metadata("design:type", Boolean)
    ], ContainerDefinition.prototype, "readonlyRootFilesystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositoryCredentials" }),
        __metadata("design:type", repositorycredentials_1.RepositoryCredentials)
    ], ContainerDefinition.prototype, "repositoryCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceRequirements", elemType: resourcerequirement_1.ResourceRequirement }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "resourceRequirements", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secrets", elemType: secret_1.Secret }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "secrets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTimeout" }),
        __metadata("design:type", Number)
    ], ContainerDefinition.prototype, "startTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stopTimeout" }),
        __metadata("design:type", Number)
    ], ContainerDefinition.prototype, "stopTimeout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=systemControls", elemType: systemcontrol_1.SystemControl }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "systemControls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ulimits", elemType: ulimit_1.Ulimit }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "ulimits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ContainerDefinition.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumesFrom", elemType: volumefrom_1.VolumeFrom }),
        __metadata("design:type", Array)
    ], ContainerDefinition.prototype, "volumesFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workingDirectory" }),
        __metadata("design:type", String)
    ], ContainerDefinition.prototype, "workingDirectory", void 0);
    return ContainerDefinition;
}(utils_1.SpeakeasyBase));
exports.ContainerDefinition = ContainerDefinition;
