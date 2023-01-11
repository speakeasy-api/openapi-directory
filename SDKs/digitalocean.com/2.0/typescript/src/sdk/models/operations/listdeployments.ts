import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDeploymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
  appId: string;
}


export class ListDeploymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum {
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


export class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Running = "RUNNING",
    Error = "ERROR",
    Success = "SUCCESS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=component_name" })
  componentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ended_at" })
  endedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=message_base" })
  messageBase?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason;

  @SpeakeasyMetadata({ data: "json, name=started_at" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: Record<string, any>[];
}


export class ListDeployments200ApplicationJsonAnAppDeploymentProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_steps" })
  errorSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=pending_steps" })
  pendingSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=running_steps" })
  runningSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle })
  steps?: ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[];

  @SpeakeasyMetadata({ data: "json, name=success_steps" })
  successSteps?: number;

  @SpeakeasyMetadata({ data: "json, name=summary_steps", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems })
  summarySteps?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[];

  @SpeakeasyMetadata({ data: "json, name=total_steps" })
  totalSteps?: number;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum {
    Unset = "UNSET",
    Mysql = "MYSQL",
    Pg = "PG",
    Redis = "REDIS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_name" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_user" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=production" })
  production?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomainsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum {
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

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED",
    PreDeploy = "PRE_DEPLOY",
    PostDeploy = "POST_DEPLOY",
    FailedDeploy = "FAILED_DEPLOY"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobsKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum {
    Ams = "ams",
    Nyc = "nyc",
    Fra = "fra"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_origins", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins })
  allowOrigins?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins[];

  @SpeakeasyMetadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck extends SpeakeasyBase {
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

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum {
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


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesGitlab;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http_port" })
  httpPort?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=catchall_document" })
  catchallDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSitesImage;

  @SpeakeasyMetadata({ data: "json, name=index_document" })
  indexDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=output_dir" })
  outputDir?: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems })
  routes?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems[];

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum {
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


export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs })
  envs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// ListDeployments200ApplicationJsonAnAppDeploymentAppSpec
/** 
 * The desired configuration of an application.
**/
export class ListDeployments200ApplicationJsonAnAppDeploymentAppSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databases", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases })
  databases?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases[];

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains })
  domains?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains[];

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs })
  jobs?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices })
  services?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices[];

  @SpeakeasyMetadata({ data: "json, name=static_sites", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites })
  staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites[];

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers })
  workers?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers[];
}


export class ListDeployments200ApplicationJsonAnAppDeploymentStaticSites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeploymentWorkers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source_commit_hash" })
  sourceCommitHash?: string;
}


export class ListDeployments200ApplicationJsonAnAppDeployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=cloned_from" })
  clonedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: ListDeployments200ApplicationJsonAnAppDeploymentJobs })
  jobs?: ListDeployments200ApplicationJsonAnAppDeploymentJobs[];

  @SpeakeasyMetadata({ data: "json, name=phase" })
  phase?: ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum;

  @SpeakeasyMetadata({ data: "json, name=phase_last_updated_at" })
  phaseLastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: ListDeployments200ApplicationJsonAnAppDeploymentProgress;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: ListDeployments200ApplicationJsonAnAppDeploymentServices })
  services?: ListDeployments200ApplicationJsonAnAppDeploymentServices[];

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ListDeployments200ApplicationJsonAnAppDeploymentAppSpec;

  @SpeakeasyMetadata({ data: "json, name=static_sites", elemType: ListDeployments200ApplicationJsonAnAppDeploymentStaticSites })
  staticSites?: ListDeployments200ApplicationJsonAnAppDeploymentStaticSites[];

  @SpeakeasyMetadata({ data: "json, name=tier_slug" })
  tierSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: ListDeployments200ApplicationJsonAnAppDeploymentWorkers })
  workers?: ListDeployments200ApplicationJsonAnAppDeploymentWorkers[];
}


export class ListDeployments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployments", elemType: ListDeployments200ApplicationJsonAnAppDeployment })
  deployments?: ListDeployments200ApplicationJsonAnAppDeployment[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta;
}


export class ListDeployments401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class ListDeploymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListDeploymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListDeploymentsQueryParams;
}


export class ListDeploymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listDeployments200ApplicationJSONObject?: ListDeployments200ApplicationJson;

  @SpeakeasyMetadata()
  listDeployments401ApplicationJSONObject?: ListDeployments401ApplicationJson;

  @SpeakeasyMetadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
