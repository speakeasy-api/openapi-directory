package openapisdk.models.shared;



/**
 * CreateNetworkInterfaceResultNetworkInterface
 * Information about the network interface.
**/
public class CreateNetworkInterfaceResultNetworkInterface {
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation association;
    public CreateNetworkInterfaceResultNetworkInterface withAssociation(CreateNetworkInterfaceResultNetworkInterfaceAssociation association) {
        this.association = association;
        return this;
    }
    public CreateNetworkInterfaceResultNetworkInterfaceAttachment attachment;
    public CreateNetworkInterfaceResultNetworkInterface withAttachment(CreateNetworkInterfaceResultNetworkInterfaceAttachment attachment) {
        this.attachment = attachment;
        return this;
    }
    public java.util.Map<String, Object> availabilityZone;
    public CreateNetworkInterfaceResultNetworkInterface withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> description;
    public CreateNetworkInterfaceResultNetworkInterface withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> groups;
    public CreateNetworkInterfaceResultNetworkInterface withGroups(java.util.Map<String, Object> groups) {
        this.groups = groups;
        return this;
    }
    public java.util.Map<String, Object> interfaceType;
    public CreateNetworkInterfaceResultNetworkInterface withInterfaceType(java.util.Map<String, Object> interfaceType) {
        this.interfaceType = interfaceType;
        return this;
    }
    public java.util.Map<String, Object> ipv4Prefixes;
    public CreateNetworkInterfaceResultNetworkInterface withIpv4Prefixes(java.util.Map<String, Object> ipv4Prefixes) {
        this.ipv4Prefixes = ipv4Prefixes;
        return this;
    }
    public java.util.Map<String, Object> ipv6Addresses;
    public CreateNetworkInterfaceResultNetworkInterface withIpv6Addresses(java.util.Map<String, Object> ipv6Addresses) {
        this.ipv6Addresses = ipv6Addresses;
        return this;
    }
    public java.util.Map<String, Object> ipv6Prefixes;
    public CreateNetworkInterfaceResultNetworkInterface withIpv6Prefixes(java.util.Map<String, Object> ipv6Prefixes) {
        this.ipv6Prefixes = ipv6Prefixes;
        return this;
    }
    public java.util.Map<String, Object> macAddress;
    public CreateNetworkInterfaceResultNetworkInterface withMacAddress(java.util.Map<String, Object> macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public CreateNetworkInterfaceResultNetworkInterface withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> outpostArn;
    public CreateNetworkInterfaceResultNetworkInterface withOutpostArn(java.util.Map<String, Object> outpostArn) {
        this.outpostArn = outpostArn;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public CreateNetworkInterfaceResultNetworkInterface withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> privateDnsName;
    public CreateNetworkInterfaceResultNetworkInterface withPrivateDnsName(java.util.Map<String, Object> privateDnsName) {
        this.privateDnsName = privateDnsName;
        return this;
    }
    public java.util.Map<String, Object> privateIpAddress;
    public CreateNetworkInterfaceResultNetworkInterface withPrivateIpAddress(java.util.Map<String, Object> privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    public java.util.Map<String, Object> privateIpAddresses;
    public CreateNetworkInterfaceResultNetworkInterface withPrivateIpAddresses(java.util.Map<String, Object> privateIpAddresses) {
        this.privateIpAddresses = privateIpAddresses;
        return this;
    }
    public java.util.Map<String, Object> requesterId;
    public CreateNetworkInterfaceResultNetworkInterface withRequesterId(java.util.Map<String, Object> requesterId) {
        this.requesterId = requesterId;
        return this;
    }
    public java.util.Map<String, Object> requesterManaged;
    public CreateNetworkInterfaceResultNetworkInterface withRequesterManaged(java.util.Map<String, Object> requesterManaged) {
        this.requesterManaged = requesterManaged;
        return this;
    }
    public java.util.Map<String, Object> sourceDestCheck;
    public CreateNetworkInterfaceResultNetworkInterface withSourceDestCheck(java.util.Map<String, Object> sourceDestCheck) {
        this.sourceDestCheck = sourceDestCheck;
        return this;
    }
    public java.util.Map<String, Object> status;
    public CreateNetworkInterfaceResultNetworkInterface withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> subnetId;
    public CreateNetworkInterfaceResultNetworkInterface withSubnetId(java.util.Map<String, Object> subnetId) {
        this.subnetId = subnetId;
        return this;
    }
    public java.util.Map<String, Object> tagSet;
    public CreateNetworkInterfaceResultNetworkInterface withTagSet(java.util.Map<String, Object> tagSet) {
        this.tagSet = tagSet;
        return this;
    }
    public java.util.Map<String, Object> vpcId;
    public CreateNetworkInterfaceResultNetworkInterface withVpcId(java.util.Map<String, Object> vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}