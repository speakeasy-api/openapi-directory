package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGoalMetricPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public CreateGoalMetricPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}