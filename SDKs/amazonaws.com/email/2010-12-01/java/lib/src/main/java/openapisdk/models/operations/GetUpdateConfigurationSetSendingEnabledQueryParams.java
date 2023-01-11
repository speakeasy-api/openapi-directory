package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateConfigurationSetSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateConfigurationSetSendingEnabledActionEnum action;
    public GetUpdateConfigurationSetSendingEnabledQueryParams withAction(GetUpdateConfigurationSetSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetUpdateConfigurationSetSendingEnabledQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Enabled")
    public Boolean enabled;
    public GetUpdateConfigurationSetSendingEnabledQueryParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateConfigurationSetSendingEnabledVersionEnum version;
    public GetUpdateConfigurationSetSendingEnabledQueryParams withVersion(GetUpdateConfigurationSetSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}