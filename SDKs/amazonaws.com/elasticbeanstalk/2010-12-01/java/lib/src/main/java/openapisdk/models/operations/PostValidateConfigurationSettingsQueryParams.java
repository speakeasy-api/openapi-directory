package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostValidateConfigurationSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostValidateConfigurationSettingsActionEnum action;
    public PostValidateConfigurationSettingsQueryParams withAction(PostValidateConfigurationSettingsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostValidateConfigurationSettingsVersionEnum version;
    public PostValidateConfigurationSettingsQueryParams withVersion(PostValidateConfigurationSettingsVersionEnum version) {
        this.version = version;
        return this;
    }
}