package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForResourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadArn")
    public String workloadArn;
    public ListTagsForResourcePathParams withWorkloadArn(String workloadArn) {
        this.workloadArn = workloadArn;
        return this;
    }
}