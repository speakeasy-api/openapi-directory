package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetParentGoalsForGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public GetParentGoalsForGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}