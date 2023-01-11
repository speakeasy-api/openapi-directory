package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetTrackingOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateConfigurationSetTrackingOptionsActionEnum action;
    public PostCreateConfigurationSetTrackingOptionsQueryParams withAction(PostCreateConfigurationSetTrackingOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateConfigurationSetTrackingOptionsVersionEnum version;
    public PostCreateConfigurationSetTrackingOptionsQueryParams withVersion(PostCreateConfigurationSetTrackingOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}