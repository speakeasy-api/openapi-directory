package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public UpdateWorkloadPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}