package shared

type ImportationsResponse struct {
	Importations []ImportationReporting     `json:"importations,omitempty"`
	Links        *ImportationsResponseLinks `json:"links,omitempty"`
}
