package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateConfigurationSetReputationMetricsEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateConfigurationSetReputationMetricsEnabledActionEnum action;
    public GetUpdateConfigurationSetReputationMetricsEnabledQueryParams withAction(GetUpdateConfigurationSetReputationMetricsEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConfigurationSetName")
    public String configurationSetName;
    public GetUpdateConfigurationSetReputationMetricsEnabledQueryParams withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Enabled")
    public Boolean enabled;
    public GetUpdateConfigurationSetReputationMetricsEnabledQueryParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum version;
    public GetUpdateConfigurationSetReputationMetricsEnabledQueryParams withVersion(GetUpdateConfigurationSetReputationMetricsEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}