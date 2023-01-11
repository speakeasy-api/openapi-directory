package openapisdk.models.shared;



/**
 * RemoveAvailabilityZonesOutput
 * Contains the output for DisableAvailabilityZonesForLoadBalancer.
**/
public class RemoveAvailabilityZonesOutput {
    public String[] availabilityZones;
    public RemoveAvailabilityZonesOutput withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
}