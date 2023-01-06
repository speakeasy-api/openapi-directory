package shared

type ScannedClinicalDocument struct {
	Archived    *bool   `json:"archived,omitempty"`
	Date        string  `json:"date"`
	Description string  `json:"description"`
	Doctor      int64   `json:"doctor"`
	Document    string  `json:"document"`
	ID          *int64  `json:"id,omitempty"`
	Metatags    *string `json:"metatags,omitempty"`
	Patient     int64   `json:"patient"`
	UpdatedAt   *string `json:"updated_at,omitempty"`
}
