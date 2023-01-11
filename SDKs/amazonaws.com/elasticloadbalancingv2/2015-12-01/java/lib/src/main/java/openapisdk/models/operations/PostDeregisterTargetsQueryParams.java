package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTargetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeregisterTargetsActionEnum action;
    public PostDeregisterTargetsQueryParams withAction(PostDeregisterTargetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeregisterTargetsVersionEnum version;
    public PostDeregisterTargetsQueryParams withVersion(PostDeregisterTargetsVersionEnum version) {
        this.version = version;
        return this;
    }
}