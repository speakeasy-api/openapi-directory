package shared

type ListAPIDestinationsRequest struct {
	ConnectionArn *string                `json:"ConnectionArn,omitempty"`
	Limit         map[string]interface{} `json:"Limit,omitempty"`
	NamePrefix    *string                `json:"NamePrefix,omitempty"`
	NextToken     *string                `json:"NextToken,omitempty"`
}
