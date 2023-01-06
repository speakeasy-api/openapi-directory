package shared

import (
	"time"
)

// CollectionCapabilities
// Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
type CollectionCapabilities struct {
	CanAddScores    *bool `json:"canAddScores,omitempty"`
	CanDelete       *bool `json:"canDelete,omitempty"`
	CanDeleteScores *bool `json:"canDeleteScores,omitempty"`
	CanEdit         *bool `json:"canEdit,omitempty"`
	CanShare        *bool `json:"canShare,omitempty"`
}

// Collection
// Collection of scores
type Collection struct {
	App           *string                 `json:"app,omitempty"`
	Capabilities  *CollectionCapabilities `json:"capabilities,omitempty"`
	Collaborators []ResourceCollaborator  `json:"collaborators,omitempty"`
	Collections   []string                `json:"collections,omitempty"`
	CreationDate  *time.Time              `json:"creationDate,omitempty"`
	HTMLURL       *string                 `json:"htmlUrl,omitempty"`
	ID            *string                 `json:"id,omitempty"`
	Privacy       *CollectionPrivacyEnum  `json:"privacy,omitempty"`
	Rights        *ResourceRights         `json:"rights,omitempty"`
	SharingKey    *string                 `json:"sharingKey,omitempty"`
	Title         *string                 `json:"title,omitempty"`
	Type          *CollectionTypeEnum     `json:"type,omitempty"`
	User          *UserPublicSummary      `json:"user,omitempty"`
}
