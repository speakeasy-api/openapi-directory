package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public GetWorkloadPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}