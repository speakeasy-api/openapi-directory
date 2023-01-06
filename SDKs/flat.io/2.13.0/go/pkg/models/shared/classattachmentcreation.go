package shared

type ClassAttachmentCreationTypeEnum string

const (
	ClassAttachmentCreationTypeEnumFlat        ClassAttachmentCreationTypeEnum = "flat"
	ClassAttachmentCreationTypeEnumLink        ClassAttachmentCreationTypeEnum = "link"
	ClassAttachmentCreationTypeEnumGoogleDrive ClassAttachmentCreationTypeEnum = "googleDrive"
	ClassAttachmentCreationTypeEnumWorksheet   ClassAttachmentCreationTypeEnum = "worksheet"
)

// ClassAttachmentCreation
// Attachment creation for an assignment or stream post.
// This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.
type ClassAttachmentCreation struct {
	GoogleDriveFileID *string                          `json:"googleDriveFileId,omitempty"`
	LockScoreTemplate *bool                            `json:"lockScoreTemplate,omitempty"`
	Score             *string                          `json:"score,omitempty"`
	SharingMode       *MediaScoreSharingModeEnum       `json:"sharingMode,omitempty"`
	Type              *ClassAttachmentCreationTypeEnum `json:"type,omitempty"`
	URL               *string                          `json:"url,omitempty"`
	Worksheet         *string                          `json:"worksheet,omitempty"`
}
