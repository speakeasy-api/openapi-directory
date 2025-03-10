// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// MilestoneStateEnum - The state of the milestone.
type MilestoneStateEnum string

const (
	MilestoneStateEnumOpen   MilestoneStateEnum = "open"
	MilestoneStateEnumClosed MilestoneStateEnum = "closed"
)

func (e MilestoneStateEnum) ToPointer() *MilestoneStateEnum {
	return &e
}

func (e *MilestoneStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "open":
		fallthrough
	case "closed":
		*e = MilestoneStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for MilestoneStateEnum: %v", v)
	}
}

// Milestone - A collection of related issues and pull requests.
type Milestone struct {
	ClosedAt     time.Time `json:"closed_at"`
	ClosedIssues int64     `json:"closed_issues"`
	CreatedAt    time.Time `json:"created_at"`
	// A GitHub user.
	Creator     NullableSimpleUser `json:"creator"`
	Description string             `json:"description"`
	DueOn       time.Time          `json:"due_on"`
	HTMLURL     string             `json:"html_url"`
	ID          int64              `json:"id"`
	LabelsURL   string             `json:"labels_url"`
	NodeID      string             `json:"node_id"`
	// The number of the milestone.
	Number     int64 `json:"number"`
	OpenIssues int64 `json:"open_issues"`
	// The state of the milestone.
	State MilestoneStateEnum `json:"state"`
	// The title of the milestone.
	Title     string    `json:"title"`
	UpdatedAt time.Time `json:"updated_at"`
	URL       string    `json:"url"`
}
