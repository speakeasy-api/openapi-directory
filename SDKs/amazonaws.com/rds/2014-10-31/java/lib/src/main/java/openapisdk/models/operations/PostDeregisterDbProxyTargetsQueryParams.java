package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterDbProxyTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterDbProxyTargetsActionEnum action;
    public PostDeregisterDbProxyTargetsQueryParams withAction(PostDeregisterDbProxyTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterDbProxyTargetsVersionEnum version;
    public PostDeregisterDbProxyTargetsQueryParams withVersion(PostDeregisterDbProxyTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}