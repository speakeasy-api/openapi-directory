package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsUnlockRepoForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=migration_id")
    public Long migrationId;
    public MigrationsUnlockRepoForAuthenticatedUserPathParams withMigrationId(Long migrationId) {
        this.migrationId = migrationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_name")
    public String repoName;
    public MigrationsUnlockRepoForAuthenticatedUserPathParams withRepoName(String repoName) {
        this.repoName = repoName;
        return this;
    }
}