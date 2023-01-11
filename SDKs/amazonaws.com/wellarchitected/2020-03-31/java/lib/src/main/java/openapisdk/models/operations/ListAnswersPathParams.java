package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnswersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LensAlias")
    public String lensAlias;
    public ListAnswersPathParams withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public ListAnswersPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}