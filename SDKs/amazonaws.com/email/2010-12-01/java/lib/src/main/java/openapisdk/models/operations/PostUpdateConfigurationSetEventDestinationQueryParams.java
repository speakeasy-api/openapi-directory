package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetEventDestinationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateConfigurationSetEventDestinationActionEnum action;
    public PostUpdateConfigurationSetEventDestinationQueryParams withAction(PostUpdateConfigurationSetEventDestinationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateConfigurationSetEventDestinationVersionEnum version;
    public PostUpdateConfigurationSetEventDestinationQueryParams withVersion(PostUpdateConfigurationSetEventDestinationVersionEnum version) {
        this.version = version;
        return this;
    }
}