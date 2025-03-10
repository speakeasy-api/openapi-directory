// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"openapi/pkg/types"
	"time"
)

// StoryResponseDates - *Conditional*
type StoryResponseDates struct {
	// The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with `due_on`.
	DueAt *time.Time `json:"due_at,omitempty"`
	// The localized day on which this goal is due. This takes a date with format `YYYY-MM-DD`.
	DueOn *types.Date `json:"due_on,omitempty"`
	// The day on which work for this goal begins, or null if the goal has no start date. This takes a date with `YYYY-MM-DD` format, and cannot be set unless there is an accompanying due date.
	StartOn *types.Date `json:"start_on,omitempty"`
}
