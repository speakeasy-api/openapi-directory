package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteHsmConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteHsmConfigurationActionEnum action;
    public PostDeleteHsmConfigurationQueryParams withAction(PostDeleteHsmConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteHsmConfigurationVersionEnum version;
    public PostDeleteHsmConfigurationQueryParams withVersion(PostDeleteHsmConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}