// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ServerDetail -  Detailed information about a server.
type ServerDetail struct {
	AntipatternReportS3Object           *S3Object                    `json:"antipatternReportS3Object,omitempty"`
	AntipatternReportStatus             *AntipatternReportStatusEnum `json:"antipatternReportStatus,omitempty"`
	AntipatternReportStatusMessage      *string                      `json:"antipatternReportStatusMessage,omitempty"`
	ApplicationComponentStrategySummary []StrategySummary            `json:"applicationComponentStrategySummary,omitempty"`
	DataCollectionStatus                *RunTimeAssessmentStatusEnum `json:"dataCollectionStatus,omitempty"`
	ID                                  *string                      `json:"id,omitempty"`
	LastAnalyzedTimestamp               *time.Time                   `json:"lastAnalyzedTimestamp,omitempty"`
	ListAntipatternSeveritySummary      []AntipatternSeveritySummary `json:"listAntipatternSeveritySummary,omitempty"`
	Name                                *string                      `json:"name,omitempty"`
	RecommendationSet                   *RecommendationSet           `json:"recommendationSet,omitempty"`
	ServerError                         *ServerError                 `json:"serverError,omitempty"`
	ServerType                          *string                      `json:"serverType,omitempty"`
	StatusMessage                       *string                      `json:"statusMessage,omitempty"`
	SystemInfo                          *SystemInfo                  `json:"systemInfo,omitempty"`
}
