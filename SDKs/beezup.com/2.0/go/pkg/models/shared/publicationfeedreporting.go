package shared

import (
	"time"
)

// PublicationFeedReporting
// Publication feed reporting
type PublicationFeedReporting struct {
	Completed                        *bool        `json:"completed,omitempty"`
	EndUtcDate                       *time.Time   `json:"endUtcDate,omitempty"`
	ErrorMessage                     *string      `json:"errorMessage,omitempty"`
	ExportedProducts                 *int32       `json:"exportedProducts,omitempty"`
	FailedItems                      *int32       `json:"failedItems,omitempty"`
	FeedType                         FeedTypeEnum `json:"feedType"`
	HTMLReportGenerationErrorMessage *string      `json:"htmlReportGenerationErrorMessage,omitempty"`
	HTMLReportURL                    *string      `json:"htmlReportUrl,omitempty"`
	ProcessingStatus                 string       `json:"processingStatus"`
	PublishedItems                   *int32       `json:"publishedItems,omitempty"`
	PublishedItemsWithWarning        *int32       `json:"publishedItemsWithWarning,omitempty"`
	StartUtcDate                     time.Time    `json:"startUtcDate"`
	TransmittedItems                 *int32       `json:"transmittedItems,omitempty"`
}
