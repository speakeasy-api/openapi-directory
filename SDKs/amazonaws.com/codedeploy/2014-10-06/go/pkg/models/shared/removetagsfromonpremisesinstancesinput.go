package shared

// RemoveTagsFromOnPremisesInstancesInput
// Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
type RemoveTagsFromOnPremisesInstancesInput struct {
	InstanceNames map[string]interface{} `json:"instanceNames"`
	Tags          []Tag                  `json:"tags"`
}
