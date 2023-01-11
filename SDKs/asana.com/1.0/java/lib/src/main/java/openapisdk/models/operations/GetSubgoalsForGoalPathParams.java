package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSubgoalsForGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public GetSubgoalsForGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}