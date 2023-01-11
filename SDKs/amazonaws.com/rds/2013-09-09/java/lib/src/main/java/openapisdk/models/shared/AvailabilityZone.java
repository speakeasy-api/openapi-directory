package openapisdk.models.shared;



public class AvailabilityZone {
    public String name;
    public AvailabilityZone withName(String name) {
        this.name = name;
        return this;
    }
    public Boolean provisionedIopsCapable;
    public AvailabilityZone withProvisionedIopsCapable(Boolean provisionedIopsCapable) {
        this.provisionedIopsCapable = provisionedIopsCapable;
        return this;
    }
}