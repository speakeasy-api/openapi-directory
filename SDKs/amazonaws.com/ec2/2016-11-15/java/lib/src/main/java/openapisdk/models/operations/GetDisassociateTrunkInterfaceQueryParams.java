package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDisassociateTrunkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDisassociateTrunkInterfaceActionEnum action;
    public GetDisassociateTrunkInterfaceQueryParams withAction(GetDisassociateTrunkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetDisassociateTrunkInterfaceQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetDisassociateTrunkInterfaceQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDisassociateTrunkInterfaceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDisassociateTrunkInterfaceVersionEnum version;
    public GetDisassociateTrunkInterfaceQueryParams withVersion(GetDisassociateTrunkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}