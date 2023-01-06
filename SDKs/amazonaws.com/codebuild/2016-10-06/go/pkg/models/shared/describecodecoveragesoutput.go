package shared

type DescribeCodeCoveragesOutput struct {
	CodeCoverages map[string]interface{} `json:"codeCoverages,omitempty"`
	NextToken     *string                `json:"nextToken,omitempty"`
}
