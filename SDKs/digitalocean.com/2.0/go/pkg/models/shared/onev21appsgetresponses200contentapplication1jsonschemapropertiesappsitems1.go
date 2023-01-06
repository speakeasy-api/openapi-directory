package shared

import (
	"time"
)

// Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems1
// An application's configuration and status.
type Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems1 struct {
	ActiveDeployment        *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems2             `json:"active_deployment,omitempty"`
	CreatedAt               *time.Time                                                                                                                         `json:"created_at,omitempty"`
	DefaultIngress          *string                                                                                                                            `json:"default_ingress,omitempty"`
	Domains                 []Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains                                                 `json:"domains,omitempty"`
	ID                      *string                                                                                                                            `json:"id,omitempty"`
	InProgressDeployment    *Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems              `json:"in_progress_deployment,omitempty"`
	LastDeploymentCreatedAt *time.Time                                                                                                                         `json:"last_deployment_created_at,omitempty"`
	LiveDomain              *string                                                                                                                            `json:"live_domain,omitempty"`
	LiveURL                 *string                                                                                                                            `json:"live_url,omitempty"`
	LiveURLBase             *string                                                                                                                            `json:"live_url_base,omitempty"`
	OwnerUUID               *string                                                                                                                            `json:"owner_uuid,omitempty"`
	Region                  *Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin                  `json:"region,omitempty"`
	Spec                    Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec `json:"spec"`
	TierSlug                *string                                                                                                                            `json:"tier_slug,omitempty"`
	UpdatedAt               *time.Time                                                                                                                         `json:"updated_at,omitempty"`
}
