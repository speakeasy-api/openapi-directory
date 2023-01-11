package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnswerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MilestoneNumber")
    public Long milestoneNumber;
    public GetAnswerQueryParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
}