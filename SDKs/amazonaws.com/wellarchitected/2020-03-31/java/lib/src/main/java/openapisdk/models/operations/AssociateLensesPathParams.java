package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateLensesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public AssociateLensesPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}