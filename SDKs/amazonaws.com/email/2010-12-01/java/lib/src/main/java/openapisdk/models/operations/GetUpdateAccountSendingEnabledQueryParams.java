package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateAccountSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateAccountSendingEnabledActionEnum action;
    public GetUpdateAccountSendingEnabledQueryParams withAction(GetUpdateAccountSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Enabled")
    public Boolean enabled;
    public GetUpdateAccountSendingEnabledQueryParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateAccountSendingEnabledVersionEnum version;
    public GetUpdateAccountSendingEnabledQueryParams withVersion(GetUpdateAccountSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}