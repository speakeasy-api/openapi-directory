package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetEventDestinationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateConfigurationSetEventDestinationActionEnum action;
    public PostCreateConfigurationSetEventDestinationQueryParams withAction(PostCreateConfigurationSetEventDestinationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateConfigurationSetEventDestinationVersionEnum version;
    public PostCreateConfigurationSetEventDestinationQueryParams withVersion(PostCreateConfigurationSetEventDestinationVersionEnum version) {
        this.version = version;
        return this;
    }
}