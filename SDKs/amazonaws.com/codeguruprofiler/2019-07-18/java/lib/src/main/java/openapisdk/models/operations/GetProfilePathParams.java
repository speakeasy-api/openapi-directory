package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public GetProfilePathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}