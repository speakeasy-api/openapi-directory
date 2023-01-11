package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSupportingWorkForGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public RemoveSupportingWorkForGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}