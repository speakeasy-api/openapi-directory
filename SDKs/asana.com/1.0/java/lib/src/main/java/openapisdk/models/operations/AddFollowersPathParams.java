package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddFollowersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public AddFollowersPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}