package shared

import (
	"time"
)

// GetInvalidationResultInvalidation
// An invalidation.
type GetInvalidationResultInvalidation struct {
	CreateTime        time.Time
	ID                string
	InvalidationBatch InvalidationBatch
	Status            string
}

// GetInvalidationResult
// The returned result of the corresponding request.
type GetInvalidationResult struct {
	Invalidation *GetInvalidationResultInvalidation
}
