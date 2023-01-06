package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateDatabaseClusterRequestBodyBackupRestore struct {
	BackupCreatedAt *time.Time `json:"backup_created_at,omitempty"`
	DatabaseName    string     `json:"database_name"`
}

type CreateDatabaseClusterRequestBody struct {
	BackupRestore *CreateDatabaseClusterRequestBodyBackupRestore `json:"backup_restore,omitempty"`
}

type CreateDatabaseCluster201ApplicationJSON struct {
	Database shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems `json:"database"`
}

type CreateDatabaseCluster401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateDatabaseClusterRequest struct {
	Request CreateDatabaseClusterRequestBody `request:"mediaType=application/json"`
}

type CreateDatabaseClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDatabaseCluster201ApplicationJSONObject             *CreateDatabaseCluster201ApplicationJSON
	CreateDatabaseCluster401ApplicationJSONObject             *CreateDatabaseCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
