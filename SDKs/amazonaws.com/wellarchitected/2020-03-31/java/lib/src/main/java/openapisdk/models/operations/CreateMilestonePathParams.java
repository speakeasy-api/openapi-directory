package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMilestonePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public CreateMilestonePathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}