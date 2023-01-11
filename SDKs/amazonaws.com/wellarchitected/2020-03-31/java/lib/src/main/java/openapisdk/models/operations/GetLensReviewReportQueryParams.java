package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLensReviewReportQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MilestoneNumber")
    public Long milestoneNumber;
    public GetLensReviewReportQueryParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
}