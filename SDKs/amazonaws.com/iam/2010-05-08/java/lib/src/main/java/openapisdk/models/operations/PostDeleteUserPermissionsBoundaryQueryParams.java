package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserPermissionsBoundaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteUserPermissionsBoundaryActionEnum action;
    public PostDeleteUserPermissionsBoundaryQueryParams withAction(PostDeleteUserPermissionsBoundaryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteUserPermissionsBoundaryVersionEnum version;
    public PostDeleteUserPermissionsBoundaryQueryParams withVersion(PostDeleteUserPermissionsBoundaryVersionEnum version) {
        this.version = version;
        return this;
    }
}