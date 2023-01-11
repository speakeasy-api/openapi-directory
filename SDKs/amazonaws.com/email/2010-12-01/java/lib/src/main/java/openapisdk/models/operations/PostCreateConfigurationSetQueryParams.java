package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateConfigurationSetActionEnum action;
    public PostCreateConfigurationSetQueryParams withAction(PostCreateConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateConfigurationSetVersionEnum version;
    public PostCreateConfigurationSetQueryParams withVersion(PostCreateConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}