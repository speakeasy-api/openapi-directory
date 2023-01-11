package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateProfilingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public UpdateProfilingGroupPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}