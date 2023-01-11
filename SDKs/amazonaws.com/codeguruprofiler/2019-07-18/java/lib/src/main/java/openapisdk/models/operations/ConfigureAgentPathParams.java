package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigureAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public ConfigureAgentPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}