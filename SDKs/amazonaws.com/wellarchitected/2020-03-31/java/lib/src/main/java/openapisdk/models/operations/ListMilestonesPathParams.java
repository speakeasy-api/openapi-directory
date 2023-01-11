package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListMilestonesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public ListMilestonesPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}