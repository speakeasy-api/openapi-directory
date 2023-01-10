package shared

import (
	"time"
)

// OptimiseRequest
// Contains common filter parameters
type OptimiseRequest struct {
	AdvancedFilters               ReportAdvancedFilters              `json:"advancedFilters"`
	AnalyticsProductColumnFilters *AnalyticsProductColumnFilters     `json:"analyticsProductColumnFilters,omitempty"`
	BeginPeriodUtcDate            time.Time                          `json:"beginPeriodUtcDate"`
	CategoryFilter                *BeezUpCommonCatalogCategoryFilter `json:"categoryFilter,omitempty"`
	ChannelID                     *string                            `json:"channelId,omitempty"`
	EndPeriodUtcDate              time.Time                          `json:"endPeriodUtcDate"`
	OrderBy                       *PerformanceIndicatorTypeEnum      `json:"orderBy,omitempty"`
	OrderByDirection              *OrderByDirectionEnum              `json:"orderByDirection,omitempty"`
	PageNumber                    *int32                             `json:"pageNumber,omitempty"`
	PageSize                      *int32                             `json:"pageSize,omitempty"`
	PerformanceIndicatorFilters   []PerformanceIndicatorFilter       `json:"performanceIndicatorFilters,omitempty"`
	PeriodType                    ReportFilterPeriodTypeEnum         `json:"periodType"`
	ProductColumnsToDisplay       []string                           `json:"productColumnsToDisplay,omitempty"`
	ProductState                  *ProductStateFilterEnum            `json:"productState,omitempty"`
	ReportType                    ReportTypeEnum                     `json:"reportType"`
}
