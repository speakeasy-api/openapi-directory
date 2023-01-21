package shared

// ConfluenceAttachmentConfiguration
// Specifies the attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
type ConfluenceAttachmentConfiguration struct {
	AttachmentFieldMappings []ConfluenceAttachmentToIndexFieldMapping `json:"AttachmentFieldMappings,omitempty"`
	CrawlAttachments        *bool                                     `json:"CrawlAttachments,omitempty"`
}
