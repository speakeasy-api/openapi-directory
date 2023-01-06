package shared

type GetImportationReportResponseDiff struct {
	CreatedCount   int64  `json:"createdCount"`
	DeletedCount   int64  `json:"deletedCount"`
	UnchangedCount *int64 `json:"unchangedCount,omitempty"`
	UpdatedCount   int64  `json:"updatedCount"`
}
