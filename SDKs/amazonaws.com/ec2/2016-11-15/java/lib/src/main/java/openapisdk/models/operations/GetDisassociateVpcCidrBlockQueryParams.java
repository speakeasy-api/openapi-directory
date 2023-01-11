package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateVpcCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateVpcCidrBlockActionEnum action;
    public GetDisassociateVpcCidrBlockQueryParams withAction(GetDisassociateVpcCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateVpcCidrBlockQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateVpcCidrBlockVersionEnum version;
    public GetDisassociateVpcCidrBlockQueryParams withVersion(GetDisassociateVpcCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}