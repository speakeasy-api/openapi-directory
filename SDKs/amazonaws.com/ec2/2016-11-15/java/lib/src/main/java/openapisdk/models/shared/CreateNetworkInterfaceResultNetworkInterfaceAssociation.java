package openapisdk.models.shared;



/**
 * CreateNetworkInterfaceResultNetworkInterfaceAssociation
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
**/
public class CreateNetworkInterfaceResultNetworkInterfaceAssociation {
    public java.util.Map<String, Object> allocationId;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withAllocationId(java.util.Map<String, Object> allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    public java.util.Map<String, Object> associationId;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withAssociationId(java.util.Map<String, Object> associationId) {
        this.associationId = associationId;
        return this;
    }
    public java.util.Map<String, Object> carrierIp;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withCarrierIp(java.util.Map<String, Object> carrierIp) {
        this.carrierIp = carrierIp;
        return this;
    }
    public java.util.Map<String, Object> customerOwnedIp;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withCustomerOwnedIp(java.util.Map<String, Object> customerOwnedIp) {
        this.customerOwnedIp = customerOwnedIp;
        return this;
    }
    public java.util.Map<String, Object> ipOwnerId;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withIpOwnerId(java.util.Map<String, Object> ipOwnerId) {
        this.ipOwnerId = ipOwnerId;
        return this;
    }
    public java.util.Map<String, Object> publicDnsName;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withPublicDnsName(java.util.Map<String, Object> publicDnsName) {
        this.publicDnsName = publicDnsName;
        return this;
    }
    public java.util.Map<String, Object> publicIp;
    public CreateNetworkInterfaceResultNetworkInterfaceAssociation withPublicIp(java.util.Map<String, Object> publicIp) {
        this.publicIp = publicIp;
        return this;
    }
}