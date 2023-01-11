package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateLensesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public DisassociateLensesPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}