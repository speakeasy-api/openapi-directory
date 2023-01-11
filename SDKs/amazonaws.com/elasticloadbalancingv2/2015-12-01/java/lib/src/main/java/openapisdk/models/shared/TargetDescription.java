package openapisdk.models.shared;



/**
 * TargetDescription
 * Information about a target.
**/
public class TargetDescription {
    public String availabilityZone;
    public TargetDescription withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String id;
    public TargetDescription withId(String id) {
        this.id = id;
        return this;
    }
    public Long port;
    public TargetDescription withPort(Long port) {
        this.port = port;
        return this;
    }
}