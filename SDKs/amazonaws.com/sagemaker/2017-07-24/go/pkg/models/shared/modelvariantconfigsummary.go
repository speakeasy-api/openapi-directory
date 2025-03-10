// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ModelVariantConfigSummary - Summary of the deployment configuration of a model.
type ModelVariantConfigSummary struct {
	InfrastructureConfig ModelInfrastructureConfig `json:"InfrastructureConfig"`
	ModelName            string                    `json:"ModelName"`
	Status               ModelVariantStatusEnum    `json:"Status"`
	VariantName          string                    `json:"VariantName"`
}
