package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeploymentVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uuid")
    public String environmentUuid;
    public DeleteDeploymentVariablePathParams withEnvironmentUuid(String environmentUuid) {
        this.environmentUuid = environmentUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public DeleteDeploymentVariablePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public DeleteDeploymentVariablePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteDeploymentVariablePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}