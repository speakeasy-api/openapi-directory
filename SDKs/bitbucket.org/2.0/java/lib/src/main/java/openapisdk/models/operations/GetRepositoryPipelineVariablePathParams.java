package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRepositoryPipelineVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo_slug")
    public String repoSlug;
    public GetRepositoryPipelineVariablePathParams withRepoSlug(String repoSlug) {
        this.repoSlug = repoSlug;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable_uuid")
    public String variableUuid;
    public GetRepositoryPipelineVariablePathParams withVariableUuid(String variableUuid) {
        this.variableUuid = variableUuid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetRepositoryPipelineVariablePathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}