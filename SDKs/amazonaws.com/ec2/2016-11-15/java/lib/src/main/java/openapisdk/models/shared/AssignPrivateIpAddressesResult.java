package openapisdk.models.shared;



public class AssignPrivateIpAddressesResult {
    public java.util.Map<String, Object> assignedIpv4Prefixes;
    public AssignPrivateIpAddressesResult withAssignedIpv4Prefixes(java.util.Map<String, Object> assignedIpv4Prefixes) {
        this.assignedIpv4Prefixes = assignedIpv4Prefixes;
        return this;
    }
    public java.util.Map<String, Object> assignedPrivateIpAddresses;
    public AssignPrivateIpAddressesResult withAssignedPrivateIpAddresses(java.util.Map<String, Object> assignedPrivateIpAddresses) {
        this.assignedPrivateIpAddresses = assignedPrivateIpAddresses;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public AssignPrivateIpAddressesResult withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
}