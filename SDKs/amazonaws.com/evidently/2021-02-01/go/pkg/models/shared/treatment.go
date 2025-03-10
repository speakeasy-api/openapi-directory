// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Treatment - A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment.
type Treatment struct {
	Description       *string           `json:"description,omitempty"`
	FeatureVariations map[string]string `json:"featureVariations,omitempty"`
	Name              string            `json:"name"`
}
