package shared

import (
	"time"
)

type AnalysisDetail struct {
	Config           *string    `json:"config,omitempty"`
	DateFinished     *time.Time `json:"date_finished,omitempty"`
	DateLastModified *time.Time `json:"date_last_modified,omitempty"`
	DateLaunched     *time.Time `json:"date_launched,omitempty"`
	Failures         *string    `json:"failures,omitempty"`
	Features         *string    `json:"features,omitempty"`
	ID               *int64     `json:"id,omitempty"`
	Name             *string    `json:"name,omitempty"`
	RedButtonDomain  *string    `json:"red_button_domain,omitempty"`
	Slug             *string    `json:"slug,omitempty"`
	URL              *string    `json:"url,omitempty"`
	UrlsDone         *string    `json:"urls_done,omitempty"`
	UrlsInQueue      *string    `json:"urls_in_queue,omitempty"`
	User             User       `json:"user"`
}
