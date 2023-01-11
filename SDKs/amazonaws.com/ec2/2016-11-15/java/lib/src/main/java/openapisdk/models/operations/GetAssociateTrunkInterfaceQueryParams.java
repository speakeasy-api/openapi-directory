package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateTrunkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateTrunkInterfaceActionEnum action;
    public GetAssociateTrunkInterfaceQueryParams withAction(GetAssociateTrunkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BranchInterfaceId")
    public String branchInterfaceId;
    public GetAssociateTrunkInterfaceQueryParams withBranchInterfaceId(String branchInterfaceId) {
        this.branchInterfaceId = branchInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetAssociateTrunkInterfaceQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateTrunkInterfaceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GreKey")
    public Long greKey;
    public GetAssociateTrunkInterfaceQueryParams withGreKey(Long greKey) {
        this.greKey = greKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TrunkInterfaceId")
    public String trunkInterfaceId;
    public GetAssociateTrunkInterfaceQueryParams withTrunkInterfaceId(String trunkInterfaceId) {
        this.trunkInterfaceId = trunkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateTrunkInterfaceVersionEnum version;
    public GetAssociateTrunkInterfaceQueryParams withVersion(GetAssociateTrunkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VlanId")
    public Long vlanId;
    public GetAssociateTrunkInterfaceQueryParams withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
}