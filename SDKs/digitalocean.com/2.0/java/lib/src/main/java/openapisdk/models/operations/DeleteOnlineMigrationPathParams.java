package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteOnlineMigrationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=database_cluster_uuid")
    public String databaseClusterUuid;
    public DeleteOnlineMigrationPathParams withDatabaseClusterUuid(String databaseClusterUuid) {
        this.databaseClusterUuid = databaseClusterUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public String migrationId;
    public DeleteOnlineMigrationPathParams withMigrationId(String migrationId) {
        this.migrationId = migrationId;
        return this;
    }
}