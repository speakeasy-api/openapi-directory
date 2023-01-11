import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesprogresspropertiesstepsitems";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiescors";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiesroutesitems";



export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Running = "RUNNING",
    Error = "ERROR",
    Success = "SUCCESS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=component_name" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ended_at" })
  endedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=message_base" })
  messageBase?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: Record<string, any>[];
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_steps" })
  errorSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=pending_steps" })
  pendingSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=running_steps" })
  runningSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle })
  steps?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[];

  @SpeakeasyMetadata({ data: "json, name=success_steps" })
  successSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=summary_steps", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems })
  summarySteps?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[];

  @SpeakeasyMetadata({ data: "json, name=total_steps" })
  totalSteps?: number;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum {
    Unset = "UNSET",
    Mysql = "MYSQL",
    Pg = "PG",
    Redis = "REDIS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_name" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_user" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=production" })
  production?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED",
    PreDeploy = "PRE_DEPLOY",
    PostDeploy = "POST_DEPLOY",
    FailedDeploy = "FAILED_DEPLOY"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum {
    Ams = "ams",
    Nyc = "nyc",
    Fra = "fra"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_origins", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins[];

  @SpeakeasyMetadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failure_threshold" })
  failureThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=http_path" })
  httpPath?: string;

  @SpeakeasyMetadata({ data: "json, name=initial_delay_seconds" })
  initialDelaySeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=period_seconds" })
  periodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=success_threshold" })
  successThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout_seconds" })
  timeoutSeconds?: number;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http_port" })
  httpPort?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=catchall_document" })
  catchallDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSitesImage;

  @SpeakeasyMetadata({ data: "json, name=index_document" })
  indexDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=output_dir" })
  outputDir?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[];

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec
/** 
 * The desired configuration of an application.
**/
export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databases", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases })
  databases?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases[];

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains })
  domains?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains[];

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices[];

  @SpeakeasyMetadata({ data: "json, name=static_sites", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites[];

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers[];
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=cloned_from" })
  clonedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs[];

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=phase_last_updated_at" })
  phaseLastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices[];

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec;

  @SpeakeasyMetadata({ data: "json, name=static_sites", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites[];

  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers[];
}
