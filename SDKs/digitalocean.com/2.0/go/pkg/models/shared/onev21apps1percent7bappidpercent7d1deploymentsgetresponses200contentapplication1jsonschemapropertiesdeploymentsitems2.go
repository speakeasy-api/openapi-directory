package shared

import (
	"time"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices2 struct {
	InstanceCount    *int64                                                                                                                                                   `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServicesInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec2
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec2 struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecJobs        `json:"jobs,omitempty"`
	Name        string                                                                                                                                   `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecServices2   `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpecWorkers     `json:"workers,omitempty"`
}

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems2 struct {
	Cause              *string                                                                                                                           `json:"cause,omitempty"`
	ClonedFrom         *string                                                                                                                           `json:"cloned_from,omitempty"`
	CreatedAt          *time.Time                                                                                                                        `json:"created_at,omitempty"`
	ID                 *string                                                                                                                           `json:"id,omitempty"`
	Jobs               []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsJobs        `json:"jobs,omitempty"`
	Phase              *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPhaseEnum    `json:"phase,omitempty"`
	PhaseLastUpdatedAt *time.Time                                                                                                                        `json:"phase_last_updated_at,omitempty"`
	Progress           *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress     `json:"progress,omitempty"`
	Services           []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsServices    `json:"services,omitempty"`
	Spec               *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsAppSpec2     `json:"spec,omitempty"`
	StaticSites        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsStaticSites `json:"static_sites,omitempty"`
	TierSlug           *string                                                                                                                           `json:"tier_slug,omitempty"`
	UpdatedAt          *time.Time                                                                                                                        `json:"updated_at,omitempty"`
	Workers            []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsWorkers     `json:"workers,omitempty"`
}
