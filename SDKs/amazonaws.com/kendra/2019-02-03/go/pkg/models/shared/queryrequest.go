package shared

type QueryRequest struct {
	AttributeFilter                         *AttributeFilter                 `json:"AttributeFilter,omitempty"`
	DocumentRelevanceOverrideConfigurations []DocumentRelevanceConfiguration `json:"DocumentRelevanceOverrideConfigurations,omitempty"`
	Facets                                  []Facet                          `json:"Facets,omitempty"`
	IndexID                                 string                           `json:"IndexId"`
	PageNumber                              *int64                           `json:"PageNumber,omitempty"`
	PageSize                                *int64                           `json:"PageSize,omitempty"`
	QueryResultTypeFilter                   *QueryResultTypeEnum             `json:"QueryResultTypeFilter,omitempty"`
	QueryText                               string                           `json:"QueryText"`
	RequestedDocumentAttributes             []string                         `json:"RequestedDocumentAttributes,omitempty"`
	SortingConfiguration                    *SortingConfiguration            `json:"SortingConfiguration,omitempty"`
	UserContext                             *UserContext                     `json:"UserContext,omitempty"`
	VisitorID                               *string                          `json:"VisitorId,omitempty"`
}
