package shared

type AccountReportStatusEnum string

const (
	AccountReportStatusEnumMissing AccountReportStatusEnum = "missing"
	AccountReportStatusEnumPending AccountReportStatusEnum = "pending"
	AccountReportStatusEnumDone    AccountReportStatusEnum = "done"
)

type AccountReport struct {
	AccountID   *int64                   `json:"account_id,omitempty"`
	CreatedDate *string                  `json:"created_date,omitempty"`
	DownloadURL *string                  `json:"download_url,omitempty"`
	GroupID     *int64                   `json:"group_id,omitempty"`
	ID          *int64                   `json:"id,omitempty"`
	Status      *AccountReportStatusEnum `json:"status,omitempty"`
}
