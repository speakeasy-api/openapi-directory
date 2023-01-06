package shared

type SortOptionResponseSortOptions struct {
	Order    *int64  `json:"order,omitempty"`
	SortName *string `json:"sortName,omitempty"`
	Strategy *string `json:"strategy,omitempty"`
}

type SortOptionResponse struct {
	ResponseMessage *string                         `json:"responseMessage,omitempty"`
	ResponseStatus  *string                         `json:"responseStatus,omitempty"`
	ResultSize      *int64                          `json:"resultSize,omitempty"`
	SortOptions     []SortOptionResponseSortOptions `json:"sortOptions,omitempty"`
}
