package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetSubnetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetSubnetsActionEnum action;
    public PostSetSubnetsQueryParams withAction(PostSetSubnetsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetSubnetsVersionEnum version;
    public PostSetSubnetsQueryParams withVersion(PostSetSubnetsVersionEnum version) {
        this.version = version;
        return this;
    }
}