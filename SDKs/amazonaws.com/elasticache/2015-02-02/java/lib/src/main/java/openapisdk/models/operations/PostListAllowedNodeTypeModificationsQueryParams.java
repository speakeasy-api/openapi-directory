package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListAllowedNodeTypeModificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListAllowedNodeTypeModificationsActionEnum action;
    public PostListAllowedNodeTypeModificationsQueryParams withAction(PostListAllowedNodeTypeModificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListAllowedNodeTypeModificationsVersionEnum version;
    public PostListAllowedNodeTypeModificationsQueryParams withVersion(PostListAllowedNodeTypeModificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}