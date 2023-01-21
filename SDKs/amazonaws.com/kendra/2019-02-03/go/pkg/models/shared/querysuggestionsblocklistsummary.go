package shared

import (
	"time"
)

// QuerySuggestionsBlockListSummary
// <p>Summary information on a query suggestions block list.</p> <p>This includes information on the block list ID, block list name, when the block list was created, when the block list was last updated, and the count of block words/phrases in the block list.</p> <p>For information on the current quota limits for block lists, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas for Amazon Kendra</a>.</p>
type QuerySuggestionsBlockListSummary struct {
	CreatedAt *time.Time                           `json:"CreatedAt,omitempty"`
	ID        *string                              `json:"Id,omitempty"`
	ItemCount *int64                               `json:"ItemCount,omitempty"`
	Name      *string                              `json:"Name,omitempty"`
	Status    *QuerySuggestionsBlockListStatusEnum `json:"Status,omitempty"`
	UpdatedAt *time.Time                           `json:"UpdatedAt,omitempty"`
}
