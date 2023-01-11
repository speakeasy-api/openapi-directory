package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_id")
    public String workspaceId;
    public SingleWorkspacePathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}