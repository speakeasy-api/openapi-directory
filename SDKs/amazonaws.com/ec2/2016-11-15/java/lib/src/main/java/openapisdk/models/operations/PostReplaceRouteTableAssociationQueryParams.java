package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostReplaceRouteTableAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostReplaceRouteTableAssociationActionEnum action;
    public PostReplaceRouteTableAssociationQueryParams withAction(PostReplaceRouteTableAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostReplaceRouteTableAssociationVersionEnum version;
    public PostReplaceRouteTableAssociationQueryParams withVersion(PostReplaceRouteTableAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}