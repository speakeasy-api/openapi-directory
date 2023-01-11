package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAquaConfigurationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyAquaConfigurationActionEnum action;
    public PostModifyAquaConfigurationQueryParams withAction(PostModifyAquaConfigurationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyAquaConfigurationVersionEnum version;
    public PostModifyAquaConfigurationQueryParams withVersion(PostModifyAquaConfigurationVersionEnum version) {
        this.version = version;
        return this;
    }
}