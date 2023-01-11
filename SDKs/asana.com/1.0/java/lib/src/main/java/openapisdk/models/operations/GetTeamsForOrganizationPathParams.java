package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamsForOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_gid")
    public String workspaceGid;
    public GetTeamsForOrganizationPathParams withWorkspaceGid(String workspaceGid) {
        this.workspaceGid = workspaceGid;
        return this;
    }
}