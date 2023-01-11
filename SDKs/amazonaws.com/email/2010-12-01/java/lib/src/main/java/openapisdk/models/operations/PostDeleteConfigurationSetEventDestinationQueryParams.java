package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationSetEventDestinationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteConfigurationSetEventDestinationActionEnum action;
    public PostDeleteConfigurationSetEventDestinationQueryParams withAction(PostDeleteConfigurationSetEventDestinationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteConfigurationSetEventDestinationVersionEnum version;
    public PostDeleteConfigurationSetEventDestinationQueryParams withVersion(PostDeleteConfigurationSetEventDestinationVersionEnum version) {
        this.version = version;
        return this;
    }
}