package shared

type ListRetirableGrantsRequest struct {
	Limit             *int64                 `json:"Limit,omitempty"`
	Marker            *string                `json:"Marker,omitempty"`
	RetiringPrincipal map[string]interface{} `json:"RetiringPrincipal"`
}
