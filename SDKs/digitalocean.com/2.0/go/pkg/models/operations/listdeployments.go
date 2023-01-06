package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDeploymentsPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type ListDeploymentsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentJobs struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumUnknown       ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "UNKNOWN"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumPendingBuild  ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "PENDING_BUILD"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumBuilding      ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "BUILDING"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumPendingDeploy ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "PENDING_DEPLOY"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumDeploying     ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "DEPLOYING"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumActive        ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "ACTIVE"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumSuperseded    ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "SUPERSEDED"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumError         ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "ERROR"
	ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnumCanceled      ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum = "CANCELED"
)

type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumUnknown ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "UNKNOWN"
	ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumPending ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "PENDING"
	ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumRunning ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "RUNNING"
	ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumError   ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "ERROR"
	ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnumSuccess ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum = "SUCCESS"
)

type ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle struct {
	ComponentName *string                                                                                                          `json:"component_name,omitempty"`
	EndedAt       *time.Time                                                                                                       `json:"ended_at,omitempty"`
	MessageBase   *string                                                                                                          `json:"message_base,omitempty"`
	Name          *string                                                                                                          `json:"name,omitempty"`
	Reason        *ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason     `json:"reason,omitempty"`
	StartedAt     *time.Time                                                                                                       `json:"started_at,omitempty"`
	Status        *ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleStatusEnum `json:"status,omitempty"`
	Steps         []map[string]interface{}                                                                                         `json:"steps,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentProgress struct {
	ErrorSteps   *int32                                                                                                                                                              `json:"error_steps,omitempty"`
	PendingSteps *int32                                                                                                                                                              `json:"pending_steps,omitempty"`
	RunningSteps *int32                                                                                                                                                              `json:"running_steps,omitempty"`
	Steps        []ListDeployments200ApplicationJSONAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle                                                             `json:"steps,omitempty"`
	SuccessSteps *int32                                                                                                                                                              `json:"success_steps,omitempty"`
	SummarySteps []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems `json:"summary_steps,omitempty"`
	TotalSteps   *int32                                                                                                                                                              `json:"total_steps,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentServices struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumUnset ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "UNSET"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumMysql ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "MYSQL"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumPg    ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "PG"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnumRedis ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum = "REDIS"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases struct {
	ClusterName *string                                                                     `json:"cluster_name,omitempty"`
	DbName      *string                                                                     `json:"db_name,omitempty"`
	DbUser      *string                                                                     `json:"db_user,omitempty"`
	Engine      *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabasesEngineEnum `json:"engine,omitempty"`
	Name        string                                                                      `json:"name"`
	Production  *bool                                                                       `json:"production,omitempty"`
	Version     *string                                                                     `json:"version,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumUnspecified ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "UNSPECIFIED"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumDefault     ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "DEFAULT"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumPrimary     ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "PRIMARY"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnumAlias       ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum = "ALIAS"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains struct {
	Domain   string                                                                  `json:"domain"`
	Type     *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomainsTypeEnum `json:"type,omitempty"`
	Wildcard *bool                                                                   `json:"wildcard,omitempty"`
	Zone     *string                                                                 `json:"zone,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumUnset           ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnumSecret  ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs struct {
	Key   string                                                                    `json:"key"`
	Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsScopeEnum `json:"scope,omitempty"`
	Type  *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvsTypeEnum  `json:"type,omitempty"`
	Value *string                                                                   `json:"value,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit struct {
	Branch       *string `json:"branch,omitempty"`
	RepoCloneURL *string `json:"repo_clone_url,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage struct {
	Registry     *string                                                                           `json:"registry,omitempty"`
	RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImageRegistryTypeEnum `json:"registry_type,omitempty"`
	Repository   *string                                                                           `json:"repository,omitempty"`
	Tag          *string                                                                           `json:"tag,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs struct {
	BuildCommand    *string                                                            `json:"build_command,omitempty"`
	DockerfilePath  *string                                                            `json:"dockerfile_path,omitempty"`
	EnvironmentSlug *string                                                            `json:"environment_slug,omitempty"`
	Envs            []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsEnvs  `json:"envs,omitempty"`
	Git             *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGit    `json:"git,omitempty"`
	Github          *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGithub `json:"github,omitempty"`
	Gitlab          *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsGitlab `json:"gitlab,omitempty"`
	Image           *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobsImage  `json:"image,omitempty"`
	Name            string                                                             `json:"name"`
	RunCommand      *string                                                            `json:"run_command,omitempty"`
	SourceDir       *string                                                            `json:"source_dir,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumAms ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "ams"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumNyc ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "nyc"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnumFra ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum = "fra"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumUnset           ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "UNSET"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumRunTime         ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "RUN_TIME"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumBuildTime       ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "BUILD_TIME"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnumRunAndBuildTime ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnumGeneral ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum = "GENERAL"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnumSecret  ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum = "SECRET"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs struct {
	Key   string                                                                        `json:"key"`
	Scope *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsScopeEnum `json:"scope,omitempty"`
	Type  *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvsTypeEnum  `json:"type,omitempty"`
	Value *string                                                                       `json:"value,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit struct {
	Branch       *string `json:"branch,omitempty"`
	RepoCloneURL *string `json:"repo_clone_url,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnumDockerHub ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = "DOCKER_HUB"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnumDocr      ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum = "DOCR"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage struct {
	Registry     *string                                                                               `json:"registry,omitempty"`
	RegistryType *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImageRegistryTypeEnum `json:"registry_type,omitempty"`
	Repository   *string                                                                               `json:"repository,omitempty"`
	Tag          *string                                                                               `json:"tag,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices struct {
	BuildCommand    *string                                                                `json:"build_command,omitempty"`
	DockerfilePath  *string                                                                `json:"dockerfile_path,omitempty"`
	EnvironmentSlug *string                                                                `json:"environment_slug,omitempty"`
	Envs            []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesEnvs  `json:"envs,omitempty"`
	Git             *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGit    `json:"git,omitempty"`
	Github          *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGithub `json:"github,omitempty"`
	Gitlab          *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesGitlab `json:"gitlab,omitempty"`
	Image           *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServicesImage  `json:"image,omitempty"`
	Name            string                                                                 `json:"name"`
	RunCommand      *string                                                                `json:"run_command,omitempty"`
	SourceDir       *string                                                                `json:"source_dir,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites struct {
	CatchallDocument *string                                                                                                                                                                                       `json:"catchall_document,omitempty"`
	Cors             *shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors         `json:"cors,omitempty"`
	ErrorDocument    *string                                                                                                                                                                                       `json:"error_document,omitempty"`
	IndexDocument    *string                                                                                                                                                                                       `json:"index_document,omitempty"`
	OutputDir        *string                                                                                                                                                                                       `json:"output_dir,omitempty"`
	Routes           []shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems `json:"routes,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum string

const (
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicXxs       ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-xxs"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicXs        ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-xs"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicS         ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-s"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumBasicM         ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "basic-m"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalXs ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-xs"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalS  ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-s"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalM  ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-m"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessional1l ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-1l"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalL  ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-l"
	ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnumProfessionalXl ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum = "professional-xl"
)

type ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers struct {
	InstanceCount    *int64                                                                              `json:"instance_count,omitempty"`
	InstanceSizeSlug *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkersInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

// ListDeployments200ApplicationJSONAnAppDeploymentAppSpec
// The desired configuration of an application.
type ListDeployments200ApplicationJSONAnAppDeploymentAppSpec struct {
	Databases   []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDatabases   `json:"databases,omitempty"`
	Domains     []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecDomains     `json:"domains,omitempty"`
	Jobs        []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecJobs        `json:"jobs,omitempty"`
	Name        string                                                               `json:"name"`
	Region      *ListDeployments200ApplicationJSONAnAppDeploymentAppSpecRegionEnum   `json:"region,omitempty"`
	Services    []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecServices    `json:"services,omitempty"`
	StaticSites []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []ListDeployments200ApplicationJSONAnAppDeploymentAppSpecWorkers     `json:"workers,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentStaticSites struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeploymentWorkers struct {
	Name             *string `json:"name,omitempty"`
	SourceCommitHash *string `json:"source_commit_hash,omitempty"`
}

