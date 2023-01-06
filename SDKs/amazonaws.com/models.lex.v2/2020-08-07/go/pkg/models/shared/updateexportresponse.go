package shared

import (
	"time"
)

// UpdateExportResponseResourceSpecification
// Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
type UpdateExportResponseResourceSpecification struct {
	BotExportSpecification       *BotExportSpecification       `json:"botExportSpecification,omitempty"`
	BotLocaleExportSpecification *BotLocaleExportSpecification `json:"botLocaleExportSpecification,omitempty"`
}

type UpdateExportResponse struct {
	CreationDateTime      *time.Time                                 `json:"creationDateTime,omitempty"`
	ExportID              *string                                    `json:"exportId,omitempty"`
	ExportStatus          *ExportStatusEnum                          `json:"exportStatus,omitempty"`
	FileFormat            *ImportExportFileFormatEnum                `json:"fileFormat,omitempty"`
	LastUpdatedDateTime   *time.Time                                 `json:"lastUpdatedDateTime,omitempty"`
	ResourceSpecification *UpdateExportResponseResourceSpecification `json:"resourceSpecification,omitempty"`
}
