package shared

// BatchListOutgoingTypedLinksObjectReference
// The reference that identifies an object.
type BatchListOutgoingTypedLinksObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

// BatchListOutgoingTypedLinks
// Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object inside a <a>BatchRead</a> operation. For more information, see <a>ListOutgoingTypedLinks</a> and <a>BatchReadRequest$Operations</a>.
type BatchListOutgoingTypedLinks struct {
	FilterAttributeRanges []TypedLinkAttributeRange                  `json:"FilterAttributeRanges,omitempty"`
	FilterTypedLink       *TypedLinkSchemaAndFacetName               `json:"FilterTypedLink,omitempty"`
	MaxResults            *int64                                     `json:"MaxResults,omitempty"`
	NextToken             *string                                    `json:"NextToken,omitempty"`
	ObjectReference       BatchListOutgoingTypedLinksObjectReference `json:"ObjectReference"`
}
