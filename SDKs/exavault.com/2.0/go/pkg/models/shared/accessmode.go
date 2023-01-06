package shared

// AccessMode
// An object defining what a not-logged-in visitor can do with the share contents
type AccessMode struct {
	Delete   *bool `json:"delete,omitempty"`
	Download *bool `json:"download,omitempty"`
	Modify   *bool `json:"modify,omitempty"`
	Upload   *bool `json:"upload,omitempty"`
}
