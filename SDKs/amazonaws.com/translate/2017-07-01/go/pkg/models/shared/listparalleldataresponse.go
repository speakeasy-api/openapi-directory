package shared

type ListParallelDataResponse struct {
	NextToken                  *string                   `json:"NextToken,omitempty"`
	ParallelDataPropertiesList []ParallelDataProperties1 `json:"ParallelDataPropertiesList,omitempty"`
}
