package shared

// FormFieldSettings
// Advanced field settings
type FormFieldSettings struct {
	Description     *string  `json:"description,omitempty"`
	IsRequired      *bool    `json:"isRequired,omitempty"`
	SenderEmail     *bool    `json:"senderEmail,omitempty"`
	UseAsFolderName *bool    `json:"useAsFolderName,omitempty"`
	Width           *float32 `json:"width,omitempty"`
}

type FormField struct {
	ID       *int32             `json:"id,omitempty"`
	Name     *string            `json:"name,omitempty"`
	Order    *int32             `json:"order,omitempty"`
	Settings *FormFieldSettings `json:"settings,omitempty"`
	Type     *interface{}       `json:"type,omitempty"`
}
