package shared

type DescribeEvaluationsInput struct {
	EQ             *string                       `json:"EQ,omitempty"`
	FilterVariable *EvaluationFilterVariableEnum `json:"FilterVariable,omitempty"`
	GE             *string                       `json:"GE,omitempty"`
	GT             *string                       `json:"GT,omitempty"`
	LE             *string                       `json:"LE,omitempty"`
	LT             *string                       `json:"LT,omitempty"`
	Limit          *int64                        `json:"Limit,omitempty"`
	NE             *string                       `json:"NE,omitempty"`
	NextToken      *string                       `json:"NextToken,omitempty"`
	Prefix         *string                       `json:"Prefix,omitempty"`
	SortOrder      *SortOrderEnum                `json:"SortOrder,omitempty"`
}
