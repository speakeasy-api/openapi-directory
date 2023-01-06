package shared

type Environment struct {
	Cll *int32   `json:"cll,omitempty"`
	Clm *int32   `json:"clm,omitempty"`
	Mat *float32 `json:"mat,omitempty"`
}
