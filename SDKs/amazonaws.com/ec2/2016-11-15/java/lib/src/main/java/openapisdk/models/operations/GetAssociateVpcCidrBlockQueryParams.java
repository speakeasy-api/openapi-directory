package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateVpcCidrBlockQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateVpcCidrBlockActionEnum action;
    public GetAssociateVpcCidrBlockQueryParams withAction(GetAssociateVpcCidrBlockActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AmazonProvidedIpv6CidrBlock")
    public Boolean amazonProvidedIpv6CidrBlock;
    public GetAssociateVpcCidrBlockQueryParams withAmazonProvidedIpv6CidrBlock(Boolean amazonProvidedIpv6CidrBlock) {
        this.amazonProvidedIpv6CidrBlock = amazonProvidedIpv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CidrBlock")
    public String cidrBlock;
    public GetAssociateVpcCidrBlockQueryParams withCidrBlock(String cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ipv6CidrBlock")
    public String ipv6CidrBlock;
    public GetAssociateVpcCidrBlockQueryParams withIpv6CidrBlock(String ipv6CidrBlock) {
        this.ipv6CidrBlock = ipv6CidrBlock;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ipv6CidrBlockNetworkBorderGroup")
    public String ipv6CidrBlockNetworkBorderGroup;
    public GetAssociateVpcCidrBlockQueryParams withIpv6CidrBlockNetworkBorderGroup(String ipv6CidrBlockNetworkBorderGroup) {
        this.ipv6CidrBlockNetworkBorderGroup = ipv6CidrBlockNetworkBorderGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Ipv6Pool")
    public String ipv6Pool;
    public GetAssociateVpcCidrBlockQueryParams withIpv6Pool(String ipv6Pool) {
        this.ipv6Pool = ipv6Pool;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateVpcCidrBlockVersionEnum version;
    public GetAssociateVpcCidrBlockQueryParams withVersion(GetAssociateVpcCidrBlockVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetAssociateVpcCidrBlockQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}