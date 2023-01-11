package openapisdk.models.shared;



public class UnassignIpv6AddressesResult {
    public java.util.Map<String, Object> networkInterfaceId;
    public UnassignIpv6AddressesResult withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> unassignedIpv6Addresses;
    public UnassignIpv6AddressesResult withUnassignedIpv6Addresses(java.util.Map<String, Object> unassignedIpv6Addresses) {
        this.unassignedIpv6Addresses = unassignedIpv6Addresses;
        return this;
    }
    public java.util.Map<String, Object> unassignedIpv6Prefixes;
    public UnassignIpv6AddressesResult withUnassignedIpv6Prefixes(java.util.Map<String, Object> unassignedIpv6Prefixes) {
        this.unassignedIpv6Prefixes = unassignedIpv6Prefixes;
        return this;
    }
}