package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspacesWorkspaceHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public DeleteWorkspacesWorkspaceHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public DeleteWorkspacesWorkspaceHooksUidPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}