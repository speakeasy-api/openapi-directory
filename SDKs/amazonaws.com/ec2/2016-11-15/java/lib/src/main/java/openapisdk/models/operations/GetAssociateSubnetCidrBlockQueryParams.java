package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateSubnetCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateSubnetCidrBlockActionEnum action;
    public GetAssociateSubnetCidrBlockQueryParams withAction(GetAssociateSubnetCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ipv6CidrBlock")
    public String ipv6CidrBlock;
    public GetAssociateSubnetCidrBlockQueryParams withIpv6CidrBlock(String ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SubnetId")
    public String subnetId;
    public GetAssociateSubnetCidrBlockQueryParams withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateSubnetCidrBlockVersionEnum version;
    public GetAssociateSubnetCidrBlockQueryParams withVersion(GetAssociateSubnetCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
}