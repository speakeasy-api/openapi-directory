package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyHostsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyHostsActionEnum action;
    public PostModifyHostsQueryParams withAction(PostModifyHostsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyHostsVersionEnum version;
    public PostModifyHostsQueryParams withVersion(PostModifyHostsVersionEnum version) {
        this.version = version;
        return this;
    }
}