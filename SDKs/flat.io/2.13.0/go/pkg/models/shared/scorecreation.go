package shared

type ScoreCreationDataEncodingEnum string

const (
	ScoreCreationDataEncodingEnumBase64 ScoreCreationDataEncodingEnum = "base64"
)

// ScoreCreation
// A new created score
type ScoreCreation struct {
	Collection        *string                        `json:"collection,omitempty"`
	Data              *string                        `json:"data,omitempty"`
	DataEncoding      *ScoreCreationDataEncodingEnum `json:"dataEncoding,omitempty"`
	Filename          *string                        `json:"filename,omitempty"`
	GoogleDriveFolder *string                        `json:"googleDriveFolder,omitempty"`
	Privacy           ScorePrivacyEnum               `json:"privacy"`
	Source            *ScoreSource                   `json:"source,omitempty"`
	Title             *string                        `json:"title,omitempty"`
}
