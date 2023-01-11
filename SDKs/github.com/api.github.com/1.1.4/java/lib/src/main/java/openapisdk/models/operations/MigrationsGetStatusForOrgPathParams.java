package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetStatusForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsGetStatusForOrgPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public MigrationsGetStatusForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
}