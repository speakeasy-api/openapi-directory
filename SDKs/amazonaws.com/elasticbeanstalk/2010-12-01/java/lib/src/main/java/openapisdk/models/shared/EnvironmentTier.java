package openapisdk.models.shared;



/**
 * EnvironmentTier
 * Describes the properties of an environment tier
**/
public class EnvironmentTier {
    public String name;
    public EnvironmentTier withName(String name) {
        this.name = name;
        return this;
    }
    public String type;
    public EnvironmentTier withType(String type) {
        this.type = type;
        return this;
    }
    public String version;
    public EnvironmentTier withVersion(String version) {
        this.version = version;
        return this;
    }
}