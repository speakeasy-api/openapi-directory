package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutUserPermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutUserPermissionsBoundaryActionEnum action;
    public PostPutUserPermissionsBoundaryQueryParams withAction(PostPutUserPermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutUserPermissionsBoundaryVersionEnum version;
    public PostPutUserPermissionsBoundaryQueryParams withVersion(PostPutUserPermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}