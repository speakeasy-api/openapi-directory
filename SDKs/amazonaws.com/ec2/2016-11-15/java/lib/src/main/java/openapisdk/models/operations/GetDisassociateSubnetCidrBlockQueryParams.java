package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateSubnetCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateSubnetCidrBlockActionEnum action;
    public GetDisassociateSubnetCidrBlockQueryParams withAction(GetDisassociateSubnetCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateSubnetCidrBlockQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateSubnetCidrBlockVersionEnum version;
    public GetDisassociateSubnetCidrBlockQueryParams withVersion(GetDisassociateSubnetCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}