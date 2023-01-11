package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public GetPolicyPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}