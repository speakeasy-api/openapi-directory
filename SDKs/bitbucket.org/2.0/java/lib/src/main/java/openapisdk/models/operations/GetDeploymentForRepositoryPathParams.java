package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeploymentForRepositoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deployment_uuid")
    public String deploymentUuid;
    public GetDeploymentForRepositoryPathParams withDeploymentUuid(String deploymentUuid) {
        this.deploymentUuid = deploymentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetDeploymentForRepositoryPathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetDeploymentForRepositoryPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}