package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TypeaheadForWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public TypeaheadForWorkspacePathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}