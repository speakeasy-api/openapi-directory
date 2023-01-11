package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteListenerActionEnum action;
    public PostDeleteListenerQueryParams withAction(PostDeleteListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteListenerVersionEnum version;
    public PostDeleteListenerQueryParams withVersion(PostDeleteListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}