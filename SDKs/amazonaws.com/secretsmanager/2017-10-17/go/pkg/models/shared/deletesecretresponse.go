package shared

import (
	"time"
)

type DeleteSecretResponse struct {
	ARN          *string    `json:"ARN,omitempty"`
	DeletionDate *time.Time `json:"DeletionDate,omitempty"`
	Name         *string    `json:"Name,omitempty"`
}
