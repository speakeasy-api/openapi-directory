package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowersForProjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_gid")
    public String projectGid;
    public RemoveFollowersForProjectPathParams withProjectGid(String projectGid) {
        this.projectGid = projectGid;
        return this;
    }
}