package shared

type DeleteReportGroupInput struct {
	Arn           map[string]interface{} `json:"arn"`
	DeleteReports *bool                  `json:"deleteReports,omitempty"`
}
