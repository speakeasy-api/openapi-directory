package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLensReviewQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MilestoneNumber")
    public Long milestoneNumber;
    public GetLensReviewQueryParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
}