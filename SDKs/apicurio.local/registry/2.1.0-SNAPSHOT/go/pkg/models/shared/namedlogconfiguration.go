package shared

type NamedLogConfiguration struct {
	Level LogLevelEnum `json:"level"`
	Name  string       `json:"name"`
}
