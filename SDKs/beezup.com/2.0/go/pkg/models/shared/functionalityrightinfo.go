package shared

// FunctionalityRightInfo
// Describe the rights for a functionality
type FunctionalityRightInfo struct {
	FunctionalityCode string `json:"functionalityCode"`
	MaxValueInterger  *int64 `json:"maxValueInterger,omitempty"`
	Unlimited         *bool  `json:"unlimited,omitempty"`
}
