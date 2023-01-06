package shared

// Duration1
// An object that represents a duration of time.
type Duration1 struct {
	Unit  map[string]interface{} `json:"unit,omitempty"`
	Value *int64                 `json:"value,omitempty"`
}
