package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateVpcCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateVpcCidrBlockActionEnum action;
    public PostDisassociateVpcCidrBlockQueryParams withAction(PostDisassociateVpcCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateVpcCidrBlockVersionEnum version;
    public PostDisassociateVpcCidrBlockQueryParams withVersion(PostDisassociateVpcCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}