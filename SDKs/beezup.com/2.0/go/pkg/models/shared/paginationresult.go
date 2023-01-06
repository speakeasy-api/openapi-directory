package shared

type PaginationResult struct {
	EntryCount      int64                 `json:"entryCount"`
	Links           PaginationResultLinks `json:"links"`
	PageCount       int64                 `json:"pageCount"`
	TotalEntryCount int64                 `json:"totalEntryCount"`
}
