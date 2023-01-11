package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentForRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uuid")
    public String environmentUuid;
    public UpdateEnvironmentForRepositoryPathParams withEnvironmentUuid(String environmentUuid) {
        this.environmentUuid = environmentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public UpdateEnvironmentForRepositoryPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public UpdateEnvironmentForRepositoryPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}