package shared

import (
	"time"
)

type ScoreCommentTypeEnum string

const (
	ScoreCommentTypeEnumDocument ScoreCommentTypeEnum = "document"
	ScoreCommentTypeEnumInline   ScoreCommentTypeEnum = "inline"
)

// ScoreComment
// Comment added on a sheet music
type ScoreComment struct {
	Comment          *string               `json:"comment,omitempty"`
	Context          *ScoreCommentContext  `json:"context,omitempty"`
	Date             *time.Time            `json:"date,omitempty"`
	ID               *string               `json:"id,omitempty"`
	Mentions         []string              `json:"mentions,omitempty"`
	ModificationDate *time.Time            `json:"modificationDate,omitempty"`
	RawComment       *string               `json:"rawComment,omitempty"`
	ReplyTo          *string               `json:"replyTo,omitempty"`
	Resolved         *bool                 `json:"resolved,omitempty"`
	ResolvedBy       *string               `json:"resolvedBy,omitempty"`
	Revision         *string               `json:"revision,omitempty"`
	Score            *string               `json:"score,omitempty"`
	Spam             *bool                 `json:"spam,omitempty"`
	Type             *ScoreCommentTypeEnum `json:"type,omitempty"`
	User             *string               `json:"user,omitempty"`
}