type ListDeployments200ApplicationJSONAnAppDeployment struct {
	Cause              *string                                                       `json:"cause,omitempty"`
	ClonedFrom         *string                                                       `json:"cloned_from,omitempty"`
	CreatedAt          *time.Time                                                    `json:"created_at,omitempty"`
	ID                 *string                                                       `json:"id,omitempty"`
	Jobs               []ListDeployments200ApplicationJSONAnAppDeploymentJobs        `json:"jobs,omitempty"`
	Phase              *ListDeployments200ApplicationJSONAnAppDeploymentPhaseEnum    `json:"phase,omitempty"`
	PhaseLastUpdatedAt *time.Time                                                    `json:"phase_last_updated_at,omitempty"`
	Progress           *ListDeployments200ApplicationJSONAnAppDeploymentProgress     `json:"progress,omitempty"`
	Services           []ListDeployments200ApplicationJSONAnAppDeploymentServices    `json:"services,omitempty"`
	Spec               *ListDeployments200ApplicationJSONAnAppDeploymentAppSpec      `json:"spec,omitempty"`
	StaticSites        []ListDeployments200ApplicationJSONAnAppDeploymentStaticSites `json:"static_sites,omitempty"`
	TierSlug           *string                                                       `json:"tier_slug,omitempty"`
	UpdatedAt          *time.Time                                                    `json:"updated_at,omitempty"`
	Workers            []ListDeployments200ApplicationJSONAnAppDeploymentWorkers     `json:"workers,omitempty"`
}

type ListDeployments200ApplicationJSON struct {
	Deployments []ListDeployments200ApplicationJSONAnAppDeployment                                          `json:"deployments,omitempty"`
	Links       *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks `json:"links,omitempty"`
	Meta        *shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta  `json:"meta,omitempty"`
}

type ListDeployments401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListDeploymentsRequest struct {
	PathParams  ListDeploymentsPathParams
	QueryParams ListDeploymentsQueryParams
}

type ListDeploymentsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDeployments200ApplicationJSONObject                   *ListDeployments200ApplicationJSON
	ListDeployments401ApplicationJSONObject                   *ListDeployments401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
