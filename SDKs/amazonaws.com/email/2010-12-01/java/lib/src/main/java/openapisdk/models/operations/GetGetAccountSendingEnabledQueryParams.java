package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGetAccountSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetAccountSendingEnabledActionEnum action;
    public GetGetAccountSendingEnabledQueryParams withAction(GetGetAccountSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetAccountSendingEnabledVersionEnum version;
    public GetGetAccountSendingEnabledQueryParams withVersion(GetGetAccountSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}