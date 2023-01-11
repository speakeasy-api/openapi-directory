package openapisdk.models.shared;



/**
 * AvailabilityZone
 * Describes an availability zone.
**/
public class AvailabilityZone {
    public String name;
    public AvailabilityZone withName(String name) {
        this.name = name;
        return this;
    }
    public SupportedPlatformsList[] supportedPlatforms;
    public AvailabilityZone withSupportedPlatforms(SupportedPlatformsList[] supportedPlatforms) {
        this.supportedPlatforms = supportedPlatforms;
        return this;
    }
}