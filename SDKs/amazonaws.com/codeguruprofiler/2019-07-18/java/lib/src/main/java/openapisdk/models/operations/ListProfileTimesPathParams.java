package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListProfileTimesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public ListProfileTimesPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}