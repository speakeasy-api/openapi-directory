package shared

type Project struct {
	Active          *bool                     `json:"active,omitempty"`
	CurrentSettings ProjectSettingsSerializer `json:"current_settings"`
	DateCreated     *string                   `json:"date_created,omitempty"`
	Name            string                    `json:"name"`
	Slug            string                    `json:"slug"`
	User            User                      `json:"user"`
}
