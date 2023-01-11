package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public UpdateGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}