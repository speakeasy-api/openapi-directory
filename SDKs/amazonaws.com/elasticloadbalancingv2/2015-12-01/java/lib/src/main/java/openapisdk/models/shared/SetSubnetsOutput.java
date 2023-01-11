package openapisdk.models.shared;



public class SetSubnetsOutput {
    public AvailabilityZone[] availabilityZones;
    public SetSubnetsOutput withAvailabilityZones(AvailabilityZone[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public IpAddressTypeEnum ipAddressType;
    public SetSubnetsOutput withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
}