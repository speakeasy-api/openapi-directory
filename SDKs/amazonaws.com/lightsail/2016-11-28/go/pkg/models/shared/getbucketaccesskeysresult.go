package shared

type GetBucketAccessKeysResult struct {
	AccessKeys map[string]interface{} `json:"accessKeys,omitempty"`
}
