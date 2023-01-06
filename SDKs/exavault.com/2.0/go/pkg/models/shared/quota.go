package shared

type Quota struct {
	BandwidthLimit              *int64 `json:"bandwidthLimit,omitempty"`
	BandwidthUsed               *int64 `json:"bandwidthUsed,omitempty"`
	DiskLimit                   *int64 `json:"diskLimit,omitempty"`
	DiskUsed                    *int64 `json:"diskUsed,omitempty"`
	NoticeEnabled               *bool  `json:"noticeEnabled,omitempty"`
	NoticeThreshold             *int32 `json:"noticeThreshold,omitempty"`
	TransactionsLimit           *int32 `json:"transactionsLimit,omitempty"`
	TransactionsNoticeEnabled   *bool  `json:"transactionsNoticeEnabled,omitempty"`
	TransactionsNoticeThreshold *int32 `json:"transactionsNoticeThreshold,omitempty"`
}
