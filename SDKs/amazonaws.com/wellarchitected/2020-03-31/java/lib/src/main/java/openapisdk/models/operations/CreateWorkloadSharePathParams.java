package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkloadSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public CreateWorkloadSharePathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}