package openapisdk.models.shared;



/**
 * AvailabilityZoneList
 * Describes an availability zone.
**/
public class AvailabilityZoneList {
    public String name;
    public AvailabilityZoneList withName(String name) {
        this.name = name;
        return this;
    }
    public SupportedPlatformsList[] supportedPlatforms;
    public AvailabilityZoneList withSupportedPlatforms(SupportedPlatformsList[] supportedPlatforms) {
        this.supportedPlatforms = supportedPlatforms;
        return this;
    }
}