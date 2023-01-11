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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentServices = exports.ListDeployments200ApplicationJsonAnAppDeploymentProgress = exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle = exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason = exports.ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentJobs = exports.ListDeploymentsQueryParams = exports.ListDeploymentsPathParams = void 0;
exports.ListDeploymentsResponse = exports.ListDeploymentsRequest = exports.ListDeployments401ApplicationJson = exports.ListDeployments200ApplicationJson = exports.ListDeployments200ApplicationJsonAnAppDeployment = exports.ListDeployments200ApplicationJsonAnAppDeploymentWorkers = exports.ListDeployments200ApplicationJsonAnAppDeploymentStaticSites = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpec = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListDeploymentsPathParams = /** @class */ (function (_super) {
    __extends(ListDeploymentsPathParams, _super);
    function ListDeploymentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=app_id" }),
        __metadata("design:type", String)
    ], ListDeploymentsPathParams.prototype, "appId", void 0);
    return ListDeploymentsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListDeploymentsPathParams = ListDeploymentsPathParams;
var ListDeploymentsQueryParams = /** @class */ (function (_super) {
    __extends(ListDeploymentsQueryParams, _super);
    function ListDeploymentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListDeploymentsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListDeploymentsQueryParams.prototype, "perPage", void 0);
    return ListDeploymentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListDeploymentsQueryParams = ListDeploymentsQueryParams;
var ListDeployments200ApplicationJsonAnAppDeploymentJobs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentJobs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentJobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentJobs.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_commit_hash" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentJobs.prototype, "sourceCommitHash", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentJobs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentJobs = ListDeployments200ApplicationJsonAnAppDeploymentJobs;
var ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Unknown"] = "UNKNOWN";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["PendingBuild"] = "PENDING_BUILD";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Building"] = "BUILDING";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["PendingDeploy"] = "PENDING_DEPLOY";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Deploying"] = "DEPLOYING";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Active"] = "ACTIVE";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Superseded"] = "SUPERSEDED";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Error"] = "ERROR";
    ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum["Canceled"] = "CANCELED";
})(ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason.prototype, "message", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason = ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;
var ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum["Unknown"] = "UNKNOWN";
    ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum["Pending"] = "PENDING";
    ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum["Running"] = "RUNNING";
    ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum["Error"] = "ERROR";
    ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum["Success"] = "SUCCESS";
})(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=component_name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "componentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ended_at" }),
        __metadata("design:type", Date)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "endedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message_base" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "messageBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=started_at" }),
        __metadata("design:type", Date)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "startedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps" }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle.prototype, "steps", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle = ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle;
