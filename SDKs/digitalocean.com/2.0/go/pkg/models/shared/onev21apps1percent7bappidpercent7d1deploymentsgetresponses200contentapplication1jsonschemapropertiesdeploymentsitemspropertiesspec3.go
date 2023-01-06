package shared

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumBasicXxs       Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "basic-xxs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumBasicXs        Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "basic-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumBasicS         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "basic-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumBasicM         Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "basic-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessionalXs Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-xs"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessionalS  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-s"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessionalM  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-m"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessional1l Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-1l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessionalL  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-l"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnumProfessionalXl Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum = "professional-xl"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices1 struct {
	InstanceCount    *int64                                                                                                                                                          `json:"instance_count,omitempty"`
	InstanceSizeSlug *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServicesInstanceSizeSlugEnum `json:"instance_size_slug,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec3
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec3 struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs1       `json:"jobs,omitempty"`
	Name        string                                                                                                                                          `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices1   `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers     `json:"workers,omitempty"`
}
