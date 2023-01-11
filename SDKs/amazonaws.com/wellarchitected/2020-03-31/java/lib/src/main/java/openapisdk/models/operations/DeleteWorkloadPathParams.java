package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public DeleteWorkloadPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}