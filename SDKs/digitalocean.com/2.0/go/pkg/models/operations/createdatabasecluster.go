package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateDatabaseClusterRequestBodyBackupRestore struct {
	BackupCreatedAt *time.Time `json:"backup_created_at,omitempty"`
	DatabaseName    string     `json:"database_name"`
}

type CreateDatabaseClusterRequestBodyEngineEnum string

const (
	CreateDatabaseClusterRequestBodyEngineEnumPg      CreateDatabaseClusterRequestBodyEngineEnum = "pg"
	CreateDatabaseClusterRequestBodyEngineEnumMysql   CreateDatabaseClusterRequestBodyEngineEnum = "mysql"
	CreateDatabaseClusterRequestBodyEngineEnumRedis   CreateDatabaseClusterRequestBodyEngineEnum = "redis"
	CreateDatabaseClusterRequestBodyEngineEnumMongodb CreateDatabaseClusterRequestBodyEngineEnum = "mongodb"
)

type CreateDatabaseClusterRequestBodyMaintenanceWindowInput struct {
	Day  string `json:"day"`
	Hour string `json:"hour"`
}

type CreateDatabaseClusterRequestBodyInput struct {
	BackupRestore      *CreateDatabaseClusterRequestBodyBackupRestore          `json:"backup_restore,omitempty"`
	Engine             CreateDatabaseClusterRequestBodyEngineEnum              `json:"engine"`
	MaintenanceWindow  *CreateDatabaseClusterRequestBodyMaintenanceWindowInput `json:"maintenance_window,omitempty"`
	Name               string                                                  `json:"name"`
	NumNodes           int64                                                   `json:"num_nodes"`
	PrivateNetworkUUID *string                                                 `json:"private_network_uuid,omitempty"`
	Region             string                                                  `json:"region"`
	Size               string                                                  `json:"size"`
	Tags               []string                                                `json:"tags,omitempty"`
	Version            *string                                                 `json:"version,omitempty"`
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
	Request CreateDatabaseClusterRequestBodyInput `request:"mediaType=application/json"`
}

type CreateDatabaseClusterResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateDatabaseCluster201ApplicationJSONObject             *CreateDatabaseCluster201ApplicationJSON
	CreateDatabaseCluster401ApplicationJSONObject             *CreateDatabaseCluster401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
