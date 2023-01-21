package shared

// DocumentAttributeValueCountPair
// Provides the count of documents that match a particular attribute when doing a faceted search.
type DocumentAttributeValueCountPair struct {
	Count                  *int64                  `json:"Count,omitempty"`
	DocumentAttributeValue *DocumentAttributeValue `json:"DocumentAttributeValue,omitempty"`
}
