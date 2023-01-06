package shared

type ListWorkerConfigurationsResponse struct {
	NextToken            *string                `json:"nextToken,omitempty"`
	WorkerConfigurations map[string]interface{} `json:"workerConfigurations,omitempty"`
}
