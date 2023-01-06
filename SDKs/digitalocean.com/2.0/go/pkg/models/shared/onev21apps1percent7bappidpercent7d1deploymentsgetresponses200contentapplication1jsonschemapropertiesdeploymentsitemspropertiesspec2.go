package shared

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum string

const (
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnumUnspecified  Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum = "UNSPECIFIED"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnumPreDeploy    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum = "PRE_DEPLOY"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnumPostDeploy   Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum = "POST_DEPLOY"
	Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnumFailedDeploy Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum = "FAILED_DEPLOY"
)

type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs2 struct {
	Kind *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobsKindEnum `json:"kind,omitempty"`
}

// Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec2
// The desired configuration of an application.
type Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec2 struct {
	Databases   []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases   `json:"databases,omitempty"`
	Domains     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDomains     `json:"domains,omitempty"`
	Jobs        []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecJobs2       `json:"jobs,omitempty"`
	Name        string                                                                                                                                          `json:"name"`
	Region      *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecRegionEnum   `json:"region,omitempty"`
	Services    []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecServices    `json:"services,omitempty"`
	StaticSites []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecStaticSites `json:"static_sites,omitempty"`
	Workers     []Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecWorkers     `json:"workers,omitempty"`
}
