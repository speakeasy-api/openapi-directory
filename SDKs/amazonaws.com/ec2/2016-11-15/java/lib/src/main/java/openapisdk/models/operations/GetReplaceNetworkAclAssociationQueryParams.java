package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplaceNetworkAclAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReplaceNetworkAclAssociationActionEnum action;
    public GetReplaceNetworkAclAssociationQueryParams withAction(GetReplaceNetworkAclAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetReplaceNetworkAclAssociationQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetReplaceNetworkAclAssociationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkAclId")
    public String networkAclId;
    public GetReplaceNetworkAclAssociationQueryParams withNetworkAclId(String networkAclId) {
        this.networkAclId = networkAclId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReplaceNetworkAclAssociationVersionEnum version;
    public GetReplaceNetworkAclAssociationQueryParams withVersion(GetReplaceNetworkAclAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}