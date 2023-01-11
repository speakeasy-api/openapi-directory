package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateSubnetCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateSubnetCidrBlockActionEnum action;
    public PostAssociateSubnetCidrBlockQueryParams withAction(PostAssociateSubnetCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateSubnetCidrBlockVersionEnum version;
    public PostAssociateSubnetCidrBlockQueryParams withVersion(PostAssociateSubnetCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}