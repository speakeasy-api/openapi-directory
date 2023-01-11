package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorkloadSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ShareId")
    public String shareId;
    public UpdateWorkloadSharePathParams withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public UpdateWorkloadSharePathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}