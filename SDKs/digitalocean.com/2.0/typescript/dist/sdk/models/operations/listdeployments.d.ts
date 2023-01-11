import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeploymentsPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class ListDeploymentsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentJobs extends SpeakeasyBase {
    name?: string;
    sourceCommitHash?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum {
    Unknown = "UNKNOWN",
    PendingBuild = "PENDING_BUILD",
    Building = "BUILDING",
    PendingDeploy = "PENDING_DEPLOY",
    Deploying = "DEPLOYING",
    Active = "ACTIVE",
    Superseded = "SUPERSEDED",
    Error = "ERROR",
    Canceled = "CANCELED"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Running = "RUNNING",
    Error = "ERROR",
    Success = "SUCCESS"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle extends SpeakeasyBase {
    componentName?: string;
    endedAt?: Date;
    messageBase?: string;
    name?: string;
    reason?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;
    startedAt?: Date;
    status?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;
    steps?: Record<string, any>[];
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentProgress extends SpeakeasyBase {
    errorSteps?: number;
    pendingSteps?: number;
    runningSteps?: number;
    steps?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[];
    successSteps?: number;
    summarySteps?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[];
    totalSteps?: number;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentServices extends SpeakeasyBase {
    name?: string;
    sourceCommitHash?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum {
    Unset = "UNSET",
    Mysql = "MYSQL",
    Pg = "PG",
    Redis = "REDIS"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases extends SpeakeasyBase {
    clusterName?: string;
    dbName?: string;
    dbUser?: string;
    engine?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum;
    name: string;
    production?: boolean;
    version?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains extends SpeakeasyBase {
    domain: string;
    type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum;
    wildcard?: boolean;
    zone?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs extends SpeakeasyBase {
    key: string;
    scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum;
    type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum;
    value?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit extends SpeakeasyBase {
    branch?: string;
    repoCloneUrl?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage extends SpeakeasyBase {
    registry?: string;
    registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum;
    repository?: string;
    tag?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs",
    BasicXs = "basic-xs",
    BasicS = "basic-s",
    BasicM = "basic-m",
    ProfessionalXs = "professional-xs",
    ProfessionalS = "professional-s",
    ProfessionalM = "professional-m",
    Professional1l = "professional-1l",
    ProfessionalL = "professional-l",
    ProfessionalXl = "professional-xl"
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED",
    PreDeploy = "PRE_DEPLOY",
    PostDeploy = "POST_DEPLOY",
    FailedDeploy = "FAILED_DEPLOY"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs extends SpeakeasyBase {
    buildCommand?: string;
    dockerfilePath?: string;
    environmentSlug?: string;
    envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs[];
    git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit;
    github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub;
    gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab;
    image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage;
    instanceCount?: number;
    instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum;
    kind?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum;
    name: string;
    runCommand?: string;
    sourceDir?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum {
    Ams = "ams",
    Nyc = "nyc",
    Fra = "fra"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins extends SpeakeasyBase {
    exact?: string;
    prefix?: string;
    regex?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOrigins?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins[];
    exposeHeaders?: string[];
    maxAge?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs extends SpeakeasyBase {
    key: string;
    scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum;
    type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum;
    value?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit extends SpeakeasyBase {
    branch?: string;
    repoCloneUrl?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck extends SpeakeasyBase {
    failureThreshold?: number;
    httpPath?: string;
    initialDelaySeconds?: number;
    periodSeconds?: number;
    successThreshold?: number;
    timeoutSeconds?: number;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage extends SpeakeasyBase {
    registry?: string;
    registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum;
    repository?: string;
    tag?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs",
    BasicXs = "basic-xs",
    BasicS = "basic-s",
    BasicM = "basic-m",
    ProfessionalXs = "professional-xs",
    ProfessionalS = "professional-s",
    ProfessionalM = "professional-m",
    Professional1l = "professional-1l",
    ProfessionalL = "professional-l",
    ProfessionalXl = "professional-xl"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
    path?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices extends SpeakeasyBase {
    buildCommand?: string;
    cors?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors;
    dockerfilePath?: string;
    environmentSlug?: string;
    envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs[];
    git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit;
    github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub;
    gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab;
    healthCheck?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck;
    httpPort?: number;
    image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage;
    instanceCount?: number;
    instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum;
    internalPorts?: number[];
    name: string;
    routes?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[];
    runCommand?: string;
    sourceDir?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs extends SpeakeasyBase {
    key: string;
    scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum;
    type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum;
    value?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit extends SpeakeasyBase {
    branch?: string;
    repoCloneUrl?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage extends SpeakeasyBase {
    registry?: string;
    registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum;
    repository?: string;
    tag?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites extends SpeakeasyBase {
    buildCommand?: string;
    catchallDocument?: string;
    cors?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors;
    dockerfilePath?: string;
    environmentSlug?: string;
    envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs[];
    errorDocument?: string;
    git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit;
    github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub;
    gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab;
    image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage;
    indexDocument?: string;
    name: string;
    outputDir?: string;
    routes?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[];
    runCommand?: string;
    sourceDir?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs extends SpeakeasyBase {
    key: string;
    scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum;
    type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum;
    value?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit extends SpeakeasyBase {
    branch?: string;
    repoCloneUrl?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab extends SpeakeasyBase {
    branch?: string;
    deployOnPush?: boolean;
    repo?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage extends SpeakeasyBase {
    registry?: string;
    registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum;
    repository?: string;
    tag?: string;
}
export declare enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum {
    BasicXxs = "basic-xxs",
    BasicXs = "basic-xs",
    BasicS = "basic-s",
    BasicM = "basic-m",
    ProfessionalXs = "professional-xs",
    ProfessionalS = "professional-s",
    ProfessionalM = "professional-m",
    Professional1l = "professional-1l",
    ProfessionalL = "professional-l",
    ProfessionalXl = "professional-xl"
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers extends SpeakeasyBase {
    buildCommand?: string;
    dockerfilePath?: string;
    environmentSlug?: string;
    envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs[];
    git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit;
    github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub;
    gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab;
    image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage;
    instanceCount?: number;
    instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum;
    name: string;
    runCommand?: string;
    sourceDir?: string;
}
/**
 * The desired configuration of an application.
**/
export declare class ListDeployments200ApplicationJsonAnAppDeploymentAppSpec extends SpeakeasyBase {
    databases?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases[];
    domains?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains[];
    jobs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs[];
    name: string;
    region?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum;
    services?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices[];
    staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites[];
    workers?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers[];
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentStaticSites extends SpeakeasyBase {
    name?: string;
    sourceCommitHash?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeploymentWorkers extends SpeakeasyBase {
    name?: string;
    sourceCommitHash?: string;
}
export declare class ListDeployments200ApplicationJsonAnAppDeployment extends SpeakeasyBase {
    cause?: string;
    clonedFrom?: string;
    createdAt?: Date;
    id?: string;
    jobs?: ListDeployments200ApplicationJsonAnAppDeploymentJobs[];
    phase?: ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum;
    phaseLastUpdatedAt?: Date;
    progress?: ListDeployments200ApplicationJsonAnAppDeploymentProgress;
    services?: ListDeployments200ApplicationJsonAnAppDeploymentServices[];
    spec?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpec;
    staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentStaticSites[];
    tierSlug?: string;
    updatedAt?: Date;
    workers?: ListDeployments200ApplicationJsonAnAppDeploymentWorkers[];
}
export declare class ListDeployments200ApplicationJson extends SpeakeasyBase {
    deployments?: ListDeployments200ApplicationJsonAnAppDeployment[];
    links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;
    meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}
export declare class ListDeployments401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListDeploymentsRequest extends SpeakeasyBase {
    pathParams: ListDeploymentsPathParams;
    queryParams: ListDeploymentsQueryParams;
}
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listDeployments200ApplicationJSONObject?: ListDeployments200ApplicationJson;
    listDeployments401ApplicationJSONObject?: ListDeployments401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
