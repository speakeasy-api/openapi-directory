package openapisdk.models.shared;



public class AssignIpv6AddressesResult {
    public java.util.Map<String, Object> assignedIpv6Addresses;
    public AssignIpv6AddressesResult withAssignedIpv6Addresses(java.util.Map<String, Object> assignedIpv6Addresses) {
        this.assignedIpv6Addresses = assignedIpv6Addresses;
        return this;
    }
    public java.util.Map<String, Object> assignedIpv6Prefixes;
    public AssignIpv6AddressesResult withAssignedIpv6Prefixes(java.util.Map<String, Object> assignedIpv6Prefixes) {
        this.assignedIpv6Prefixes = assignedIpv6Prefixes;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public AssignIpv6AddressesResult withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
}