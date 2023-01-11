package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetFrameMetricDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public BatchGetFrameMetricDataPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}