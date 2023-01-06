package shared

type MediaAttachmentTypeEnum string

const (
	MediaAttachmentTypeEnumRich        MediaAttachmentTypeEnum = "rich"
	MediaAttachmentTypeEnumPhoto       MediaAttachmentTypeEnum = "photo"
	MediaAttachmentTypeEnumVideo       MediaAttachmentTypeEnum = "video"
	MediaAttachmentTypeEnumLink        MediaAttachmentTypeEnum = "link"
	MediaAttachmentTypeEnumFlat        MediaAttachmentTypeEnum = "flat"
	MediaAttachmentTypeEnumGoogleDrive MediaAttachmentTypeEnum = "googleDrive"
	MediaAttachmentTypeEnumWorksheet   MediaAttachmentTypeEnum = "worksheet"
	MediaAttachmentTypeEnumPerformance MediaAttachmentTypeEnum = "performance"
)

// MediaAttachment
// Media attachment. The API will automatically resolve the details, oEmbed,
// and media available if possible and return them in this object
type MediaAttachment struct {
	AuthorName        *string                    `json:"authorName,omitempty"`
	AuthorURL         *string                    `json:"authorUrl,omitempty"`
	Description       *string                    `json:"description,omitempty"`
	GoogleDriveFileID *string                    `json:"googleDriveFileId,omitempty"`
	HTML              *string                    `json:"html,omitempty"`
	HTMLHeight        *string                    `json:"htmlHeight,omitempty"`
	HTMLWidth         *string                    `json:"htmlWidth,omitempty"`
	IconURL           *string                    `json:"iconUrl,omitempty"`
	LockScoreTemplate *bool                      `json:"lockScoreTemplate,omitempty"`
	MimeType          *string                    `json:"mimeType,omitempty"`
	Revision          *string                    `json:"revision,omitempty"`
	Score             *string                    `json:"score,omitempty"`
	SharingMode       *MediaScoreSharingModeEnum `json:"sharingMode,omitempty"`
	ThumbnailHeight   *int64                     `json:"thumbnailHeight,omitempty"`
	ThumbnailURL      *string                    `json:"thumbnailUrl,omitempty"`
	ThumbnailWidth    *int64                     `json:"thumbnailWidth,omitempty"`
	Title             *string                    `json:"title,omitempty"`
	Track             *string                    `json:"track,omitempty"`
	Type              *MediaAttachmentTypeEnum   `json:"type,omitempty"`
	URL               *string                    `json:"url,omitempty"`
	Worksheet         *string                    `json:"worksheet,omitempty"`
}
