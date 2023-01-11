package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSubgoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public RemoveSubgoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}