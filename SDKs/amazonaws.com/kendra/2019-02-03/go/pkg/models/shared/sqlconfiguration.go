package shared

// SQLConfiguration
// Provides information that configures Amazon Kendra to use a SQL database.
type SQLConfiguration struct {
	QueryIdentifiersEnclosingOption *QueryIdentifiersEnclosingOptionEnum `json:"QueryIdentifiersEnclosingOption,omitempty"`
}
