package shared

type SessionActivityEntryAttributes struct {
	BytesTransferred *int64  `json:"bytesTransferred,omitempty"`
	Created          *string `json:"created,omitempty"`
	Duration         *int64  `json:"duration,omitempty"`
	FileName         *string `json:"fileName,omitempty"`
	FileSource       *string `json:"fileSource,omitempty"`
	IPAddress        *string `json:"ipAddress,omitempty"`
	Operation        *string `json:"operation,omitempty"`
	Protocol         *string `json:"protocol,omitempty"`
	SessionID        *string `json:"sessionId,omitempty"`
	Status           *string `json:"status,omitempty"`
	Username         *string `json:"username,omitempty"`
}

type SessionActivityEntryTypeEnum string

const (
	SessionActivityEntryTypeEnumSessionActivity SessionActivityEntryTypeEnum = "sessionActivity"
)

// SessionActivityEntry
// Single entry of session activity
type SessionActivityEntry struct {
	Attributes *SessionActivityEntryAttributes `json:"attributes,omitempty"`
	ID         *int64                          `json:"id,omitempty"`
	Type       *SessionActivityEntryTypeEnum   `json:"type,omitempty"`
}
