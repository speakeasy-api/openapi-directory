package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListEventsForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListEventsForAuthenticatedUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}