var ListDeployments200ApplicationJsonAnAppDeploymentProgress = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentProgress, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_steps" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "errorSteps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pending_steps" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "pendingSteps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=running_steps" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "runningSteps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps", elemType: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "steps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success_steps" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "successSteps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary_steps", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "summarySteps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_steps" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentProgress.prototype, "totalSteps", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentProgress;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentProgress = ListDeployments200ApplicationJsonAnAppDeploymentProgress;
var ListDeployments200ApplicationJsonAnAppDeploymentServices = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentServices, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentServices.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_commit_hash" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentServices.prototype, "sourceCommitHash", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentServices;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentServices = ListDeployments200ApplicationJsonAnAppDeploymentServices;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum["Unset"] = "UNSET";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum["Mysql"] = "MYSQL";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum["Pg"] = "PG";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum["Redis"] = "REDIS";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster_name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "clusterName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=db_name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "dbName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=db_user" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "dbUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=production" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "production", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases.prototype, "version", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum["Unspecified"] = "UNSPECIFIED";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum["Default"] = "DEFAULT";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum["Primary"] = "PRIMARY";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum["Alias"] = "ALIAS";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wildcard" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains.prototype, "wildcard", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains.prototype, "zone", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum["Unset"] = "UNSET";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum["RunTime"] = "RUN_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum["BuildTime"] = "BUILD_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum["RunAndBuildTime"] = "RUN_AND_BUILD_TIME";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum["General"] = "GENERAL";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum["Secret"] = "SECRET";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs.prototype, "value", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo_clone_url" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit.prototype, "repoCloneUrl", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum["DockerHub"] = "DOCKER_HUB";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum["Docr"] = "DOCR";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage.prototype, "registry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage.prototype, "registryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage.prototype, "tag", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["BasicXxs"] = "basic-xxs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["BasicXs"] = "basic-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["BasicS"] = "basic-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["BasicM"] = "basic-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["ProfessionalXs"] = "professional-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["ProfessionalS"] = "professional-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["ProfessionalM"] = "professional-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["Professional1l"] = "professional-1l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["ProfessionalL"] = "professional-l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum["ProfessionalXl"] = "professional-xl";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum["Unspecified"] = "UNSPECIFIED";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum["PreDeploy"] = "PRE_DEPLOY";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum["PostDeploy"] = "POST_DEPLOY";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum["FailedDeploy"] = "FAILED_DEPLOY";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "buildCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerfile_path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "dockerfilePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "environmentSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "envs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=git" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "git", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=github" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "github", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitlab" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "gitlab", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_count" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "instanceCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_size_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "instanceSizeSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "runCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_dir" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs.prototype, "sourceDir", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum["Ams"] = "ams";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum["Nyc"] = "nyc";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum["Fra"] = "fra";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exact" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins.prototype, "exact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins.prototype, "prefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regex" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins.prototype, "regex", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_credentials" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "allowCredentials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_headers" }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "allowHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_methods" }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "allowMethods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_origins", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "allowOrigins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expose_headers" }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "exposeHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_age" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors.prototype, "maxAge", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum["Unset"] = "UNSET";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum["RunTime"] = "RUN_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum["BuildTime"] = "BUILD_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum["RunAndBuildTime"] = "RUN_AND_BUILD_TIME";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum["General"] = "GENERAL";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum["Secret"] = "SECRET";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs.prototype, "value", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo_clone_url" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit.prototype, "repoCloneUrl", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failure_threshold" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "failureThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "httpPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=initial_delay_seconds" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "initialDelaySeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=period_seconds" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "periodSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success_threshold" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "successThreshold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeout_seconds" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck.prototype, "timeoutSeconds", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum["DockerHub"] = "DOCKER_HUB";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum["Docr"] = "DOCR";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage.prototype, "registry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage.prototype, "registryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage.prototype, "tag", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["BasicXxs"] = "basic-xxs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["BasicXs"] = "basic-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["BasicS"] = "basic-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["BasicM"] = "basic-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["ProfessionalXs"] = "professional-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["ProfessionalS"] = "professional-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["ProfessionalM"] = "professional-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["Professional1l"] = "professional-1l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["ProfessionalL"] = "professional-l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum["ProfessionalXl"] = "professional-xl";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent.prototype, "path", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "buildCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cors" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "cors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerfile_path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "dockerfilePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "environmentSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "envs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=git" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "git", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=github" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "github", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitlab" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "gitlab", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=health_check" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_port" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "httpPort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_count" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "instanceCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_size_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "instanceSizeSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internal_ports" }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "internalPorts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "runCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_dir" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices.prototype, "sourceDir", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum["Unset"] = "UNSET";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum["RunTime"] = "RUN_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum["BuildTime"] = "BUILD_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum["RunAndBuildTime"] = "RUN_AND_BUILD_TIME";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum["General"] = "GENERAL";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum["Secret"] = "SECRET";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs.prototype, "value", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo_clone_url" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit.prototype, "repoCloneUrl", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum["DockerHub"] = "DOCKER_HUB";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum["Docr"] = "DOCR";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage.prototype, "registry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage.prototype, "registryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage.prototype, "tag", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "buildCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catchall_document" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "catchallDocument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cors" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "cors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerfile_path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "dockerfilePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "environmentSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "envs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_document" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "errorDocument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=git" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "git", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=github" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "github", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitlab" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "gitlab", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=index_document" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "indexDocument", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=output_dir" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "outputDir", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "runCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_dir" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites.prototype, "sourceDir", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum["Unset"] = "UNSET";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum["RunTime"] = "RUN_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum["BuildTime"] = "BUILD_TIME";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum["RunAndBuildTime"] = "RUN_AND_BUILD_TIME";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum["General"] = "GENERAL";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum["Secret"] = "SECRET";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs.prototype, "value", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo_clone_url" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit.prototype, "repoCloneUrl", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploy_on_push" }),
        __metadata("design:type", Boolean)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab.prototype, "deployOnPush", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repo" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab.prototype, "repo", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum["DockerHub"] = "DOCKER_HUB";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum["Docr"] = "DOCR";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage.prototype, "registry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_type" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage.prototype, "registryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage.prototype, "repository", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage.prototype, "tag", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage;
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum;
(function (ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum) {
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["BasicXxs"] = "basic-xxs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["BasicXs"] = "basic-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["BasicS"] = "basic-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["BasicM"] = "basic-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["ProfessionalXs"] = "professional-xs";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["ProfessionalS"] = "professional-s";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["ProfessionalM"] = "professional-m";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["Professional1l"] = "professional-1l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["ProfessionalL"] = "professional-l";
    ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum["ProfessionalXl"] = "professional-xl";
})(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum || (exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = {}));
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "buildCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dockerfile_path" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "dockerfilePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "environmentSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "envs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=git" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "git", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=github" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "github", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitlab" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "gitlab", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_count" }),
        __metadata("design:type", Number)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "instanceCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instance_size_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "instanceSizeSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=run_command" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "runCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_dir" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers.prototype, "sourceDir", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers = ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers;
