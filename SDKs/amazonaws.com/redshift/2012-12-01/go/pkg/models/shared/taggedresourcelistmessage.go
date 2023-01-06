package shared

// TaggedResourceListMessage
// <p/>
type TaggedResourceListMessage struct {
	Marker          map[string]interface{}
	TaggedResources []map[string]interface{}
}
