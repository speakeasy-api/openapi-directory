package shared

// CustomerIndex
// The index of the customer API
type CustomerIndex struct {
	Links    CustomerIndexLinks    `json:"links"`
	LovLinks CustomerIndexLovLinks `json:"lovLinks"`
}
