package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadArn")
    public String workloadArn;
    public TagResourcePathParams withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
}