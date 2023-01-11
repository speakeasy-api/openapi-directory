package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceProjectsProjectKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_key")
    public String projectKey;
    public GetWorkspacesWorkspaceProjectsProjectKeyPathParams withProjectKey(String projectKey) {
        this.projectKey = projectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspaceProjectsProjectKeyPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}