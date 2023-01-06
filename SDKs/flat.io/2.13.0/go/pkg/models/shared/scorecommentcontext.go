package shared

// ScoreCommentContext
// The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
type ScoreCommentContext struct {
	MeasureUuids []string `json:"measureUuids"`
	PartUUID     string   `json:"partUuid"`
	StaffIdx     *float64 `json:"staffIdx,omitempty"`
	StaffUUID    *string  `json:"staffUuid,omitempty"`
	StartDpq     float64  `json:"startDpq"`
	StartTimePos float64  `json:"startTimePos"`
	StopDpq      float64  `json:"stopDpq"`
	StopTimePos  float64  `json:"stopTimePos"`
}
