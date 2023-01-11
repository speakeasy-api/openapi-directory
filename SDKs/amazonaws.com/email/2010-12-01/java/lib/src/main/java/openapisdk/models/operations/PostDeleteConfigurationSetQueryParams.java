package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteConfigurationSetActionEnum action;
    public PostDeleteConfigurationSetQueryParams withAction(PostDeleteConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteConfigurationSetVersionEnum version;
    public PostDeleteConfigurationSetQueryParams withVersion(PostDeleteConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}