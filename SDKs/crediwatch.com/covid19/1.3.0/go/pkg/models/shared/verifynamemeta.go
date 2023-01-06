package shared

type VerifyNameMeta struct {
	JobID   *string `json:"job_id,omitempty"`
	JobTime *int64  `json:"job_time,omitempty"`
	Query   string  `json:"query"`
}
