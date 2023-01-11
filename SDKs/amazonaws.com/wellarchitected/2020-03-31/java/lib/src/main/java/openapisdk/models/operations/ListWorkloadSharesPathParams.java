package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWorkloadSharesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public ListWorkloadSharesPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}