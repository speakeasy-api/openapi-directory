package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRegisterTargetsActionEnum action;
    public PostRegisterTargetsQueryParams withAction(PostRegisterTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRegisterTargetsVersionEnum version;
    public PostRegisterTargetsQueryParams withVersion(PostRegisterTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}