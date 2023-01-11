package openapisdk.models.shared;



/**
 * NetworkInterfaceList
 * Describes a network interface. 
**/
public class NetworkInterfaceList {
    public String availabilityZone;
    public NetworkInterfaceList withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String networkInterfaceId;
    public NetworkInterfaceList withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public String privateIpAddress;
    public NetworkInterfaceList withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    public String subnetId;
    public NetworkInterfaceList withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}