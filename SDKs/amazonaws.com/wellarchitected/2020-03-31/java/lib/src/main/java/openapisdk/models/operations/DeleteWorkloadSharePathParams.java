package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkloadSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ShareId")
    public String shareId;
    public DeleteWorkloadSharePathParams withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public DeleteWorkloadSharePathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}