package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetStatusForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsGetStatusForAuthenticatedUserPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
}