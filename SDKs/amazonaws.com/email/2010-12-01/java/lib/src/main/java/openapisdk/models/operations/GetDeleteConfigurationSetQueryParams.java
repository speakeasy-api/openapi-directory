package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteConfigurationSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteConfigurationSetActionEnum action;
    public GetDeleteConfigurationSetQueryParams withAction(GetDeleteConfigurationSetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetDeleteConfigurationSetQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteConfigurationSetVersionEnum version;
    public GetDeleteConfigurationSetQueryParams withVersion(GetDeleteConfigurationSetVersionEnum version) {
        this.version = version;
        return this;
    }
}