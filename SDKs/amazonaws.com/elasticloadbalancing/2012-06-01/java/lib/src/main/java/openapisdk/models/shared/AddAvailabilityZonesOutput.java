package openapisdk.models.shared;



/**
 * AddAvailabilityZonesOutput
 * Contains the output of EnableAvailabilityZonesForLoadBalancer.
**/
public class AddAvailabilityZonesOutput {
    public String[] availabilityZones;
    public AddAvailabilityZonesOutput withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
}