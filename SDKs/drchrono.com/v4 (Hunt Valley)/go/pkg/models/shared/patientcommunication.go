package shared

type PatientCommunication struct {
	Code            *string `json:"code,omitempty"`
	CodeSystem      *string `json:"code_system,omitempty"`
	CreatedAt       *string `json:"created_at,omitempty"`
	Doctor          int64   `json:"doctor"`
	EffectiveTime   *string `json:"effective_time,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
	Patient         int64   `json:"patient"`
	ValueCode       *string `json:"value_code,omitempty"`
	ValueCodeSystem *string `json:"value_code_system,omitempty"`
	ValueName       *string `json:"value_name,omitempty"`
}
