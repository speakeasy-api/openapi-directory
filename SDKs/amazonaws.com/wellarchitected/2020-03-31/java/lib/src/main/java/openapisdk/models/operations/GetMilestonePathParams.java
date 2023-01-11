package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMilestonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=MilestoneNumber")
    public Long milestoneNumber;
    public GetMilestonePathParams withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public GetMilestonePathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}