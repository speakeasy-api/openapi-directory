package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkspaceAliasPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspaceId")
    public String workspaceId;
    public UpdateWorkspaceAliasPathParams withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}