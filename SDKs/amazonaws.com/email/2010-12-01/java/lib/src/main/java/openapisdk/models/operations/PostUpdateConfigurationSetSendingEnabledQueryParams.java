package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationSetSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateConfigurationSetSendingEnabledActionEnum action;
    public PostUpdateConfigurationSetSendingEnabledQueryParams withAction(PostUpdateConfigurationSetSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateConfigurationSetSendingEnabledVersionEnum version;
    public PostUpdateConfigurationSetSendingEnabledQueryParams withVersion(PostUpdateConfigurationSetSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}