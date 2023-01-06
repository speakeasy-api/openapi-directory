package shared

import (
	"time"
)

// AnalyzerSummary1
// Contains information about the analyzer.
type AnalyzerSummary1 struct {
	Arn                    string             `json:"arn"`
	CreatedAt              time.Time          `json:"createdAt"`
	LastResourceAnalyzed   *string            `json:"lastResourceAnalyzed,omitempty"`
	LastResourceAnalyzedAt *time.Time         `json:"lastResourceAnalyzedAt,omitempty"`
	Name                   string             `json:"name"`
	Status                 AnalyzerStatusEnum `json:"status"`
	StatusReason           *StatusReason1     `json:"statusReason,omitempty"`
	Tags                   map[string]string  `json:"tags,omitempty"`
	Type                   TypeEnum           `json:"type"`
}
