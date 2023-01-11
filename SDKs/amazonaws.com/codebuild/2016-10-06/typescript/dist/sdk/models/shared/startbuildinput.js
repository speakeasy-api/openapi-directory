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
exports.StartBuildInput = void 0;
var utils_1 = require("../../../internal/utils");
var projectartifacts_1 = require("./projectartifacts");
var buildstatusconfig_1 = require("./buildstatusconfig");
var projectcache_1 = require("./projectcache");
var computetypeenum_1 = require("./computetypeenum");
var environmenttypeenum_1 = require("./environmenttypeenum");
var environmentvariable_1 = require("./environmentvariable");
var gitsubmodulesconfig_1 = require("./gitsubmodulesconfig");
var imagepullcredentialstypeenum_1 = require("./imagepullcredentialstypeenum");
var logsconfig_1 = require("./logsconfig");
var registrycredential_1 = require("./registrycredential");
var projectsource_1 = require("./projectsource");
var projectsourceversion_1 = require("./projectsourceversion");
var sourceauth_1 = require("./sourceauth");
var sourcetypeenum_1 = require("./sourcetypeenum");
var StartBuildInput = /** @class */ (function (_super) {
    __extends(StartBuildInput, _super);
    function StartBuildInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artifactsOverride" }),
        __metadata("design:type", projectartifacts_1.ProjectArtifacts)
    ], StartBuildInput.prototype, "artifactsOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildStatusConfigOverride" }),
        __metadata("design:type", buildstatusconfig_1.BuildStatusConfig)
    ], StartBuildInput.prototype, "buildStatusConfigOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buildspecOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "buildspecOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cacheOverride" }),
        __metadata("design:type", projectcache_1.ProjectCache)
    ], StartBuildInput.prototype, "cacheOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "certificateOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "computeTypeOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=debugSessionEnabled" }),
        __metadata("design:type", Boolean)
    ], StartBuildInput.prototype, "debugSessionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionKeyOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "encryptionKeyOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "environmentTypeOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environmentVariablesOverride", elemType: environmentvariable_1.EnvironmentVariable }),
        __metadata("design:type", Array)
    ], StartBuildInput.prototype, "environmentVariablesOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitCloneDepthOverride" }),
        __metadata("design:type", Number)
    ], StartBuildInput.prototype, "gitCloneDepthOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitSubmodulesConfigOverride" }),
        __metadata("design:type", gitsubmodulesconfig_1.GitSubmodulesConfig)
    ], StartBuildInput.prototype, "gitSubmodulesConfigOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "imageOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imagePullCredentialsTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "imagePullCredentialsTypeOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insecureSslOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildInput.prototype, "insecureSslOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logsConfigOverride" }),
        __metadata("design:type", logsconfig_1.LogsConfig)
    ], StartBuildInput.prototype, "logsConfigOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privilegedModeOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildInput.prototype, "privilegedModeOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=projectName" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "projectName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queuedTimeoutInMinutesOverride" }),
        __metadata("design:type", Number)
    ], StartBuildInput.prototype, "queuedTimeoutInMinutesOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registryCredentialOverride" }),
        __metadata("design:type", registrycredential_1.RegistryCredential)
    ], StartBuildInput.prototype, "registryCredentialOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportBuildStatusOverride" }),
        __metadata("design:type", Boolean)
    ], StartBuildInput.prototype, "reportBuildStatusOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondaryArtifactsOverride", elemType: projectartifacts_1.ProjectArtifacts }),
        __metadata("design:type", Array)
    ], StartBuildInput.prototype, "secondaryArtifactsOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySourcesOverride", elemType: projectsource_1.ProjectSource }),
        __metadata("design:type", Array)
    ], StartBuildInput.prototype, "secondarySourcesOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secondarySourcesVersionOverride", elemType: projectsourceversion_1.ProjectSourceVersion }),
        __metadata("design:type", Array)
    ], StartBuildInput.prototype, "secondarySourcesVersionOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRoleOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "serviceRoleOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceAuthOverride" }),
        __metadata("design:type", sourceauth_1.SourceAuth)
    ], StartBuildInput.prototype, "sourceAuthOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceLocationOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "sourceLocationOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceTypeOverride" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "sourceTypeOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceVersion" }),
        __metadata("design:type", String)
    ], StartBuildInput.prototype, "sourceVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeoutInMinutesOverride" }),
        __metadata("design:type", Number)
    ], StartBuildInput.prototype, "timeoutInMinutesOverride", void 0);
    return StartBuildInput;
}(utils_1.SpeakeasyBase));
exports.StartBuildInput = StartBuildInput;
