package shared

import (
	"time"
)

type Analysis struct {
	Config           *string    `json:"config,omitempty"`
	DateCreated      *time.Time `json:"date_created,omitempty"`
	DateFinished     *time.Time `json:"date_finished,omitempty"`
	DateLastModified *time.Time `json:"date_last_modified,omitempty"`
	DateLaunched     *time.Time `json:"date_launched,omitempty"`
	Features         *string    `json:"features,omitempty"`
	ID               *int64     `json:"id,omitempty"`
	Name             *string    `json:"name,omitempty"`
	Slug             *string    `json:"slug,omitempty"`
	Status           *string    `json:"status,omitempty"`
	URL              *string    `json:"url,omitempty"`
	UrlsDone         *string    `json:"urls_done,omitempty"`
	UrlsInQueue      *string    `json:"urls_in_queue,omitempty"`
	User             User       `json:"user"`
}
