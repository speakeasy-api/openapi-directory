package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAssociateVpcCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAssociateVpcCidrBlockActionEnum action;
    public PostAssociateVpcCidrBlockQueryParams withAction(PostAssociateVpcCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAssociateVpcCidrBlockVersionEnum version;
    public PostAssociateVpcCidrBlockQueryParams withVersion(PostAssociateVpcCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}