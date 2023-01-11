package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsListReposForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsListReposForUserPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
}