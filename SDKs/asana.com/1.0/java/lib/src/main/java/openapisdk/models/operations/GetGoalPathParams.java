package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public GetGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}