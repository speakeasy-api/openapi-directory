package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectMembershipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_membership_gid")
    public String projectMembershipGid;
    public GetProjectMembershipPathParams withProjectMembershipGid(String projectMembershipGid) {
        this.projectMembershipGid = projectMembershipGid;
        return this;
    }
}