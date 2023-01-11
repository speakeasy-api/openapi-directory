package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReceivedEventsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListReceivedEventsForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}