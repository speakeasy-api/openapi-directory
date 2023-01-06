package shared

type ListOutgoingTypedLinksResponse struct {
	NextToken           map[string]interface{} `json:"NextToken,omitempty"`
	TypedLinkSpecifiers []TypedLinkSpecifier   `json:"TypedLinkSpecifiers,omitempty"`
}
