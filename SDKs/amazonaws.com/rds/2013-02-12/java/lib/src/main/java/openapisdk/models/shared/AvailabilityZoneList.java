package openapisdk.models.shared;



public class AvailabilityZoneList {
    public String name;
    public AvailabilityZoneList withName(String name) {
        this.name = name;
        return this;
    }
    public Boolean provisionedIopsCapable;
    public AvailabilityZoneList withProvisionedIopsCapable(Boolean provisionedIopsCapable) {
        this.provisionedIopsCapable = provisionedIopsCapable;
        return this;
    }
}