package shared

// FormAttributes
// Attributes of the form including it's included fields and css styles
type FormAttributes struct {
	CSSStyles        *string     `json:"cssStyles,omitempty"`
	Elements         []FormField `json:"elements,omitempty"`
	FormDescription  *string     `json:"formDescription,omitempty"`
	SubmitButtonText *string     `json:"submitButtonText,omitempty"`
	SuccessMessage   *string     `json:"successMessage,omitempty"`
}
