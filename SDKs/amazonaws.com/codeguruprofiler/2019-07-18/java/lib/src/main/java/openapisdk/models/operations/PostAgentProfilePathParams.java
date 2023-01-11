package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAgentProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public PostAgentProfilePathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}