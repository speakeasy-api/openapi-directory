package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetReputationMetricsEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateConfigurationSetReputationMetricsEnabledActionEnum action;
    public PostUpdateConfigurationSetReputationMetricsEnabledQueryParams withAction(PostUpdateConfigurationSetReputationMetricsEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum version;
    public PostUpdateConfigurationSetReputationMetricsEnabledQueryParams withVersion(PostUpdateConfigurationSetReputationMetricsEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}