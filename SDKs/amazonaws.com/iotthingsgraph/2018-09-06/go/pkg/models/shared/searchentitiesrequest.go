// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type SearchEntitiesRequest struct {
	EntityTypes      []EntityTypeEnum `json:"entityTypes"`
	Filters          []EntityFilter   `json:"filters,omitempty"`
	MaxResults       *int64           `json:"maxResults,omitempty"`
	NamespaceVersion *int64           `json:"namespaceVersion,omitempty"`
	NextToken        *string          `json:"nextToken,omitempty"`
}
