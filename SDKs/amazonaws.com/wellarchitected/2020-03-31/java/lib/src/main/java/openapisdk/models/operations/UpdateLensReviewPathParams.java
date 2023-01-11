package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLensReviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LensAlias")
    public String lensAlias;
    public UpdateLensReviewPathParams withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public UpdateLensReviewPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}