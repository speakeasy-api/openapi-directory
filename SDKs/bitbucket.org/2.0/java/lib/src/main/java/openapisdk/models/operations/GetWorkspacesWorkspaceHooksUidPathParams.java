package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspacesWorkspaceHooksUidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uid")
    public String uid;
    public GetWorkspacesWorkspaceHooksUidPathParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;
    public GetWorkspacesWorkspaceHooksUidPathParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}