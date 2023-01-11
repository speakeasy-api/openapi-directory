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
exports.BuildBatch = void 0;
var utils_1 = require("../../../internal/utils");
var buildartifacts_1 = require("./buildartifacts");
var projectbuildbatchconfig_1 = require("./projectbuildbatchconfig");
var statustypeenum_1 = require("./statustypeenum");
var buildgroup_1 = require("./buildgroup");
var projectcache_1 = require("./projectcache");
var projectenvironment_1 = require("./projectenvironment");
var projectfilesystemlocation_1 = require("./projectfilesystemlocation");
var logsconfig_1 = require("./logsconfig");
var buildbatchphase_1 = require("./buildbatchphase");
var projectsourceversion_1 = require("./projectsourceversion");
var projectsource_1 = require("./projectsource");
var vpcconfig_1 = require("./vpcconfig");
// BuildBatch
/**
 * Contains information about a batch build.
**/
var BuildBatch = /** @class */ (function (_super) {
    __extends(BuildBatch, _super);
    function BuildBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifacts" }),
        __metadata("design:type", buildartifacts_1.BuildArtifacts)
    ], BuildBatch.prototype, "artifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildBatchConfig" }),
        __metadata("design:type", projectbuildbatchconfig_1.ProjectBuildBatchConfig)
    ], BuildBatch.prototype, "buildBatchConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildBatchNumber" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "buildBatchNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildBatchStatus" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "buildBatchStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildGroups", elemType: buildgroup_1.BuildGroup }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "buildGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "buildTimeoutInMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cache" }),
        __metadata("design:type", projectcache_1.ProjectCache)
    ], BuildBatch.prototype, "cache", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=complete" }),
        __metadata("design:type", Boolean)
    ], BuildBatch.prototype, "complete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentPhase" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "currentPhase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debugSessionEnabled" }),
        __metadata("design:type", Boolean)
    ], BuildBatch.prototype, "debugSessionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], BuildBatch.prototype, "endTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", projectenvironment_1.ProjectEnvironment)
    ], BuildBatch.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileSystemLocations", elemType: projectfilesystemlocation_1.ProjectFileSystemLocation }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "fileSystemLocations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initiator" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "initiator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logConfig" }),
        __metadata("design:type", logsconfig_1.LogsConfig)
    ], BuildBatch.prototype, "logConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phases", elemType: buildbatchphase_1.BuildBatchPhase }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "phases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queuedTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], BuildBatch.prototype, "queuedTimeoutInMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolvedSourceVersion" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "resolvedSourceVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondaryArtifacts", elemType: buildartifacts_1.BuildArtifacts }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondaryArtifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySourceVersions", elemType: projectsourceversion_1.ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondarySourceVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySources", elemType: projectsource_1.ProjectSource }),
        __metadata("design:type", Array)
    ], BuildBatch.prototype, "secondarySources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "serviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", projectsource_1.ProjectSource)
    ], BuildBatch.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], BuildBatch.prototype, "sourceVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], BuildBatch.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConfig" }),
        __metadata("design:type", vpcconfig_1.VpcConfig)
    ], BuildBatch.prototype, "vpcConfig", void 0);
    return BuildBatch;
}(utils_1.SpeakeasyBase));
exports.BuildBatch = BuildBatch;
