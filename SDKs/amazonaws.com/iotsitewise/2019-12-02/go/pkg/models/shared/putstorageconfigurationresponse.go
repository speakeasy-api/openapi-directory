package shared

type PutStorageConfigurationResponse struct {
	ConfigurationStatus ConfigurationStatus    `json:"configurationStatus"`
	MultiLayerStorage   *MultiLayerStorage1    `json:"multiLayerStorage,omitempty"`
	StorageType         map[string]interface{} `json:"storageType"`
}
