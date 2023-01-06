package shared

// Location
// The location of resources.
type Location struct {
	DynamoDB []CodeGenNodeArg `json:"DynamoDB,omitempty"`
	Jdbc     []CodeGenNodeArg `json:"Jdbc,omitempty"`
	S3       []CodeGenNodeArg `json:"S3,omitempty"`
}
