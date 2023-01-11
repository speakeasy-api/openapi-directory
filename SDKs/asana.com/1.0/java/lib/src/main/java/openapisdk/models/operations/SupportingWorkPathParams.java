package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SupportingWorkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public SupportingWorkPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}