package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddUserToGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAddUserToGroupActionEnum action;
    public PostAddUserToGroupQueryParams withAction(PostAddUserToGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAddUserToGroupVersionEnum version;
    public PostAddUserToGroupQueryParams withVersion(PostAddUserToGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}