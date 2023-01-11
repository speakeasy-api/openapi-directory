package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public AddFollowersForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}