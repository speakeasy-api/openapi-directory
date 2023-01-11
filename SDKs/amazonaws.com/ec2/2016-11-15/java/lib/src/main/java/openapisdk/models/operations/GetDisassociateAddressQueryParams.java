package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateAddressActionEnum action;
    public GetDisassociateAddressQueryParams withAction(GetDisassociateAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateAddressQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisassociateAddressQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicIp")
    public String publicIp;
    public GetDisassociateAddressQueryParams withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateAddressVersionEnum version;
    public GetDisassociateAddressQueryParams withVersion(GetDisassociateAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}