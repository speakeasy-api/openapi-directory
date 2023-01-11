package openapisdk.models.shared;



/**
 * AvailabilityZone
 * Describes an Availability Zone in which the cluster is launched.
**/
public class AvailabilityZone {
    public String name;
    public AvailabilityZone withName(String name) {
        this.name = name;
        return this;
    }
}