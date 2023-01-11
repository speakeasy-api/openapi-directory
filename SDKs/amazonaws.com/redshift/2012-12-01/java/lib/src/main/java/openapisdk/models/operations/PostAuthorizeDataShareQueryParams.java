package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAuthorizeDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAuthorizeDataShareActionEnum action;
    public PostAuthorizeDataShareQueryParams withAction(PostAuthorizeDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAuthorizeDataShareVersionEnum version;
    public PostAuthorizeDataShareQueryParams withVersion(PostAuthorizeDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}