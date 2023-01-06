package shared

type ListEngagementsResult struct {
	Engagements map[string]interface{} `json:"Engagements"`
	NextToken   *string                `json:"NextToken,omitempty"`
}
