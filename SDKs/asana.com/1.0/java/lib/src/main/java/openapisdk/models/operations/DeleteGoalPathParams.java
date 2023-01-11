package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteGoalPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=goal_gid")
    public String goalGid;
    public DeleteGoalPathParams withGoalGid(String goalGid) {
        this.goalGid = goalGid;
        return this;
    }
}