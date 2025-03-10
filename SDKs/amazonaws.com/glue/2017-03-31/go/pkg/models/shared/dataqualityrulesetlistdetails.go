// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// DataQualityRulesetListDetails - Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.
type DataQualityRulesetListDetails struct {
	CreatedOn           *time.Time              `json:"CreatedOn,omitempty"`
	Description         *string                 `json:"Description,omitempty"`
	LastModifiedOn      *time.Time              `json:"LastModifiedOn,omitempty"`
	Name                *string                 `json:"Name,omitempty"`
	RecommendationRunID *string                 `json:"RecommendationRunId,omitempty"`
	RuleCount           *int64                  `json:"RuleCount,omitempty"`
	TargetTable         *DataQualityTargetTable `json:"TargetTable,omitempty"`
}
