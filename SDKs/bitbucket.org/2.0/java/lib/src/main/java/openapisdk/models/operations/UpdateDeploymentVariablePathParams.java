package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeploymentVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uuid")
    public String environmentUuid;
    public UpdateDeploymentVariablePathParams withEnvironmentUuid(String environmentUuid) {
        this.environmentUuid = environmentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public UpdateDeploymentVariablePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public UpdateDeploymentVariablePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public UpdateDeploymentVariablePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}