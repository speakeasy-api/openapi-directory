package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateConfigurationSetTrackingOptionsActionEnum action;
    public PostUpdateConfigurationSetTrackingOptionsQueryParams withAction(PostUpdateConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateConfigurationSetTrackingOptionsVersionEnum version;
    public PostUpdateConfigurationSetTrackingOptionsQueryParams withVersion(PostUpdateConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}