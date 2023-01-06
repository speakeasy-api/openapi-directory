package shared

import (
	"time"
)

type GetImportationReportResponseImportationInfo struct {
	BeginUtcDate       time.Time              `json:"beginUtcDate"`
	EndUtcDate         time.Time              `json:"endUtcDate"`
	InputConfiguration InputFileConfiguration `json:"inputConfiguration"`
	UserID             string                 `json:"userId"`
}
