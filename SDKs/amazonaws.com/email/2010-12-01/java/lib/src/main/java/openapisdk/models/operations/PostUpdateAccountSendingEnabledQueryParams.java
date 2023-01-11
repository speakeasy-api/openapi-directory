package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccountSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAccountSendingEnabledActionEnum action;
    public PostUpdateAccountSendingEnabledQueryParams withAction(PostUpdateAccountSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAccountSendingEnabledVersionEnum version;
    public PostUpdateAccountSendingEnabledQueryParams withVersion(PostUpdateAccountSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}