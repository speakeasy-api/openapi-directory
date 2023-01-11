package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentVariablesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uuid")
    public String environmentUuid;
    public GetDeploymentVariablesPathParams withEnvironmentUuid(String environmentUuid) {
        this.environmentUuid = environmentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetDeploymentVariablesPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetDeploymentVariablesPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}