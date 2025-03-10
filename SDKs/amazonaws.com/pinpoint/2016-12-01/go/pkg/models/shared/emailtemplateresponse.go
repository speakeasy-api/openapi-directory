// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EmailTemplateResponse - Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
type EmailTemplateResponse struct {
	Arn                  *string           `json:"Arn,omitempty"`
	CreationDate         string            `json:"CreationDate"`
	DefaultSubstitutions *string           `json:"DefaultSubstitutions,omitempty"`
	HTMLPart             *string           `json:"HtmlPart,omitempty"`
	LastModifiedDate     string            `json:"LastModifiedDate"`
	RecommenderID        *string           `json:"RecommenderId,omitempty"`
	Subject              *string           `json:"Subject,omitempty"`
	TemplateDescription  *string           `json:"TemplateDescription,omitempty"`
	TemplateName         string            `json:"TemplateName"`
	TemplateType         TemplateTypeEnum  `json:"TemplateType"`
	TextPart             *string           `json:"TextPart,omitempty"`
	Version              *string           `json:"Version,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}
