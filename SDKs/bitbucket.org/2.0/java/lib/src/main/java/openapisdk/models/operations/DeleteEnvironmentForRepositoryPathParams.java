package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentForRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uuid")
    public String environmentUuid;
    public DeleteEnvironmentForRepositoryPathParams withEnvironmentUuid(String environmentUuid) {
        this.environmentUuid = environmentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteEnvironmentForRepositoryPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteEnvironmentForRepositoryPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}