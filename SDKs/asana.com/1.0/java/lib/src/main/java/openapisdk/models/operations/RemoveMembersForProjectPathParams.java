package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveMembersForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public RemoveMembersForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}