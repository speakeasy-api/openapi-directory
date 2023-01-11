package openapisdk.models.shared;



/**
 * CreateVpcResultVpc
 * Information about the VPC.
**/
public class CreateVpcResultVpc {
    public java.util.Map<String, Object> cidrBlock;
    public CreateVpcResultVpc withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockAssociationSet;
    public CreateVpcResultVpc withCidrBlockAssociationSet(java.util.Map<String, Object> cidrBlockAssociationSet) {
        this.cidrBlockAssociationSet = cidrBlockAssociationSet;
        return this;
    }
    public java.util.Map<String, Object> dhcpOptionsId;
    public CreateVpcResultVpc withDhcpOptionsId(java.util.Map<String, Object> dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    public java.util.Map<String, Object> instanceTenancy;
    public CreateVpcResultVpc withInstanceTenancy(java.util.Map<String, Object> instanceTenancy) {
        this.instanceTenancy = instanceTenancy;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockAssociationSet;
    public CreateVpcResultVpc withIpv6CidrBlockAssociationSet(java.util.Map<String, Object> ipv6CidrBlockAssociationSet) {
        this.ipv6CidrBlockAssociationSet = ipv6CidrBlockAssociationSet;
        return this;
    }
    public java.util.Map<String, Object> isDefault;
    public CreateVpcResultVpc withIsDefault(java.util.Map<String, Object> isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateVpcResultVpc withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateVpcResultVpc withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateVpcResultVpc withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateVpcResultVpc withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}