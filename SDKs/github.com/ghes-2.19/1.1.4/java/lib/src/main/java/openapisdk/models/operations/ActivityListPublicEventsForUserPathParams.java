package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListPublicEventsForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListPublicEventsForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}