package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterDbProxyTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterDbProxyTargetsActionEnum action;
    public PostRegisterDbProxyTargetsQueryParams withAction(PostRegisterDbProxyTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterDbProxyTargetsVersionEnum version;
    public PostRegisterDbProxyTargetsQueryParams withVersion(PostRegisterDbProxyTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}