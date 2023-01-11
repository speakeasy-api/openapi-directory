package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateHsmConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateHsmConfigurationActionEnum action;
    public PostCreateHsmConfigurationQueryParams withAction(PostCreateHsmConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateHsmConfigurationVersionEnum version;
    public PostCreateHsmConfigurationQueryParams withVersion(PostCreateHsmConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}