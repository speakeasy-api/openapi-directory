package shared

// OutputDataConfig
// The output configuration properties for a batch translation job.
type OutputDataConfig struct {
	S3URI map[string]interface{} `json:"S3Uri"`
}