// ListDeployments200ApplicationJsonAnAppDeploymentAppSpec
/**
 * The desired configuration of an application.
**/
var ListDeployments200ApplicationJsonAnAppDeploymentAppSpec = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentAppSpec, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentAppSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databases", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "databases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "jobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=static_sites", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "staticSites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeploymentAppSpec.prototype, "workers", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentAppSpec;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentAppSpec = ListDeployments200ApplicationJsonAnAppDeploymentAppSpec;
var ListDeployments200ApplicationJsonAnAppDeploymentStaticSites = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentStaticSites, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentStaticSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentStaticSites.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_commit_hash" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentStaticSites.prototype, "sourceCommitHash", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentStaticSites;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentStaticSites = ListDeployments200ApplicationJsonAnAppDeploymentStaticSites;
var ListDeployments200ApplicationJsonAnAppDeploymentWorkers = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeploymentWorkers, _super);
    function ListDeployments200ApplicationJsonAnAppDeploymentWorkers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentWorkers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_commit_hash" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeploymentWorkers.prototype, "sourceCommitHash", void 0);
    return ListDeployments200ApplicationJsonAnAppDeploymentWorkers;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeploymentWorkers = ListDeployments200ApplicationJsonAnAppDeploymentWorkers;
var ListDeployments200ApplicationJsonAnAppDeployment = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJsonAnAppDeployment, _super);
    function ListDeployments200ApplicationJsonAnAppDeployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "cause", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloned_from" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "clonedFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentJobs }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "jobs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "phase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phase_last_updated_at" }),
        __metadata("design:type", Date)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "phaseLastUpdatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentProgress)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: ListDeployments200ApplicationJsonAnAppDeploymentServices }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "services", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", ListDeployments200ApplicationJsonAnAppDeploymentAppSpec)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=static_sites", elemType: ListDeployments200ApplicationJsonAnAppDeploymentStaticSites }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "staticSites", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier_slug" }),
        __metadata("design:type", String)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "tierSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workers", elemType: ListDeployments200ApplicationJsonAnAppDeploymentWorkers }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJsonAnAppDeployment.prototype, "workers", void 0);
    return ListDeployments200ApplicationJsonAnAppDeployment;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJsonAnAppDeployment = ListDeployments200ApplicationJsonAnAppDeployment;
var ListDeployments200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDeployments200ApplicationJson, _super);
    function ListDeployments200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deployments", elemType: ListDeployments200ApplicationJsonAnAppDeployment }),
        __metadata("design:type", Array)
    ], ListDeployments200ApplicationJson.prototype, "deployments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks)
    ], ListDeployments200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta)
    ], ListDeployments200ApplicationJson.prototype, "meta", void 0);
    return ListDeployments200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDeployments200ApplicationJson = ListDeployments200ApplicationJson;
var ListDeployments401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDeployments401ApplicationJson, _super);
    function ListDeployments401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListDeployments401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListDeployments401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListDeployments401ApplicationJson.prototype, "requestId", void 0);
    return ListDeployments401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListDeployments401ApplicationJson = ListDeployments401ApplicationJson;
var ListDeploymentsRequest = /** @class */ (function (_super) {
    __extends(ListDeploymentsRequest, _super);
    function ListDeploymentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeploymentsPathParams)
    ], ListDeploymentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeploymentsQueryParams)
    ], ListDeploymentsRequest.prototype, "queryParams", void 0);
    return ListDeploymentsRequest;
}(utils_1.SpeakeasyBase));
exports.ListDeploymentsRequest = ListDeploymentsRequest;
var ListDeploymentsResponse = /** @class */ (function (_super) {
    __extends(ListDeploymentsResponse, _super);
    function ListDeploymentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListDeploymentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListDeploymentsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListDeploymentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployments200ApplicationJson)
    ], ListDeploymentsResponse.prototype, "listDeployments200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListDeployments401ApplicationJson)
    ], ListDeploymentsResponse.prototype, "listDeployments401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListDeploymentsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListDeploymentsResponse;
}(utils_1.SpeakeasyBase));
exports.ListDeploymentsResponse = ListDeploymentsResponse;
