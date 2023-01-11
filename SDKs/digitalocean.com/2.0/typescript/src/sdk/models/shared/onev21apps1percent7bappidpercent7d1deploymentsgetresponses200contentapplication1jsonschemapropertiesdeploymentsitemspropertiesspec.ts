import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiescors";
import { Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems } from "./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesservicesitemsallof2propertiesroutesitems";


export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum {
    Unset = "UNSET",
    Mysql = "MYSQL",
    Pg = "PG",
    Redis = "REDIS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster_name" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_name" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=db_user" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=production" })
  production?: boolean;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum {
    Unspecified = "UNSPECIFIED",
    Default = "DEFAULT",
    Primary = "PRIMARY",
    Alias = "ALIAS"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=wildcard" })
  wildcard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum {
    Unspecified = "UNSPECIFIED",
    PreDeploy = "PRE_DEPLOY",
    PostDeploy = "POST_DEPLOY",
    FailedDeploy = "FAILED_DEPLOY"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum {
    Ams = "ams",
    Nyc = "nyc",
    Fra = "fra"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_credentials" })
  allowCredentials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_headers" })
  allowHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_methods" })
  allowMethods?: string[];

  @SpeakeasyMetadata({ data: "json, name=allow_origins", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins })
  allowOrigins?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCorsAllowOrigins[];

  @SpeakeasyMetadata({ data: "json, name=expose_headers" })
  exposeHeaders?: string[];

  @SpeakeasyMetadata({ data: "json, name=max_age" })
  maxAge?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck extends SpeakeasyBase {
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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesCors;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab;

  @SpeakeasyMetadata({ data: "json, name=health_check" })
  healthCheck?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesHealthCheck;

  @SpeakeasyMetadata({ data: "json, name=http_port" })
  httpPort?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=internal_ports" })
  internalPorts?: number[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=routes", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent })
  routes?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesACriterionForRoutingHttpTrafficToAComponent[];

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesEnvs[];

  @SpeakeasyMetadata({ data: "json, name=error_document" })
  errorDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSitesImage;

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

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum {
    Unset = "UNSET",
    RunTime = "RUN_TIME",
    BuildTime = "BUILD_TIME",
    RunAndBuildTime = "RUN_AND_BUILD_TIME"
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum {
    General = "GENERAL",
    Secret = "SECRET"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsScopeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=repo_clone_url" })
  repoCloneUrl?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=deploy_on_push" })
  deployOnPush?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum {
    DockerHub = "DOCKER_HUB",
    Docr = "DOCR"
}


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: string;

  @SpeakeasyMetadata({ data: "json, name=registry_type" })
  registryType?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImageRegistryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}

export enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum {
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


export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build_command" })
  buildCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerfile_path" })
  dockerfilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=environment_slug" })
  environmentSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=envs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs })
  envs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersEnvs[];

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGit;

  @SpeakeasyMetadata({ data: "json, name=github" })
  github?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGithub;

  @SpeakeasyMetadata({ data: "json, name=gitlab" })
  gitlab?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersGitlab;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersImage;

  @SpeakeasyMetadata({ data: "json, name=instance_count" })
  instanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instance_size_slug" })
  instanceSizeSlug?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=run_command" })
  runCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=source_dir" })
  sourceDir?: string;
}


// Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec
/** 
 * The desired configuration of an application.
**/
export class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databases", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases })
  databases?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases[];

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains })
  domains?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains[];

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs })
  jobs?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices })
  services?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices[];

  @SpeakeasyMetadata({ data: "json, name=static_sites", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites })
  staticSites?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites[];

  @SpeakeasyMetadata({ data: "json, name=workers", elemType: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers })
  workers?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers[];
}
