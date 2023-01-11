package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddPermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddPermissionActionEnum action;
    public PostAddPermissionQueryParams withAction(PostAddPermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddPermissionVersionEnum version;
    public PostAddPermissionQueryParams withVersion(PostAddPermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}