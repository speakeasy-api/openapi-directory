package shared

import (
	"time"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs1 struct {
	InstanceCount    *int64                                                                                                                                               `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobsInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins struct {
	Exact  *string `json:"exact,omitempty"`
	Prefix *string `json:"prefix,omitempty"`
	Regex  *string `json:"regex,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors struct {
	AllowCredentials *bool                                                                                                                                                 `json:"allow_credentials,omitempty"`
	AllowHeaders     []string                                                                                                                                              `json:"allow_headers,omitempty"`
	AllowMethods     []string                                                                                                                                              `json:"allow_methods,omitempty"`
	AllowOrigins     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCorsAllowOrigins `json:"allow_origins,omitempty"`
	ExposeHeaders    []string                                                                                                                                              `json:"expose_headers,omitempty"`
	MaxAge           *string                                                                                                                                               `json:"max_age,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck struct {
	FailureThreshold    *int32  `json:"failure_threshold,omitempty"`
	HTTPPath            *string `json:"http_path,omitempty"`
	InitialDelaySeconds *int32  `json:"initial_delay_seconds,omitempty"`
	PeriodSeconds       *int32  `json:"period_seconds,omitempty"`
	SuccessThreshold    *int32  `json:"success_threshold,omitempty"`
	TimeoutSeconds      *int32  `json:"timeout_seconds,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent struct {
	Path *string `json:"path,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices1 struct {
	Cors          *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesCors                                         `json:"cors,omitempty"`
	HealthCheck   *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesHealthCheck                                  `json:"health_check,omitempty"`
	HTTPPort      *int64                                                                                                                                                                           `json:"http_port,omitempty"`
	InternalPorts []int64                                                                                                                                                                          `json:"internal_ports,omitempty"`
	Routes        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesACriterionForRoutingHTTPTrafficToAComponent `json:"routes,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec1
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec1 struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs1       `json:"jobs,omitempty"`
	Name        string                                                                                                                                   `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices1   `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers     `json:"workers,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems1 struct {
	Cause              *string                                                                                                                           `json:"cause,omitempty"`
	ClonedFrom         *string                                                                                                                           `json:"cloned_from,omitempty"`
	CreatedAt          *time.Time                                                                                                                        `json:"created_at,omitempty"`
	ID                 *string                                                                                                                           `json:"id,omitempty"`
	Jobs               []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs        `json:"jobs,omitempty"`
	Phase              *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum    `json:"phase,omitempty"`
	PhaseLastUpdatedAt *time.Time                                                                                                                        `json:"phase_last_updated_at,omitempty"`
	Progress           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress     `json:"progress,omitempty"`
	Services           []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices    `json:"services,omitempty"`
	Spec               *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec1     `json:"spec,omitempty"`
	StaticSites        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites `json:"static_sites,omitempty"`
	TierSlug           *string                                                                                                                           `json:"tier_slug,omitempty"`
	UpdatedAt          *time.Time                                                                                                                        `json:"updated_at,omitempty"`
	Workers            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers     `json:"workers,omitempty"`
}
