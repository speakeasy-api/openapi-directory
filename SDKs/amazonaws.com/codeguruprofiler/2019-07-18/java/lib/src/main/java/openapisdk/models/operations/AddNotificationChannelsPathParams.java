package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNotificationChannelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=profilingGroupName")
    public String profilingGroupName;
    public AddNotificationChannelsPathParams withProfilingGroupName(String profilingGroupName) {
        this.profilingGroupName = profilingGroupName;
        return this;
    }
}