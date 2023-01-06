package shared

type BeezUpCommonPaginationResult struct {
	EntryCount      int64                             `json:"entryCount"`
	Links           BeezUpCommonPaginationResultLinks `json:"links"`
	PageCount       int64                             `json:"pageCount"`
	TotalEntryCount int64                             `json:"totalEntryCount"`
}
