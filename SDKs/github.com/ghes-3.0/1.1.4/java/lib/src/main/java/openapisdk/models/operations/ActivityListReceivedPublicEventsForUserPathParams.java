package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReceivedPublicEventsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListReceivedPublicEventsForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}