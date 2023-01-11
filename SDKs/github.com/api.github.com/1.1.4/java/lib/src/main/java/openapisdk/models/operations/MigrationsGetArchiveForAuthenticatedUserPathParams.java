package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetArchiveForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsGetArchiveForAuthenticatedUserPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
}