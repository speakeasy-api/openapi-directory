package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLensReviewImprovementsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LensAlias")
    public String lensAlias;
    public ListLensReviewImprovementsPathParams withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public ListLensReviewImprovementsPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}