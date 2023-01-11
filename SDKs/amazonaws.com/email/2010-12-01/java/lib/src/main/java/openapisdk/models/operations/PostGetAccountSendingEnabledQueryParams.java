package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccountSendingEnabledQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccountSendingEnabledActionEnum action;
    public PostGetAccountSendingEnabledQueryParams withAction(PostGetAccountSendingEnabledActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccountSendingEnabledVersionEnum version;
    public PostGetAccountSendingEnabledQueryParams withVersion(PostGetAccountSendingEnabledVersionEnum version) {
        this.version = version;
        return this;
    }
}