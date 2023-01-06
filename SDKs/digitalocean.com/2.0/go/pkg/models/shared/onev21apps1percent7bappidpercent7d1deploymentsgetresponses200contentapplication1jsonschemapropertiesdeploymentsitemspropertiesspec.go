package shared

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnumUnset Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum = "UNSET"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnumMysql Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum = "MYSQL"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnumPg    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum = "PG"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnumRedis Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum = "REDIS"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases struct {
	ClusterName *string                                                                                                                                                `json:"cluster_name,omitempty"`
	DbName      *string                                                                                                                                                `json:"db_name,omitempty"`
	DbUser      *string                                                                                                                                                `json:"db_user,omitempty"`
	Engine      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum `json:"engine,omitempty"`
	Name        string                                                                                                                                                 `json:"name"`
	Production  *bool                                                                                                                                                  `json:"production,omitempty"`
	Version     *string                                                                                                                                                `json:"version,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnumUnspecified Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum = "UNSPECIFIED"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnumDefault     Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum = "DEFAULT"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnumPrimary     Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum = "PRIMARY"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnumAlias       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum = "ALIAS"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains struct {
	Domain   string                                                                                                                                             `json:"domain"`
	Type     *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomainsTypeEnum `json:"type,omitempty"`
	Wildcard *bool                                                                                                                                              `json:"wildcard,omitempty"`
	Zone     *string                                                                                                                                            `json:"zone,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs struct {
	InstanceCount    *int64                                                                                                                                                      `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnumAms Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum = "ams"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnumNyc Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum = "nyc"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnumFra Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum = "fra"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnumUnset           Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum = "UNSET"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnumRunTime         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum = "RUN_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnumBuildTime       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum = "BUILD_TIME"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnumRunAndBuildTime Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum = "RUN_AND_BUILD_TIME"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnumGeneral Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum = "GENERAL"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnumSecret  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum = "SECRET"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs struct {
	Key   string                                                                                                                                                   `json:"key"`
	Scope *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsScopeEnum `json:"scope,omitempty"`
	Type  *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvsTypeEnum  `json:"type,omitempty"`
	Value *string                                                                                                                                                  `json:"value,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit struct {
	Branch       *string `json:"branch,omitempty"`
	RepoCloneURL *string `json:"repo_clone_url,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab struct {
	Branch       *string `json:"branch,omitempty"`
	DeployOnPush *bool   `json:"deploy_on_push,omitempty"`
	Repo         *string `json:"repo,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnumDockerHub Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum = "DOCKER_HUB"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnumDocr      Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum = "DOCR"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage struct {
	Registry     *string                                                                                                                                                          `json:"registry,omitempty"`
	RegistryType *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImageRegistryTypeEnum `json:"registry_type,omitempty"`
	Repository   *string                                                                                                                                                          `json:"repository,omitempty"`
	Tag          *string                                                                                                                                                          `json:"tag,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices struct {
	BuildCommand    *string                                                                                                                                           `json:"build_command,omitempty"`
	DockerfilePath  *string                                                                                                                                           `json:"dockerfile_path,omitempty"`
	EnvironmentSlug *string                                                                                                                                           `json:"environment_slug,omitempty"`
	Envs            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesEnvs  `json:"envs,omitempty"`
	Git             *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGit    `json:"git,omitempty"`
	Github          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGithub `json:"github,omitempty"`
	Gitlab          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesGitlab `json:"gitlab,omitempty"`
	Image           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesImage  `json:"image,omitempty"`
	Name            string                                                                                                                                            `json:"name"`
	RunCommand      *string                                                                                                                                           `json:"run_command,omitempty"`
	SourceDir       *string                                                                                                                                           `json:"source_dir,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites struct {
	CatchallDocument *string                                                                                                                                                                                `json:"catchall_document,omitempty"`
	Cors             *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesCors         `json:"cors,omitempty"`
	ErrorDocument    *string                                                                                                                                                                                `json:"error_document,omitempty"`
	IndexDocument    *string                                                                                                                                                                                `json:"index_document,omitempty"`
	OutputDir        *string                                                                                                                                                                                `json:"output_dir,omitempty"`
	Routes           []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesServicesItemsAllOf2PropertiesRoutesItems `json:"routes,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers struct {
	InstanceCount    *int64                                                                                                                                                         `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkersInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs        `json:"jobs,omitempty"`
	Name        string                                                                                                                                          `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices    `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers     `json:"workers,omitempty"`
}
