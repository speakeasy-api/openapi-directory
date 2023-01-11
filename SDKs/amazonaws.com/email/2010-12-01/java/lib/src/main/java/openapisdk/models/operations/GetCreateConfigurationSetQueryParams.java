package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateConfigurationSetActionEnum action;
    public GetCreateConfigurationSetQueryParams withAction(GetCreateConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSet")
    public GetCreateConfigurationSetConfigurationSet configurationSet;
    public GetCreateConfigurationSetQueryParams withConfigurationSet(GetCreateConfigurationSetConfigurationSet configurationSet) {
        this.configurationSet = configurationSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateConfigurationSetVersionEnum version;
    public GetCreateConfigurationSetQueryParams withVersion(GetCreateConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}