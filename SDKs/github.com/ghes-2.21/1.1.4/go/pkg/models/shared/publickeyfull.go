// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

type PublicKeyFull struct {
	CreatedAt    time.Time `json:"created_at"`
	ID           int64     `json:"id"`
	Key          string    `json:"key"`
	LastUsed     time.Time `json:"last_used"`
	ReadOnly     bool      `json:"read_only"`
	RepositoryID int64     `json:"repository_id"`
	Title        string    `json:"title"`
	URL          string    `json:"url"`
	UserID       int64     `json:"user_id"`
	Verified     bool      `json:"verified"`
}
