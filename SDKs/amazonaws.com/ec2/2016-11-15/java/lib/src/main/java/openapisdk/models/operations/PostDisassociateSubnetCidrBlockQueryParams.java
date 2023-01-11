package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDisassociateSubnetCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDisassociateSubnetCidrBlockActionEnum action;
    public PostDisassociateSubnetCidrBlockQueryParams withAction(PostDisassociateSubnetCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDisassociateSubnetCidrBlockVersionEnum version;
    public PostDisassociateSubnetCidrBlockQueryParams withVersion(PostDisassociateSubnetCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}