package shared

type ScoreRevisionCreationDataEncodingEnum string

const (
	ScoreRevisionCreationDataEncodingEnumBase64 ScoreRevisionCreationDataEncodingEnum = "base64"
)

// ScoreRevisionCreation
// A new created revision
type ScoreRevisionCreation struct {
	Autosave     *bool                                  `json:"autosave,omitempty"`
	Data         string                                 `json:"data"`
	DataEncoding *ScoreRevisionCreationDataEncodingEnum `json:"dataEncoding,omitempty"`
	Description  *string                                `json:"description,omitempty"`
}
