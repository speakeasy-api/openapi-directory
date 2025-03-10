// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// RecommendationSet -  Contains a recommendation set.
type RecommendationSet struct {
	Strategy           *StrategyEnum          `json:"strategy,omitempty"`
	TargetDestination  *TargetDestinationEnum `json:"targetDestination,omitempty"`
	TransformationTool *TransformationTool    `json:"transformationTool,omitempty"`
}
