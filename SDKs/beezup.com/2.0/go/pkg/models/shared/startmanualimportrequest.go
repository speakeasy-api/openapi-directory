package shared

// StartManualImportRequest
// The message request start a manual importation process. Indicate the way to handle duplicate product. Can be null if you want to reuse the configuration of the previous importation succeed.
type StartManualImportRequest struct {
	DuplicateProductSkuConfiguration *DuplicateProductValueConfiguration `json:"duplicateProductSkuConfiguration,omitempty"`
	Input                            InputConfiguration                  `json:"input"`
}
