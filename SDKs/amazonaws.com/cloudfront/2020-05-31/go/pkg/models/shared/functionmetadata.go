package shared

import (
	"time"
)

// FunctionMetadata
// Contains metadata about a CloudFront function.
type FunctionMetadata struct {
	CreatedTime      *time.Time
	FunctionARN      string
	LastModifiedTime time.Time
	Stage            *FunctionStageEnum
}
