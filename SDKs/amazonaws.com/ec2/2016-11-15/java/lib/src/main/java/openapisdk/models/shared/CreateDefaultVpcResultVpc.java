package openapisdk.models.shared;



/**
 * CreateDefaultVpcResultVpc
 * Information about the VPC.
**/
public class CreateDefaultVpcResultVpc {
    public java.util.Map<String, Object> cidrBlock;
    public CreateDefaultVpcResultVpc withCidrBlock(java.util.Map<String, Object> cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    public java.util.Map<String, Object> cidrBlockAssociationSet;
    public CreateDefaultVpcResultVpc withCidrBlockAssociationSet(java.util.Map<String, Object> cidrBlockAssociationSet) {
        this.cidrBlockAssociationSet = cidrBlockAssociationSet;
        return this;
    }
    public java.util.Map<String, Object> dhcpOptionsId;
    public CreateDefaultVpcResultVpc withDhcpOptionsId(java.util.Map<String, Object> dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    public java.util.Map<String, Object> instanceTenancy;
    public CreateDefaultVpcResultVpc withInstanceTenancy(java.util.Map<String, Object> instanceTenancy) {
        this.instanceTenancy = instanceTenancy;
        return this;
    }
    public java.util.Map<String, Object> ipv6CidrBlockAssociationSet;
    public CreateDefaultVpcResultVpc withIpv6CidrBlockAssociationSet(java.util.Map<String, Object> ipv6CidrBlockAssociationSet) {
        this.ipv6CidrBlockAssociationSet = ipv6CidrBlockAssociationSet;
        return this;
    }
    public java.util.Map<String, Object> isDefault;
    public CreateDefaultVpcResultVpc withIsDefault(java.util.Map<String, Object> isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateDefaultVpcResultVpc withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateDefaultVpcResultVpc withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateDefaultVpcResultVpc withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateDefaultVpcResultVpc withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}