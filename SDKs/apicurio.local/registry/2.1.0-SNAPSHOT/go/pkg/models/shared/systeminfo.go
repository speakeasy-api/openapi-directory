package shared

import (
	"time"
)

type SystemInfo struct {
	BuiltOn     *time.Time `json:"builtOn,omitempty"`
	Description *string    `json:"description,omitempty"`
	Name        *string    `json:"name,omitempty"`
	Version     *string    `json:"version,omitempty"`
}
