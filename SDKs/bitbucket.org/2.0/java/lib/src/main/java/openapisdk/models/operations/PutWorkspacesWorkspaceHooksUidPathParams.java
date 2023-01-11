package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkspacesWorkspaceHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public PutWorkspacesWorkspaceHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public PutWorkspacesWorkspaceHooksUidPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}