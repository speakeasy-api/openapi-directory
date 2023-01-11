package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSubgoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public AddSubgoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}