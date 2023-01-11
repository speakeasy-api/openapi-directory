package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspaceId")
    public String workspaceId;
    public DeleteWorkspacePathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}