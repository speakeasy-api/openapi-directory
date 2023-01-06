package shared

// RunCommandTarget1
// Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
type RunCommandTarget1 struct {
	Key    string   `json:"Key"`
	Values []string `json:"Values"`
}
