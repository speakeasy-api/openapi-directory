package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteConfigurationSetTrackingOptionsActionEnum action;
    public PostDeleteConfigurationSetTrackingOptionsQueryParams withAction(PostDeleteConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteConfigurationSetTrackingOptionsVersionEnum version;
    public PostDeleteConfigurationSetTrackingOptionsQueryParams withVersion(PostDeleteConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}