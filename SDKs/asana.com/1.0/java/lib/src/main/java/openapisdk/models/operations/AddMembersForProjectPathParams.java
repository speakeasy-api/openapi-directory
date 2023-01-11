package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public AddMembersForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}