package shared

type FilesSearch struct {
	DriveID *string `json:"drive_id,omitempty"`
	Query   string  `json:"query"`
}
