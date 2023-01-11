package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveFollowersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public RemoveFollowersPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}