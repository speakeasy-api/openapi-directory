package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateIamInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateIamInstanceProfileActionEnum action;
    public GetDisassociateIamInstanceProfileQueryParams withAction(GetDisassociateIamInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateIamInstanceProfileQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateIamInstanceProfileVersionEnum version;
    public GetDisassociateIamInstanceProfileQueryParams withVersion(GetDisassociateIamInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}