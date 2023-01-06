package shared

import (
	"time"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumUnknown       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "UNKNOWN"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumPendingBuild  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "PENDING_BUILD"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumBuilding      Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "BUILDING"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumPendingDeploy Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "PENDING_DEPLOY"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumDeploying     Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "DEPLOYING"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumActive        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "ACTIVE"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumSuperseded    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "SUPERSEDED"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumError         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "ERROR"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnumCanceled      Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum = "CANCELED"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumUnknown Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "UNKNOWN"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumPending Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "PENDING"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumRunning Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "RUNNING"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumError   Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "ERROR"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumSuccess Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "SUCCESS"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle struct {
	ComponentName *string                                                                                                                                                                              `json:"component_name,omitempty"`
	EndedAt       *time.Time                                                                                                                                                                           `json:"ended_at,omitempty"`
	MessageBase   *string                                                                                                                                                                              `json:"message_base,omitempty"`
	Name          *string                                                                                                                                                                              `json:"name,omitempty"`
	Reason        *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason     `json:"reason,omitempty"`
	StartedAt     *time.Time                                                                                                                                                                           `json:"started_at,omitempty"`
	Status        *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum `json:"status,omitempty"`
	Steps         []map[string]interface{}                                                                                                                                                             `json:"steps,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress struct {
	ErrorSteps   *int32                                                                                                                                                                      `json:"error_steps,omitempty"`
	PendingSteps *int32                                                                                                                                                                      `json:"pending_steps,omitempty"`
	RunningSteps *int32                                                                                                                                                                      `json:"running_steps,omitempty"`
	Steps        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle `json:"steps,omitempty"`
	SuccessSteps *int32                                                                                                                                                                      `json:"success_steps,omitempty"`
	SummarySteps []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems                `json:"summary_steps,omitempty"`
	TotalSteps   *int32                                                                                                                                                                      `json:"total_steps,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnumUnset Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum = "UNSET"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnumMysql Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum = "MYSQL"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnumPg    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum = "PG"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnumRedis Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum = "REDIS"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases struct {
	ClusterName *string                                                                                                                                         `json:"cluster_name,omitempty"`
	DbName      *string                                                                                                                                         `json:"db_name,omitempty"`
	DbUser      *string                                                                                                                                         `json:"db_user,omitempty"`
	Engine      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabasesEngineEnum `json:"engine,omitempty"`
	Name        string                                                                                                                                          `json:"name"`
	Production  *bool                                                                                                                                           `json:"production,omitempty"`
	Version     *string                                                                                                                                         `json:"version,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnumUnspecified Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum = "UNSPECIFIED"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnumDefault     Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum = "DEFAULT"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnumPrimary     Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum = "PRIMARY"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnumAlias       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum = "ALIAS"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains struct {
	Domain   string                                                                                                                                      `json:"domain"`
	Type     *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomainsTypeEnum `json:"type,omitempty"`
	Wildcard *bool                                                                                                                                       `json:"wildcard,omitempty"`
	Zone     *string                                                                                                                                     `json:"zone,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnumUnset           Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum = "UNSET"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnumRunTime         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum = "RUN_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnumBuildTime       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum = "BUILD_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnumRunAndBuildTime Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnumGeneral Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum = "GENERAL"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnumSecret  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum = "SECRET"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs struct {
	Key   string                                                                                                                                        `json:"key"`
	Scope *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsScopeEnum `json:"scope,omitempty"`
	Type  *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvsTypeEnum  `json:"type,omitempty"`
	Value *string                                                                                                                                       `json:"value,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit struct {
	Branch       *string `json:"branch,omitempty"`
	RepoCloneURL *string `json:"repo_clone_url,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnumDockerHub Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum = "DOCKER_HUB"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnumDocr      Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum = "DOCR"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage struct {
	Registry     *string                                                                                                                                               `json:"registry,omitempty"`
	RegistryType *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImageRegistryTypeEnum `json:"registry_type,omitempty"`
	Repository   *string                                                                                                                                               `json:"repository,omitempty"`
	Tag          *string                                                                                                                                               `json:"tag,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs struct {
	BuildCommand    *string                                                                                                                                `json:"build_command,omitempty"`
	DockerfilePath  *string                                                                                                                                `json:"dockerfile_path,omitempty"`
	EnvironmentSlug *string                                                                                                                                `json:"environment_slug,omitempty"`
	Envs            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsEnvs  `json:"envs,omitempty"`
	Git             *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGit    `json:"git,omitempty"`
	Github          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGithub `json:"github,omitempty"`
	Gitlab          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsGitlab `json:"gitlab,omitempty"`
	Image           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsImage  `json:"image,omitempty"`
	Name            string                                                                                                                                 `json:"name"`
	RunCommand      *string                                                                                                                                `json:"run_command,omitempty"`
	SourceDir       *string                                                                                                                                `json:"source_dir,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnumAms Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum = "ams"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnumNyc Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum = "nyc"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnumFra Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum = "fra"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnumUnset           Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum = "UNSET"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnumRunTime         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum = "RUN_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnumBuildTime       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum = "BUILD_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnumRunAndBuildTime Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnumGeneral Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum = "GENERAL"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnumSecret  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum = "SECRET"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs struct {
	Key   string                                                                                                                                            `json:"key"`
	Scope *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsScopeEnum `json:"scope,omitempty"`
	Type  *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvsTypeEnum  `json:"type,omitempty"`
	Value *string                                                                                                                                           `json:"value,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit struct {
	Branch       *string `json:"branch,omitempty"`
	RepoCloneURL *string `json:"repo_clone_url,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnumDockerHub Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum = "DOCKER_HUB"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnumDocr      Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum = "DOCR"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage struct {
	Registry     *string                                                                                                                                                   `json:"registry,omitempty"`
	RegistryType *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImageRegistryTypeEnum `json:"registry_type,omitempty"`
	Repository   *string                                                                                                                                                   `json:"repository,omitempty"`
	Tag          *string                                                                                                                                                   `json:"tag,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices struct {
	BuildCommand    *string                                                                                                                                    `json:"build_command,omitempty"`
	DockerfilePath  *string                                                                                                                                    `json:"dockerfile_path,omitempty"`
	EnvironmentSlug *string                                                                                                                                    `json:"environment_slug,omitempty"`
	Envs            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesEnvs  `json:"envs,omitempty"`
	Git             *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGit    `json:"git,omitempty"`
	Github          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGithub `json:"github,omitempty"`
	Gitlab          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesGitlab `json:"gitlab,omitempty"`
	Image           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesImage  `json:"image,omitempty"`
	Name            string                                                                                                                                     `json:"name"`
	RunCommand      *string                                                                                                                                    `json:"run_command,omitempty"`
	SourceDir       *string                                                                                                                                    `json:"source_dir,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites struct {
	CatchallDocument *string                                                                                                                                                                                `json:"catchall_document,omitempty"`
	Cors             *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors         `json:"cors,omitempty"`
	ErrorDocument    *string                                                                                                                                                                                `json:"error_document,omitempty"`
	IndexDocument    *string                                                                                                                                                                                `json:"index_document,omitempty"`
	OutputDir        *string                                                                                                                                                                                `json:"output_dir,omitempty"`
	Routes           []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems `json:"routes,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers struct {
	InstanceCount    *int64                                                                                                                                                  `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkersInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs        `json:"jobs,omitempty"`
	Name        string                                                                                                                                   `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices    `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers     `json:"workers,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems struct {
	Cause              *string                                                                                                                           `json:"cause,omitempty"`
	ClonedFrom         *string                                                                                                                           `json:"cloned_from,omitempty"`
	CreatedAt          *time.Time                                                                                                                        `json:"created_at,omitempty"`
	ID                 *string                                                                                                                           `json:"id,omitempty"`
	Jobs               []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs        `json:"jobs,omitempty"`
	Phase              *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum    `json:"phase,omitempty"`
	PhaseLastUpdatedAt *time.Time                                                                                                                        `json:"phase_last_updated_at,omitempty"`
	Progress           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress     `json:"progress,omitempty"`
	Services           []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices    `json:"services,omitempty"`
	Spec               *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec      `json:"spec,omitempty"`
	StaticSites        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites `json:"static_sites,omitempty"`
	TierSlug           *string                                                                                                                           `json:"tier_slug,omitempty"`
	UpdatedAt          *time.Time                                                                                                                        `json:"updated_at,omitempty"`
	Workers            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers     `json:"workers,omitempty"`
}
