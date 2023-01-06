package shared

import (
	"time"
)

// OrderExportationReporting
// Represent the reporting of the Order report exportations
type OrderExportationReporting struct {
	AbortionUtcDate     *time.Time                                    `json:"abortionUtcDate,omitempty"`
	BeginUtcDate        *time.Time                                    `json:"beginUtcDate,omitempty"`
	BlobNameURI         *string                                       `json:"blobNameUri,omitempty"`
	EndUtcDate          *time.Time                                    `json:"endUtcDate,omitempty"`
	EnqueuedUtcDate     time.Time                                     `json:"enqueuedUtcDate"`
	ErrorMessage        *string                                       `json:"errorMessage,omitempty"`
	ExecutionUUID       string                                        `json:"executionUUID"`
	ExpirationUtcDate   *time.Time                                    `json:"expirationUtcDate,omitempty"`
	FailureUtcDate      *time.Time                                    `json:"failureUtcDate,omitempty"`
	IPAddress           string                                        `json:"ipAddress"`
	JSONCriteria        *string                                       `json:"jsonCriteria,omitempty"`
	LastUpdateUtcDate   *time.Time                                    `json:"lastUpdateUtcDate,omitempty"`
	OrderCount          *int32                                        `json:"orderCount,omitempty"`
	ProcessingStatus    OrderExportationReportingProcessingStatusEnum `json:"processingStatus"`
	RemainingOrderCount *int32                                        `json:"remainingOrderCount,omitempty"`
	ResumedUtcDate      *time.Time                                    `json:"resumedUtcDate,omitempty"`
	SourceType          SourceTypeEnum                                `json:"sourceType"`
	SourceUserID        *string                                       `json:"sourceUserId,omitempty"`
	SourceUserName      string                                        `json:"sourceUserName"`
	SuspendedUtcDate    *time.Time                                    `json:"suspendedUtcDate,omitempty"`
	TimeoutDuration     *string                                       `json:"timeoutDuration,omitempty"`
	WarningMessage      *string                                       `json:"warningMessage,omitempty"`
}
