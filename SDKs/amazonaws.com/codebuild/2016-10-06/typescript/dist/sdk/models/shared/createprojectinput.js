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
exports.CreateProjectInput = void 0;
var utils_1 = require("../../../internal/utils");
var projectartifacts_1 = require("./projectartifacts");
var projectbuildbatchconfig_1 = require("./projectbuildbatchconfig");
var projectcache_1 = require("./projectcache");
var projectenvironment_1 = require("./projectenvironment");
var projectfilesystemlocation_1 = require("./projectfilesystemlocation");
var logsconfig_1 = require("./logsconfig");
var projectsourceversion_1 = require("./projectsourceversion");
var projectsource_1 = require("./projectsource");
var tag_1 = require("./tag");
var vpcconfig_1 = require("./vpcconfig");
var CreateProjectInput = /** @class */ (function (_super) {
    __extends(CreateProjectInput, _super);
    function CreateProjectInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifacts" }),
        __metadata("design:type", projectartifacts_1.ProjectArtifacts)
    ], CreateProjectInput.prototype, "artifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=badgeEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateProjectInput.prototype, "badgeEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildBatchConfig" }),
        __metadata("design:type", projectbuildbatchconfig_1.ProjectBuildBatchConfig)
    ], CreateProjectInput.prototype, "buildBatchConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cache" }),
        __metadata("design:type", projectcache_1.ProjectCache)
    ], CreateProjectInput.prototype, "cache", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=concurrentBuildLimit" }),
        __metadata("design:type", Number)
    ], CreateProjectInput.prototype, "concurrentBuildLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateProjectInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionKey" }),
        __metadata("design:type", String)
    ], CreateProjectInput.prototype, "encryptionKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", projectenvironment_1.ProjectEnvironment)
    ], CreateProjectInput.prototype, "environment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileSystemLocations", elemType: projectfilesystemlocation_1.ProjectFileSystemLocation }),
        __metadata("design:type", Array)
    ], CreateProjectInput.prototype, "fileSystemLocations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logsConfig" }),
        __metadata("design:type", logsconfig_1.LogsConfig)
    ], CreateProjectInput.prototype, "logsConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateProjectInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queuedTimeoutInMinutes" }),
        __metadata("design:type", Number)
    ], CreateProjectInput.prototype, "queuedTimeoutInMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondaryArtifacts", elemType: projectartifacts_1.ProjectArtifacts }),
        __metadata("design:type", Array)
    ], CreateProjectInput.prototype, "secondaryArtifacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySourceVersions", elemType: projectsourceversion_1.ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], CreateProjectInput.prototype, "secondarySourceVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySources", elemType: projectsource_1.ProjectSource }),
        __metadata("design:type", Array)
    ], CreateProjectInput.prototype, "secondarySources", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRole" }),
        __metadata("design:type", String)
    ], CreateProjectInput.prototype, "serviceRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", projectsource_1.ProjectSource)
    ], CreateProjectInput.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], CreateProjectInput.prototype, "sourceVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], CreateProjectInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeoutInMinutes" }),
        __metadata("design:type", Number)
    ], CreateProjectInput.prototype, "timeoutInMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpcConfig" }),
        __metadata("design:type", vpcconfig_1.VpcConfig)
    ], CreateProjectInput.prototype, "vpcConfig", void 0);
    return CreateProjectInput;
}(utils_1.SpeakeasyBase));
exports.CreateProjectInput = CreateProjectInput;
