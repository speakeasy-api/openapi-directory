package shared

type ExclusionFiltersResponse struct {
	ExclusionFilters []ExclusionFilter             `json:"exclusionFilters,omitempty"`
	Links            ExclusionFiltersResponseLinks `json:"links"`
}
