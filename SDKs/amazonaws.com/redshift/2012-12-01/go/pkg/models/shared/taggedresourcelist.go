package shared

// TaggedResourceList
// A tag and its associated resource.
type TaggedResourceList struct {
	ResourceName *string
	ResourceType *string
	Tag          *Tag
}
