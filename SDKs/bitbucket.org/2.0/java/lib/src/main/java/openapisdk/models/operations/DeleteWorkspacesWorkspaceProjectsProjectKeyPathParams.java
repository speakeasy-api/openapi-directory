package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_key")
    public String projectKey;
    public DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams withProjectKey(String projectKey) {
        this.projectKey = projectKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteWorkspacesWorkspaceProjectsProjectKeyPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}