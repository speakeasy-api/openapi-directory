package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLensReviewsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public ListLensReviewsPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}