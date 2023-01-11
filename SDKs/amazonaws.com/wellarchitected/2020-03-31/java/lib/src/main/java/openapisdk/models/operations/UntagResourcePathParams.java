package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadArn")
    public String workloadArn;
    public UntagResourcePathParams withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
}