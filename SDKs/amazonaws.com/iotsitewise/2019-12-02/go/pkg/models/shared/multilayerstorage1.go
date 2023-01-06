package shared

// MultiLayerStorage1
// Contains information about the storage destination.
type MultiLayerStorage1 struct {
	CustomerManagedS3Storage CustomerManagedS3Storage1 `json:"customerManagedS3Storage"`
}
