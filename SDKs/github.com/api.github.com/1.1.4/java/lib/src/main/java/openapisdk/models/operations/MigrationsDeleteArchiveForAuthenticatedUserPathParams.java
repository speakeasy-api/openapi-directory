package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsDeleteArchiveForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsDeleteArchiveForAuthenticatedUserPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
}