package openapisdk.models.shared;



/**
 * LoadBalancerAddress
 * Information about a static IP address for a load balancer.
**/
public class LoadBalancerAddress {
    public String allocationId;
    public LoadBalancerAddress withAllocationId(String allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    public String iPv6Address;
    public LoadBalancerAddress withIPv6Address(String iPv6Address) {
        this.iPv6Address = iPv6Address;
        return this;
    }
    public String ipAddress;
    public LoadBalancerAddress withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public String privateIPv4Address;
    public LoadBalancerAddress withPrivateIPv4Address(String privateIPv4Address) {
        this.privateIPv4Address = privateIPv4Address;
        return this;
    }
}