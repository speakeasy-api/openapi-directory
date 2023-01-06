package shared

// BatchDetachTypedLinkTypedLinkSpecifier
// Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
type BatchDetachTypedLinkTypedLinkSpecifier struct {
	IdentityAttributeValues []AttributeNameAndValue     `json:"IdentityAttributeValues"`
	SourceObjectReference   ObjectReference             `json:"SourceObjectReference"`
	TargetObjectReference   ObjectReference             `json:"TargetObjectReference"`
	TypedLinkFacet          TypedLinkSchemaAndFacetName `json:"TypedLinkFacet"`
}

// BatchDetachTypedLink
// Detaches a typed link from a specified source and target object inside a <a>BatchRead</a> operation. For more information, see <a>DetachTypedLink</a> and <a>BatchReadRequest$Operations</a>.
type BatchDetachTypedLink struct {
	TypedLinkSpecifier BatchDetachTypedLinkTypedLinkSpecifier `json:"TypedLinkSpecifier"`
}
