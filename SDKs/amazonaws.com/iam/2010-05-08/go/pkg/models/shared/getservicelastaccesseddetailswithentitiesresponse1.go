package shared

import (
	"time"
)

type GetServiceLastAccessedDetailsWithEntitiesResponse1 struct {
	EntityDetailsList map[string]interface{}
	Error             *ErrorDetails
	IsTruncated       *bool
	JobCompletionDate time.Time
	JobCreationDate   time.Time
	JobStatus         JobStatusTypeEnum
	Marker            *string
}
