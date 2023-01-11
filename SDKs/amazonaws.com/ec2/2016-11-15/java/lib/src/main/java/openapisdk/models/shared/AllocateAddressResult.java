package openapisdk.models.shared;



public class AllocateAddressResult {
    public java.util.Map<String, Object> allocationId;
    public AllocateAddressResult withAllocationId(java.util.Map<String, Object> allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    public java.util.Map<String, Object> carrierIp;
    public AllocateAddressResult withCarrierIp(java.util.Map<String, Object> carrierIp) {
        this.carrierIp = carrierIp;
        return this;
    }
    public java.util.Map<String, Object> customerOwnedIp;
    public AllocateAddressResult withCustomerOwnedIp(java.util.Map<String, Object> customerOwnedIp) {
        this.customerOwnedIp = customerOwnedIp;
        return this;
    }
    public java.util.Map<String, Object> customerOwnedIpv4Pool;
    public AllocateAddressResult withCustomerOwnedIpv4Pool(java.util.Map<String, Object> customerOwnedIpv4Pool) {
        this.customerOwnedIpv4Pool = customerOwnedIpv4Pool;
        return this;
    }
    public java.util.Map<String, Object> domain;
    public AllocateAddressResult withDomain(java.util.Map<String, Object> domain) {
        this.domain = domain;
        return this;
    }
    public java.util.Map<String, Object> networkBorderGroup;
    public AllocateAddressResult withNetworkBorderGroup(java.util.Map<String, Object> networkBorderGroup) {
        this.networkBorderGroup = networkBorderGroup;
        return this;
    }
    public java.util.Map<String, Object> publicIp;
    public AllocateAddressResult withPublicIp(java.util.Map<String, Object> publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    public java.util.Map<String, Object> publicIpv4Pool;
    public AllocateAddressResult withPublicIpv4Pool(java.util.Map<String, Object> publicIpv4Pool) {
        this.publicIpv4Pool = publicIpv4Pool;
        return this;
    }
}