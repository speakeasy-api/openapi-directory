package shared

type QueryResult struct {
	FacetResults         []FacetResult     `json:"FacetResults,omitempty"`
	QueryID              *string           `json:"QueryId,omitempty"`
	ResultItems          []QueryResultItem `json:"ResultItems,omitempty"`
	TotalNumberOfResults *int64            `json:"TotalNumberOfResults,omitempty"`
}
