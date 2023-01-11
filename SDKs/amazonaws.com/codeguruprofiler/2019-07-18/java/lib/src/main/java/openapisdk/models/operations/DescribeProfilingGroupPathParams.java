package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProfilingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public DescribeProfilingGroupPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}