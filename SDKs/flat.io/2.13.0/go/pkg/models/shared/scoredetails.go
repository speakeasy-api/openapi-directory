package shared

import (
	"time"
)

// ScoreDetails
// A summary of the score details
type ScoreDetails struct {
	Arranger          *string                `json:"arranger,omitempty"`
	Collaborators     []ResourceCollaborator `json:"collaborators,omitempty"`
	Collections       []string               `json:"collections,omitempty"`
	Comments          *ScoreCommentsCounts   `json:"comments,omitempty"`
	Composer          *string                `json:"composer,omitempty"`
	CreationDate      *time.Time             `json:"creationDate,omitempty"`
	CreationType      *ScoreCreationTypeEnum `json:"creationType,omitempty"`
	Description       *string                `json:"description,omitempty"`
	DurationTime      *float64               `json:"durationTime,omitempty"`
	GoogleDriveFileID *string                `json:"googleDriveFileId,omitempty"`
	HTMLURL           *string                `json:"htmlUrl,omitempty"`
	ID                *string                `json:"id,omitempty"`
	Instruments       []string               `json:"instruments,omitempty"`
	License           *ScoreLicenseEnum      `json:"license,omitempty"`
	LicenseText       *string                `json:"licenseText,omitempty"`
	Likes             *ScoreLikesCounts      `json:"likes,omitempty"`
	Lyricist          *string                `json:"lyricist,omitempty"`
	MainTempoQpm      *float64               `json:"mainTempoQpm,omitempty"`
	ModificationDate  *time.Time             `json:"modificationDate,omitempty"`
	NumberMeasures    *int64                 `json:"numberMeasures,omitempty"`
	Organization      *string                `json:"organization,omitempty"`
	ParentScore       *string                `json:"parentScore,omitempty"`
	Plays             *ScorePlaysCounts      `json:"plays,omitempty"`
	Privacy           *ScorePrivacyEnum      `json:"privacy,omitempty"`
	PublicationDate   *time.Time             `json:"publicationDate,omitempty"`
	Rights            *ResourceRights        `json:"rights,omitempty"`
	Samples           []string               `json:"samples,omitempty"`
	SharingKey        *string                `json:"sharingKey,omitempty"`
	Subtitle          *string                `json:"subtitle,omitempty"`
	Tags              []string               `json:"tags,omitempty"`
	Title             *string                `json:"title,omitempty"`
	User              *UserPublicSummary     `json:"user,omitempty"`
	Views             *ScoreViewsCounts      `json:"views,omitempty"`
}
