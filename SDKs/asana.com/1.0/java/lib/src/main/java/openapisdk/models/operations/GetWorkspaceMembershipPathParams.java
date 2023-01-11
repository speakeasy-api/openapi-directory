package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace_membership_gid")
    public String workspaceMembershipGid;
    public GetWorkspaceMembershipPathParams withWorkspaceMembershipGid(String workspaceMembershipGid) {
        this.workspaceMembershipGid = workspaceMembershipGid;
        return this;
    }
}